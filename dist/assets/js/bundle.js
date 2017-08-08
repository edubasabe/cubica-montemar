var deptos = new Vue({
  el: '#section-tipos',
  data: {
    deptos: [
      {
        id: '101a401',
        class: 'tab-pane active',
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/101a401.jpg',
        title: 'Departamentos 101 a 401',
        desc: '3 Dormitorios / 1 en suite - 2 Baños completos - Walking closet - Baño visita - Espaciosa cocina equipada - Sala de estar - 2 terrazas',
        nota: '* Depto. 101 con gradas en 1er nivel',
        util: '136.28',
        terraza: '28.07',
        total: '164.35'
      },
      {
        id: '102a502',
        class: 'tab-pane',
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/102a502.jpg',
        title: 'Departamentos 102 a 502',
        desc: '2 dormitorios / 1 en suite - 2 baños completos - Walking closet - Espaciosa cocina equipada - 2 terrazas',
        nota: '* PRIMER PISO ALTURA DE PISO A CIELO 2.90 M. SEGUNDO A QUINTO PISO ALTURA DE 2.60 M.',
        util: '90.89',
        terraza: '16.89',
        total: '107.78'
      },
      {
        id: '103a503',
        class: 'tab-pane',
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/103a503.jpg',
        title: 'Departamentos 103 a 503',
        desc: '2 dormitorios / 1 en suite - 2 baños completos - Walking closet - Espaciosa cocina equipada - 2 terrazas',
        nota: '* PRIMER PISO ALTURA DE PISO A CIELO 2.90 M. SEGUNDO A QUINTO PISO ALTURA DE 2.60 M.',
        util: '84.95',
        terraza: '18.40',
        total: '103.35'
      },
      {
        id: '104a404',
        class: 'tab-pane',
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/104a404.jpg',
        title: 'Departamentos 104 a 404',
        desc: '3 dormitorios / 1 en suite - 2 baños completos - Walking closet - Espaciosa cocina equipada - Baño de visita - Sala de estar - 2 terrazas',
        nota: '* DEPTO 104 CON GRADAS EN 1ER NIVEL.',
        util: '140.02',
        terraza: '24.6',
        total: '164.62'
      },
      {
        id: '504',
        class: 'tab-pane',
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/504-01.jpg',
        title: 'Departamentos 504',
        desc: `3 dormitorios / 1 en suite - 2 baños completos - Walking closet - Espaciosa cocina equipada - Baño visita - Sala de estar - 2 terrazas - Terraza panorámica de uso exclusivo`,
        util: '140.02',
        terraza: '24.6',
        total: '190.85',
        panoramica: 'Superfice Terraza Panorámica: 26.23 M2'

      },
      {
        id: '511',
        class: 'tab-pane',
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/511-01.jpg',
        title: 'Departamentos 511',
        desc: '3 dormitorios / 1 en suite - 3 baños completos - Walking closet - Baño visita - Sala de estar - Espaciosa cocina equipada - Amplia terraza - terraza panorámica de uso exclusivo',
        util: '1238.32',
        terraza: '26.13',
        total: '192.46',
        panoramica: 'Superfice Terraza Panorámica: 28.01 M2'
      },
    ],
  },

});

$('#section-tipos .dropdown-menu > li').on('click', function () {
$('#section-tipos .dropdown-menu > li').toggleClass('active').siblings().removeClass('active').attr('aria-expanded', 'false');
});

$(document).on('load', function () {
  $('#511 .panoramica').html('Prueba');
});

var domotica = new Vue({
  el: '#productos',
  data: {
    productos: [
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/hcl.jpg',
        title: 'Home Center Lite',
        cant: '1 Unidad',
        desc: 'Controlador principal del sistema FIBARO',
        link: 'https://tuhogarinteligente.cl/home-center-lite/'
      },
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/smoke-sensor.jpg',
        title: 'Smoke Sensor',
        cant: '1 Unidad',
        desc: 'Detecta humo y cambios drásticos de temperatura, activando la alarma.',
        link: 'https://tuhogarinteligente.cl/sensor-de-humo/'
      },
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/motion-sensor.jpg',
        title: 'Motion Sensor',
        cant: '1 Unidad',
        desc: 'Detecta el más mínimo movimiento, temperatura, vibración e intensidad de luz.',
        link: 'https://tuhogarinteligente.cl/sensor-de-movimiento/'
      },
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/dw-sensor.jpg',
        title: 'Door / Window Sensor',
        cant: '1 Unidad',
        desc: 'Detecta apertura de ventanas y puertas. Informa al controlador y envía una notificación a su dispositivo móvil.',
        link: 'https://tuhogarinteligente.cl/sensor-puerta-ventana/'
      },

    ],
  }
});


$('.hero__cta > a').on('click', function (e) {
  e.preventDefault();
  $('#form-cotizacion').modal();
});

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
              <a class="navbar-brand page-scroll" href="#page-top"><span class="sr-only">Masterplan</span><img src="https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/logo.png" srcset="https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/logo@2x.png 2x" alt="Masterplan"></a>
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
