function attachEvents() {
   $('a').on("click", function (event) {
       $('a').removeClass('selected');
      $(event.target).addClass("selected");
   });
}