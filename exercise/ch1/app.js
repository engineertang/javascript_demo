//alert('hey may');
console.log('hello \b');
console.log(true);

var greeting = 'Hello';
console.log(greeting);
// array convert string delimieter is comma, enclosed in bracket []
console.log([1,2,3]);
// JavaScript Objects are simple key-value pairs, no behavior and encapsulation enclosed in parenthesis {}
// java object is different with JSON(JavaScript Object Notation)
console.log({name:"casino", owner:"Family He"});

console.table({a:1, b:2})

console.error('this is error info');
console.warn('this is a warning');
console.time('hello');
console.timeEnd('hello')

console.log(typeof 33);
console.log(typeof null);

const key = 11;
console.log(key);
// function
function sum(num1, num2, ...nums){
    var sum =  num1 + num2;
    for(let i = 0; i < nums.length; i ++){
        sum += nums[i];
    }

    return sum;
}

console.log(sum('h', 'e', 'l', 'l', 'o'));
console.log(sum(3, 4, 5, 6));