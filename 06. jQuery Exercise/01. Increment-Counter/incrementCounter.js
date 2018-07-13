function increment(selector) {
   let container = $(selector);
   let textarea = $('<textarea class="counter" disabled="disabled">0</textarea>');
   let incrementBtn = $('<button class="btn" id="incrementBtn">Increment</button>');
   let addBtn = $('<button class="btn" id="addBtn">Add</button>');
   let list = $('<ui class="results">');

   incrementBtn.on("click", function () {
      let oldValue = Number($(textarea).val());
      $(textarea).val(oldValue + 1);
   });

   addBtn.on("click", function () {
      let value =  $(textarea).val();
      list.append(`<li>${value}</li>`);
   });
   container.append(textarea);
    container.append(incrementBtn);
    container.append(addBtn);
   container.append(list);
}
