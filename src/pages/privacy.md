---
layout: ../layouts/Layout.astro
title: Gizlilik Politikası — Ligofolio
description: KVKK ve GDPR çerçevesinde Ligofolio kullanıcılarına ait kişisel verilerin işlenmesine ilişkin politikamız.
---

# Gizlilik Politikası — Ligofolio

> **Sürüm:** 1.0 (Taslak)
> **Yürürlük Tarihi:** Bu politika, Uygulama'nın Apple App Store ve/veya Google Play Store'da ilk kez yayımlandığı tarihte yürürlüğe girer.
> **Son Güncelleme:** 2026-05-23
>
> **DİKKAT — Taslak Statüsü:** Bu metin, KVKK + GDPR çerçevesine uygun yapılandırılmış bir **taslaktır**. Yayından önce **KVKK uzmanı avukat tarafından gözden geçirilip onaylanmalıdır**. Kapanış imzası, KEP adresi, şirket sicil tür eki (A.Ş. / Ltd. Şti.) ve VERBİS kayıt durumu hukuki danışman tarafından netleştirildikten sonra metne işlenecektir.

---

## 1. Giriş

İşbu Gizlilik Politikası ("**Politika**"), Ligofolio mobil uygulamasının ("**Uygulama**", "**Hizmet**", "**Ligofolio**") kullanıcılarına ait kişisel verilerin işlenmesinde uygulanan ilke, yöntem ve hakları açıklar.

Ligofolio, **AUTORIZEN IOT TEKNOLOJİLERİ VE MOBİLİTE HİZMETLERİ** ("**AUTORIZEN**", "**Şirket**", "**Veri Sorumlusu**", "**biz**") tarafından yayımlanan bir mobil uygulamadır. Veri sorumlusu sıfatıyla kişisel verilerinizi 6698 sayılı **Kişisel Verilerin Korunması Kanunu** ("**KVKK**") ile uygulanabildiği ölçüde Avrupa Birliği **Genel Veri Koruma Tüzüğü** ("**GDPR**") hükümlerine uygun olarak işleriz.

**Veri Sorumlusu Bilgileri:**

| Alan | Değer |
|---|---|
| Ünvan | AUTORIZEN IOT TEKNOLOJİLERİ VE MOBİLİTE HİZMETLERİ |
| Vergi Numarası | 1031565901 |
| MERSİS Numarası | 0103156590100001 |
| Adres | Samsun, Türkiye |
| Elektronik Posta | privacy@ligofolio.com |
| KEP Adresi | _[Yayın öncesi doldurulacaktır]_ |
| Web Adresi | https://ligofolio.com |

Uygulamayı kullanarak işbu Politika'yı okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz. Politika'yı kabul etmiyorsanız Uygulama'yı kullanmamanızı rica ederiz.

---

## 2. Topladığımız Kişisel Veriler

Uygulamanın işlevine ve sizin tercihlerinize bağlı olarak aşağıdaki kişisel veri kategorilerini işleriz:

### 2.1 Kimlik ve Hesap Verileri

- Ad ve soyad
- E-posta adresi (oturum açma için)
- Profil görünen ad (display name)
- Doğrulanmış e-posta durumu

### 2.2 İletişim Verileri (Opsiyonel — Kullanıcı Tercihi)

- Telefon numarası
- İletişim e-postası (oturum e-postasından farklı olabilir)
- İşletme/şirket adı
- Aktif çalışma şehri

