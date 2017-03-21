// JavaScript Document
<script>
$(document).ready(function() {
    // config
        popup = $('#popup');
        clickme = $('.contact');

    // pop-up
        vh = $(window).height();
        vw = $(window).width();
        bw = popup.width();
        bh = popup.height();
        clickme.click(function(e) {
            e.preventDefault();
            popup.fadeOut();
            popup.css('left', vw/2 - bw/2);
            popup.css('top', vh/2 - bh/2);
            popup.fadeIn();
        });
   //close button
      $('.clicktoclose').click(function() {
            $('#popup').fadeOut();
        });
});
</script>