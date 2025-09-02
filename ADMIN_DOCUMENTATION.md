# Admin Sistemi Dokümantasyonu

## Genel Bakış
Bu projede, site sahibinin içerikleri dinamik olarak düzenleyebilmesi için basit bir admin sistemi oluşturulmuştur. Sistem, Next.js API Routes kullanarak server-side veri depolama sağlar, böylece tüm kullanıcılar aynı içeriği görür.

## Sistem Mimarisi

### 1. Veri Depolama
- **Konum**: `/data/about.json`
- **Format**: JSON dosyası
- **İçerik**: Açıklama metni ve base64 formatında fotoğraf
- **Güvenlik**: `/data` klasörü `.gitignore` dosyasına eklenmiştir

### 2. API Endpoints
- **GET `/api/about`**: Mevcut içeriği getirir
- **POST `/api/about`**: Yeni içeriği kaydeder

### 3. Sayfalar

#### Admin Giriş Sayfası (`/admin`)
- **Amaç**: Site sahibinin admin moduna geçmesi
- **Şifre**: Environment variable'dan alınır (`NEXT_PUBLIC_ADMIN_PASSWORD`)
- **Depolama**: Admin durumu localStorage'da tutulur (tarayıcı bazlı)
- **Özellikler**:
  - Şifre ile giriş
  - Giriş yapıldığında düzenlenebilir sayfalara link
  - Çıkış yapma özelliği

#### Hakkında Sayfası (`/hakkinda`)
- **Amaç**: Şirket hakkında bilgi gösterimi ve düzenleme
- **Özellikler**:
  - Normal kullanıcılar için salt okunur görünüm
  - Admin için düzenleme modu
  - Fotoğraf yükleme (max 5MB, base64 formatında)
  - Açıklama metni düzenleme
  - Otomatik kaydetme ve API üzerinden senkronizasyon

## Kullanım Kılavuzu

### Admin Olarak Giriş Yapma
1. `.env.local` dosyasına `NEXT_PUBLIC_ADMIN_PASSWORD=your_password` ekleyin
2. Tarayıcıda `/admin` sayfasına gidin
3. Belirlediğiniz şifreyi girin
4. "Giriş Yap" butonuna tıklayın

### İçerik Düzenleme
1. Admin girişi yaptıktan sonra `/hakkinda` sayfasına gidin
2. Sağ üstte "Düzenle" butonu görünecektir
3. Düzenle'ye tıklayın
4. Fotoğraf yüklemek için "Fotoğraf Seç" butonunu kullanın
5. Açıklama metnini text area'da düzenleyin
6. "Kaydet" butonuna tıklayarak değişiklikleri sunucuya kaydedin
7. İptal etmek için "İptal" butonuna tıklayın

### Çıkış Yapma
1. `/admin` sayfasına gidin
2. "Çıkış Yap" butonuna tıklayın

## Teknik Detaylar

### Veri Akışı
```
Kullanıcı → Hakkında Sayfası → GET /api/about → data/about.json
                ↑
            (içerik)
                ↓
Admin → Düzenleme Modu → POST /api/about → data/about.json
```

### Güvenlik Notları
- Admin şifresi client-side'da hardcoded (production için değiştirilmeli)
- Gerçek production ortamında:
  - Şifre environment variable olmalı
  - JWT token bazlı authentication kullanılmalı
  - Fotoğraflar CDN veya cloud storage'da saklanmalı
  - Rate limiting eklenmeli

### Limitasyonlar
- Fotoğraflar base64 formatında JSON'da saklanıyor (performans için ideal değil)
- Tek bir admin kullanıcısı var
- Session yönetimi yok (sadece localStorage)
- Backup mekanizması yok

## Geliştirme Önerileri

### Kısa Vadeli
1. Admin şifresini environment variable'a taşı
2. Birden fazla admin kullanıcısı desteği
3. Fotoğrafları `/public` klasörüne kaydet (base64 yerine)

### Uzun Vadeli
1. Gerçek authentication sistemi (NextAuth.js)
2. Veritabanı entegrasyonu (PostgreSQL, MongoDB vb.)
3. Fotoğraf yükleme için cloud storage (AWS S3, Cloudinary)
4. İçerik versiyonlama ve geri alma özelliği
5. Çoklu dil desteği
6. SEO meta tag düzenleme

## Dosya Yapısı
```
/app
  /admin
    page.tsx         # Admin giriş sayfası
  /hakkinda
    page.tsx         # Düzenlenebilir hakkında sayfası
  /api
    /about
      route.ts       # API endpoint
/data
  about.json        # İçerik verisi (gitignore'da)
```

## Örnek Veri Formatı
```json
{
  "description": "Şirket açıklama metni...",
  "imageUrl": "data:image/jpeg;base64,..."
}
```

## Sorun Giderme

### Düzenleme butonu görünmüyor
- Admin girişi yaptığınızdan emin olun
- Tarayıcı localStorage'ını kontrol edin
- Sayfayı yenileyin

### Fotoğraf yüklenmiyor
- Dosya boyutunun 5MB'dan küçük olduğundan emin olun
- Desteklenen format olduğunu kontrol edin (JPG, PNG, GIF)

### Kaydetme başarısız
- API route'un çalıştığını kontrol edin
- `/data` klasörünün var olduğundan emin olun
- Yazma izinlerini kontrol edin

## Lisans ve Destek
Bu sistem Solara Event için özel olarak geliştirilmiştir.