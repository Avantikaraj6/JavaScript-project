// let input = document.getElementById('inputbox');
// let buttons= document.querySelectorAll('.button');

// function display(number){
//     input.value += number;
// }
// function calculate(){
//     var final_number = input.value;
//     var final_result= eval(final_number);
//     input.value = final_result
// }
// function clr(){
//     input.value=" ";
// }

// function del(){
//     input.value= input.value.slice(0, -1);
// }

// var twoSum = function(nums, target) {
//     nums=[2,2,3,4]
//     target=5;
//       for(i=0; i<=nums.length; i++){
//         const value =nums[i] +nums[i+1];
//         console.log(value)
//         if(target==value){
//             console.log(nums.indexOf(nums[i]),nums.indexOf(nums[i+1]));
//         }
//       }
//   };

//   twoSum();

// nums1=[1,2,3,0,0,0]
// nums2=[2,5,6]
// m=3;
// n=3;

// for(i=0; i <m; i++ ){
//     console.log(nums1[i]);
//   for( j=0; j<n; j++){

//     console.log(nums2[j]);
// }
// }
// for(i=0; i <n; i++){
//     console.log(nums2[i]);
// }
// console.log(nums1=nums1[i]+nums2[i])
// }

// var getConcatenation = function(nums) {
//     nums=[1,2,3,4];
//     for(i=0; i<nums.length;i++){
//     let ans=nums;
//     let val=[(nums+","+ans)]
//     console.log(val)
//     }
// };

// getConcatenation();

// var divideArray = function (nums) {
//     nums =
//     [3,2,3,2,2,2]
//   nums = nums.sort();
//   console.log(nums)
//   if (nums.length % 2 == 0) {
//     for (i = 0; i < nums.length; i++) {
//       for (j = i + 1; j < nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//         //  console.log(nums[i]+","+nums[j])
        
//       }
//     }
//   } 
//   console.log("false") 
// }
// else {
//     console.log("true")
//   }
// }
// ;
// divideArray();



// var sortedSquares = function(nums) {
//     let res=[]
//     for(i=0;i<nums.length; i++){
//         res.push(nums[i] *nums[i]);
        
//     }
//     // let num=nums.sort(res);
//     console.log(res.sort()) ;
    
// };

// sortedSquares(nums =[-4,-1,0,3,10]);


// var separateDigits = function(nums) {
//     let res=[]
    
//     for(i=0; i<nums.length; i++){
//         out = (nums[i].toString().split(""));
//         console.log(out)
//         console.log(res.push(...out))
//     }
//     console.log(res) ;
//  };

//  separateDigits(nums = [13,25,83,77]);


// var numberOfPairs = function(nums) {
//     let res=[];
//     for(i=0; i<nums.length;i++){
//         for( j=i+1; j<nums.length;j++){
//           if(nums[i] == nums[j]){
            
//               out=[nums[i],nums[j]];
//               ghi = nums.slice(nums[i]) , nums.slice(nums[j])
//               console.log(ghi)
              
//           }
//         }
//     }
// };

// numberOfPairs(nums = [1,3,2,1,3,2,2])



var numberOfPairs = function(nums) {
    let ans = [0, 0]

    nums.sort((a, b) => a - b)

    for(let i = 0; i < nums.length; i++){

        if(nums[i] === nums[i + 1]){
            ans[0] = ans[0] + 1
            i++
        } else {
            ans[1] = ans[1] + 1
        }


    }
}

numberOfPairs(nums = [1,3,2,1,3,2,2])
