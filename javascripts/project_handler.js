/**
 * Created by Jackson on 9/20/2015.
 *
 * This handles the effects in the project,
 * fading the pictures in and out when the
 * things are hovered.
 */

$(document).ready(function() {
    var fadeFunction = function(overlayId, fadeOutDescriptionsClass, backgroundImageId) {
        var OVERLAY_MAX = 1.0;
        var OVERLAY_MIN = 0.5;

        var DESCRIPTIONS_MAX = 0.7;
        var DESCRIPTIONS_MIN = 0.0;

        var BACKGROUND_MAX = 0.4;
        var BACKGROUND_MIN = 0.2;


        // This is done in this way to make is reuseable
        // across all the different places that I use
        // these fade in/out views
        var projectOverlay = $(overlayId);
        var descriptions = $(fadeOutDescriptionsClass)

        // note that background image can be null
        var backgroundImage = $(backgroundImageId);

        var fadeTo = function(elem, opacity) {
            elem.fadeTo(500, opacity);
        };

        var stopAll = function() {
            projectOverlay.stop();
            descriptions.stop();
            if (backgroundImage !== null) {
                backgroundImage.stop();
            }
        };

        var fadeIn = function() {
            stopAll();

            fadeTo(projectOverlay, OVERLAY_MAX);
            fadeTo(descriptions, DESCRIPTIONS_MAX);
            if (backgroundImage !== null) {
                fadeTo(backgroundImage, BACKGROUND_MIN);
            }
        };

        var fadeOut = function() {
            stopAll();

            fadeTo(projectOverlay, OVERLAY_MIN);
            fadeTo(descriptions, DESCRIPTIONS_MIN);
            if (backgroundImage !== null) {
                fadeTo(backgroundImage, BACKGROUND_MAX);
            }
        };

        descriptions.fadeTo(0, DESCRIPTIONS_MIN);
        projectOverlay.fadeTo(0, OVERLAY_MIN);

        projectOverlay.hover(fadeIn, fadeOut);
    };

    // Call the function several times with the following order:
    //      nav_id, fading descriptions, background image
    // this is for the header
    fadeFunction("#project_overlay_nav", ".project_fade_out_description", "#headerBackgroundImage")

    // This is for the running section
    fadeFunction("#running_overlay_nav", ".running_fade_out_description", "none")

});
