var domotica = new Vue({
  el: '#productos',
  data: {
    productos: [
      {
        imgsrc: 'assets/images/hcl.jpg',
        title: 'Home Center Lite',
        cant: '1 Unidad',
        desc: 'Controlador principal del sistema FIBARO',
        link: 'https://tuhogarinteligente.cl/home-center-lite/'
      },
      {
        imgsrc: 'assets/images/smoke-sensor.jpg',
        title: 'Smoke Sensor',
        cant: '1 Unidad',
        desc: 'Detecta humo y cambios drásticos de temperatura, activando la alarma.',
        link: 'https://tuhogarinteligente.cl/sensor-de-humo/'
      },
      {
        imgsrc: 'assets/images/motion-sensor.jpg',
        title: 'Motion Sensor',
        cant: '1 Unidad',
        desc: 'Detecta el más mínimo movimiento, temperatura, vibración e intensidad de luz.',
        link: 'https://tuhogarinteligente.cl/sensor-de-movimiento/'
      },
      {
        imgsrc: 'assets/images/dw-sensor.jpg',
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
