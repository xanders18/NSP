function change(){
    var e = document.getElementById("selected");
    var strUser = e.options[e.selectedIndex].value;

    let area=document.getElementById('inputarea')

    if(strUser!=="Create File"){
        area.style.display="none";
    }else{
        area.style.display="block";
    }
}