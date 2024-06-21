const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

function addtask(){
    if(input_box.value === ''){
        alert("Input is empty");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);   
        input_box.value = "";

    }
    input_box = "";
    saveData();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}

function showtask(){
    list_container.innerHTML = localStorage.getItem("data");
}
showtask();