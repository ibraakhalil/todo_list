
let inputArea = document.querySelector(".inputArea")
let addItem = document.querySelector(".btn")
let clear = document.querySelector(".btn-clear")
let todoList = document.querySelector(".todoList")
inputArea.value = "";

let array = [];
let counter = 0;

let x = localStorage.getItem("array");
let getArray = JSON.parse(x);
array = getArray;

if (array === null ){
    localStorage.setItem("array", JSON.stringify([]))
    let x = localStorage.getItem("array");
    let getArray = JSON.parse(x);
    array = getArray;
}





addItem.addEventListener("click", function(e){
        e.preventDefault();
        if(inputArea.value === ""){
            inputArea.style.border="1px solid red"
            setTimeout(() => {
                inputArea.style.border=""
            }, 1000);
        } else {
            inputArea.style.backgroundColor="white"
            array.push(inputArea.value)
            
            localStorage.setItem("array",JSON.stringify(array))

            let creatP = document.createElement("p");
                todoList.appendChild(creatP);
            let p = document.querySelectorAll(".todoList p")
            for(let i=0; i<p.length; i++){
                p[i].innerHTML = `<span> ${array[i]} </span>  <button class="btn-${counter++}"> &#9977; </button>`
            }   
            inputArea.value = "";         
        }
        closeList();
})




for(let i=0; i<array.length; i++){
    let creatP = document.createElement("p");
        todoList.appendChild(creatP);
    let p1 = document.querySelectorAll(".todoList p")
        p1[i].innerHTML = `<span> ${array[i]} </span>  <button class="btn-${counter++}"> &#9977; </button>`

}



function closeList() {
let button = document.querySelectorAll(".todoList p button")

button.forEach(function(x){
    x.addEventListener("click",function(e){
        let target = e.target.className;
        arrayIndex = array.indexOf(x.parentElement.querySelector("span").innerText);
        if(target){
            x.parentElement.remove();
            array.splice(arrayIndex,1)
            localStorage.setItem("array",JSON.stringify(array))
        }
    })
})
};
closeList();



clear.addEventListener("click", function(){
    todoList.innerHTML = ""
    localStorage.clear();
    array = [];
    localStorage.setItem("array",JSON.stringify(array))
})


















