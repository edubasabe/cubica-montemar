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
