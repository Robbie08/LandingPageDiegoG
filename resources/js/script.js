/* global $,document,location */
$(document).ready(function () {
    
    /*This desables the scrolling action*/
    window.addEventListener('scroll', noscroll);
    
    /*Scroll on click */
    $('.js--scroll-to-form').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
        
        /* Animate the unanimated area */
        $('.js--wp-1').addClass('animated fadeInUp');
        $('.js--wp-2').addClass('animated fadeInDown');
        
        /* Enable the scrolling action after button click */
        window.removeEventListener('scroll', noscroll);
    
    });
    
});

function noscroll() {
    window.scrollTo(0,0);
}