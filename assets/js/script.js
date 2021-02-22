function load() {
    var element = document.getElementById('loader');
    element.style.display = "none";
}
function changeATag() {
    var element = document.getElementById('icon-hanging');
    if (window.scroll > 300) {
    element.style.color = "black";
    }
    
}
