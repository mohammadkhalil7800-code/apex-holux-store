let products = JSON.parse(localStorage.getItem("products")) || [
{
name:"Nike Air Force",
price:120,
img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
}
];

let cart = [];

let total = 0;

/* LOGIN */
function showLogin(){
document.getElementById("login").style.display="flex";
}

function login(){
let u=document.getElementById("u").value;
let p=document.getElementById("p").value;

if(u==="admin" && p==="1234"){
document.getElementById("login").style.display="none";
}else{
alert("Wrong login");
}
}

/* SAVE PRODUCTS */
function save(){
localStorage.setItem("products",JSON.stringify(products));
}

/* SHOW */
function show(){
let box=document.getElementById("products");
box.innerHTML="";

products.forEach((p,i)=>{
box.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<div class="price">$${p.price}</div>
<button onclick="add(${i})">Add</button>
<button onclick="del(${i})" style="background:red;color:white;">Delete</button>
</div>`;
});
}

/* ADD PRODUCT */
function addProduct(){
let n=document.getElementById("name").value;
let p=document.getElementById("price").value;
let img=document.getElementById("img").value;

products.push({
name:n,
price:Number(p),
img:img
});

save();
show();
}

/* DELETE */
function del(i){
products.splice(i,1);
save();
show();
}

/* CART */
function add(i){
cart.push(products[i]);
update();
}

/* UPDATE CART */
function update(){
let c=document.getElementById("cart");
c.innerHTML="";
total=0;

cart.forEach(i=>{
total+=i.price;
c.innerHTML+=i.name+"<br>";
});

document.getElementById("total").innerText=total;
}

/* CHECKOUT */
function checkout(){
let msg="ORDER:\n";

cart.forEach(i=>{
msg+=i.name+" - $"+i.price+"\n";
});

window.open("https://wa.me/93764594322?text="+encodeURIComponent(msg));
}

show();
