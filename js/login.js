var loginSubmit = document.getElementById("submit");
console.log(loginSubmit);
//获取注册页面传值过来的注册信息
function getParamByUrl(url) {
    var theRequest = new Object();
    var index = url.indexOf("?");
    if (index != -1) {
        var str = url.substr(index + 1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
//获取地址栏
var str = location.href;
//调用函数
var params = getParamByUrl(str);

//判断用户和密码是否匹配

//用户名是否匹配
//用户名匹配判定
var userName = document.getElementById("username");
var userPass = document.getElementById("userpass");

//获得焦点函数
userName.onfocus = function () {
    userPass.className = "display-none";
}
//失去焦点函数
userName.onblur = function () {
    //判断用户名是否正确
    if (userName.value != params["phone"]) {
        userPass.className = "display-inline icon-times-circle";
        userPass.innerHTML = "手机号码不正确！";
        loginSubmit.setAttribute("disabled", true);

    } else {
        userPass.className = "display-inline icon-check-circle";
        userPass.innerHTML = "手机号码正确！";
        loginSubmit.removeAttribute('disabled');
    }
}
//密码是否匹配
var password = document.getElementById("password");
var passTo = document.getElementById("passto");
//获得焦点函数
password.onfocus = function () {
    passTo.className = "display-none";
}
//失去焦点函数
password.onblur = function () {
    //判断密码是否正确
    if (password.value != params["pass"]) {
        passTo.className = "display-inline icon-times-circle";
        passTo.innerHTML = "密码不正确！";
        loginSubmit.setAttribute("disabled", true);
    } else {
        passTo.className = "display-inline icon-check-circle";
        passTo.innerHTML = "密码正确！";
        loginSubmit.removeAttribute('disabled');
    }
}

//点击后提交数据到index.html
loginSubmit.onclick = function () {
    if (password.value == "" || userName.value == "") {
        alert("请填写信息后登录");
    } else {
        //跳转页面
        window.location.href = "./index.html?username=" + userName.value;
    }
}

//显示隐藏密码
// 获取元素
var eye = document.getElementById('eye');
var pwd = document.getElementById('password');
// 注册事件 处理程序
var flag = 0;
eye.onclick = function () {
    // 点击一次之后， flag 一定要变化
    if (flag == 0) {
        pwd.type = 'text';
        eye.src = 'images/open.png';
        flag = 1; // 赋值操作
    } else {
        pwd.type = 'password';
        eye.src = 'images/close.png';
        flag = 0;
    }

}
