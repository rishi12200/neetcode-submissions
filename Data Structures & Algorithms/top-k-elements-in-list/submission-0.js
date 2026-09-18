class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        //store 1 -> 3, 2 -> 2, 3 -> 1 and then sort them extract only keys
       const count = new Map();

       for(let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
       }
       
       const arr = [...count.entries()]
       arr.sort((a,b) => b[1] - a[1]);

       return arr.slice(0, k).map(item => item[0]);
    }
}
