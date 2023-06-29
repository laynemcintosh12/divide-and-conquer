function findRotatedIndex(arr, num) {
    let axis = findAxis(arr)
    if (axis > 0 && num >= arr[0] && num <= arr[axis - 1]) {
        let last = axis -1;
        let first = 0;
        if (arr.length === 0){
            return -1;
        }
        if (num < arr[first] || num > arr[last]){
            return -1;
        }
        while (first <= last) {
            let mid = Math.floor((first + (last)) / 2);
            if (arr[mid] === num) {
                return mid;
            } 
            else if (num < arr[mid]) {
                last = mid - 1;
            } else {
            first = mid + 1;
            }
        }
        return -1;
      } 
      else {
        let last = arr.length - 1;
        let first = axis;
        if (arr.length === 0){
            return -1;
        }
        if (num < arr[first] || num > arr[last]){
            return -1;
        }
        while (first <= last) {
            let mid = Math.floor((first + (last)) / 2);
            if (arr[mid] === num) {
                return mid;
            } 
            else if (num < arr[mid]) {
                last = mid - 1;
            } else {
            first = mid + 1;
            }
        }
        return -1;
      }
}


function findAxis(arr){
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]){
        return 0;
    }
    let start = 0
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] > arr[mid + 1]){
        return mid + 1
      }
      else if (arr[start] <= arr[mid]) {
        start = mid + 1
      } 
      else {
        end = mid - 1
      }
    }
}


module.exports = findRotatedIndex