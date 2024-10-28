$(document).ready(function() {
    var keys = [82, 79, 87, 82, 79, 87];
    var user_presses = ['', '', '', '', '', ''];

    function arraysEqual(a, b) {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length != b.length) return false;

      // If you don't care about the order of the elements inside
      // the array, you should sort both arrays here.

      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }


    $(document).keydown(function(e) {
        user_presses.push(e.keyCode)

        user_presses.splice(0, 1);

        if (arraysEqual(user_presses, keys)) {
            // do something fun!
            var rowrowUrl = '/static/images/williams.jpg';
            var rowrowBackground = 'url(' + rowrowUrl + ')';

            console.log(rowrowBackground);

            $('img').attr("src", rowrowUrl);
            $('#caqLogo').attr("background-image", rowrowBackground);
        }
    });
});