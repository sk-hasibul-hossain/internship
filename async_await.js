/*
states of async and awit

i)Pendin state
ii)Resolve state
ii)Reject state


*/

// const obj = new Promise((resolve, reject) => {
//   //resolve("It resolved");
//   reject(new Error("promise faild"));
// });

// console.log(obj);

// obj.then((resolve) => {
//   console.log(resolve);
// });

// obj
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((reject) => {
//     console.log("Hi");
//   });

const someObj = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

someObj(2000).then(() => {
  console.log("2 second passed");
});

//search in google (json placeholder)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// async function fun() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const json = await response.json();
//   console.log(json);
// }
