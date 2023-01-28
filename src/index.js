import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

//mouseover

document.querySelectorAll("nav").forEach((item) => {
  item.addEventListener("mouseover", (item) => {
    item.target.style.color = "green";
  });
});

//mouseout

document.querySelectorAll("nav").forEach((item) => {
  item.addEventListener("mouseout", (item) => {
    item.target.style.color = "black";
  });
});

//click

let imgOtobus = document.querySelectorAll("img");
imgOtobus.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.target.setAttribute("style", "filter: grayscale(100%)");
  });
});

//dblclick

let img = document.querySelectorAll("img");
imgOtobus.forEach((e) => {
  e.addEventListener("dblclick", (event) => {
    event.target.setAttribute("style", "filter: grayscale(0%)");
  });
});

//resize

window.addEventListener("resize", fresize);

let x = 0;
function fresize(event) {
  let txt = (x += 1);
  console.log(event);
  if (event.window.innerWidth < 500) {
    document.querySelector("body").style.backgroundColor = "red";
  } else {
    document.querySelector("body").style.backgroundColor = "blue";
  }
}

//load

const acilis = document.getElementById("login");
window.addEventListener("load", (event) => {
  setTimeout(() => {
    acilis.style.display = "none";
  }, 2000);
});

//focus
let buttonFooter = document.querySelector(".contact-part");
buttonFooter.addEventListener("focus", () => {
  buttonFooter.style.color = "black";
  buttonFooter.style.backgroundColor = "#fff";
  buttonFooter.style.fontSize = " 1.7rem";
});

//wheel
const imgWheel = document.querySelectorAll("footer");
imgWheel.forEach((footer) => {
  footer.addEventListener("wheel", (event) => {
    footer.style.fontSize = "45";
  });
});
