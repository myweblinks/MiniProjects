// Document Elements Variables Here 
let Saved = document.getElementById("Saved");
let NameT = document.getElementById("AddName");
let ContentT = document.getElementById("AddContent");
let Deletation = document.getElementsByClassName("Deletation");
let UIEle = document.getElementsByClassName("UIEle");
// Arrays and Object
let NotesLists = [];
let ValNames ="";

// Function Here 
function OnStartup(){
    ShowPreSaved();
    CheckCount();
    
}
function CheckCount() {
    if (Saved.children.length==0) {
    Saved.textContent="Nothnig to show here. Add a note."
}
}
function ClcSub() {
   if (NameT.value!=""&&ContentT.value!="") {
    if (NameT.value.length<=10) {
        ValNames = NameT.value;
    }else{
        ValNames = NameT.value.slice(0,9)+"..."
    }
    let ColletedData = {
        name: ValNames,
        content: ContentT.value
    }
    let GetOld = localStorage.getItem("SavedData");
    if (GetOld==null) {
        NotesLists=[];
    }else{
        NotesLists = JSON.parse(GetOld);
    }
    NotesLists.push(ColletedData);
    localStorage.setItem("SavedData", JSON.stringify(NotesLists))
    ShowPreSaved();
    NameT.value="";
    ContentT.value="";
}else if(NameT.value==""){
    NameT.style.border="2px solid red"
   }else if(ContentT.value==""){
       ContentT.style.border="2px solid red"
    }
}
function ShowPreSaved() {
    UIEle[3].textContent="Delete Note"
    let Html = "";
    let GetOld = JSON.parse(localStorage.getItem("SavedData"));
    if (GetOld==null) {
        NotesLists=[];
    }else{
        NotesLists = GetOld;
    }
    for (let i = 0; i < NotesLists.length; i++) {
        Html+=`<div class="Notes">
        <div class="Deletation" onclick="Del(this.id)" id="${i}"></div>
        <div class="Name">${NotesLists[i].name}</div>
        <div class="Content">${NotesLists[i].content}</div>
        </div>`
    }
    Saved.innerHTML=Html;
}
function DelActive(e){
    
    
    if (e.textContent=="Delete Note") {
        Array.from(Deletation).forEach(function(ele, ind){
            Deletation[ind].style.display="flex"
        })
        e.textContent="Remove Mark"
    }else{
        Array.from(Deletation).forEach(function(ele, ind){
            Deletation[ind].style.display="none"
        })
        e.textContent="Delete Note"
    }
}
function Del(id){
    let GetOld = JSON.parse(localStorage.getItem("SavedData"));
    if (GetOld==null) {
        NotesLists=[];
    }else{
        NotesLists = GetOld;
    }
    NotesLists.splice(id, ++id)
    localStorage.setItem("SavedData", JSON.stringify(NotesLists))
    ShowPreSaved()
    CheckCount();
}
// Default Values
OnStartup();

NameT.addEventListener("keyup",(e)=>{
if (e.keyCode==13) {
    ContentT.focus();
}
if (NameT.value!="") {
    NameT.style.border="2px solid white"
}
})
ContentT.addEventListener("keyup",()=>{
if (ContentT.value!="") {
    ContentT.style.border="2px solid white"
}
})
