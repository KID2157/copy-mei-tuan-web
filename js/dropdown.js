//导航栏的下拉
var dropdown = document.getElementById("dropdown");
var dropdownLi = dropdown.getElementsByTagName("li");
//循环遍历
for(var i=0;i<dropdownLi.length;i++){
    //因为1的时候没有效果所以我们要弹出一下
    if(i==1){
        continue;
    }
    dropdownLi[i].onmouseover=function(){   
        this.classList.add("show");
    }
    dropdownLi[i].onmouseout=function(){   
        this.classList.remove("show");
    }
}