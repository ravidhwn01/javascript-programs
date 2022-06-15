console.log('local storage');
//add a key value pair inside local storage
localStorage.setItem('name1','ravi');
localStorage.setItem('name2','lalu');
// clear the entire local storage
// localStorage.clear();
localStorage.removeItem('name2');
let x = localStorage.getItem('name2'); // retreive an item from  local storage
console.log(x);
// we can not add array inside the local storage
let imarray = ['aalu','aam','pyaj'];
localStorage.setItem('sabjji',JSON.stringify(imarray));