var deptos = new Vue({
  el: '#section-tipos',
  data: {
    deptos: [
      {
        id: '101a401',
        imgsrc: 'assets/images/101a401.jpg',
        title: 'Departamentos 101 a 401',
        desc: `3 Dormitorios / 1 en suite
         2 Baños completos
         Walking closet
         Baño visita
         Espaciosa cocina equipada
         Sala de estar
         2 terrazas`,
         nota: '* Depto. 101 con gradas en 1er nivel',
         util: '136.28',
         terraza: '28.07',
         total: '164.35'
      },
      {
        id: '102a502',
        imgsrc: 'assets/images/102a502.jpg',
        title: 'Departamentos 102 a 502',
        desc: `2 dormitorios / 1 en suite
        2 baños completos
        Walking closet
        Espaciosa cocina equipada
        2 terrazas`,
         nota: '* PRIMER PISO ALTURA DE PISO A CIELO 2.90 M. \n SEGUNDO A QUINTO PISO ALTURA DE 2.60 M.'
      },
      {
        id: '103a503',
        imgsrc: 'assets/images/103a503.jpg',
        title: 'Departamentos 103 a 503',
        desc: `2 dormitorios / 1 en suite
        2 baños completos
        Walking closet
        Espaciosa cocina equipada
        2 terrazas`,
         nota: '* PRIMER PISO ALTURA DE PISO A CIELO 2.90 M. \n SEGUNDO A QUINTO PISO ALTURA DE 2.60 M.'
      },
      {
        id: '104a404',
        imgsrc: 'assets/images/104a404.jpg',
        title: 'Departamentos 104 a 404',
        desc: `2 dormitorios / 1 en suite
        2 baños completos
        Walking closet
        Espaciosa cocina equipada
        2 terrazas`,
         nota: '* PRIMER PISO ALTURA DE PISO A CIELO 2.90 M. \n SEGUNDO A QUINTO PISO ALTURA DE 2.60 M.'
      },
      {
        id: '504',
        imgsrc: 'assets/images/504-1.jpg',
        title: 'Departamentos 504',
        desc: `2 dormitorios / 1 en suite
        2 baños completos
        Walking closet
        Espaciosa cocina equipada
        2 terrazas`,
         nota: '* PRIMER PISO ALTURA DE PISO A CIELO 2.90 M. \n SEGUNDO A QUINTO PISO ALTURA DE 2.60 M.'
      },
      {
        id: '511',
        imgsrc: 'assets/images/511-1.jpg',
        title: 'Departamentos 511',
        desc: `2 dormitorios / 1 en suite
        2 baños completos
        Walking closet
        Espaciosa cocina equipada
        2 terrazas`,
         nota: '* PRIMER PISO ALTURA DE PISO A CIELO 2.90 M. \n SEGUNDO A QUINTO PISO ALTURA DE 2.60 M.'
      },
    ],
  }
});

$('#101a401').addClass('active');
