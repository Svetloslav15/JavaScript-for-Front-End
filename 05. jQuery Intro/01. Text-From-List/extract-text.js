function extractText() {
   let items = $('ul > li').toArray();
   $('#result').text(items.map(x => x.textContent).join(', '));
}
