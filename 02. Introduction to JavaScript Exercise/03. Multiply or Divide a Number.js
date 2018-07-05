function main(arr) {
    arr = arr.map(Number);
    if (arr[1] >= arr[0]){
        return arr[0] * arr[1];
    }
    return arr[0] / arr[1];
}