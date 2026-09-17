class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const sortedAns = s.split('').sort().join('');
            if(!res[sortedAns]) {
                res[sortedAns] = [];
            }
            res[sortedAns].push(s);
        }
        return Object.values(res);
    }
}
