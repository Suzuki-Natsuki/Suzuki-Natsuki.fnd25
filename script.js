'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const imgObj = [{img: "シマエナガ1.jpg"},
                {img: "シマエナガ2.jpg"},
                {img: "シマエナガ3.jpg"},
                {img: "シマエナガ4.jpg"},
                {img: "シマエナガ5.jpg"},
                {img: "シマエナガ6.jpg"},
                {img: "シマエナガ7.jpg"},
                {img: "シマエナガ8.jpg"},
                {img: "シマエナガ9.jpg"},
                {img: "シマエナガ完成.jpg"}]

reset();
let complete = 0;
let selectNo;
let selectClass;

function randomImg() {
  if (document.getElementById("start").innerText === "スタート") {
    reset();
    visible();
    document.getElementById("start").style.visibility = "hidden"
    const imgs = document.getElementsByTagName("img");
    const randomNum = [];
    let num = Math.floor(Math.random() * 9);
    for (let i = 10; i < 19; i++) {
      while(randomNum.indexOf(num) !== -1) {
        num = Math.floor(Math.random() * 9);
      }
      imgs[i].src = imgObj[num].img;
      imgs[i].id = num + 1;
      randomNum.push(num);
    }
  } else {
    window.location.reload();
  }
}

function reset(){
  const allimg = document.getElementsByTagName("img");
  for (const img of allimg) {
    img.style.visibility = "hidden";
    img.style.borderWidth = "0px";
  }
  const sampleimg = document.getElementById("sample");
  sampleimg.style.visibility = "visible";
  sampleimg.src = imgObj[9].img;
  document.getElementsByClassName("judgement")[0].innerText = "　";
  document.getElementsByClassName("judgement")[0].style.backgroundColor = "";
}

function visible(){
  const allimg = document.getElementsByTagName("img");
  for (const img of allimg) {
    img.style.visibility = "visible";
  }
  const sampleimg = document.getElementById("sample");
  sampleimg.style.visibility = "hidden";
  document.getElementById("title").style.visibility = "hidden";
}

let botton = document.getElementById("start")
botton.addEventListener('click',randomImg)

for (let i = 10; i < 19; i++) {
  let imgclick = document.getElementsByTagName("img")[i]
  imgclick.addEventListener('click',() => {
    const allimg = document.getElementsByTagName("img");
    for (const img of allimg) {
      img.style.borderWidth = "0px";
    }
    imgclick.style.border = "solid 5px yellow";
    selectNo = imgclick.id;
    selectClass = imgclick.className;
  })
}

for (let i = 1; i < 10; i++) {
  let imgclick = document.getElementsByTagName("img")[i]
  imgclick.addEventListener('click',() => {
  const displayText = document.getElementsByClassName("judgement")[0]
    if (imgclick.id === selectNo) {
      displayText.innerText = "正解です！";
      displayText.style.backgroundColor = "rgb(50, 50, 255)";
      imgclick.src = imgObj[imgclick.id - 1].img;
      const passimg = document.getElementsByClassName(selectClass)[0];
      passimg.style.visibility = "hidden";
      complete += 1;
      selectNo = null;
      selectClass = null;
      finish();
    } else {
      displayText.innerText = "不正解です！";
      displayText.style.backgroundColor = "rgb(255, 50, 50)";
    }
  })
}

function finish() {
  if(complete === 9) {
    const displayText = document.getElementsByClassName("judgement")[0]
    displayText.innerText = "完成です！";
    displayText.style.color = "black"
    displayText.style.backgroundColor = "rgb(255, 251, 0)";
    document.getElementById("start").innerText = "もう一度"
    document.getElementById("start").style.visibility = "visible"
  }
}
