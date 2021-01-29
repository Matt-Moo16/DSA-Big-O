// 1. What is the Big O for this?
/* 1) Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
Someone yells - "I do, be happy to bring him over" */

// Answer 1) O(1)

/* 2) Dtermine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
Someone yells - "I do, be happy to bring him over" */

// Answer 1) O(n)

// 2. Even or odd
// What is the Big O of the following algorithm? Explain your answer
    function isEvent(value) {
        if (value % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }

// Answer O(1) regardless of the size of the input because it is only one input value it will take the same amount of time. 

// 3. Are you here? 
// What is the Big ) of the following algorithm? Explain your answer:
    function areYouHere(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            const el1 = arr1[i];
            for (let j = 0; j < arr2.length; j++) {
                const el2 = arr2[j];
                if (el1 === el2) return true;
            }
        }
        return false;
    }

// Answer O(n^2) There is two levels of looping so the most time consuming task is looping through each element in 2nd array which first has to be looped through the first array.

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer
    function doubleArrayValues(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] *= 2
        }
        return array;
    }

// Answer O(n) the longer the array the longer the algorithm will take. 

// 5. Naive Search 
// What is the Big O of the following algorithm? Explain your answer
    function naiveSearch(array. item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
    }

// Answer O(n) the longer the array the longer the algorithm will take


// 6. Creating Pairs
// What is the Big O of the following algorithm? Explain your answer
    function createPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                console.log(arr[i] + ", " + arr[j]);
            }
        }
    }

// Answer O(n^2) the array has to go through two loops.

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

    function compute(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {

            if (i === 1) {
                result.push(0);
            }
            else if (i === 2) {
                result.push(1);
            }
            else {
                result.push(result[i - 2] + result[i - 3]);
            }
        }
        return result;
    }

// Answer O(n) Linear Time the bigger the number the longer it takes for the function to parse it.

// 8. An efficient search
// In this example, we return t the porblem of searching using a more sophisticated approach than in naive search, above.
// Assume that the input array is always sorted. What is the Big O of the following algorithm? 

    function efficientSearch(array, item) {
        let minIndex = 0;
        let maxIndex = array.length - 1;
        let currentIndex;
        let currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = Math.floor((minIndex + maxIndex) / 2);
            currentElement = array[currentIndex];

            if (currentElement < item) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > item) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return -1;
    }

// Answer O(log(n)) this function divids the array after the array is sorted

// 9. Random element 
// What is the Big O of the following algorithm? Explain your answer.
    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

// Answer O(1) no matter how long the array is will still only pull one random element from the array. 

// 10. What Am I? 
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer
    function isWhat(n) {
        if (n <2 || n % 1 !== 0) {
            return false;
        }
        for (let i = 2; i < n; ++i) {
            if (n % 1 === 0) return false;
        }
        return true;
    }

// Answer O(n) there is a for loop in the function which means it scales with how big the number is.

// 11. Tower of Hanoi
/* The Tower of Hanoi is a very famous mathmatical puzzel (some call it game!).
This is how it goes:
    ~ There are three rods and a number of disks of different sizes which can slide onto any rod.
    The puzzel starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape).
    The other two rods are empty to begin with.

    ~ The goal of the puzzel is to move the entire stack of rods to another rod 
    (can't be the original rod where it was stacked before) 
    where it will be stacked in the ascending order as well. 
    This should be done obeying the following rules:
    i) Only one disk may be moved at a time 
    ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod,
    on top of the other disks that may already be present on that rod.
    iii) A larger disk may not placed on top of a smaller disk.

~ Derive an algorithm to solve the Tower of Hanoi puzzle.
~ Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another. 
~ If you are given 5 disks, how do the rods look like after 7 recursive calls.
~ How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
~ What is the runtime of your algorithm?
*/

    function TOH(n, x, y, z) {
        if (n >= 1) {
            TOH( n-1, x, y, z )
            print(x, y)
            TOH( n-1, x, y, z)
        }
    }

// ~ How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// 3 disks = 7
// 4 disks = 15
// 5 disks = 31

// What is the runtime of your algorithm?
// O(2^n) Exponential time

// 12. Iterative Version
// Solve the drills 1-7 from your previous checkpoint (Recursion) iteratively.

    // 1 
    const countingSheep = function(sheep) {
        if (sheep < 1) {
            console.log('All sheep jumped over the fence')
        }
        else {
            console.log(`${sheep}: Another sheep jumps over the fence`)
            countingSheep(sheep - 1) 
        }
    
    }

    // 2
    const powerCalculator = function(base, exponent) {
        if (exponent < 0) {
            return 'exponent should be >= 0'
        }
    
        if (exponent === 0) {
            return 1 
        }
    
        return base * powerCalculator(base, exponent - 1)
    }

    // 3
    const reverseString = function(string) {
        if (string.length === 1 ) {
            return string
        }
        return string.slice(-1) + reverseString(string.slice(0, -1))
    }

    // 4
    const triangularNumber = function(num) {
        if (num <= 0) {
            return "Number needs to be greater or equal to one"
        }
    
        if (num === 1) {
            return num
        }
    
        return num + triangularNumber(num - 1)
    }

    // 5
    const stringSplitter = function(input, seperator) {

        if (input.indexOf(seperator) === -1) {
            return [input.slice(0, input.length)]
        }
        return [input.slice(0, input.indexOf(seperator)), ...stringSplitter(input.slice(input.indexOf(seperator) + 1), seperator)]
    }

    // 6
    const fibonacci = function(number) {
        if (number <= 2) {
            return [1, 1]
        }
        let fibArray = fibonacci(number - 1)
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
        return fibArray
    }

    // 7
    const factorial = function(number) {
        if (number === 1) {
            return number
        }
        return number * factorial(number - 1)
    }

// 13 Recursive Big O
// Take your solutions from the recursive exercises that you completed
// in the previous checkpoint and identify the time complexities (big O) 
// of each of them.

    // 1 
    // O(n) Linear time complexity

    // 2
    // O(n) Linear time complexity

    // 3 
    // O(n) Linear time complexity

    // 4
    // O(n) Linear time complexity

    // 5
    // O(n) Linear time complexity

    // 6 
    // O(n) Linear time complexity

    // 7 
    // O(n) Linear time complexity

    // 8
    // O(n^2) Polynomial time complexity

    // 9
    // O(n^2) Polynomial time complexity

    //10
    // O(2^n) Exponential time complexity

    // 11 
    // O(2^n) Exponential time complexity

    // 12 
    // O(log(n)) Logarithmic time complexity

// 14. Iterative Big O
// Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them. 

    // 1
    // O(n) Linear time complexity

    // 2
    // O(n) Linear time complexity

    // 3
    // O(n) Linear time complexity

    // 4
    // O(n) Linear time complexity

    // 5
    // O(n) Linear time complexity

    // 6
    // O(n) Linear time complexity

    // 7
    // O(n) Linear time complexity