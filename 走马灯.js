$(document).ready(function(){
    $('.slide_container').append($('.slide_container').html());
});

$(function() {
    // part_01 info 部分标签与内容切换
    $('.part_01 .info .label span').mouseenter(function() {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');

        var index = $('.part_01 .info .label span').index($(this));
        $('.part_01 .info .text').find('.active').removeClass('active');
        $('.part_01 .info .text p').eq(index).addClass('active');
    })

    // 图片滚动效果
    var slide_count = $('.part_01 .slide_container').children().length / 2
    var width = parseInt($('.part_01 .slide_content').css('width'))
    var condition = slide_count * width
    var init = $('.part_01 .slide_container').offset().left
    var inter

    function imgRoll(dir) {
        var dir = dir || Number($('.part_01 .slide_container').data('dir'))
        $('.part_01 .slide_container').data('dir', dir)
        inter = setInterval(function() {
            var left = $('.part_01 .slide_container').offset().left
            if (left == init -condition && dir == -1) {
                left = init
            } else if(left == init && dir == 1) {
                left = init -condition
            }
            left = left + dir
            $('.part_01 .slide_container').offset({left: left})

        }, 20)        
    }

    imgRoll(-1)

    $('.part_01 .button_left').click(function() {
        clearInterval(inter);
        imgRoll(-1)
    })

    $('.part_01 .button_right').click(function() {
        clearInterval(inter);
        imgRoll(1)
    })

    $('.part_01 .slide_container').mouseenter(function() {
        clearInterval(inter);
    })

    $('.part_01 .slide_container').mouseleave(function() {
        imgRoll()
    })
})