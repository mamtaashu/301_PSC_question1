let stdata = JSON.parse(localStorage.getItem("Data"));

stdata.map(function (ele, index) {

let tr = document.createElement("tr");
tr.setAttribute("id","tr");

var td1 = document.createElement("td");
var image = document.createElement("img");
    image.src = ele.image
    image.setAttribute("class","img")
    td1.append(image);

var td2 = document.createElement("td");
td2.innerText = ele.name;

var td3 = document.createElement("td");
td3.innerText = ele.course;

var td4 = document.createElement("td");
td4.innerText = ele.unit;

var td5 = document.createElement("td");
td5.innerText = ele.batch;

var td6 = document.createElement("td");
td6.innerText = "Remove";
td6.style.color = "red";
td6.addEventListener("click",function (){
    deleteRow(ele, index)
})

tr.append(td1,td2,td3,td4,td5,td6)

document.querySelector("tbody").append(tr);

});


function deleteRow(ele,index)
{
    

    stdata.splice(index,1)
    localStorage.setItem("Data",JSON.stringify(stdata))
    window.location.reload()
}

function Numberbatches(){
    let batch = JSON.parse(localStorage.getItem("Data")) || [];

    let obj = {};
    for(let i=0; i<batch.length; i++){
        if(!obj[batch[i].batch]){
            obj[batch[i].batch]=0
        }
    }
    for(let i=0; i<batch.length;i++){
        obj[batch[i].batch]++
    }
    console.log(obj)

    let container = document.getElementById("div1")

    for(key in obj){
        let batch = document.createElement("div")
        batch.innerText = `${key}-${obj[key]}`
        container.append(batch)
    }
}
Numberbatches();