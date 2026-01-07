const miktarInput = document.getElementById("miktar");
const birinciDoviz = document.getElementById("birinciDoviz");
const ikinciDoviz = document.getElementById("ikinciDoviz");
const sonucKutusu = document.getElementById("sonuc");
const cevirBtn = document.getElementById("cevirBtn");

const apiKey = "5a6a5c92003939d7533613fb";
const url = "https://v6.exchangerate-api.com/v6/";

cevirBtn.addEventListener("click" , function(){


    let miktar = miktarInput.value;

    let dovizCinsi = birinciDoviz.value;

    fetch(url + apiKey + "/latest/" + dovizCinsi)

            .then(response => response.json())
            .then(data => {

                const hedefPara = ikinciDoviz.value;

                const kur = data.conversion_rates[hedefPara];

                const hesaplananSonuc = miktar * kur;

                sonucKutusu.innerHTML = `${miktar} ${dovizCinsi} = ${hesaplananSonuc.toFixed(2)} ${hedefPara}`;
                
            })
})