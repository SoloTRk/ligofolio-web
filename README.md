# ligofolio-web

[ligofolio.com](https://ligofolio.com) — Ligofolio mobil uygulamasının açılış sayfası
ve yasal metinleri.

## Yapı

| Yol | İçerik |
| --- | --- |
| `/` | Landing — hero, yasal kart linkleri, şirket bilgileri |
| `/privacy` | Gizlilik Politikası (KVKK + GDPR) |
| `/terms` | Kullanım Şartları (Türk hukuku, B2B) |
| `/support` | Destek kanalları + hesap işlemleri |

Yasal metinlerin kaynağı [`ligofolio` mobil repo'sundaki](../ligofolio/docs/legal/)
markdown taslaklarıdır. Bu repo onları Astro ile statik HTML'e derler.

## Geliştirme

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ üretir
npm run preview  # dist/'i lokal preview
```

## Deploy

- Hosting: Vercel
- Domain: `ligofolio.com`
- Her `main` push'u otomatik production deploy'u tetikler.

## Stack

- [Astro 6](https://astro.build/) — statik site generator
- Sıfır framework (vanilla HTML + CSS)
- Tek bağımlılık: `astro`
