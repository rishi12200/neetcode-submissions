class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let compareSet = new Set(nums);
        return compareSet.size !== nums.length;
    }
}
