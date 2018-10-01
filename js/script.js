$(()=>{
    $('.who__learn-more').click(toggleDetails);

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

});

function toggleDetails() {
    var $btn = $(this);

    if (screen.width <= 768) {
        $btn.toggleClass('opened')
            .closest('.who')
            .find('.who__details')
            .eq( $btn.closest('.who__person').index() )
            .find('.who__details-wrapper')
            .slideToggle(200, ()=>{
                $btn.closest('.who')
                    .find('.who__details')
                    .eq( $btn.closest('.who__person').index() )
                    .siblings()
                    .find('.who__details-wrapper')
                    .slideUp(100)
            })

    }
    else {
        $btn.toggleClass('opened')
            .closest('.who')
            .find('.who__details')
            .eq( $btn.closest('.who__person').index() )
            .find('.who__details-wrapper')
            .slideToggle(200);
    }

}