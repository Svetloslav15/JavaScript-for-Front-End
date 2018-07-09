function addItem() {
    let input = $('#newText').val();
    $('#items').append(`<li>${input} <a href="#">[Delete]</a></li>`);
    $('#newText').val("");
    $('a').on("click", function () {
        let li = this.parentNode;
        console.log(li);
        let ul = li.parentNode;
        ul.removeChild(li);
    });
}