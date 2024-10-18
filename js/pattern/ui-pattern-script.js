$('#gnb').mouseenter(function () {
    $('#header').addClass('active');
});

$('#gnb').mouseleave(function () {
    $('#header').removeClass('active');
});

$('.all-menu').click(function () {
    $('#nav-all').toggleClass('active');
});

$('.lang').click(function () {
    $(this).toggleClass('active');
});
