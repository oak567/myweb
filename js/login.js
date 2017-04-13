/**
 * Created by Administrator on 2017/2/24.
 */
window.onload = function () {

    var img= document.getElementById("img_s");

    $(document.getElementById("j_closeLight")).click(function () {
        $("body")[0].style.backgroundColor="rgb(51,51,51)";
    });
    $(document.getElementById("j_openLight")).click(function () {
        $("body")[0].style.backgroundColor="#fff";
    })

    document.onmousemove = function (event) {
        event = event || window.event;
        var pagex= event.pageX || scroll().left + event.clientX;
        var pagey= event.pageY || scroll().top + event.clientY;
        var x = pagex+5;
        var y = pagey+5;
        img.style.left = x+"px";
        img.style.top  = y+"px";
    }

}