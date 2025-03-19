// const a=((name="abd")=>`hello ${name}`)

// console.log(a());

// class b{
//     constructor(name){
// this.name=name
//     }
//     sayhello(){
//         setTimeout(() => {
//             console.log(this.name);
            
            
//         }, 5000);

//     }

// }
// const ab=new b("hiiii")
// console.log(ab.name);
// // ab.sayhello()


// // const a=[1,2,3]
// // for (let ab in a){
// //     console.log(ab);
// // }

// class c{
//     constructor(name){
//         this.name=name
//     }
//     callback_func(){
//         setTimeout(()=>{
//             console.log(this.name);
//         },2000)
//     }
// }
// const c_obj=new c("Surprise")
// //console.log(c_obj.name)
// c_obj.callback_func();

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 3);

// console.log(sum); // 15

// const nums=[1,2,3,4,6]
// const sums=nums.reduce((a,b)=>a+b,0)
// const multi=nums.reduce((a,b)=>a+b*2,1)

// const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);

// console.log(max); // 25

// console.log(sums)
// console.log(multi)

// let i = 1;
// while (i <= 5) {
//     //i++; // Increment first to avoid infinite loop

//     if (i === 3) {
//         continue;  // Skips printing when i = 3
//     }

//     console.log(i);
//     i++;
// }

// console.log(1 / 0);  // Infinity
// console.log("hello" * 5);  // NaN
// console.log(isNaN("abc"));  // true
// let x = "Hello";
// console.log(x.toLowerCase().slice(0, 4));
// let ages = [10, 15, 18, 21, 25];

// let adult = ages.find(age => age >= 18);
// console.log(adult); // Output: 18 (first match)

// let words = [1,2,3,4,5];
// console.log(words); // Output: [1,2,3,4,5]

// let sentence = words.join();  
// console.log(sentence); // Output: 1,2,3,4,5
// console.log("start");
// const a =new Promise((resolve,reject)=>{
//     let success=false
//     if(success){
//         resolve("done")
//     }
//     else{
//         reject("not done")
//     }
// })
// a
// .then((message)=>console.log(message))
// .catch((error)=>console.log(error))

// console.log("end");

// async function a(){
//     await new Promise(()=>{
//         setTimeout(() => {
//             let sum=0;
//             for (i=0;i<1000000;i++){
//                 sum=sum+i;
//             }
//             console.log(sum);
            
            
//         }, 320);
//     })
// }
// a()
// console.log("end");

async function test() {
    return "Hello!";
}

console.log(test());

const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
    console.log(num * 2);
});


const person = { name: "Alice", age: 25, city: "Paris" };

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


const colors = ["red", "blue", "green"];

for (let color of colors) {
    console.log(color);
}


let count = 1;

while (count <= 3) {
    console.log(`Count: ${count}`);
    count++;  // Increment to avoid infinite loop
}


let num = 5;

do {
    console.log(`Number: ${num}`);
    num--;
} while (num > 2);







