function add(nums) {
    if (!nums) {
        return 0;
    }
    
    let delimiter = /[\n,]/; // Default delimiters

    //condition to handle any delimiter pattern
    if (nums.startsWith("//")) {
        const delimiterLineEnd = nums.indexOf("\n");
        delimiter = nums.substring(2, delimiterLineEnd);
        nums = nums.substring(delimiterLineEnd + 1);
        delimiter = new RegExp(`[${delimiter}]`);
    }

    //split[, \n] the string and create array of numbers
    const numList = nums.split(delimiter).map(Number).filter(num => !isNaN(num));

    //check for negative numbers
    const negativeNum = numList.filter(num => num < 0);
    if(negativeNum.length > 0){
        throw new Error(`negative numbers not allowed ${negativeNum}`);     
    }

    //console.log(`Numlist => ${numList}`);
    return numList.reduce((sum, num) => sum + num, 0);
}

//Function call
console.log(add(""));           // Output: 0
console.log(add("1"));          // Output: 1
console.log(add("1,5"));        // output : 6
console.log(add("1\n2,3"));     // output : 6
console.log(add("//;\n1;2"));   // output : 3
console.log(add("//|\n1|2|3|4"));// output : 10
console.log(add("//:\n1:2:3:5:5"));// output : 16
//console.log(add("//;\n1;2;-3"));   // output : Error negative number -3
//console.log(add("1, 3, -5"));   // output : Error negative number -5
//console.log(add("1, 4, -13, -15"));

//export add function
module.exports = add;
