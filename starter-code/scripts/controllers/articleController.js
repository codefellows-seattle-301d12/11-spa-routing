(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    $('section').hide();
    $('#ajax-spinner').fadeIn();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
