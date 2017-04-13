/**
 * Created by Administrator on 2017/2/24.
 */
window.onload = function () {

    var from1 = document.getElementById("form-itp1");
    var from2 = document.getElementById("form-itp2");
    var from3 = document.getElementById("form-itp3");
    var fromSpa1 = document.getElementById("form-itp1s");
    var fromSpa2 = document.getElementById("form-itp2s");
    var fromSpa3 = document.getElementById("form-itp3s");
    var fromI = document.getElementById("form-bar-i");
    var img= document.getElementById("img_s");


    var reg1 = /^1[3|4|5|7|8][0-9]{9}$/;
    var reg2 = /^\d{6}$/;


    from1.oninput = function () {
        if(!(reg1.test(this.value))){
            fromSpa1.innerHTML = "格式不正确";
            fromSpa1.className = "falses";
            from1.style.border = "1px solid #E62044";
        }else{
            fromSpa1.innerHTML = "格式正确";
            fromSpa1.className = "trues";
            from1.style.border = "1px solid #1188D3";
        }
    }
    from1.onblur = fn1;

    from3.onblur = fn1;



    from2.onblur = function () {
        if(this.value === ""){
            this.nextElementSibling.innerHTML = "";
            this.nextElementSibling.className = "";
            this.style.border = "";
            return;
        }else if(!(reg2.test(this.value))){
            fromSpa2.innerHTML = "验证码错误";
            fromSpa2.className = "falses";
            from2.style.border = "1px solid #E62044";
        }else{
            fromSpa2.innerHTML = "验证码正确";
            fromSpa2.className = "trues";
            from2.style.border = "1px solid #1188D3";
        }
    }
    from3.oninput = function () {
        var reg3 = /^[\$a-zA-Z0-9_-]{6,18}$/;
        if(reg3.test(this.value)){
            fromSpa3.innerHTML = "格式正确";
            fromSpa3.className = "trues";
            fromI.className = "num1";
            from3.style.border = "1px solid #1188D3";
            if(/^[A-Za-z0-9]+[_$][A-Za-z0-9]*$/.test(this.value)){
                fromI.className = "num3";
            }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|([0-9].*[a-zA-Z])$/.test(this.value)){
                fromI.className = "num2";
            }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(this.value)){
                fromI.className = "num1";
            }

        }else{
            from3.style.border = "1px solid #E62044";
            fromSpa3.innerHTML = "格式错误";
            fromSpa3.className = "falses";
            $("#form-bar-i").removeClass();


        }

    }
    function fn1() {
        if(this.value === ""){
            this.nextElementSibling.innerHTML = "";
            this.nextElementSibling.className = "";
            this.style.border = "";
            return;
        }
    }
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