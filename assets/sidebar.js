window.onscroll = function() {moveSidebar()};
var sidebar;
var sidebarOffset;
function findSidebar() {
    sidebar = document.getElementsByClassName("sidebar")[0];
    sidebarOffset = sidebar.offsetTop - 10 + sidebar.offsetParent.offsetTop;
}
function moveSidebar() {
    var marginToTop = window.pageYOffset - sidebarOffset + 10;
    if (window.pageYOffset < sidebarOffset) {
        sidebar.style.position = "static";
        sidebar.style.marginTop = "10px";
    }
    if (window.pageYOffset >= sidebarOffset) {
        sidebar.style.position = "fixed";
        sidebar.style.top = "0px";
        sidebar.style.right = "10px";
    }
}
function doSidebar() {
    if (document.getElementsByClassName("sidebar")[0]) {
        findSidebar();
        moveSidebar();
    }
}