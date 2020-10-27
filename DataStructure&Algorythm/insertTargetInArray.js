/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * with binarySearch
 */

var searchInsert = function(nums, target) {
    let startIdx = 0,
    endIdx = nums.length - 1;
    if(target>nums[nums.length-1])return nums.length;
    while (startIdx < endIdx) {
        let midIdx = Math.floor((startIdx + endIdx) / 2);
        if (nums[midIdx]<target   &&target <= nums[midIdx+1]) {
          return midIdx+1;
        } else if (target > nums[midIdx]) {
          startIdx = midIdx;
        } else {
          endIdx = midIdx;
        }
    }
        return 0;
    
};
