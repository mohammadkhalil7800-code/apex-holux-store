let products = [
{name:"Nike Air Force 1",price:120,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"},
{name:"Adidas Ultraboost",price:180,img:"https://images.unsplash.com/photo-1528701800489-20be3c5c9c8c?w=700"},
{name:"Puma RS-X",price:150,img:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=700"},
{name:"Nike Slides",price:60,img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700"},
{name:"Luxury Shoes",price:250,img:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=700"},
{name:"Sketchers Max",price:140,img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700"},
{name:"New Balance 574",price:160,img:"https://images.unsplash.com/photo-1519744346364-2b8a8f2a7c2d?w=700"},
{name:"Crocs Slides",price:55,img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700"},
{name:"Sport Runner",price:110,img:"https://images.unsplash.com/photo-1528701800489-20be3c5c9c8c?w=700"},
{name:"Classic Leather",price:200,img:"https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=700"}
];

let cart = [];
let total = 0;

/* SHOW PRODUCTS */
function show(list=products){
let box=document.getElementById("products");
box.innerHTML="";

list.forEach((p,i)=>{
box.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<div class="price">$${p.price}</div>
<button onclick="add(${i})">Add to Cart</button>
</div>`;
});
}

show();

/* CART */
function add(i){
cart.push(products[i]);
updateCart();
}

function updateCart(){
let c=document.getElementById("cartItems");
c.innerHTML="";
total=0;

cart.forEach(i=>{
total+=i.price;
c.innerHTML+=i.name+"<br>";
});

document.getElementById("total").innerText=total;
}

/* SEARCH */
function search(){
let val=document.getElementById("search").value.toLowerCase();

show(products.filter(p=>
p.name.toLowerCase().includes(val)
));
}

/* CART TOGGLE */
function toggleCart(){
let c=document.getElementById("cart");
c.style.display = c.style.display==="block" ? "none":"block";
}

/* CHECKOUT */
function checkout(){
let msg="ORDER:\n";

cart.forEach(i=>{
msg+=i.name+" - $"+i.price+"\n";
});

window.open("https://wa.me/93764594322?text="+encodeURIComponent(msg));
}
