const isimInput = document.getElementById("isimInput");
const ekleBtn = document.getElementById("ekleBtn");
const liste = document.getElementById("liste");
const cark = document.getElementById("cark");
const cevirBtn = document.getElementById("cevirBtn");

const secenekler = [];

ekleBtn.addEventListener("click", function () {
    const inputDeğer = isimInput.value;
    if (inputDeğer.trim() == "") {

        alert("Kutuyu doldurunuz!");

        return;
    }

    else {
        secenekler.push(inputDeğer);

        liste.innerHTML += "<li>" + inputDeğer + "</li>";

        isimInput.value = "";

        carkCiz();

        console.log(secenekler);
    }
})

function rastgeleRenk() {
    const harfler = "0123456789ABCDEF";
    let renk = "#";
    for (let i = 0; i < 6; i++) {
        renk += harfler[Math.floor(Math.random() * 16)];
    }
    return renk;
}

function carkCiz() {

    // 1. Dizi boşsa temizle ve çık
    if (secenekler.length === 0) {
        cark.style.background = "none";
        cark.innerHTML = ""; // Varsa eski yazıları sil
        return;
    }

    // Önce çarkın içini (eski yazıları) temizle
    cark.innerHTML = "";

    const dilimDerecesi = 360 / secenekler.length;
    let gradientParcalari = [];

    for (let i = 0; i < secenekler.length; i++) {
        // --- BOYA KISMI (Eski Mantık) ---
        const renk = rastgeleRenk();
        const baslangic = i * dilimDerecesi;
        const bitis = (i + 1) * dilimDerecesi;
        gradientParcalari.push(`${renk} ${baslangic}deg ${bitis}deg`);

        // --- YENİ KISIM: YAZI EKLEME ---

        // 1. Yeni bir kutu (div) yarat
        const yaziKutusu = document.createElement("div");
        yaziKutusu.innerText = secenekler[i]; // İçine ismi yaz
        yaziKutusu.classList.add("dilim-yazi"); // CSS sınıfını ekle

        // 2. Açıyı Hesapla: Dilimin tam ortasına gelmeli
        // Başlangıç açısı + Yarım dilim açısı = Merkezin açısı
        const ortaAci = baslangic + (dilimDerecesi / 2);

        // 3. Döndür
        // translateY(-50%) dememizin sebebi: Yazıyı dikeyde tam ortalamak.
        // rotate(...) ile de açısını veriyoruz.
        // +90 ekliyoruz çünkü CSS'te yazılar yatay başlar, çark dikey başlar.
        yaziKutusu.style.transform = `translateY(-50%) rotate(${baslangic + (dilimDerecesi / 2)}deg)`;
        // 4. Çarkın içine monte et
        cark.appendChild(yaziKutusu);
    }

    // Boyayı sür
    cark.style.background = `conic-gradient(${gradientParcalari.join(",")})`;
}



let mevcutDonus = 0;

cevirBtn.addEventListener("click", function () {

    if (secenekler.length === 0) {
        alert("Önce listeye bir şeyler ekle!");
        return;
    }

    const rastgeleDerece = Math.floor(Math.random() * 3000) + 3000;

    mevcutDonus += rastgeleDerece;


    cark.style.transform = `rotate(${mevcutDonus}deg)`;

    setTimeout(function () {

        const dilimBasinaDerece = 360 / secenekler.length;

        const kalanDerece = mevcutDonus % 360;

        const kazanilanAci = 360 - kalanDerece;

        let kazananIndex = Math.floor(kazanilanAci / dilimBasinaDerece);

        if (kazananIndex === secenekler.length) {
            kazananIndex = 0;
        }

        const kazananIsim = secenekler[kazananIndex];

        alert("KAZANAN: " + kazananIsim);










    }, 4000);

});