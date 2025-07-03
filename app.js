let random=document.querySelector(".rnbtn")
let apply=document.querySelector(".apbtn")
let currentvalue=document.querySelector(".currentvalue")
let colorinput=document.querySelector("#colorinput")
let body=document.querySelector("body")

const colorArray=['red','yellow','green','blue']
// console.log(colorArray[3]);

const generate=()=>{
    const randomnumber=Math.floor(Math.random()*colorArray.length)
    return colorArray[randomnumber]
}
let color=generate();
console.log(color);


const Changecolor=(color)=>{
    body.style.backgroundColor=color;
    currentvalue.innerText=color;
}

const handleRandomBtnClick=()=>{
    let color=generate();

  Changecolor(color)
}       
const handleApplyBtnClick=()=>{
    const color=colorinput.value;
    Changecolor(color)
}
random.addEventListener('click',handleRandomBtnClick);
apply.addEventListener('click',handleApplyBtnClick);



Changecolor('red')