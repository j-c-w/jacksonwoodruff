/**
 * Created by Jackson on 9/20/2015.
 *
 * This handles the navigation bar,
 * ensuring that if it is at the top of the
 * page, then home is hidden, that it takes
 * up the right amount of space, and that home
 * shows at the appropriate times.
 */
$(document).ready(function() {
    var home = $(".homeLink");
    var projects = $(".projectsLink");
    var running = $(".runningLink");
    var about = $(".aboutLink");

    var homeSection = $("#headerSection");
    var projectsSection = $("#projectsSection");
    var runningSection = $("#runningSection");
    var aboutSection = $("#aboutSection");

    var projectSectionNav = $("#projectSectionNav");
    var runningSectionNav = $("#runningSectionNav");
    var aboutSectionNav = $("#aboutSectionNav");

    // This stops all the navs from being scrolled out.
    var stopAll = function() {
        projectSectionNav.stop();
        runningSectionNav.stop();
        aboutSectionNav.stop();
    };

    // This should be called when scrolling out one of the menus.
    // It ensures that all the menus are scrolled out the correct
    // amount
    var setNavs = function(activeNav) {
        var scrollOut = function(div) {
            div.show('slide', {direction: 'right'}, 1000);
        };
        var scrollIn = function(div) {
            div.hide('slide', {direction: 'right'}, 1000);
        };

        stopAll();

        if (activeNav === OpenNav.PROJECT) {
            scrollOut(projectSectionNav);
        } else {
            scrollIn(projectSectionNav);
        }

        if (activeNav === OpenNav.RUNNING) {
            scrollOut(runningSectionNav);
        } else {
            scrollIn(runningSectionNav);
        }

        if (activeNav === OpenNav.ABOUT) {
            scrollOut(aboutSectionNav);
        } else {
            scrollIn(aboutSectionNav);
        }
    };

    // This returns whether the nav is on screen
    var scrolledTo = function isScrolledIntoView(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };

    // Here we need to set up the navs to trigger when they are in view



    var scrollTo = function(to) {
        $('html, body').animate({
            scrollTop: to.offset().top
        }, 1000);
        return false;
    };

    projects.click(function() {
        return scrollTo(projectsSection);
    });

    running.click(function() {
        return scrollTo(runningSection);
    });

    about.click(function() {
        return scrollTo(aboutSection);
    });

    home.click(function() {
        return scrollTo(homeSection);
    });
});
