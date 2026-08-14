class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let solutionArr = new Array(nums.length * 2);
        for (let i = 0; i < nums.length; i++) {
            solutionArr[i] = nums[i];
            solutionArr[i + nums.length] = nums[i]
        }

        return solutionArr;
    }
}
