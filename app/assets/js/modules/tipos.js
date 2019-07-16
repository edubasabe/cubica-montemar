var deptos = new Vue({
  name: 'Deptos',
  el: '#section-tipos',
  data: {
    deptos: [
      {
        id: '101a401',
        class: 'tab-pane active',
        imgsrc: './assets/images/101a401.jpg',
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
        imgsrc: './assets/images/102a502.jpg',
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
        imgsrc: './assets/images/103a503.jpg',
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
        imgsrc: './assets/images/104a404.jpg',
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
        imgsrc: './assets/images/504-01.jpg',
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
        imgsrc: './assets/images/511-01.jpg',
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
