// JAVASCRIPT KISMI (ŞİMDİLİK BOŞ)
// Burayı adım adım beraber dolduracağız.

function ekranaYaz(deger) {
    // Görev 1 buraya gelecek
    let kutu = document.getElementById("ekran");

    kutu.value += deger;
}

function temizle() {

    let kutu = document.getElementById("ekran");

    kutu.value = "";
    // Görev 2 buraya gelecek
}

function hesapla() {

    let kutu = document.getElementById("ekran");

    try {
        kutu.value = eval(kutu.value);
    } catch (e) {
        kutu.value = "Hata!";
    }
    // Görev 3 buraya gelecek
}

function sil() {
    // Görev 4 (Opsiyonel)
    let kutu = document.getElementById("ekran");

    kutu.value = kutu.value.slice(0, -1);
}