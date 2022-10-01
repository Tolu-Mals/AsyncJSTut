// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       }
//       else if(request.readyState === 4) reject('error getting resource');
//     })

//     request.open('GET', resource);
//     request.send();
//   });
// }

// getTodos('todos/luigi.json').then((data) => {
//   console.log("Promise resolved: ", data);
//   return getTodos('todos/mario.json');
// }).then(data => {
//   console.log('promise 2 resolved: ', data);
//   return getTodos('todos/shaun.json');  
// }).then(data => {
//   console.log('promise 3 resolved: ', data);
// }).catch(err => {
//   console.log('Promise rejected: ', err)
// });

// //Callback hell
// getTodos('todos/luigi.json', (error, data) => {
//   console.log(data);
//   getTodos('todos/mario.json', (error, data) => {
//     console.log(data);
//     getTodos('todos/shaun.json', (error, data) => {
//       console.log(data);
//     })
//   })
// });


//Promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     // resolve('Some data');
//     reject('some error');
//   });
// };

// getSomething().then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// })

// getSomething().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })

// const sayHi = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello!");
//     }, 3000);
//   })
// }

// const greet = async () => {
//   const greeting = await sayHi();
//   console.log(greeting);
// }

// greet();

//Throwing custom errors

const getTodos = async () => {

  const response = await fetch('todos/luigi.json');

  if(response.status !== 200) throw new Error('cannot fetch the data');
  
  const data = await response.json();

  return data;
}

getTodos()
.then(data => console.log('resolved: ', data))
.catch(err => console.log('Rejected: ' + err.message));