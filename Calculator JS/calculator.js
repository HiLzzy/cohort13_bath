const addBtn=document.getElementById('add');
addBtn.addEventListener('click' ,add)

function add(){
    const firstNum = document.getElementById("num1").value;
    const secondNum = document.getElementById("num2").value;
    document.getElementById('result').innerHTML = parseInt(firstNum) + parseInt(secondNum);
    console.log(result)
}
const subtractBtn=document.getElementById('subtract');
subtractBtn.addEventListener('click' ,subtract)

function subtract(){
    const firstNum = document.getElementById("num1").value;
    const secondNum = document.getElementById("num2").value;
    document.getElementById('result').innerHTML = firstNum - secondNum; 
}
const multiplyBtn=document.getElementById('multiply');
multiplyBtn.addEventListener('click' ,multiply)

function multiply(){
    const firstNum = document.getElementById("num1").value;
    const secondNum = document.getElementById("num2").value;
    document.getElementById('result').innerHTML = firstNum * secondNum;
    console.log(result)
}
const divideBtn=document.getElementById('divide');
divideBtn.addEventListener('click' ,divide)

function divide(){
    const firstNum = document.getElementById("num1").value;
    const secondNum = document.getElementById("num2").value;
    document.getElementById('result').innerHTML = firstNum / secondNum;
}





// const num1 = window.prompt("Enter a number");
// const num2 = window.prompt("Enter another number");

// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

// document.write(num1 + num2);


// console.log("testing")

// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// console.log(buttons)

// buttons.map(button => {
//     button.addEventListener('click', (e)=>{
//         console.log('clicked');
//         console.log('e');
//         console.log('e.target');
//         console.log('e.target.innerText');

//     })
// })
