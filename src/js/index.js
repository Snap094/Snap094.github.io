import jQuery from "jquery";
import AOS from "aos"
import slick from "slick-carousel"
import popper from "popper.js";
// import bootstrap from "bootstrap";


slider();
AOS.init();


function slider() {
    jQuery('.slider__wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
jQuery('a[href^="#"]').click(function(){
    let target = jQuery(this).attr('href');
    jQuery('html, body').animate({scrollTop: jQuery(target).offset().top}, 1000);
    return false;
});
