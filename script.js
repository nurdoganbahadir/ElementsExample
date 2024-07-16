// const todo = document.querySelector(".list-group");
// const todoList = todo.children[1];
// console.log(todoList.textContent="todo");

// const todo = document.querySelector(".container");
// todoList = todo.children[0].children[0].children[3].children[2].children[2];
// todoList.style.color = "red";
// todoList.style.backgroundColor = "gray";
// todoList.style.padding = "100px";
// console.log(todoList);

// const todo = document.querySelector(".list-group");
// todo.removeChild(todo.children[0]);
// console.log(todo);

//! DOMContentLoaded sayfa yüklendiğinde yapılacakları gösterir

// document.addEventListener("DOMContentLoaded", run);

// function run(){
//     console.log("sayfa yüklendi")
// }

//! load sadece window da çalışır

// window.addEventListener("load", run);

// function run(){
//     console.log("sayfa yüklendi")
// }

//! click tıklayınca fonksiyon çalıştırır.

// const todo = document.querySelector("button");

// todo.addEventListener("click",run);

// function run() {
//   console.log("click method.");
// }

//! mouseover mouse ile üzerine geldiğimiz alanı çalıştırır.

// const todo = document.querySelector("button");

// document.addEventListener("mouseover",run)

// function run(){
//     console.log("mouseover");
// }

//! mouseout mouse ile alanın dışına çıkınca çalışır

// const todo = document.querySelector("button");

// document.addEventListener("mouseover",run)

// function run(){
//     console.log("mouseover");
// }

//! mouseenter sürekli çalışmaz alana girip çıkınca çalışır

// const todo = document.querySelector("button");

// document.addEventListener("mouseenter",run)

// function run(){
//     console.log("mouseover");
// }

//! mouseleave alandan çıkınca çalışır 

// const todo = document.querySelector("button");

// document.addEventListener("mouseleave", run);

// function run() {
//   console.log("mouseover");
// }

//!keypress klavyeden tuşa basınca çalışır(sadece harf ve saılar)

// document.addEventListener("keypress",run)

// function run(e){
//     console.log(e.keyCode);
// }

//! keydown bütün tuşlar çalışır
// document.addEventListener("keydown", run);

// function run(e) {
//   console.log(e.key);
// }

//! keyup elimizi tuştan ne zaman çekersek  zaman çalışır

// document.addEventListener("keyup", run);

// function run(e) {
//   console.log(e.key);
// }