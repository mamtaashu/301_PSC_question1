let arr = JSON.parse(localStorage.getItem("Data")) || []

function admin(n,c,u,i,b) {
    this.name = n,
    this.course = c,
    this.unit = u,
    this.image = i,
    this.batch = b
}

function addData(event) {
    event.preventDefault();

    let form = document.getElementById("form")

    let name = form.name.value

    let course = form.course.value

    let unit = form.unit.value

    let image = form.image.value

    let batch = form.batch.value

    let mamtaadmin = new admin(name,course,unit,image,batch)
    // console.log(mamtaadmin)
    arr.push(mamtaadmin)
    console.log(arr)

    localStorage.setItem("Data",JSON.stringify(arr))
}
function totalbatch(){
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

    let container1 = document.getElementById("div1")

    for(key in obj){
        let batch = document.createElement("div")
        batch.innerText = `${key}-${obj[key]}`
        container1.append(batch)
    }
}
totalbatch();