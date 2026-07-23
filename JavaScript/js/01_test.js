// print on console
function btnClick2() {
    console.log("print on console (External)");
}

// print pop-up when btn2 is clicked
const btn2 = document.querySelector("#btn2");
btn2.onclick = function() {
    alert("print pop-up (External)");
}