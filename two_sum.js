var twoSum = function(nums, target) {
    var newMap = new Map()
    for(i=0; i<nums.length; i++) {
        var complement = target - nums[i]
        if(newMap.has(complement)) {
            var compIndex = nums.indexOf(complement)
            return [i, compIndex]
        }
        newMap.set(nums[i])
    }
};