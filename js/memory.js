const grid = document.querySelector(".container");

// 1. KART DESTESİ (Resim Linkleri - 8 Çift)
const kartlar = [

    "https://tiermaker.com/images/template_images/2022/16231278/card-evolution-clash-royale-16231278/zzzzz-1756607987verdugo-evo.png",
    "https://tiermaker.com/images/template_images/2022/16231278/card-evolution-clash-royale-16231278/zzzzz-1756607987verdugo-evo.png",

    "https://cdn.topuplive.com/cdn-cgi/image/quality=low,format=webp/uploads/images/goods/20251022/1761121317_EfZbCdIeuV.webp",
    "https://cdn.topuplive.com/cdn-cgi/image/quality=low,format=webp/uploads/images/goods/20251022/1761121317_EfZbCdIeuV.webp",

    "https://admin.esports.gg/wp-content/uploads/2025/06/InfernoDragon-ClashRoyale-card.png",
    "https://admin.esports.gg/wp-content/uploads/2025/06/InfernoDragon-ClashRoyale-card.png",

    "https://liquipedia.net/commons/images/5/5c/Clash_Royale_Card_Evolved_Zap.png",
    "https://liquipedia.net/commons/images/5/5c/Clash_Royale_Card_Evolved_Zap.png",

    "https://liquipedia.net/commons/images/b/b2/Clash_Royale_Card_Evolved_Royal_Recruits.png",
    "https://liquipedia.net/commons/images/b/b2/Clash_Royale_Card_Evolved_Royal_Recruits.png",

    "https://static.wikia.nocookie.net/clashroyale/images/4/49/MegaKnightCardEvolution.png/revision/latest/thumbnail/width/360/height/450?cb=20250626003523",
    "https://static.wikia.nocookie.net/clashroyale/images/4/49/MegaKnightCardEvolution.png/revision/latest/thumbnail/width/360/height/450?cb=20250626003523",

    "https://liquipedia.net/commons/images/f/f7/Clash_Royale_Card_Evolved_Battle_Ram.png",
    "https://liquipedia.net/commons/images/f/f7/Clash_Royale_Card_Evolved_Battle_Ram.png",

    "https://cdn.royaleapi.com/static/img/cards/wall-breakers-ev1.png?t=94032b45c",
    "https://cdn.royaleapi.com/static/img/cards/wall-breakers-ev1.png?t=94032b45c"

];

// 2. KARTLARI KARIŞTIR (Her oyunda farklı dizilim)
kartlar.sort(() => 0.5 - Math.random());

// --- OYUN DEĞİŞKENLERİ ---
let secilenKartlar = []; // Açılan 2 kartı tutar
let kilitli = false;     // Yanlışsa 1sn beklerken tıklamayı engeller

// 3. KARTLARI OLUŞTUR VE MASAYA DİZ
for (let i = 0; i < 16; i++) {
    // Kutuyu yarat
    const card = document.createElement("div");
    card.classList.add("card");

    // Resmi yarat
    const resim = document.createElement("img");
    resim.src = kartlar[i];
    card.appendChild(resim);

    // --- TIKLAMA OLAYI ---
    card.addEventListener("click", function () {

        // Kural 1: Sistem kilitliyse (bekleme modundaysa) tıklama
        // Kural 2: Zaten açık olan karta tekrar tıklama
        if (kilitli || card.classList.contains("flipped")) {
            return;
        }

        // Kartı Çevir (Resmi göster)
        card.classList.add("flipped");

        // Hafızaya al
        secilenKartlar.push(card);

        // Eğer 2 kart seçildiyse kontrol et
        if (secilenKartlar.length === 2) {
            kontrolEt();
        }
    });

    // Masaya koy
    grid.appendChild(card);
}

// --- EŞLEŞTİRME KONTROL FONKSİYONU ---
function kontrolEt() {
    kilitli = true; // Diğer kartlara tıklamayı yasakla

    const kart1 = secilenKartlar[0];
    const kart2 = secilenKartlar[1];

    // Resimlerin linklerini karşılaştır
    const resim1 = kart1.querySelector("img").src;
    const resim2 = kart2.querySelector("img").src;

    if (resim1 === resim2) {
        // --- DOĞRU EŞLEŞME ---
        secilenKartlar = []; // Listeyi temizle
        kilitli = false;     // Kilidi aç

        // ZAFER KONTROLÜ: Hepsi açıldı mı?
        const acikKartSayisi = document.querySelectorAll(".flipped").length;

        if (acikKartSayisi === 16) {
            setTimeout(() => {
                alert("TEBRİKLER! Hafızan zehir gibi! 🧠🏆");
                location.reload(); // Sayfayı yenile (Yeni Oyun)
            }, 500);
        }

    } else {
        // --- YANLIŞ EŞLEŞME ---
        // 1 saniye bekle, sonra ikisini de kapat
        setTimeout(() => {
            kart1.classList.remove("flipped");
            kart2.classList.remove("flipped");

            secilenKartlar = [];
            kilitli = false;
        }, 1000);
    }
}