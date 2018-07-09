function deleteByEmail() {
   let input = document.getElementsByTagName("input")[0];
   let td = document.getElementsByTagName("td");
   let index = 0;
    for (let item of td) {
        if (item.textContent === input.value){
            document.getElementById("customers").deleteRow(index / 2 + 1);
            document.getElementById("result").textContent = "DELETED.";
            return;
        }
        index++;
    }
    document.getElementById("result").textContent = "Not found.";
}