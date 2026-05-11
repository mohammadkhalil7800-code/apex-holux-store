import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

/* 🔥 FIREBASE CONFIG (replace with your own later) */
const firebaseConfig = {
apiKey: "YOUR_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let cart = [];
let total = 0;

/* LOGIN */
function openLogin(){
document.getElementById("login").style.display="flex";
}

function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="admin" && p==="1234"){
document.getElementById("login").style.display="none";
}else{
alert("Wrong login");
}
}

/* ADD PRODUCT (CLOUD) */
async function addProduct(){
let n=document.getElementById("name").value;
let p=document.getElementById("price").value;
let img=document.getElementById("img").value;

await addDoc(collection(db,"products"),{
name:n,
price:Number(p),
img:img
});

loadProducts();
}

/* LOAD PRODUCTS */
async function loadProducts(){
let box=document.getElementById("products");
box.innerHTML="";

let snap = await getDocs(collection(db,"products"));

snap.forEach(doc=>{
let p = doc.data();

box.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<div class="price">$${p.price}</div>
<button onclick="add('${p.name}',${p.price})">Add</button>
</div>`;
});
}

/* CART */
function add(name,price){
cart.push({name,price});
updateCart();
}

function updateCart(){
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

loadProducts();
