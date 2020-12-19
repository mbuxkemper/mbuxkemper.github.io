//Hamburger menu Function
function hamburger(){
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block" ){
        console.log("none");
        menu.style.display = "none";
    } else{
        menu.style.display = "block";
        console.log("block");
    }
}
// if (menu.style.display = "none" ){
    //     console.log("block")
    //     menu.style.display = "block";
    // } 