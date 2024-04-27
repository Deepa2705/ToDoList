
//select button

var add=document.getElementById("addbtn");
var listing=document.getElementById("listing");
var listItems=document.querySelector(".list-items");
// var div=document.querySelector(".list")

function addList(){
    var div=document.createElement("div");
    div.setAttribute("class","list");
    var text=listing.value;
    if(text!=""){
    div.innerHTML=`<p>${text}</p>
    <button id="deletebtn" onclick="deleteList(event)">Delete</button>`;
    listItems.append(div);
    }else{
        window.alert("Please add a list");
    }
    listing.value="";
}

function deleteList(event){
    event.target.parentElement.remove();
}