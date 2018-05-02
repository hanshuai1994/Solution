//存放图片路径的数组
var imgSrcArr = [
    'imgsrc1',
    'imgsrc2',
    'imgsrc3',
    'imgsrc4'
];

var imgWrap = [];

function preloadImg(arr) {
    for (var i = 0; i < arr.length; i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];
    }
}

preloadImg(imgSrcArr);

//或者延迟的文档加载完毕在加载图片

$(function () {
    preloadImg(imgSrcArr);
})