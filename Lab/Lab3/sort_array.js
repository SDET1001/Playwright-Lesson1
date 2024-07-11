let intArr = [12, 34, 1, 16, 28];

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Tìm phần tử nhỏ nhất trong mảng chưa được sắp xếp
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Hoán đổi phần tử nhỏ nhất với phần tử đầu tiên
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let sortedArr = selectionSort(intArr);
console.log(`Mảng đã sắp xếp: ${sortedArr}`);
