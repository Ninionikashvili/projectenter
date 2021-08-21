(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    /* $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    }); */

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 
  
    // CONTACT FORM
    $("#contact-form").submit(function (e) {
      e.preventDefault();
      var name = $("#cf-name").val();
      var email = $("#cf-email").val();
      var subject = $("#cf-subject").val();
      var message = $("#cf-message").val();
      var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

      function isValidEmail(emailAddress) {
          var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
          return pattern.test(emailAddress);
      };
      if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
          $.ajax({
              type: "POST",
              url: "email.php",
              data: dataString,
              success: function () {
                  $('.text-success').fadeIn(1000);
                  $('.text-danger').fadeOut(500);
              }
          });
      }
      else {
          $('.text-danger').fadeIn(1000);
          $('.text-success').fadeOut(500);
      }
      return false;
    });


    /* // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  */


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);

//
document.getElementById("header").innerHTML =
`<header class="navbar custom-navbar navbar-fixed-top">
    <div class="container">
         <div class="navbar-header">
              <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                   <span class="icon icon-bar"></span>
                   <span class="icon icon-bar"></span>
                   <span class="icon icon-bar"></span>
              </button>

              <!-- lOGO TEXT HERE -->
              <a href="index.html" class="navbar-brand"> ENTER </a>
         </div>

         <!-- MENU LINKS -->
         <div class="navbar collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-nav-first">
                   <li><a href="index.html">მთავარი</a></li>
                   <li><a class="dropdown-toggle move multiselect" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">პროექტები</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                             <li><a href="galavani.html" class="dropdown-item">Galavani</a></li>
                             <li><a href="royaltree.html" class="dropdown-item">Royal Tree</a></li>
                             <li><a href="artelishop.html" class="dropdown-item">Arteli Shop</a></li>
                           </ul>
                      </li>
                      <!-- <li><a href="blog.html">სიახლეები</a></li> -->
                   <li><a href="index.html#contact">დაკონტაქტება</a></li>
              </ul>

              <div class="nav navbar-nav navbar-right">
                   <a href="tel::+995555444100" class="section-btn">+995 555 44 41 00</a>
              </div>
         </div>

    </div>
</header>`;

document.getElementById("footer").innerHTML = 
`<footer id="footer" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">
                    <div class="col-md-3 col-sm-8">
                         <div class="footer-info">
                              <div class="section-title">
                                   <h2 class="wow fadeInUp" data-wow-delay="0.2s">საკონტაქტო ინფორმაცია</h2>
                              </div>
                              <address class="wow fadeInUp" data-wow-delay="0.4s">
                                   <p><a href="tel::+995555444100">+995 555 44 41 00</a></p>
                                   <p><a href="mailto:ltd.enter.group@gmail.com">ltd.enter.group@gmail.com</a></p>
                              <!-- <p>მისამართი: </p> -->
                              </address>
                         </div>
                    </div>
                    <div class="col-md-3 col-sm-8">
                         <div class="footer-info">
                              <div class="section-title">
                                   <h2 class="wow fadeInUp" data-wow-delay="0.2s">ლინკები</h2>
                              </div>
                              <address class="wow fadeInUp" data-wow-delay="0.4s">
                                   <p><a href="privacypolicy.html">კონფენდეციალური პოლიტიკა</a></p>
                              </address>
                         </div>
                    </div>
                    <div class="col-md-4 col-sm-8">
                         <div class="footer-info footer-open-hour">
                              <div class="section-title">
                                   <h2 class="wow fadeInUp" data-wow-delay="0.2s">სამუშაო საათები</h2>
                              </div>
                              <div class="wow fadeInUp" data-wow-delay="0.4s">
                                   <div>
                                        <strong>ორშაბათი - პარასკევი</strong>
                                        <p>9:00 - 18:00</p>
                                   </div>
                                   <div>
                                        <strong>დასვენების დღეები</strong>
                                        <p>შაბათი &amp; კვირა</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="col-md-2 col-sm-4">
                         <ul class="wow fadeInUp social-icon" data-wow-delay="0.4s">
                              <li><a href="https://www.facebook.com/ENTER.BMG" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                              <!-- <li><a href="#" class="fa fa-twitter"></a></li> -->
                              <!-- <li><a href="#" class="fa fa-instagram"></a></li> -->
                              <!-- <li><a href="#" class="fa fa-google"></a></li> -->
                         </ul>
                         <div class="wow fadeInUp copyright-text" data-wow-delay="0.8s"> 
                              <p><br>Copyright &copy; 2021 <br>ENTER
                         </div>
                    </div>
               </div>
          </div>
     </footer>`;