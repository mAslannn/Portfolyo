const apiKey = "34e0276b999df67ab4f1d749a0867a0f";

// Bu fonksiyon "Ara" butonuna basınca çalışacak
async function havaDurumuGetir() {

    // 1. Kullanıcının girdiği şehri al
    const sehir = document.getElementById("sehirInput").value;

    // Eğer boşsa uyarı ver
    if (sehir === "") {
        alert("Lütfen bir şehir yazın!");
        return;
    }

    // 2. API Adresini Oluştur (URL)
    // units=metric -> Santigrat olsun diye
    // lang=tr -> Türkçe sonuç versin diye
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apiKey}&units=metric&lang=tr`;

    try {
        // 3. İNTERNETE GİT VE VERİYİ GETİR (Fetch)
        // await: "Cevap gelene kadar bekle" 
        const cevap = await fetch(url);

        // Eğer şehir bulunamazsa (404 hatası)
        if (!cevap.ok) {
            alert("Şehir bulunamadı!");

            document.getElementById("sehirAdi").innerText = "--";
            document.getElementById("sicaklik").innerText = "--";
            document.getElementById("aciklama").innerText = "";

            document.getElementById("havaIkonu").innerText = "";




            return;
        }

        // 4. Gelen veriyi JSON formatına (JS Nesnesine) çevir
        const veri = await cevap.json();

        // --- KONSOLA BAKALIM MI? ---
        // Gelen verinin neye benzediğini görmek için:
        console.log(veri);

        // 5. Ekrana Yazdır
        document.getElementById("sehirAdi").innerText = `${veri.name}, ${veri.sys.country}`;
        document.getElementById("sicaklik").innerText = `${Math.round(veri.main.temp)}°C`;
        document.getElementById("aciklama").innerText = veri.weather[0].description;

        // 1. API'den gelen ikon kodunu al (Örn: "04d")
        let ikonKodu = veri.weather[0].icon;

        // 2. Resmi çekeceğimiz internet adresini oluştur
        let ikonAdresi = `https://openweathermap.org/img/wn/${ikonKodu}@2x.png`;

        // 3. HTML'deki resim etiketinin kaynağını (src) değiştir
        document.getElementById("havaIkonu").src = ikonAdresi;

        // ------------------------------

        // Sonuç kutusunu görünür yap
        document.getElementById("sonuc").style.display = "block";

    } catch (hata) {
        console.log("Bir hata oluştu: ", hata);
        alert("Bağlantı hatası!");
    }


    
}
    let inputKutusu = document.getElementById("sehirInput");

    // Kutuya "Tuşa basılma" (keypress) olayını dinle diyoruz
    inputKutusu.addEventListener("keypress", function (event) {

        // Eğer basılan tuş "Enter" ise:
        if (event.key === "Enter") {
            // Sanki butona basılmış gibi fonksiyonu çalıştır
            havaDurumuGetir();
        }

    });