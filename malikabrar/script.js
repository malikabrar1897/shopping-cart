let users = [];
let cart = [];

function register() {
    let u = ruser.value;
    let p = rpass.value;
    users.push({u,p});
    alert("Registered");
}

function login() {
    let u = luser.value;
    let p = lpass.value;
    let ok = users.find(x=>x.u==u && x.p==p);
    alert(ok ? "Login Success" : "Invalid");
}

function add(item) {
    cart.push(item);
    display();
}

function display() {
    let c = document.getElementById("cart");
    c.innerHTML="";
    cart.forEach(i=>{
        let li=document.createElement("li");
        li.textContent=i;
        c.appendChild(li);
    });
}