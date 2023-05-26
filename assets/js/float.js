// 获取home按钮和子菜单元素
//  let menu = document.querySelector("#home");
//  let c_p = document.querySelector(".float .home-menu")

//  subMenu(menu, c_p)


// 获取menbers按钮和子菜单元素
let menbers = document.querySelector("#navbar ul .nav-item:nth-child(2)");
let menbers_menu = document.querySelector(".float .menbers-menu")

subMenu(menbers, menbers_menu)

// 获取news按钮和子菜单元素
let news = document.querySelector("#navbar ul .nav-item:nth-child(5)");
let news_menu = document.querySelector(".float .news-menu")

subMenu(news, news_menu)



// 子菜单悬浮函数
// menu  传入一级菜单按钮
// subMent 二级菜单元素
function subMenu(menu,subMenu) {
    // home标签鼠标悬停事件
menu.addEventListener("mouseover", function () {

    // 获取某元素的左边框到其父元素的左边框的距离
    let offsetLeft = menu.offsetLeft;

    // 获取某元素的父元素
    let parent = menu.offsetParent;

    // 循环遍历所有祖先元素，累加它们的offsetLeft值
    while (parent) {
        offsetLeft += parent.offsetLeft;
        parent = parent.offsetParent;
    }

    subMenu.style.display = "flex"
    // 设置子菜单的左边距＝ 按钮左边距 + (按钮宽度/2) - （子菜单宽度/2） + a标签的左内边距/2
    let setLeft = offsetLeft + (menu.offsetWidth/2) - subMenu.offsetWidth/2 + 15
    subMenu.style.left = setLeft + "px"
    

    // 打印结果
    console.log("某元素距离网页最左边的距离是" + offsetLeft + "像素");

});

// home按钮鼠标移除事件
menu.addEventListener("mouseout", function () {
    subMenu.style.display = "none";
});


// home子菜单按钮鼠标悬停事件
subMenu.addEventListener("mouseover", function () {
    // 获取某元素的左边框到其父元素的左边框的距离
    let offsetLeft = menu.offsetLeft;

    // 获取某元素的父元素
    let parent = menu.offsetParent;

    // 循环遍历所有祖先元素，累加它们的offsetLeft值
    while (parent) {
        offsetLeft += parent.offsetLeft;
        parent = parent.offsetParent;
    }


    subMenu.style.display = "flex"
    // 设置子菜单的左边距＝ 按钮左边距 + (按钮宽度/2) - （子菜单宽度/2） + a标签的左内边距/2
    let setLeft = offsetLeft + (menu.offsetWidth/2) - subMenu.offsetWidth/2 + 15
    subMenu.style.left = setLeft + "px"



});

// home子菜单鼠标移除事件

subMenu.addEventListener("mouseout", function () {
    subMenu.style.display = "none";

});
}



