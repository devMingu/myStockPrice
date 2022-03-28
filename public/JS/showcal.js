const currentprice = document.querySelector(".currentprice");
const currentcount = document.querySelector(".currentcount");
const plusprice = document.querySelector(".plusprice");
const pluscount = document.querySelector(".pluscount");
const answer = document.querySelector(".answer");

let prevPrice = parseInt(currentprice.innerText);
let prevCount = parseInt(currentcount.innerText);
let nextPrice = parseInt(plusprice.innerText);
let nextCount = parseInt(pluscount.innerText);


let 기존금액 = prevPrice * prevCount;
let 추가금액 = nextPrice * nextCount;


setTimeout(()=>{
    answer.innerText = (기존금액+추가금액)/(prevCount+nextCount) + "KRW가 나오네요!";
}, 1000)



