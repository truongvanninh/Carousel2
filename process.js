var a = 0;  
var imgs = ["img/img01.png", "img/img02.png", "img/img03.png", "img/img04.png", "img/img05.jpg"];

var time = 3000;
var len=imgs.length-1 ;
var run = this.setInterval(right, time);

// Show Inner + Indicators
window.onload = function(e){  
    // Inner
    item='';
    for(i=0; i<=len; i++) {
        item += `<div class="item" id="it`+ i +`"> <img src="` + imgs[i] + `" alt="Image"></div>` ;
    }
    let inner=document.getElementById("inner")
    inner.innerHTML = item; 
    for(i=0; i<=len; i++) { 
        distance = -i*840;
        document.getElementById("it"+i).style.right= distance + "px";
    }

    // Indicators
    let li='<ul><li class="active" onclick="select('+ 0 +')"></li>'
    for(j=1; j<=len; j++) {  li = li + '<li onclick="select('+ j +')"></li>' }
    li=li+'</ul>' 

    let indicator=document.getElementById("indicators")
    indicator.innerHTML = li; 
}

// Remove active class in indicators
function removeActive() {
    for(j=0; j<=len; j++) {
        let element = document.getElementsByTagName("li")[j].classList.remove("active"); 
    }
    document.getElementById("left").classList.remove("disible");
    document.getElementById("right").classList.remove("disible"); 
}
function select(j) { 
    a=j
    removeActive()
    let element = document.getElementsByTagName("li")[j];
    element.classList.add("active");
    
    document.getElementById("it"+j).style.right= 0 + "px";
    var k=1; 
    for(i=j+1; i<=len; i++) { 
        let distance = -k*840; 
        document.getElementById("it"+i).style.right= distance + "px";
        k++;
    }
    var k=1; 
    for(i=j-1; i>=0; i--) {  
        let distance = k*840;
        document.getElementById("it"+i).style.right= distance + "px";
        k++;
    }
    delay()
}

function delay() {
    clearInterval(run)
    run = this.setInterval(right, time);   
}

function showImg(i) {  
}

// Control
function left() { 
    removeActive() 
    if(a==0) { 
        a=len;
    } else a=a-1;
    select(a);
}
function right() {
    removeActive() 
    if(a==len) { 
        a=0
    } else ++a;  
    select(a);
}