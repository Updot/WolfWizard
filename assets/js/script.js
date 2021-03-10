function load() {
    var element = document.getElementById('loader');
    element.style.display = "none";
}
$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
            $('.icons-hanging').css('color', '#000 !important');
        } else {
            $('.icons-hanging').css('color', '#fff !important');
        }
    });
    
});

// typewriter effect
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  
  // darkmode function
  function toggle() {
    var className = document.getElementById("page-top");
    if(className.classList[0]!="dark-mode") {
        className.classList.add("dark-mode");
        // changing image logo
        document.getElementById("navbar-logo-img").src = "assets/img/main-dark.png";
        // changing header background image
        // document.getElementById("home").style.backgroundImage = "url('assets/img/2-dark.png')";
        // changing about background image
        // document.getElementById("about").style.backgroundImage = "url('assets/img/1-dark.png')";
        // changing footer image
        document.getElementById("footer-img").src="assets/img/main-dark.png";
    }
    else {
        document.getElementById("navbar-logo-img").src = "assets/img/wolfwizard logo cs6-8.png";
        className.classList.remove("dark-mode");
        // changing header background image
        // document.getElementById("home").style.backgroundImage = "url('assets/img/Artboard\ 1.png')";
        // changing about background image
        // document.getElementById("about").style.backgroundImage = "url('assets/img/Artboard\ 1\ copy.png')";
        // changing footer image
        document.getElementById("footer-img").src="assets/img/wolfwizard logo cs6-8.png";
    }
  }