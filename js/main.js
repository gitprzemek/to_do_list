
// create close button

var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++){
    var span = document.createElement("span");
    var closeX = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(closeX);
    myList[i].appendChild(span);
}

// hide li on click close button

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
    close[i].addEventListener("click", function(){
        var div = this.parentElement;
        div.style.display = "none";
    });
}

// add color to checked li

var myUl = document.querySelector("ul");
console.log(myUl);
myUl.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase() === "li"){
        event.target.classList.toggle("checked");
    }
},false);


    // add ne Li after click addbutton
var addButton = document.getElementById("addBtn");


addButton.addEventListener("click", function(){
    var newLi = document.createElement("li");
    var inputText = document.getElementById("myTask").value;
    var text = document.createTextNode(inputText);
    newLi.appendChild(text);
    if (inputText === ""){
        alert("Pole nie może być puste");
    } else {
        document.getElementById("ulCont").appendChild(newLi);
    }
    document.getElementById("myTask").value = "";
    newLi.className = "col-12 mb-2";

    var span = document.createElement("span");
    var closeX = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(closeX);
    newLi.appendChild(span);

    for (i = 0; i < close.length; i++){
        close[i].addEventListener("click", function(){
            var div = this.parentElement;
            div.style.display = "none";
        })
    }
})
