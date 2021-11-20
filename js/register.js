window.onload=function(){
    //禁用提交按钮
    var frmContact =document.getElementById("frmContact");
    //手机号码验证
    var phone = document.getElementsByName("phone");
    var span = document.getElementsByTagName("span");

    //获取焦点函数
    phone[0].onfocus=function(){
        phone[0].style.border="1px solid #FFBE00";
    }
    phone[0].onblur=function(){
        phone[0].style.border="1px solid #aaa";
        //判断手机号码不能为空
        var phoneValue = phone[0].value;
        if(phoneValue==''){
            span[0].className="display-inline icon-times-circle";
            span[0].innerHTML="手机号码不能为空";
            frmContact.setAttribute("disabled",true);
            frmContact.style.color="red";
        }
        //判断手机号码是否正确
        if(phoneValue!=""){
            if(!(/^1[3456789]\d{9}$/.test(phoneValue))){
                span[0].className="display-inline icon-times-circle";
                span[0].innerHTML="请填写正确的手机号码！";
                frmContact.setAttribute("disabled",true);
                frmContact.style.color="red";
            }else{
                span[0].className="display-inline icon-check-circle";
                span[0].innerHTML="手机号码可以使用！";
                frmContact.removeAttribute("disabled");
                frmContact.style.color="#000";
            }
        }
    }
    //手机验证码验证
    var button = document.getElementsByTagName("button");
    button[0].onclick=function(){
        //获取用户手机号
        //生成四位随机数
        function randomf(){
            var randomfour = Math.floor(Math.random()*(9999-1000+1)+1000);
            return randomfour;
        }
        var randomf  = randomf();
        span[1].className="display-inline ";
        span[1].innerHTML=randomf;
    }
    //获取code节点
    var code =document.getElementById("code");
    code.onfocus=function(){    
        phone[0].style.border="1px solid #FFBE00";
    }
    code.onblur=function(){    
        phone[0].style.border="1px solid #aaa";
        var codeValue = code.value;
        //获取生成的验证码的值
        var spanValue = span[1].innerHTML;
        //判断验证号码不能为空
	    if(codeValue==""){
		    span[2].className="display-inline icon-times-circle";
		    span[2].innerHTML = "验证码不能为空！";
            frmContact.setAttribute("disabled",true);
            frmContact.style.color="red";
            return false;
	    }
        //判断验证号码是否正确
        if(codeValue!=spanValue){
            span[2].className="display-inline icon-times-circle";
            span[2].innerHTML="验证码不匹配！";
            frmContact.setAttribute("disabled",true);
            frmContact.style.color="red";
        }else{
            span[2].className="display-inline icon-check-circle";
                span[2].innerHTML="验证码 匹配成功！";
                frmContact.removeAttribute("disabled");
                frmContact.style.color="#000";
        }
    }
    //密码强度判定
    var aStr = ["弱","中","强","安全"];
    //用户输入内容检测函数
    function checkStrong(val){
        var modes = 0;
        if(val.length<6) return 0;
        if(/\d/.test(val)) modes++; //判断数字
        if(/[a-z]/.test(val))modes++; //判断小写字母
        if(/[A-Z]/.test(val))modes++; //判断大写字母
        if(/\W/.test(val))modes++; //判断特殊字符
        if(val.length>20) return 4;
        return modes;
    }
    //获取密码框节点
    var password = document.getElementById("password");
    //焦点的获取
    password.onfocus=function(){
        password.style.border="1px solid #FFBE00";
    }
    password.onblur=function(){
        password.style.border="1px solid #aaa";
    }
    //键盘的监听
    password.onkeyup=function(){
        //获取用户输入的内容
        var passVal = password.value;
        //执行函数判断用户输入的内容
        var num = checkStrong(passVal);
        //console.log(num);
        //获取span
        var tipsB = document.getElementById("tips").getElementsByTagName("b");
        //根据返回值给b标签添加颜色
        switch(num){
            case 0:
                tipsB[0].style.backgroundColor="red";
                break;
            case 1:
                tipsB[0].style.backgroundColor="red";
                tipsB[0].innerHTML=aStr[num-1];
                break;
            case 2:
                tipsB[0].style.backgroundColor="yellow";
                tipsB[1].style.backgroundColor="yellow";
                tipsB[0].innerHTML=aStr[num-1];
                tipsB[1].innerHTML=aStr[num-1];
                break;
            case 3:
                    for(var i=0;i<3;i++){
                        tipsB[i].style.backgroundColor="green";
                        tipsB[i].innerHTML=aStr[num-1];
                    } 
                break;
            case 4:
                    for(var i=0;i<4;i++){
                        tipsB[i].style.backgroundColor="green";
                        tipsB[i].innerHTML=aStr[num-1];
                    }
                break;
        }
    }
    //密码匹配判定
    var passRepeat = document.getElementById("passrepeat");
    passRepeat.onfocus=function(){
        passrepeat.style.border="1px solid #FFBE00";
        
    }
    passRepeat.onblur=function(){
        passrepeat.style.border="1px solid #aaa";
        var passRepeatValue = passRepeat.value;
        var passWordValue = password.value;
        if(passRepeatValue!=passWordValue){
            span[3].className="display-inline icon-times-circle";
            span[3].innerHTML="两次填写的密码不匹配！";
            frmContact.setAttribute("disabled",true);
            frmContact.style.color="red";
        }else{
            span[3].className="display-inline icon-check-circle";
            span[3].innerHTML="两次填写的密码匹配！";
            frmContact.removeAttribute("disabled");
            frmContact.style.color="#000";
        }
    }
    //监听按钮被点击
    frmContact.onclick=function(){
        //将数据通过ajax发送到php后台 
        if(phone[0].value=="" || code.value=="" || password.value=="" || passrepeat.value==""){
            alert("请填写信息后在注册");
        }else{
            //跳转到登录页面
            window.location.href="./login.html?phone="+phone[0].value+"&pass="+password.value;
        }
    }
}