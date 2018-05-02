var isMobile = '';
if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|HTC/.test(navigator.userAgent))) {
    if (window.location.href.indexOf("?mobile") < 0) {
        try {
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                isMobile = true;
            } else {
                isMobile = false;
            }
        } catch (e) {}
    }
};
if (isMobile) {
    //
} else {
    $("body").html('<p   style=' + "font-size:20px;font-weight:700;color:#000;text-align:center;margin-top:100px;" + '>请使用手机扫描二维码访问^_^<br><br><br><br><div style="margin:0 auto; width:240px;" id="qrCode"></div></p>');
};
var Href = window.location.href;
$("#qrCode").qrcode({
    render: "table", //table方式 
    width: 240, //宽度 
    height: 240, //高度 
    text: Href //任意内容 
});
