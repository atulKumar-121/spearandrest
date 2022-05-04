//  spread and rest operator(...)
let list1=["Honda","BMW","Audi"];
let list2=[...list1,"Maruti"];

// spread
console.log(list1);
console.log(list2);

let person1={
    name:"Atul Kumar",
    age:21
}
let person2={
    ...person1,
    address:"Purnea"
}
console.log(person1);
console.log(person2);

// rest
let hello=(...all)=>{
    console.log(all);
}
hello(1,2,3,4,5,6);


