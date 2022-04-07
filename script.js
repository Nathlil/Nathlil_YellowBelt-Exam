console.log("page loaded...");
var cartItems = document.querySelector("#cart-items");
var image = document.getElementById("#main-avi");

function addCart(id) {
    console.log("added to cart");
    var element = document.querySelector(id);
    cartItems.innerText++;
}

function support() {
    console.log("game compatabilities");
    alert("This game is supported on Linux.");
}

function change(){
    console.log("next slide");
    document.getElementById("main-avi").src= "./assets/pixel-ninjas-2.png";
}

function changeBack(){
    console.log("previous slide")
    document.getElementById("main-avi").src= "./assets/stonepunk.png";
}