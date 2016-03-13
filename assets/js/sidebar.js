window.onscroll = function() {moveSidebar()};
window.onresize = function() {contentDivRect = contentDiv.getBoundingClientRect(); moveSidebar();};
var sidebar;
var sidebarOffset;
var sidebarPosition;
var sidebarWidth;
var contentDiv;
var contentDivRect;
function findSidebarAndContentDiv() {
    sidebar = document.getElementsByClassName("sidebar")[0];
    contentDiv = document.getElementById("content");
    
    sidebarOffset = sidebar.offsetTop - 10 + sidebar.offsetParent.offsetTop;
    sidebarWidth = sidebar.scrollWidth;
    contentDivRect = contentDiv.getBoundingClientRect();
}
function moveSidebar() {
    var marginToTop = window.pageYOffset - sidebarOffset + 10;
    if (window.pageYOffset < sidebarOffset) {
        sidebar.style.position = "static";
        sidebar.style.marginTop = "10px";
    }
    if (window.pageYOffset >= sidebarOffset) {
        sidebarPosition = (contentDivRect.right - sidebarWidth) + "px";
        sidebar.style.position = "fixed";
        sidebar.style.top = "0px";
        sidebar.style.left = sidebarPosition;
    }
}
function doSidebar() {
    if (document.getElementsByClassName("sidebar")[0]) {
        findSidebarAndContentDiv();
        moveSidebar();
    }
}