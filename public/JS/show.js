const title1 = document.querySelector(".name");
const title2 = document.querySelector(".title");
const price = document.querySelector(".price");
const openingPrice = document.querySelector(".openingPrice");
const lowPrice = document.querySelector(".lowPrice");
const highPrice = document.querySelector(".highPrice");
const changePrice = document.querySelector(".changePrice");
const riseOrSink = document.querySelector(".riseOrSink");
const detailContainer = document.querySelector(".detailContainer");

let changeP = 0;
sym = ["BTC", "ETH", "SOL", "SAND", "XRP", "MANA", "FLOW", "LINK", "ENJ", "MED"];
url = "https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-";


for(let i=0; i<10; i++){
    symbol = title2.innerText;
    if(symbol == sym[i]){
        url += symbol;
    }
}

async function showTradePrice(){
    await fetch(url)
        .then(bring => bring.json()) //데이터를 json으로 바꾼다
        .then(function(coin) {
            price.innerText = coin[0].tradePrice + "KRW";
        })
}
async function showDetail(){
    await fetch(url)
        .then(bring => bring.json()) //데이터를 json으로 바꾼다
        .then(function(coin) {
            openingPrice.innerText = coin[0].openingPrice + "KRW";
            lowPrice.innerText = coin[0].lowPrice + "KRW";
            highPrice.innerText = coin[0].highPrice + "KRW";
            if(changeP != coin[0].change){
                console.log("HAHA");
                changeP = coin[0].changePrice;
                changePrice.innerText = changeP + "KRW";
                changePrice.style.color = randomColor();
            }
            if(coin[0].change == 'RISE'){
                riseOrSink.innerText = "상승";
                riseOrSink.style.color = "green";
            }
            else{
                riseOrSink.innerText = "하락";
                riseOrSink.style.color = "red";
            }
            
        })
}

title2.addEventListener("click", ()=>{
    detailContainer.classList.toggle("hidden");
    showDetail();
    setInterval(()=>{
        showDetail();
    }, 3000);
})
price.addEventListener("click", ()=>{
    showTradePrice();
    showDetail();
    setInterval(()=>{
        showTradePrice();
    }, 3000);
})

function randomColor(){
    let rgb = "#";
    const ele = "123456789ABCDEF";
    for(let i=0 ; i<6 ; i++){
        const ran = Math.floor(Math.random()*16);
        rgb += ele[ran];
    }
    return rgb;
}

randomColor();
setInterval(()=>{
    rc = randomColor();
    title1.style.color = rc;
    title2.style.color = rc;
}, 3000)
