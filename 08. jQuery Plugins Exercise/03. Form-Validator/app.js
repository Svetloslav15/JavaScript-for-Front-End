$.validate({
    lang: 'en'
});

$('#bold-btn').on("click", function () {
    let input = $('#format-text input');
    $(input).css("font-weight", "bold");
});

$('#italic-btn').on("click", function () {
    let input = $('#format-text input');
    $(input).css("font-style", "italic");
});