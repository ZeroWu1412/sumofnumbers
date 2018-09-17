const tNums = [1, 2, 3];

function sumf(nums) {
  let total = 0;
  for(const num of nums){
    total +=num;
}
  return total;
}
console.log(sumf(tNums));

function sumw(nums){
  let total= 0;
  let i =0;
  while(i < nums.length){
    total += nums[i];
    i++;
  }
  return total;
}
console.log(sumw(tNums));

function sumr(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumw(nums.slice(1, nums.length));
}
console.log(sumr(tNums));

function sumu(nums){
  return _.reduce(nums,function (entry, num){return entry + num;},0)
}
console.log(sumu(tNums));
