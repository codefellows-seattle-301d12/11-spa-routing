(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* DONE: Use your DOM skills to reveal only the articles section! */
    $('#articles').show();
    $('#about').hide();
  };

  module.articleController = articleController;
})(window);
