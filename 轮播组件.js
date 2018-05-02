// 轮播组件
// 根据传入的方向 dir 轮播
function switchSection(dir) {
    var index = $('.slide_container').data('index') + dir;

    if (dir == 1 && index%7 == 0) {
        index = 0
        $('.slide_container').css('left', 0)
        index = index + dir;
    } else if (dir == -1 && index%7 == -1) {
        index = 6
        $('.slide_container').css('left', '-816px') 
        base =  816
        index = index + dir;
    } 
    var left = (-136 * index) +'px';
    $('.slide_container').animate({'left': left}, 'slow');
    $('.slide_container').data('index', index);
}

// 向左
$('.slide .button_left').click(function() {
    switchSection(-1);
})

// 向右
$('.slide .button_right').click(function() {
    switchSection(1);
})

// 自动轮播
var inter
function autoPlay() {
    inter = setInterval(function() {
        switchSection(1)
    }, 1000)
}

autoPlay()

$('.part_01 .slide_box').mouseenter(function() {
    clearInterval(inter);
})

$('.part_01 .slide_box').mouseleave(function() {
    autoPlay();
})