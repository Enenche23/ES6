// Modules
import { Teacher } from "./teacher";    

const teacher = new Teacher("Mosh", "MSc");
teacher.teach();



 




// Inheritance

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     walk() {
//         console.log("walk");
//     }
// }

// class Teacher extends Person {
//     constructor(name, degree) {
//         super(name);
//         this.degree = degree;
//     }

//     teach() {
//         console.log("teach");
//     }
// }

// const teacher = new Teacher("Mosh", "MSc");






// Classes

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     walk() {
//         console.log("walk");
//     }
// }

// const person = new Person('Mosh');
// person.







//SPREAD OPERATOR

// const first = { name: `Mosh` };
// const second = { job: `Instructor` };

// const combined = {...first, ...second, location: 'Australia' }

// console.log(combined);





// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = [...first, `a`, ...second, `b`];

// const clone = [...first];

// console.log(first);
// console.log(clone);
 



// //OBJECT DESTRUCTURING

// const address = {
//     street: 'Wallstreet',
//     city: 'NewYork',
//     country:'America'
// };

// const {street, city, country} = address;
// console.log(address);


// Array Maps

// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color=>`<li>${color}</li>`);
// console.log(items);




// const person = {
//     talk() {
//         var self = this;
//         setTimeout(() => {
//         console.log("this", this);
//       }, 1000);
//     }
// };

// person.talk();




// const jobs = [
//          { id: 1, isActive: true },
//          { id: 1, isActive: true },
//          { id: 1, isActive: false  },
// ];

// // const activeJobs = jobs.filter(function(job) { return job.isActive; })
// const activeJobs = jobs.filter(function(job) 
// { return job.isActive; });
// const activeJobss = jobs.filter (job => 
//     job.isActive);

//     console.log(jobs[1].isActive);