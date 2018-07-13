function search() {
    let input = $('#searchText').val();
    let counter = 0;
    let items = $('li');
    for (let item of items) {
        if ($(item).text().includes(input)) {
            counter++;
            $(item).css("font-weight", "bold");
        }
        else {
            $(item).css("font-weight", "");
        }
    }
    $('#result').text(`${counter} matches found`);
}