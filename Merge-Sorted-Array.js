// const nums1 = [1,2,3,0,0,0]
// const nums2 = [2,5,6, 9, 10]

// const merge = (nums1, m, nums2, n) => {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;


//     while (i >= 0 && j >= 0) {
//       if (nums1[i] > nums2[j]) {
//         nums1[k] = nums1[i];
//         i--;
//       } else {
//         nums1[k] = nums2[j];
//         j--;
//       }
//       k--;
//     }

//     while (j >= 0) {
//       nums1[k] = nums2[j];
//       j--;
//       k--;
//     }
//     console.log(nums1);
//   };

//   merge(nums1, 3, nums2, 3);

// function mergeSortArray(arr1, arr2) {

//   if (arr1.length === 0) {
//     return arr2;
//   } else if (arr2.length === 0) {
//     return arr1;
//   }

//   const newArray = [];
//   let index = 0;
//   let indexTwo = 0;

//   while (index < arr1.length && indexTwo < arr2.length) {
//     if (arr1[index] > arr2[indexTwo]) {
//       newArray.push(arr2[indexTwo])
//       indexTwo++
//     } else {
//       newArray.push(arr1[index])
//       index++
//     }
//   }

//   while (index < arr1.length) {
//     newArray.push(arr1[index])
//     index++;
//   }

//   while (indexTwo < arr2.length) {
//     newArray.push(arr2[indexTwo])
//     indexTwo++;
//   }

//   console.log(newArray);
//   return newArray;
// }

// console.log(mergeSortArray([0, 3, 4, 31], [4, 6, 30]));

function mergeSortArray(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const newArray = [];

  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] > arr2[p2]) {
      newArray.push(arr2[p2])
      p2++;
    } else {
      newArray.push(arr1[p1])
      p1++;
    }
  }

  while(p1<arr1.length) {
    newArray.push(arr1[p1])
    p1++
  }

  while(p2<arr2.length) {
    newArray.push(arr2[p2])
    p2++
  }

  return newArray;
}

console.log(mergeSortArray([0, 3, 4, 31], [4, 6, 30]));