(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* DONE: Use your DOM skills to reveal only the about section! */
    $('section').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
