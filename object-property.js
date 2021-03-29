const students = [
    {id: 34, name: "Rijon mia."},
    {id: 23, name: "mohosin islam."},
    {id: 45, name: "momin islam."},
    {id: 55, name: "titu islam."},
    {id: 12, name: "mithu islam."}
];

// const output = [];
// for( let i = 0; i <students.length; i++){
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
// }

const names = students.map(s => s.name);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);