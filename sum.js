function add(nums) {
    if (!nums) {
        return 0;
    }

    //split the string and create array of numbers
    const numList = nums.split(/,(?!\d\d)/).map(Number).filter(num => !isNaN(num));

    console.log(`Numliest => ${numList}`);
    return numList.reduce((sum, num) => sum + num, 0);
}

//Function call
console.log(add(""));          // Output: 0
console.log(add("1"));        // Output: 1
console.log(add("1,5"));      // output : 6