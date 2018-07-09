function addItem() {
   let input = $('#newItemText').val();
   $('#items').append(`<li>${input}</li>`);
    $('#newItemText').val("");
}