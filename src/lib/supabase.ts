// Supabase client'lar — ligofolio-web (Astro hybrid SSR).
//
// İki client pattern:
//   - publicClient (anon key): tarayıcı tarafında auth UI, RLS-respecting
//   - adminClient (service_role): SUNUCU TARAFI ONLY — RLS bypass, RPC
//     çağrıları (admin_grant_premium, request_premium_otp_token vb.)
//
// Güvenlik: service_role key tarayıcıya ASLA sızmaz. Sadece SSR/.astro
// frontmatter (--- ... ---) veya API routes'ta kullanılır. Astro `output:
// 'server'` modunda frontmatter Node.js'te çalışır (browser yok).
//
// Env:
//   PUBLIC_SUPABASE_URL          — anon URL (tarayıcıya gider)
//   PUBLIC_SUPABASE_ANON_KEY     — anon key (tarayıcıya gider)
//   SUPABASE_SERVICE_ROLE_KEY    — service_role key (server-only!)

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    'PUBLIC_SUPABASE_URL ve PUBLIC_SUPABASE_ANON_KEY env\'leri zorunlu',
  );
}

/**
 * Tarayıcıda kullanılan client — anon key, RLS-respecting. Auth UI burada
 * yapılır (signInWithPassword, signInWithOAuth). Session cookie ile saklanır.
 *
 * SSR tarafında da `session` cookie'den okumak için kullanılır (request
 * header'ından Authorization passthrough).
 */
export function createPublicClient(authHeader?: string): SupabaseClient {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: false, // SSR: session cookie üzerinden
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: authHeader
      ? { headers: { Authorization: authHeader } }
      : undefined,
  });
}

/**
 * SERVER-ONLY admin client — service_role, RLS bypass. SADECE SSR
 * frontmatter (.astro `---` blocks) veya API routes'ta. Tarayıcı bundle'ına
 * SIZMAZ (service_role key tarayıcıya verilmez).
 *
 * Kullanım:
 *   - admin_grant_premium RPC (admin sayfası)
 *   - request_premium_otp_token RPC (premium-activate sayfası)
 *   - is_admin profile lookup (admin sayfası SSR auth gate)
 */
export function createAdminClient(): SupabaseClient {
  if (!SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      'SUPABASE_SERVICE_ROLE_KEY env tanımsız — admin client kurulamaz',
    );
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

// ─── Auth cookie helpers (SSR session restore) ──────────────────────

const AUTH_COOKIE_NAME = 'sb-auth-token';

/**
 * SSR'da cookie'den auth token oku (Astro `Astro.cookies` veya request
 * headers'tan). Cookie format: Supabase'in standart `sb-<ref>-auth-token`
 * cookie'si; basit hex değil — JSON serialize edilmiş session.
 *
 * Pratik: client signInWith* sonrası session AsyncStorage benzeri tarayıcı
 * cookies'inde saklanır. SSR sayfası bu cookie'yi okur, `createPublicClient`
 * Authorization header'ı ile çağırır.
 */
export function getAuthCookieName(): string {
  return AUTH_COOKIE_NAME;
}
