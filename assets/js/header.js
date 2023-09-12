// Mobile Header Menu Open and Close Button Function
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Mobile Header Account and Cart Button Function
function mobileCartItem() {
    const element = document.getElementById("mobileCart");
    const accountelement = document.getElementById("mobileLoginmenu");
    if (element.className == "mobileCartItem") {
    element.className = "mobileCartItemVisible";
    accountelement.className = "mobileLoginItem";
    } else {
    element.className = "mobileCartItem";
    }
}
function mobileAccountItem() {
    const element = document.getElementById("mobileLoginmenu");
    const cartelement = document.getElementById("mobileCart");
    if (element.className == "mobileLoginItem") {
    element.className = "mobileLoginItemVisible";
    cartelement.className = "mobileCartItem";
    } else {
    element.className = "mobileLoginItem";
    }
}
// Fix position of Header
$(window).scroll(function (e) {
    var $el = $('.header-menu-mobiledevice');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 230 && !isPositionFixed) {
        $el.css({
            'position': 'fixed',
            'top': '0px',
            'left': '0px',
            'right': '0px',
            'margin-bottom': '0',
            'border-radius': '0px',
            'z-index': '2'
        });
    }
    if ($(this).scrollTop() < 230 && isPositionFixed) {
        $el.css({
            'position': 'static',
        });
    }
});