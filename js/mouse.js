window.onload = function () {
    //导航栏的下拉
    var dropdown = document.getElementById("dropdown");
    var dropdownLi = dropdown.getElementsByTagName("li");
    //循环遍历
    for (var i = 0; i < dropdownLi.length; i++) {
        //因为1的时候没有效果所以我们要弹出一下
        if (i == 1) {
            continue;
        }
        dropdownLi[i].onmouseover = function () {
            this.classList.add("show");
        }
        dropdownLi[i].onmouseout = function () {
            this.classList.remove("show");
        }
    }
    //全部分类侧边栏显示隐藏
    var dropright = document.getElementById("dropright");
    var droprightLi = dropright.getElementsByTagName("li");

    //循环遍历
    for (var i = 0; i < droprightLi.length; i++) {
        droprightLi[i].onmouseover = function () {
            this.classList.add("show");
        }
        droprightLi[i].onmouseout = function () {
            this.classList.remove("show");
        }
    }
    //轮播区域的js代码
    var carousel = document.getElementById("carousel");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var image = document.getElementById("image");
    var numList = document.getElementById("number").getElementsByTagName("li");
    var links = document.getElementById("links");

    //初始化准备
    var add = 1;
    var arr = ['http://www.baidu.com', 'http://www.jd.com', 'http://www.taobao.com', 'http://www.suning.com', 'http://www.bilibili.com', 'http://www.aqiyi.com']
    //添加图片
    image.src = "./images/ad01.jpg";
    numList[0].style.background = "#fff";
    links.href = arr[0];
    //鼠标移入显示左右箭头
    carousel.onmouseover = function () {
        left.style.display = "block";
        right.style.display = "block";
        clearInterval(lun);
    }
    //鼠标移出隐藏左右箭头
    carousel.onmouseout = function () {
        left.style.display = "none";
        right.style.display = "none";
        carouselLb();
    }
    //轮播切换图片
    function carouselLb() {
        lun = setInterval(function () {
            add = add + 1;
            if (add > 6) {
                add = 1;
            }
            image.src = "./images/ad0" + add + ".jpg";
            var x = add - 1;
            links.href = arr[add - 1];
            for (var i = 0; i < numList.length; i++) {
                numList[i].style.background = "#3e3e3e";
                if (x == i) {
                    numList[i].style.background = "#fff";
                }
            }
        }, 3000);
    }
    carouselLb();
    //点击左右箭头切换图片
    left.onclick = function () {
        add = add - 1;
        if (add < 1) {
            add = 6;
        }
        image.src = "./images/ad0" + add + ".jpg";
        links.href = arr[add - 1];
        var x = add - 1;
        for (var i = 0; i < numList.length; i++) {
            numList[i].style.background = "#3e3e3e";
            if (x == i) {
                numList[i].style.background = "#fff";
            }
        }
    }
    right.onclick = function () {
        add = add + 1;
        if (add > 6) {
            add = 1;
        }
        image.src = "./images/ad0" + add + ".jpg";
        links.href = arr[add - 1];
        var x = add - 1;
        for (var i = 0; i < numList.length; i++) {
            numList[i].style.background = "#3e3e3e";
            if (x == i) {
                numList[i].style.background = "#fff";
            }
        }
    }
    //鼠标滑过li的时候切换图片
    for (var i = 0; i < numList.length; i++) {
        numList[i].onmouseover = function () {
            add = this.innerHTML;
            //console.log(add);
            image.src = "./images/ad0" + add + ".jpg";
            links.href = arr[add - 1];
            var x = add - 1;
            for (var i = 0; i < numList.length; i++) {
                numList[i].style.background = "#3e3e3e";
                if (x == i) {
                    numList[i].style.background = "#fff";
                }
            }
        }
    }
    //猫眼电影特效

    //选项卡切换和三角形的显示隐藏
    var movieTab = document.getElementById("movie-tab");
    var movieTabLi = movieTab.getElementsByTagName("li");
    var movieTabTriangle = movieTab.getElementsByClassName("triangle ");
    var movieShow = document.getElementById("movie-show");
    var movieShowClass = movieShow.getElementsByClassName("moviehot");
    var movieLeft = document.getElementById("movieleft");
    var movieRight = document.getElementById("movieright");
    var nowhot = document.getElementById("nowhot");
    var quick = document.getElementById("quick");

    movieTabLi[1].onmouseover = function () {
        movieShowClass[0].style.display = "block";
        movieShowClass[1].style.display = "none";
        movieTabTriangle[0].style.display = "block";
        movieTabTriangle[1].style.display = "none";
    }
    movieTabLi[2].onmouseover = function () {
        movieShowClass[0].style.display = "none";
        movieShowClass[1].style.display = "block";
        movieTabTriangle[1].style.display = "block";
        movieTabTriangle[0].style.display = "none";
    }
    //左右箭头的显示隐藏
    movieShow.onmouseover = function () {
        movieLeft.style.display = "block";
        movieRight.style.display = "block";
    }
    movieShow.onmouseout = function () {
        movieLeft.style.display = "none";
        movieRight.style.display = "none";
    }
    //左右箭头被点击切换图片
    var num = 0;
    movieright.onclick = function () {
        if (nowhot.style.display == "block") {
            movielun = setInterval(function () {
                num -= 20;
                nowhot.style.left = num + "px";
                if (num <= -1200) {
                    clearInterval(movielun);
                    movieright.disabled = "disabled";
                    movieleft.disabled = false;
                    movieright.innerHTML = "x";
                    movieleft.innerHTML = "&lt;";
                }
            }, 20)
        } else {
            movielun = setInterval(function () {
                num -= 20;
                quick.style.left = num + "px";
                if (num <= -1200) {
                    clearInterval(movielun);
                    movieright.disabled = "disabled";
                    movieleft.disabled = false;
                    movieright.innerHTML = "x";
                    movieleft.innerHTML = "&lt;";
                }
            }, 20)
        }
    }
    movieleft.onclick = function () {
        if (nowhot.style.display == "block") {
            movielun = setInterval(function () {
                num += 20;
                nowhot.style.left = num + "px";
                if (num >= 0) {
                    clearInterval(movielun);
                    movieright.disabled = false;
                    movieleft.disabled = "disabled";
                    movieright.innerHTML = "&gt;";
                    movieleft.innerHTML = "x";
                }
            }, 20)
        } else {
            movielun = setInterval(function () {
                num += 20;
                quick.style.left = num + "px";
                if (num >= 0) {
                    clearInterval(movielun);
                    movieright.disabled = false;
                    movieleft.disabled = "disabled";
                    movieright.innerHTML = "&gt;";
                    movieleft.innerHTML = "x";
                }
            }, 20)
        }
    }
    //推荐民宿的显示隐藏
    var hotelTab = document.getElementById('hotel-tab');
    var hotelTabLi = hotelTab.getElementsByTagName('li');

    var container = document.getElementById('container');
    var containerDiv = container.getElementsByClassName('tablist');
    for (var i = 0; i < hotelTabLi.length; i++) {
        hotelTabLi[i].index = i;
        hotelTabLi[i].onclick = function () {
            for (var i = 0; i < hotelTabLi.length; i++) {
                hotelTabLi[i].className = '';
                containerDiv[i].style.display = "none";
            }
            this.className = 'act';
            containerDiv[this.index].style.display = "block"
        }
        for (var m = 1; m < hotelTabLi.length; m++) {
            hotelTabLi[m].className = '';
            containerDiv[m].style.display = "none";
        }
    }
}