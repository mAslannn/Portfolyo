
// Değişkenlerimizi tanımlayalım (Skorları hafızada tutmak için)
let oyuncuPuani = 0;
let bilgisayarPuani = 0;

function oyna(oyuncuSecimi) {
    // GÖREV 1: Bilgisayara rastgele bir seçim yaptır (Taş, Kağıt veya Makas)
    let secenekler = ["tas", "kagit", "makas"];

    // 2. Rastgele bir sayı üret (0, 1 veya 2)
    // Math.random() * 3 --> 0 ile 2.99 arasında sayı verir.
    // Math.floor(...) --> Bunu aşağı yuvarlar (Örn: 2.99 -> 2 olur).
    let rastgeleSayi = Math.floor(Math.random() * 3);

    let bilgisayarSecimi = secenekler[rastgeleSayi];

    let emojiler = {
        "tas": "🗿",
        "kagit": "📄",
        "makas": "✂️"
    };

    document.getElementById("seninSecimin").innerText = emojiler[oyuncuSecimi];
    document.getElementById("bilgisayarSecimi").innerText = emojiler[bilgisayarSecimi];

    let sonucMesaji = document.getElementById("sonucYazisi");

    if (oyuncuSecimi == bilgisayarSecimi) {
        sonucMesaji.innerText = "Beraberlik";
        sonucMesaji.style.color = "#f1c40f";
    }
    else if ((oyuncuSecimi == "tas" && bilgisayarSecimi == "makas") ||
        (oyuncuSecimi == "kagit" && bilgisayarSecimi == "tas") ||
        (oyuncuSecimi == "makas" && bilgisayarSecimi == "kagit")) {

        sonucMesaji.innerText = "Kazandın";
        sonucMesaji.style.color = "#2ecc71";


        oyuncuPuani++;
        document.getElementById("oyuncuSkor").innerText = oyuncuPuani;

    }
    else{

        sonucMesaji.innerText = "Kaybettin";
        sonucMesaji.style.color = "#e74c3c";

        bilgisayarPuani++;
        document.getElementById("bilgisayarSkor").innerText = bilgisayarPuani;
    }



}