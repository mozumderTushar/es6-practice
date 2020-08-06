// const person = {
//     name:'Jack',
//     age:17,
//     job:'student',
//     phone:17711111,
//     friend:['alim','kalim','dalim','malim'],
//     gfName:'Angrlinaa',
//     address:'Kata-Bon'
// }

// const phone = person.phone;
// const {job} = person;
// console.log(phone,job);

const  friend = ['alim','kalim','dalim','malim','falim'];
const [first,second,...rest] = friend;
console.log(first,second,rest);