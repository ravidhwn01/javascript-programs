# Programs -
## 1. Average of array nums in Javascript?
```
   function avg(){
            let sum = 0;
            let arry = [1,2,3];
            for (let i = 0; i < arry.length; i++) {
                sum+= arry[i];
                
            }
            document.write(`the average is ${sum/arry.length}`);
        }
        avg();
    
```

## 2. Swap two numbers by reference?
```
var num1 = 10;
var num2 = 20;
var temp = 0;

document.write("<br>Before Swap, num1 = " +num1+" num2 = "+num2);
temp = num1;
num1 = num2;
num2 = temp;
document.write("<br>After Swap, num1 = " +num1+" num2 = "+num2);

```

## 3. Print the fibonacci sequence?
```

function fibonacci( N){
    let t1 =0;
    let t2 = 1;
    let nextTerm ;
    for(let i =0;i<N;++i){
        document.write(` ${t1 }`);
        nextTerm =t1+t2;
        t1 = t2;
        t2 = nextTerm;
    }
}
fibonacci(5);

```

## 4. Sort an array by both ascending and descending order?
** Sort the numbers in ascending order**
```
<p id="p1"></p>


const ascending = [40, 100, 1, 5, 25, 10];
ascending.sort(function(a, b){return a-b});
document.getElementById("p1").innerHTML = "ascending order :"+ascending;
```
**Sort the numbers in descending order**
```
<p id="p2"></p>

const descending = [40, 100, 1, 5, 25, 10];
descending.sort(function(a, b){return b-a});
document.getElementById("p2").innerHTML ="descending order :"+ descending;

```

## 5. Show a variable value in an HTML webpage using DOM?
```
     let name = "Nathan";
      document.write(name); 
  
```
