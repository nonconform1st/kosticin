$(()=>{
    $('.who__learn-more').click(toggleDetails);
});

function toggleDetails() {
    var $btn = $(this);

    $btn.toggleClass('opened');
    $btn.closest('.who')
        .find('.who__details')
        .eq( $btn.closest('.who__person').index() )
        .find('.who__details-wrapper')
        .slideToggle(200);
}