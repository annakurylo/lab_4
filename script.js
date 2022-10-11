const first=document.getElementById('first');
const second=document.querySelector('#second');
let numOfClicks = 0;

first.onclick=function(){
    ++numOfClicks;
    if(numOfClicks % 2 !== 0)
        first.id="oneColor";
    else
        first.id="twoColor";
}

second.onclick=function(){
    ++numOfClicks;
    if(numOfClicks % 2 !== 0)
        second.id="threeColor";
    else
        second.id="fourColor";
}

add.onclick = function(){
    let elem=document.getElementById('feodosia');
    if(!document.getElementById('image')){
        elem.insertAdjacentHTML(
            'afterend', /*після закриваючого тега*/ 
            '<img id="image" src="img/feodosia.jpg"></img>'
        );
    }
}   

delet.onclick = function(){
    let elem = document.getElementById('image');
    elem.remove();
}

increase.onclick = function(){
    if(document.getElementById('image')){
        let image = document.getElementById('image');
        let imageHeight = +image.offsetHeight;/*висота елемента */
        let imageWidth = +image.offsetWidth;

        if(imageHeight<350 && imageWidth<650){
            imageHeight+=50;
            imageWidth+=100;
            image.style.width = imageWidth+'px';
            image.style.height = imageHeight+'px';
        }
    }
}

decrease.onclick = function(){
    if(document.getElementById('image')){
        let image = document.getElementById('image');
        let imageHeight = +image.offsetHeight;/*висота елемента */
        let imageWidth = +image.offsetWidth;
        
        if(imageHeight>50 && imageWidth>100){
            imageHeight-=50;
            imageWidth-=100;
            image.style.width = imageWidth+'px';
            image.style.height = imageHeight+'px';
        }
    }
}

