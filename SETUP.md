# WaveArc - Setup Guide

## 🚀 Hızlı Başlangıç

### 1. Environment Variables

`.env.local` dosyası zaten oluşturuldu. Aşağıdaki değerleri güncelle:

```bash
# Resend API Key (✅ HAZIR)
RESEND_API_KEY=re_ep9cEXJZ_MnwGBjU3pks9yjFpynQ6LjSH

# Contact Email (✅ HAZIR)
CONTACT_EMAIL=mete@wavearc.co

# Site URL (✅ HAZIR)
NEXT_PUBLIC_SITE_URL=https://wavearc.co

# Google Analytics (⏳ ID ALMALISIN)
# Aşağıdaki satırı düzenle ve # işaretini kaldır
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📊 Google Analytics 4 Kurulumu

### Adım 1: GA4 Hesap Oluştur
1. https://analytics.google.com adresine git
2. "Yönetici" → "Özellik Oluştur" tıkla
3. Aşağıdaki bilgileri gir:
   - Property name: **WaveArc**
   - Timezone: **Turkey**
   - Currency: **Turkish Lira (TRY)**

### Adım 2: Web Stream Ekle
1. "Veri akışları" → "Web akışı ekle"
2. Bilgileri doldur:
   - Website URL: **https://wavearc.co**
   - Stream name: **WaveArc Website**
3. "Akış oluştur" butonuna tıkla

### Adım 3: Measurement ID'yi Al
1. Oluşturulan stream'e tıkla
2. Sağ üstte **"G-XXXXXXXXXX"** formatında bir ID göreceksin
3. Bu ID'yi kopyala

### Adım 4: ID'yi Projeye Ekle
`.env.local` dosyasını aç ve şu satırı düzenle:

```bash
# Öncesi (yorum satırı):
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Sonrası (ID'ni yapıştır):
NEXT_PUBLIC_GA_ID=G-ABC123DEF4
```

### Adım 5: Dev Server'ı Yeniden Başlat
```bash
# Ctrl+C ile durdur, sonra:
npm run dev
```

---

## ✅ Analytics Event Tracking

Aşağıdaki olaylar otomatik track ediliyor:

- ✅ **Contact Form Submit** - İletişim formu gönderildiğinde
- ✅ **Newsletter Signup** - Newsletter'a kayıt olunduğunda
- ✅ **Page Views** - Her sayfa görüntülenmesinde

Daha fazla event eklemek için `lib/analytics.ts` dosyasını kullan.

---

## 📱 Sosyal Medya Linkleri

Footer'da sadece Instagram var (✅ hazır):
- Instagram: https://www.instagram.com/wavearc.co/

Yeni sosyal medya eklemek için:
1. `components/layout/footer.tsx` aç
2. `socialLinks` array'ine ekle:

```typescript
const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/wavearc.co/", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/wavearc", label: "Twitter" }, // Örnek
  { icon: Linkedin, href: "https://linkedin.com/company/wavearc", label: "LinkedIn" } // Örnek
]
```

---

## 📧 Email Test

### İletişim Formu Test:
1. http://localhost:3000/tr/iletisim
2. Formu doldur ve gönder
3. ✅ `mete@wavearc.co` adresine email gelecek
4. ✅ Form dolduran kişiye onay emaili gidecek

### Newsletter Test:
1. Herhangi bir sayfa en altına scroll et
2. Email gir ve subscribe et
3. ✅ `mete@wavearc.co` adresine bildirim gelecek
4. ✅ Kullanıcıya welcome emaili gidecek

---

## 🖼️ Proje Görselleri Ekleme (Opsiyonel)

Şu an placeholder görseller var. Gerçek görselleri eklemek için:

1. Görselleri `/public/images/projects/` klasörüne koy
2. Dosya isimleri (projects.json'daki isimlerle eşleşmeli):
   - `ecommerce.jpg`
   - `crm.jpg`
   - `mobile.jpg`
   - `restaurant.jpg`
   - `api.jpg`
   - `lms.jpg`
   - `health.jpg`
   - `erp.jpg`
   - `social.jpg`
   - `iot.jpg`

Önerilen görsel boyutları:
- Genişlik: 1200px
- Yükseklik: 800px
- Format: JPG (optimize edilmiş)

---

## 🚀 Production Build

Siteyi canlıya almadan önce test et:

```bash
npm run build
npm start
```

Build sırasında:
- ✅ Sitemap.xml otomatik oluşturulur
- ✅ Robots.txt oluşturulur
- ✅ Tüm sayfalar pre-render edilir

---

## 📦 Deployment (Vercel Önerilen)

### Vercel'e Deploy:
1. GitHub'a push et:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. https://vercel.com adresine git
3. "Import Project" → Repository'ni seç
4. Environment Variables ekle:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA_ID` (aldıysan)

5. Deploy!

---

## 🎯 Önemli Notlar

1. **RESEND_API_KEY** - ✅ Aktif ve çalışıyor
2. **Google Analytics** - ⏳ ID almanı bekliyorum
3. **Instagram** - ✅ Link eklendi
4. **Görseller** - Opsiyonel (eklemek istersen)
5. **Fiyat bilgisi YOK** - Tam istediğin gibi

---

## 📞 Destek

Herhangi bir sorun olursa:
- Email: mete@wavearc.co
- Instagram: @wavearc.co

---

**Built with ❤️ by WaveArc Team**