Bu verilerin görünürlüğü kullanıcının kendi seçimiyle belirlenir (profil görünürlük toggle'ları). Aktif rıza olmadan diğer kullanıcılara açılmaz.

### 2.3 Görsel Veriler

- Profil fotoğrafı
- Kapak fotoğrafı
- İlan fotoğrafları

Görseller `profile-media` ve `listing-media` adı verilen özel (private) depolama kovalarında tutulur; yalnızca yetkili kullanıcılara kısa ömürlü imzalı URL ile sunulur.

### 2.4 Konum Verileri

- Aktif çalışma şehri (profil)
- İlan konumu: il, ilçe, mahalle, açık adres (kullanıcı doğrudan girer)
- Talep arama konumu: il, ilçe, mahalle

Cihaz GPS'iniz **toplanmaz**. Konum verileri yalnızca kullanıcının formda elle girdiği değerlerden ibarettir.

### 2.5 İçerik Verileri

- **Bacak 1 — Kişisel CRM:** Cihaz rehberinizden seçerek içe aktardığınız kişiler (ad, soyad, telefon, e-posta, etiket), bu kişilere ilişkin notlar, sesli kayıtlar, eklediğiniz fotoğraflar, hatırlatıcılar, kategoriler. Bu veriler **size özeldir** ve diğer kullanıcılarla paylaşılmaz.
- **Bacak 2 — Portföy ve Eşleşme:** Gayrimenkul ilanlarınızın açıklamaları, fotoğrafları, fiyat ve teknik özellikleri; aradığınız gayrimenkule ilişkin talep kriterleri.

### 2.6 Teknik Veriler

- Push bildirim token'ı (Expo / FCM / APNs)
- Cihaz tipi, işletim sistemi, uygulama sürümü
- Son aktif zaman (last_active_at)
- Oturum kimliği (Supabase Auth JWT)

### 2.7 Davranışsal Veriler

- Favoriler (ilan favorileme)
- Bildirim okunma durumu
- Bildirim tercihleri (kategori bazlı aç/kapa, sessiz saat)
- Bağlantı istekleri ve durumları
- Organizasyon üyelikleri

### 2.8 Kimlik Doğrulama Verileri

- Google Sign-In ile giriş: Google kullanıcı kimliği, e-posta, ad-soyad (Google'dan döner)
- Apple Sign-In ile giriş: Apple kullanıcı kimliği, opsiyonel olarak Apple özel relay e-posta

### 2.9 Denetim (Audit) Verileri

Mutating (yazma) işlemlerin sistem tarafından otomatik tutulan kaydı (kim, ne zaman, hangi işlemi yaptı). KVKK m.12/3 uyarınca veri güvenliği denetim izi olarak saklanır.

---

## 3. Verileri Hangi Amaçlarla İşliyoruz

| Veri Kategorisi | İşleme Amacı |
|---|---|
| Kimlik + iletişim | Uygulamanın temel işlevi: emlakçılar arası mesleki bağlantı, ilan/talep paylaşımı |
| Rehber (Bacak 1 CRM) | Yalnız kullanıcının kendi müşteri yönetimi — diğer kullanıcılarla paylaşılmaz |
| Konum (ilan/talep) | İlan-talep eşleşme algoritmasının çalıştırılması |
| Görsel veriler | İlan ve profilin görsel sunumu |
| Push token | Uygulama bildirimlerinin teslimi |
| Davranışsal veriler | Kullanıcı deneyiminin iyileştirilmesi, eşleşme algoritmasının doğru tercihlerle çalışması |
| Audit log | KVKK m.12/3 uyumluluk denetimi, güvenlik incelemesi, hesap eylem geçmişi |
| Hata izleme (Sentry) | Uygulama kararlılığının izlenmesi, hata düzeltme |

Kişisel verileriniz, açıkladığımız amaçlar dışında **işlenmez, satılmaz, kiralanmaz**.

---

## 4. İşlemenin Hukuki Sebebi

Kişisel verilerinizi yalnızca KVKK m.5/6 ve GDPR Art. 6'da öngörülen hukuki sebepler kapsamında işleriz:

| Veri | KVKK Maddesi | GDPR Madde | Hukuki Sebep |
|---|---|---|---|
| Profil zorunlu alanları (ad, e-posta) | m.5/2-c | Art. 6(1)(b) | Sözleşmenin ifası |
| Telefon, iletişim e-postası, şirket bilgisi | m.5/1 | Art. 6(1)(a) | Açık rıza (görünürlük toggle'ları üzerinden) |
| Konum (ilan/talep) | m.5/2-c | Art. 6(1)(b) | Sözleşmenin ifası — eşleşme algoritması için zorunlu |
| Push token, cihaz teknik bilgileri | m.5/2-c | Art. 6(1)(b) | Sözleşmenin ifası — bildirim teslimi |
| Cihaz rehberi içe aktarımı (Bacak 1) | m.5/1 | Art. 6(1)(a) | Açık rıza (OS izni + uygulama içi onay) |
| Hata izleme | m.5/2-f | Art. 6(1)(f) | Meşru menfaat (uygulama kararlılığı) |
| Audit log | m.5/2-ç | Art. 6(1)(c) | Hukuki yükümlülük (KVKK m.12) |
| Pazarlama bildirimi (ileride) | m.5/1 | Art. 6(1)(a) | Açık rıza (bildirim tercihleri toggle) |

Açık rızaya dayalı veri işlemelerinizi dilediğiniz zaman geri çekebilirsiniz; geri çekme önceki işlemenin hukuka uygunluğunu etkilemez.

---

## 5. Üçüncü Taraf Veri İşleyenler

Hizmetin sunulabilmesi için aşağıdaki üçüncü taraf hizmet sağlayıcılarını veri işleyen sıfatıyla kullanırız. Tüm sağlayıcılar ile geçerli Veri İşleme Sözleşmesi (DPA) hükümleri ve/veya Standart Sözleşme Hükümleri (Standard Contractual Clauses — SCC) çerçevesinde çalışılır.

| Sağlayıcı | Amaç | Aktarılan Veri | Bölge |
|---|---|---|---|
| **Supabase Inc.** | Veritabanı, dosya depolama, kimlik doğrulama, sunucusuz fonksiyonlar | Tüm uygulama verisi (RLS koruması altında) | Avrupa Birliği (Frankfurt, eu-central-1) |
| **Functional Software Inc. (Sentry)** | Hata izleme ve uygulama kararlılığı | Kişisel veri redaksiyonu yapılmış hata kayıtları, kırılma izleri | AB / ABD |
| **Expo Push Service (650 Industries Inc.)** | Push bildirim aktarımı | Push token + bildirim içeriği | ABD |
| **Apple Push Notification service (APNs)** | iOS bildirim teslimi | APNs token + bildirim içeriği | ABD |
| **Google Firebase Cloud Messaging (FCM)** | Android bildirim teslimi | FCM token + bildirim içeriği | ABD |
| **Google LLC (OAuth)** | "Google ile Giriş Yap" | Google kullanıcı kimliği, e-posta, ad-soyad | ABD |
| **Apple Inc. (Sign in with Apple)** | "Apple ile Giriş Yap" | Apple kullanıcı kimliği, özel relay e-posta (opsiyonel) | ABD |

### 5.1 Yurtdışı Veri Aktarımı (KVKK m.9)

Yukarıdaki sağlayıcılardan ABD merkezli olanlara aktarılan kişisel veriler için aşağıdaki güvenceler uygulanır:

- **Açık rıza:** Uygulamayı kullanmaya başladığınızda işbu Politika kapsamında verdiğiniz onayla yurtdışı aktarıma rıza göstermiş olursunuz.
- **Standart Sözleşme Hükümleri (SCC):** Sağlayıcılar tarafından AB tarafından onaylanmış SCC'ler çerçevesinde veri korumayı taahhüt eden DPA'lar imzalanmıştır.
- **Veri minimizasyonu:** Yurtdışına aktarılan veri yalnızca ilgili sağlayıcının teknik işlevi için zorunlu olanla sınırlıdır.

Yurtdışı aktarıma rızanızı geri çekmek isterseniz privacy@ligofolio.com adresinden bize bildirin; bu durumda hesabınızın bazı işlevleri (özellikle push bildirimleri ve sosyal giriş) kullanılamayacaktır.

---

## 6. Verilerin Saklama Süreleri

| Veri Türü | Saklama Süresi | Hukuki / Operasyonel Sebep |
|---|---|---|
| Hesap verileri (silme talebi sonrası) | 30 gün grace + ardından anonimleştirme | KVKK m.7 — geri alma hakkı, hatalı silme önlemi |
| Bildirim akışı (notification_feed) | 30 gün (cron temizler) | Eski bildirimin işlevsel değeri yok |
| Audit log | 10 yıl | Türk Ticaret Kanunu m.82 (ticari defter saklama yükümlülüğü); KVKK m.12/3 |
| Push bildirim yedek kayıtları (outbox) | 30 gün | Operasyonel temizlik |
| Sentry hata kayıtları | 90 gün | Sentry plan varsayılanı (PII redact edilmiştir) |
| Aktif hesap içeriği (ilan, talep, profil, rehber) | Hesap aktif olduğu sürece | Sözleşmenin ifası |
| Eşleşme kayıtları (matches) | Hesap silinene kadar (audit history) | Kullanıcı geçmişi + denetim izi |
| Bağlantılar (connections) | Hesap silinene kadar | İlişkisel veri |
| Organizasyon üyelik kayıtları | Üyelik son bulduktan sonra audit amacıyla pivot satırı korunur (ayrılma tarihi ile birlikte) | Denetim izi (ADR-0020) |

Yasal yükümlülüklerimiz nedeniyle bazı kayıtlar (özellikle audit_log ve mali kayıtlar) hesabınızın silinmesinden sonra da ilgili yasal süre sonuna kadar saklanır. Hesap silindikten sonra saklanan kayıtlar kişisel kimlik tanımlayıcılardan arındırılmış (anonimleştirilmiş) olarak tutulur.

---

## 7. Veri Güvenliği Tedbirleri

Kişisel verilerinizin korunması için aldığımız teknik ve idari tedbirler:

### 7.1 Teknik Tedbirler

- **Satır Düzeyinde Güvenlik (Row-Level Security — RLS):** Tüm sunucu tablolarında PostgreSQL satır-seviyesi güvenlik politikaları aktiftir; bir kullanıcı yalnızca yetkili olduğu kayıtları sorgulayabilir. Politikalar pgTAP test paketi ile sürekli doğrulanır.
- **Dinlenme halinde şifreleme (Encryption-at-rest):** Veritabanı verileri AES-256 ile şifrelenir (Supabase varsayılan).
- **Aktarım halinde şifreleme (Encryption-in-transit):** Tüm uygulama-sunucu trafiği TLS 1.2 veya üzeri üzerinden şifrelenir.
- **Hassas veri redaksiyonu:** Hata izleme (Sentry) kayıtlarında telefon numarası, e-posta ve diğer kişisel veriler otomatik olarak temizlenir.
- **Denetim izi:** Mutating işlemler audit_log tablosunda kim/ne zaman/hangi işlem bilgisiyle tutulur.
- **Biyometrik koruma:** Cihaz biyometriği (Touch ID, Face ID, parmak izi) ile opsiyonel uygulama içi kilit.
- **Soft-delete + 30 gün grace:** Hesap silme istekleri anlık değil 30 gün gecikmeli yürütülür; bu süre içinde geri alınabilir.

### 7.2 İdari Tedbirler

- En az ayrıcalık (least privilege) prensibi: Geliştirici ve operasyonel erişimler rol bazlı.
- Düzenli iç güvenlik değerlendirmesi.
- KVKK uyumluluk yıllık gözden geçirme.
- Personel/geliştirici gizlilik taahhüdü.

### 7.3 Veri İhlali Bildirimi

Kişisel verilerinizi etkileyecek bir veri ihlali tespit edersek:
- KVKK m.12/5 uyarınca **en geç 72 saat içinde** Kişisel Verileri Koruma Kurulu'na bildirimde bulunuruz.
- Etkilenen kullanıcılara uygulama içi bildirim ve e-posta ile haber veririz.

---

## 8. Kullanıcı Hakları (KVKK m.11 + GDPR Art. 15-22)

KVKK ve GDPR kapsamında aşağıdaki haklara sahipsiniz:

| Hak | KVKK | GDPR | Uygulama'da Nasıl Kullanılır |
|---|---|---|---|
| Kişisel verilerinizin işlenip işlenmediğini öğrenme | m.11/1-a | Art. 15 | privacy@ligofolio.com adresine başvuru |
| Verilerinizin nasıl ve hangi amaçla işlendiğini öğrenme | m.11/1-b, c | Art. 15 | Bu Politika + privacy@ligofolio.com |
| Yanlış veya eksik verilerin düzeltilmesi | m.11/1-d | Art. 16 | Uygulama içi profil/ilan/talep düzenleme veya privacy@ligofolio.com |
| Verilerinizin silinmesi | m.11/1-e | Art. 17 | Profil sekmesi → "Hesabı Sil" — 30 gün grace, ardından anonimleştirme |
| İşlemenin sınırlandırılması | m.11/1-d | Art. 18 | privacy@ligofolio.com |
| Verilerinizin makine tarafından okunabilir formatta dışa aktarımı | — | Art. 20 | privacy@ligofolio.com (JSON formatında talep üzerine) |
| İşlemeye itiraz | m.11/1-d | Art. 21 | Bildirim tercihleri toggle + privacy@ligofolio.com |
| Otomatik karar verme süreçlerine itiraz | — | Art. 22 | Bkz. Bölüm 11 (otomatik karar verme yok) |
| KVKK Kurulu'na şikayet | m.13/3 | — | kvkk.gov.tr — Kişisel Verileri Koruma Kurumu |

### 8.1 Başvuru Yöntemi

- **Elektronik başvuru:** privacy@ligofolio.com adresine, KVKK'ya kayıtlı e-posta adresinizden gönderin. Kimliğinizin doğrulanması için kayıtlı e-postadan göndermeniz gerekir.
- **KEP başvurusu:** [KEP_ADRESI yayın öncesi doldurulacak]
- **Posta başvurusu:** AUTORIZEN IOT TEKNOLOJİLERİ VE MOBİLİTE HİZMETLERİ, Samsun, Türkiye

Başvurunuza **en geç 30 gün içinde** yanıt verilir (KVKK m.13). Talebiniz Veri Koruma Kurulu tarafından belirlenen ücret tarifesi kapsamına girerse, sınırlı bir ücret talep edebiliriz.

---

## 9. Çocuklar

Uygulamamız **18 yaşından küçük kişilerin kullanımına yönelik değildir** (Apple App Store ve Google Play Store yaş politikaları gereği).

- Kayıt sırasında 18 yaş üzeri olduğunuza dair beyan alınır.
- 18 yaşın altında olduğu tespit edilen kullanıcının hesabı **derhal silinir**; 30 gün grace süresi bu durumda uygulanmaz, kişisel veri minimum tutulur.
- Bir çocuğun verisinin işlendiğini düşünüyorsanız privacy@ligofolio.com adresinden bize bildirin — derhal silinmesini sağlarız.

---

## 10. Çerez ve Takip

- Mobil uygulamamız **HTTP çerezleri kullanmaz** (web çerezi yoktur).
- **iOS App Tracking Transparency (ATT):** Uygulamamız üçüncü taraf reklam veya takip SDK'sı kullanmadığından ATT izin penceresi gösterilmez. İleride analytics SDK eklenirse ATT izin penceresi yasal gereklilik olarak görünür hale gelecektir.
- **Sentry**, yalnızca uygulama kararlılığı için hata raporlama amacıyla kullanılır; davranışsal kullanıcı takibi yapmaz.
- **Push bildirim hizmetleri** (Expo, Apple, Google) yalnızca bildirim teslimi için kullanılır.
- **Cross-app tracking yapmıyoruz**; başka uygulamalardaki davranışlarınız ile bizim uygulama davranışlarınızı eşleştirmiyoruz.

---

## 11. Otomatik Karar Verme — Eşleşme Algoritması Açıklaması

Uygulamamız ilan ve talep arasında **eşleşme önerileri** sunan bir algoritma içerir. Bu önerilerin niteliği:

- Eşleşme algoritması, kullanıcının daha önce yayımladığı talep kriterleri (konum, fiyat aralığı, gayrimenkul tipi, oda sayısı gibi) ile başka bir kullanıcının yayımladığı ilanı karşılaştıran, **deterministik bir kurallı sistemdir**. Makine öğrenmesi, profilleme veya davranışsal tahmin içermez.
- Eşleşme yalnızca bir **bildirim** olarak iletilir; otomatik bir karar veya işlem doğurmaz.
- **Son aksiyon** (ilanı görüntüleme, favorileme, ilan sahibiyle iletişim kurma, gayrimenkulü satın alma veya kiralama) **tamamen kullanıcının kendi tercihi ve kararıdır**.
- Eşleşme algoritması GDPR Art. 22 kapsamındaki "yalnızca otomatik işlemeye dayanan ve veri sahibi üzerinde hukuki sonuç doğuran ya da onu benzer şekilde önemli ölçüde etkileyen karar" tanımına **girmez**.

Eşleşme algoritmasının çalışma mantığı hakkında daha fazla bilgi almak için privacy@ligofolio.com adresine başvurabilirsiniz.

---

## 12. Politika Değişiklikleri

Bu Politika'da değişiklik yapma hakkımızı saklı tutarız.

- **Önemsiz değişiklikler** (yazım hatası, format düzeltmesi) yayımlandığı tarihte yürürlüğe girer.
- **Önemli değişiklikler** (yeni veri toplama, yeni üçüncü taraf, amaç değişikliği) yürürlüğe girmeden **en az 30 gün önce** uygulama içi bildirim ile size haber verilir.
- **Açık rıza gerektiren değişikliklerde**, mevcut rızanız yeterli sayılmaz; yeniden açık rıza istenir.
- Politikanın güncel sürümü her zaman **https://ligofolio.com/privacy** adresinde yayımlanır.
- Geçmiş sürümlere ilişkin değişiklik kaydını privacy@ligofolio.com adresinden talep edebilirsiniz.

---

## 13. İletişim

KVKK, GDPR ve kişisel verilerinize ilişkin tüm sorularınız ve hak başvurularınız için:

- **E-posta:** privacy@ligofolio.com
- **KEP Adresi:** _[Yayın öncesi doldurulacaktır]_
- **Posta Adresi:** AUTORIZEN IOT TEKNOLOJİLERİ VE MOBİLİTE HİZMETLERİ, Samsun, Türkiye
- **Şikayet Mercii:** Kişisel Verileri Koruma Kurumu — https://www.kvkk.gov.tr
- **AB Üyesi Kullanıcılar için Şikayet:** İkamet ettiğiniz ülkenin yetkili veri koruma otoritesi (Supervisory Authority)

---

_Bu metin, hukuki danışmanın final onayına tabidir. Onay sonrası kapanış imzası, KEP adresi ve diğer eksik alanlar bu metne işlenecek; nihai sürüm ligofolio.com/privacy adresinde yayımlanacaktır._
