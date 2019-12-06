function change(){
    var e = document.getElementById("selected");
    var strUser = e.options[e.selectedIndex].value;
    console.log(strUser+" "+e.selectedIndex)
}