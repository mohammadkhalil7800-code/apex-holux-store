let products = [
{
name:"Nike Air Force 1",
price:120,
img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
},
{
name:"Adidas Slides",
price:60,
img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700"
}
];

let cart = [];
let total = 0;

/* LOGIN */
function openLogin(){
document.getElementById("loginBox").style.display="flex";
}

function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="admin" && p==="1234"){
document.getElementById("loginBox").style.display="none";
}else{
alert("Wrong login");
}
}

/* SHOW PRODUCTS */
function showProducts(){
let box=document.getElementById("products");
box.innerHTML="";

products.forEach((p,i)=>{
box.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<div class="price">$${p.price}</div>
<button onclick="addToCart(${i})">Add</button>
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

showProducts();
}

/* CART */
function addToCart(i){
cart.push(products[i]);
updateCart();
}

function updateCart(){
let c=document.getElementById("cartList");
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

showProducts();
