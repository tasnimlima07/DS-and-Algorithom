const nums = [2, 4, 6, 8,1, 10, 12, 14, 16];

function compareNumbers(nums) {
    for (let i = 0; i < nums.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[lowest]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            [nums[i], nums[lowest]]=[nums[lowest],nums[i]]
        }
    }
    return nums;
}

const result = compareNumbers(nums);
console.log(result);
