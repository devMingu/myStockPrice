const title1 = document.querySelector(".name");
const title2 = document.querySelector(".title");

function randomColor(){
    let rgb = "#";
    const ele = "123456789ABCDEF";
    for(let i=0 ; i<6 ; i++){
        const ran = Math.floor(Math.random()*16);
        rgb += ele[ran];
    }
    title1.style.color = rgb;
    title2.style.color = rgb;
}

randomColor();
setInterval(()=>{
    randomColor();
}, 3000)
