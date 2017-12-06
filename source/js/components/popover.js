$(document).ready(function(){

    //Popover, activated by clicking
    $('[data-toggle="popover"]').popover({
        html:true,
        placement: 'top'
    });

    // Popover locations
    $(".pop-top").popover({placement : 'top'});
    $(".pop-right").popover({placement : 'right'});
    $(".pop-bottom").popover({placement : 'bottom'});
    $(".pop-left").popover({ placement : 'left'});

});