function checkNumber(){

let num = document.getElementById("numberInput").value;
let result = "";

if(num % 2 == 0)
result += "Ділиться на 2 (парне число)<br>";

if(num % 3 == 0)
result += "Ділиться на 3 (сума цифр кратна 3)<br>";

if(num % 5 == 0)
result += "Ділиться на 5 (закінчується на 0 або 5)<br>";

if(num % 9 == 0)
result += "Ділиться на 9 (сума цифр кратна 9)<br>";

if(num % 10 == 0)
result += "Ділиться на 10 (закінчується на 0)<br>";

if(result == "")
result = "Не ділиться на 2,3,5,9,10";

document.getElementById("result1").innerHTML = result;

}



function gcd(a,b){

while(b != 0){
let temp = b;
b = a % b;
a = temp;
}

return a;

}

function gcdLcm(){

let a = parseInt(document.getElementById("num1").value);
let b = parseInt(document.getElementById("num2").value);

let gcdValue = gcd(a,b);

let lcm = (a*b)/gcdValue;

document.getElementById("result2").innerHTML =
"НСД = " + gcdValue + "<br>НСК = " + lcm;

}



function digitSum(num){

let sum = 0;

while(num > 0){
sum += num % 10;
num = Math.floor(num/10);
}

return sum;

}



function maxDigitSum(){

let arr = document.getElementById("numbers").value.split(" ");

let maxSum = -1;
let maxNumber = 0;

for(let i=0;i<arr.length;i++){

let num = parseInt(arr[i]);
let sum = digitSum(num);

if(sum > maxSum){
maxSum = sum;
maxNumber = num;
}

}

document.getElementById("result3").innerHTML =
"Число: " + maxNumber + "<br>Сума цифр: " + maxSum;

}