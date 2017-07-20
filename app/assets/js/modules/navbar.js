//-- Template ------------------------------------------------------------------
Vue.component('navbar', {
  template: `
      <div class="container">
          <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
              <a class="navbar-brand page-scroll" href="#page-top"><span class="sr-only">Masterplan</span><img src="/assets/images/logo.png" srcset="/assets/images/logo@2x.png 2x" alt="Masterplan"></a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
              <ul class="nav navbar-nav">
                  <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                  <li class="hidden">
                      <a class="page-scroll" href="#page-top"></a>
                  </li>
                  <li><a class="page-scroll" href="#section-hero">Inicio</a></li>
                  <li><a class="page-scroll" href="#section-tipos">Tipos</a></li>
                  <li><a class="page-scroll" href="#section-map">Ubicación</a></li>
                  <li><a class="page-scroll" href="#section-contacto">Contacto</a></li>
              </ul>
          </div>
          <!-- /.navbar-collapse -->
      </div>`
});

var navVue = new Vue({
  el: '#v-navbar'
});


//-- Top en el  ----------------------------------------------------------------
var navHeight = $('#v-navbar').height();

if ( $(window).width() > 768 ) {
  $('body').css({
    'margin-top': navHeight + 'px'
  });
}

function calcularMargin(element) {
  var elementHeight = $(element).height();
  var elementMargin = (navHeight - elementHeight) / 2 + 'px';
  $(element).css({'margin-top': elementMargin, 'margin-bottom': elementMargin });
}

calcularMargin('.navbar-toggle');
//------
// jQuery to collapse the navbar on scroll
//------

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
