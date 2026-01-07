

function ekranaYaz(deger) {

    let kutu = document.getElementById("ekran");

    kutu.value += deger;
}

function temizle() {

    let kutu = document.getElementById("ekran");

    kutu.style.backgroundColor = "red";
    setTimeout(function(){
        kutu.style.backgroundColor = "white"
    }, 500);

    kutu.value = "";

}

function hesapla() {

    let kutu = document.getElementById("ekran");

    try {
        kutu.value = eval(kutu.value);
    } catch (e) {
        kutu.value = "Hata!";
    }

}

function sil() {

    let kutu = document.getElementById("ekran");

    kutu.value = kutu.value.slice(0, -1);
}