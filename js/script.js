$(()=>{
    console.log(screen.width);

    $('.who__learn-more').click(toggleDetails);
});

function toggleDetails() {
    var $btn = $(this);

    if (screen.width <= 768) {
        $btn.closest('.who')
            .find('.who__details-wrapper')
            .slideUp(200);
    }
    $btn.toggleClass('opened')
        .closest('.who')
        .find('.who__details')
        .eq( $btn.closest('.who__person').index() )
        .find('.who__details-wrapper')
        .slideToggle(200);

}