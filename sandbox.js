let datelist = ['Jan 10, 2009','Oct 7, 2009','Nov 10, 2009','Oct 22, 2009']

// output ['Nov 10,2009', '0ct 22,2009', 'Oct 7,2009','Jan 10,2009']

// console.log(Date.parse("Monday, August 10th 2020", "EEEE, mmmm do yyyy", new Date(),))
// [‘Oct 7, 2009’, ‘Nov 10, 2009’, ‘Jan 10, 2009’, ‘Oct 22, 2009’
let d1 = Date.parse("Nov 10, 2009");
const first = new Date(d1)+""
let d2 = new Date("Oct 7, 2009");
let msec = Date.parse("Mar 31, 2012");
const d = new Date(msec)+"";
// console.log(d1 ,d2+1, d);
// console.log(first > d);
// console.log(Date.parse(datelist[0])+"" < Date.parse(datelist[3])+"");
// console.log(datelist.);

// function sortDateList(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     var pivot = arr[0];
//     var left = [];
//     var right = [];

//     for(var i = 1; i < arr.length;i++){
//        ( Date.parse(arr[i])+"" < Date.parse(pivot)+"") ? left.push(arr[i]) : right.push(arr[i]);

//         return sortDateList(left).concat(pivot, sortDateList(right));
//     }
// }

// let sorted  = sortDateList(datelist);
// console.log(sorted);

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (Date.parse(left[0])+"" < Date.parse(right[0])+"") {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

let sorted = mergeSort(datelist);
console.log(sorted.reverse());

