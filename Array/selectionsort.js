/*912. Sort an Array(Leet code problem)
Solved
Medium
Topics
Companies
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104 
*/

function sortArray(nums) {
    const mp = new Map();

    for (const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    const minE = Math.min(...nums);
    const maxE = Math.max(...nums);

    let i = 0;

    for (let num = minE; num <= maxE; num++) {
        while (mp.get(num) > 0) {
            nums[i] = num;
            i++;
            mp.set(num, mp.get(num) - 1);
        }
    }

    return nums;
}

// Example usage:
const nums = [5, 2, 3, 1, 2];
console.log(sortArray(nums)); // Output: [1, 2, 3, 5]


