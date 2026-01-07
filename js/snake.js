const canvas = document.getElementById("oyunSahasi");
const ctx = canvas.getContext("2d");


let hiz = 7;
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;
let xVelocity = 0;
let yVelocity = 0;
let appleX = 5;
let appleY = 5;
let kuyrukUzunlugu = 2;
let yilanParcalari = [];



function drawGame() {

    yilanParcalari.push(new YilanParcasi(headX , headY));
    if(yilanParcalari.length > kuyrukUzunlugu){
        yilanParcalari.shift();
    }

    headX = headX + xVelocity;
    headY = headY + yVelocity;


    let sonuc = oyunBittiMi();
    
    if(sonuc){

        clearInterval(oyunDongusu);

        ctx.fillStyle = "white";

        ctx.font = "50px Verdana";

        ctx.fillText("Game Over!" , canvas.width / 6.5 , canvas.height / 2);

        return;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0 , 0 , canvas.width , canvas.height);


    ctx.fillStyle = "white";
    ctx.font = "20px Verdana";
    ctx.fillText("Skor: " + (kuyrukUzunlugu - 2), 10 , 30);

    ctx.fillStyle = "green";
    for(let i = 0; i < yilanParcalari.length; i++){

        let parca = yilanParcalari[i];

        ctx.fillRect(parca.x * tileCount , parca.y * tileCount , tileSize , tileSize);
    }

    ctx.fillStyle = "orange";
    ctx.fillRect(headX * tileCount , headY * tileCount , tileSize , tileSize);

    
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileCount , appleY * tileCount , tileSize , tileSize);

    if(headX == appleX && headY == appleY){

        appleX = Math.floor(Math.random() * tileCount)
        appleY = Math.floor(Math.random() * tileCount)

        kuyrukUzunlugu++;
    }
}
let oyunDongusu = setInterval(drawGame, 1000/15);

document.body.addEventListener("keydown" , tusBasildi);

function tusBasildi(event){

    if(event.keyCode == 38){             // yukarı tuş = 38     aşağı tuş = 40     sol tuş = 37     sağ tuş = 39
        yVelocity = -1;
        xVelocity = 0;
    }
    if(event.keyCode == 40){
        yVelocity = 1;
        xVelocity = 0;
    }
    if(event.keyCode == 37){
        yVelocity = 0;
        xVelocity = -1;
    }
    if(event.keyCode == 39){
        yVelocity = 0;
        xVelocity = 1;
    }
}

function oyunBittiMi(){

    let bitti = false;

    if (xVelocity === 0 && yVelocity === 0){
        return false;
    }

    if (headX < 0) bitti = true;
    
    else if (headX === tileCount) bitti = true;

    else if (headY < 0) bitti = true;

    else if (headY === tileCount) bitti = true;

    for( let i = 0; i < yilanParcalari.length; i++){

        let parca = yilanParcalari[i];

        if(parca.x === headX && parca.y === headY){
            
            bitti = true;
            break;
        }
    }

        return bitti;
}

class YilanParcasi{

        constructor(x,y){
            this.x = x;
            this.y = y;
        }

}