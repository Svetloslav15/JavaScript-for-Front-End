function setValues(arr) {
    let result = [];
    let length = arr.shift();
    for (let i = 0; i < length; i++) {
        result[i] = 0;
    }
    for (let item of arr) {
        item = item.split(" - ");
        result[item[0]] = item[1];
    }
    console.log(result.join('\n'));
}