// Animate smoth scroll
$('#view-work').on('click', function() {
    const image = $('#image').position().top;

    $('html, body').animate(
        {
            scrollTop: image
        },
        900
       );
    
});