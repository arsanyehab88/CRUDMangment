var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCat = document.getElementById("productCat")
var productDesc = document.getElementById("productDesc")
var count = document.getElementById("count")
var productList
var mainbtn =document.getElementById("main")
var tmp
var lab = document.getElementById('label')





function setlocal(){
    localStorage.setItem("product",JSON.stringify(productList))
}
//check
if( localStorage.getItem("product") !=null){
    productList = JSON.parse(localStorage.getItem("product"))
    display(productList)

    
}else{
    
    productList=[]
}

//ADD
function addProduct(){
    var product ={
        name:productName.value,
        price:productPrice.value,
        category:productCat.value,
        desc:productDesc.value,
        counter:count.value
    }
    if(mainbtn.innerText=="Update"){
        productList[tmp]=product
        displayClear()
        mainbtn.innerText="Submit"
        count.style.display='block'   
        lab.style.display='block'
    }else{
        
        if(valdName() && valdPrice() && valdCat() && valdCount() && valdDesc() ){
        if(product.counter > 1){
            for(var i=0; i< product.counter;i++){
                productList.push(product)
            }
        }else{
            productList.push(product)
        }
            
        }
    }
    displayClear()
    setlocal()
    display(productList)
}
var myAdd = document.querySelector("#main");
myAdd.addEventListener("click",function(){
    addProduct();
});
//clear
function displayClear(){
    productName.value=''
    productCat.value=''
    productPrice.value=''
    productDesc.value=''
    count.value=''
}

//Display
function display (list){
    var carton = ``
    for(var i=0; i < list.length; i++){
        carton +=`
        <tr class="text-white">
        <td>${i+1}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].desc}</td>
        <td><button class="btn btn-outline-warning rounded-pill" onclick="update(${i})">Update</button></td>
        <td><button class="btn btn-outline-secondary rounded-pill" onclick="Delete(${i})" >Delete</button></td>
    </tr>
        `
    }

    document.getElementById("data").innerHTML=carton
}
//delete
function Delete(index){
    productList.splice(index,1)
    setlocal()
    display(productList)
}

//deleteall
function deleteAll(){
    productList.splice(0)
    localStorage.clear()
    display(productList)
}
var myAdd = document.querySelector("#DeleteAll");
myAdd.addEventListener("click",function(){
    deleteAll()
});



//update

function update(index){
    productName.value=productList[index].name,
    productPrice.value=productList[index].price,
    productCat.value=productList[index].category,
    productDesc.value=productList[index].desc,
    count.style.display='none'
    lab.style.display='none'
    mainbtn.innerText="Update"
    tmp = index
    scroll({
        top:0,
        behavior:"smooth"
    })
}
//search
function searchData(value){
    var carton=``
    for(var i = 0;i < productList.length;i++){
        if(productList[i].name.includes(value)){
            carton +=`
            <tr class="text-white">
            <td>${i+1}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].desc}</td>
            <td><button class="btn btn-outline-warning rounded-pill" onclick="update(${i})">Update</button></td>
            <td><button class="btn btn-outline-secondary rounded-pill" onclick="Delete(${i})" >Delete</button></td>
        </tr>
            ` 
            document.getElementById("data").innerHTML=carton
        }
    }
}

//valdition
function valdName(){
    var regx = /^[A-Z][a-z]{3,8}$/
    
    if(regx.test(productName.value)){
        document.querySelector("#name").classList.add("d-none")
        return true
    }else{
        document.querySelector("#name").classList.remove("d-none")
        return false
    }

}
function BtnName(){
    productName.addEventListener("keyup",valdName)
}
BtnName();


function valdPrice(){
    var regx=/^([1-9][0-9]{3,4})$/
    if(regx.test(productPrice.value)){
        document.querySelector("#Price").classList.add("d-none")
        return true
    }else{
        document.querySelector("#Price").classList.remove("d-none")
        return false
    }
}
function btnPrice(){
    productPrice.addEventListener("keyup",valdPrice)
}
btnPrice();

function valdCount(){
    var regx=/^([1-9]|[1-4][0-9]|50)$/
    if(regx.test(count.value)){
        document.querySelector("#valdcount").classList.add("d-none")
        return true
    }else{
        document.querySelector("#valdcount").classList.remove("d-none")
        return false
    }
}
function btnCount(){
    count.addEventListener("keyup",valdCount)
}
btnCount();


function valdCat(){
    var regx=/^(TV|Mobile|Device)$/i;
    if(regx.test(productCat.value)){
        document.querySelector("#valdcat").classList.add("d-none")
        return true
    }else{
        document.querySelector("#valdcat").classList.remove("d-none")
        return false
    }
}
function btnCat(){
    productCat.addEventListener("keyup",valdCat)
}
btnCat();

function valdDesc(){
    var regx=/^.{1,500}$/i;
    if(regx.test(productDesc.value)){
        document.querySelector("#valdDesc").classList.add("d-none")
        return true
    }else{
        document.querySelector("#valdDesc").classList.remove("d-none")
        return false
    }
}
function btnDesc(){
    productDesc.addEventListener("keyup",valdDesc)
}
btnDesc();
