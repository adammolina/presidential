$(document).ready(function () {
  $("img").on("click", function(event) {
    $target = $(event.target);
      $target.addClass("imgClicked");
  });
})
