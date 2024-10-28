/**
 * Created by Jackson on 12/7/2015.
 */

$(document).ready(function() {
    var shadowOut = function() {
        $(this).siblings(".projectExpansion").animate({width: '0px'});
    };

    var shadowIn = function() {
        $(this).siblings(".projectExpansion").animate({width: '22em'});
    };


    var popupHolders = $(".logoContainer");
    var popupClicks = $(".projectsPopupButton");
    var popupBoxes = $(".projectsPopupBoxes");

    popupClicks.hover(shadowIn, shadowOut)
});
