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

//export add function
module.exports = add;
