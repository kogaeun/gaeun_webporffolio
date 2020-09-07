let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.0005;
let _imgArr;

window.onload = function(){
    _imgArr = document.getElementsByTagName("img");
    //alert(_imgArr.length)
    window.addEventListener("mousemove", mouseFunc, false);
    
    function mouseFunc(e){
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
    }
    loop();
}

function loop(){
    mx += (x - mx) * speed;
    my += (x - my) * speed;
    //console.log(mx);
    _imgArr[0].style.transform = "translate("+ -(mx/0) +"px," + -(my/0) +"px)";
    _imgArr[1].style.transform = "translate("+ -(mx/4) +"px," + -(my/5) +"px)";
    _imgArr[2].style.transform = "translate("+ -(mx/1) +"px," + -(my/1) +"px)";
    _imgArr[3].style.transform = "translate("+ -(mx/2) +"px," + -(my/4) +"px)";
    _imgArr[4].style.transform = "translate("+ -(mx/2) +"px," + -(my/5) +"px)";
    _imgArr[5].style.transform = "translate("+ -(mx/2) +"px," + -(my/7) +"px)";
    
    
    window.requestAnimationFrame(loop);
}
