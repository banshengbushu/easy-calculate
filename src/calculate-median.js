function calculate_median(arr) {

    var newArr = createNewArr(arr);
    var count = newArr.length;

    for (var i = 0; i < count; i++) {

        if (count % 2 == 0) {

            return (newArr[count / 2] + newArr[count / 2 - 1]) / 2;
        } else {

            return newArr[parseInt(count / 2)];
        }
    }
}

function createNewArr(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

module.exports = calculate_median;
