function prosuct(arr) {
    arr = arr.map(Number);
    let negative = 0;

    for (let item of arr) {
        if (item < 0){
            negative++;
        }
    }
    if (negative % 2 === 0){
        return "Positive";
    }
    else{
        return "Negative";
    }
}