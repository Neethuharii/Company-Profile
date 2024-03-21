function fade(elementid){
    let fadeelement;
    let element=document.getElementById(elementid);

    //finding current display element
var tables=document.getElementById('section');
for(var i=0;i<=3;i++){
    var display= window.getComputedStyle(tables[i]).getPropertyValue('display');
    if(display=='block'){
        fadeelement=tables[i];
        break;
    }

}
fadeOut(fadeelement)
fadeIn(element)

}

function fadeIn(element){
    var x=0;
    var interval=setInterval(function(){
        x+=0.1;
        element.style.opacity=x;
        if(x>=1){clearInterval(interval);
        }
    },100); //run every 100 milisecond
}