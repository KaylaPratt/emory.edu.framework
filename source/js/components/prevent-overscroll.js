var prevTouchPosition;
var startScrollTop;
$$(document).on('touchmove', '.page', function (e) {
    var touchPosition = e.targetTouches[0].pageY;
    var pageContent = this;
    startScrollTop = pageContent.scrollTop;
    if (typeof prevTouchPosition !== 'undefined') {
        var direction = touchPosition - prevTouchPosition > 0 ? 'to-top' : 'to-bottom';
        var pageScrollTop = pageContent.scrollTop;
        if (startScrollTop === 0 && direction === 'to-top') {
            e.preventDefault();
        }
        if (startScrollTop === pageContent.scrollHeight - pageContent.offsetHeight && direction === 'to-bottom') {
            e.preventDefault();   
        }
    }
    prevTouchPosition = touchPosition;
}, true);

$$(document).on('touchend', function(){
    prevTouchPosition = startScrollTop = undefined;
});