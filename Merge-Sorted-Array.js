const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6, 9, 10]

const merge = (nums1, m, nums2, n) => {
    debugger
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;


    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
    console.log(nums1);
  };
  
  merge(nums1, 3, nums2, 3);
