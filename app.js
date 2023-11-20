"use strict"

let store = [{
    src: "hills2.jpg",
    heads: "history",
    description: "lorem is the way problems the thinking ith e blind in the function of flowuing get rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa"
},

{
    src: "pixels.jpeg",
    heads: "vision",
    description: "amet consectetur adipisicing elit. Adipisci fuga aperiam iste veniam temporeLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fuga aperiam iste veniam tempore obcaecati quod eos quibusdam eaque?rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa"
},
{
    src: "mills.jpg",
    heads: "goals",
    description: "lorem is the way of the conjustion of cunfusion is description into the about in the form of the rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa"
}
]


let div1 = document.getElementById("content-1");
let img = document.getElementById("img1");
let head = document.getElementById("head")
let des1 = document.getElementById("des1")


let count = 0
img.src = store[0].src;
head.innerHTML = store[0].heads;
des1.innerHTML = store[0].description;


console.log(div1);

let buttons = document.querySelectorAll("button");

let btn_Met = buttons[0]
buttons[0].classList.add("white_btn");
btn_Met.classList.add("hov-none");

buttons.forEach((x, index) => {

    x.addEventListener("click", () => {
        // x.focus();

        btn_Met.classList.remove("hov-none");
        buttons[0].classList.remove("white_btn");
        btn_Met = x;
        btn_Met.classList.add("hov-none");

        img.src = store[index].src
        head.innerHTML = store[index].heads
        des1.innerHTML = store[index].description

    });
});











