// var arr=[4,5,2,1,7,8,3]
// var axtarilan=1
// //linear search
// for (let index = 0; index < arr.length; index++) {
//   if(arr[index]===axtarilan){
//     console.log("Tapildi"+ arr[index]);
//     break
//   }
  
// }

//Binary Search

// var arr=[1,3,22,45,55,67,120]

// var low=0
// var high=arr.length-1
// var axtarilan=22
// var tapildi=false
// var count = 0
// while (low<=high) {
//   var mid=Math.floor((low+high)/2)
// count ++
//   if(arr[mid]===axtarilan){
//     console.log("Tapildi",axtarilan);
//     tapildi=true
//     break
//   }
//   else if(arr[mid]<axtarilan){
//     low=mid + 1
//   }
//   else{
//     high=mid-1
//   }

// }


// console.log(count);


//Sorting Algoritms

//Bubble Sort

// var arr=[7,4,9,1,52,18,20,24]

// var baza
// for (let i = 0; i < arr.length; i++) {
  
//   for (let k = 0; k < arr.length-1-0; k++) {
    
//     if(arr[k]>arr[k+1]){
//       baza=arr[k]
//       arr[k]=arr[k+1]
//       arr[k+1]=baza
//     }
//   }
  
// }

 


// console.log(arr);

//Selection Sort

// var arr=[7,4,9,1,52,18,20,24]
// var baza
// for (let i = 0; i < arr.length-1; i++) {
//   var min=i //min=0
//   for (let k = i+1; k < arr.length; k++) {
//     if(arr[k]<arr[min]){
//     min=k //min=3
//     }
    
//   }

//   baza=arr[min] //arr[3]  baza=1
//   arr[min]=arr[i] // arr[3]= 7
//   arr[i]=baza // arr[0]=1


// }

// console.log(arr);

//Insertion Sort
// var arr=[7,4,9,1,52,18,20,24]

// for (let i = 0; i < arr.length; i++) {
//  var key=arr[i] //7
//  var j=i-1 // 0

//  while (j>=0 && arr[j]>key) {
//   arr[j+1]=arr[j]
//   j=j-1
//  }

//  arr[j+1]=key


  
// }


// console.log(arr);

