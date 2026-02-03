
//     let students = [
//   { name: "harshit", marks: 82 },
//   { name: "shreepal", marks: 81 },
//   { name: "akshay", marks: 92 },
//   { name: "raj", marks: 50 }
// ];

// students.map(s => console.log(s.name, s.marks));
// let above60 = students.filter(s => s.marks > 60);
// console.log("Above 60:", above60);

// let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
// console.log("Total Marks:", totalMarks);
// let newStudents = [...students, { name: "Kiran", marks: 70 }];
// console.log(newStudents);


// let products = [
//   { name: "Mobile", price: 15000, qty: 1 },
//   { name: "Headphones", price: 800, qty: 2 },
//   { name: "Charger", price: 400, qty: 1 }
// ];

// products.map(p => console.log(p.name));
// let costlyProducts = products.filter(p => p.price > 500);
// console.log("Above 500:", costlyProducts);

// let totalValue = products.reduce(
//   (sum, p) => sum + p.price * p.qty, 0
// );
// console.log("Total Cart Value:", totalValue);
// products[0].qty = 2;
// console.log(products);



// let employee = {
//   name: "jay",
//   age: 28,
//   address: {
//     city: "pune",
//     pincode: 110001
//   },
//   skills: ["JavaScript", "HTML"]
// };
// console.log(employee.address.city);

// employee.skills = [...employee.skills, "CSS", "React"];
// console.log(employee.skills);
// employee.age = 29;
// let { name, age } = employee;
// console.log(name, age);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = numbers.filter(n => n % 2 === 0);
// console.log("Even:", even);

// let odd = numbers.filter(n => n % 2 !== 0);
// console.log("Odd:", odd);
// let sum = numbers.reduce((total, n) => total + n, 0);
// console.log("Sum:", sum);
// let squares = numbers.map(n => n * n);
// console.log("Squares:", squares);



// let studentsResult = [
//   { name: "Ankit", marks: 72 },
//   { name: "Meena", marks: 45 },
//   { name: "Suresh", marks: 66 },
//   { name: "Pooja", marks: 39 }
// ];
// let results = studentsResult.map(s => ({ ...s,
//   result: s.marks >= 40 ? "Pass" : "Fail"
// }));
// console.log(results);
// let passed = results.filter(s => s.result === "Pass");
// console.log("Passed Students:", passed);
// let average = studentsResult.reduce((sum, s) => sum + s.marks, 0) /
//   studentsResult.length;
// console.log("Class Average:", average);


