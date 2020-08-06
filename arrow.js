// function doubleIt(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;

const result = doubleIt(15);
console.log(result);

const add = (num1,num2) => num1 + num2;
const result2 = add(10,5);
console.log(result2); 

const give5 = () => 5;
const result3 = give5();
console.log(result3);

const doMath = (x, y) => {
    const add = x + y;
    const diff = x - y;
    const result = add * diff;
    return result;
}
const result4 = doMath(7,5);
console.log(result4);
