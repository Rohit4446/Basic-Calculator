//let val = document.getElementById('input').value;


function type_1() {
    let num1 = document.getElementById('block1').innerHTML;
    let val = document.getElementById('input').value;
    document.getElementById('input').value = val  + num1;
}

function type_2() {
let num2 = document.getElementById('block2').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val + num2;
}

function type_3() {
let num3 = document.getElementById('block3').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val +  num3;    
}

function type_4() {
let num4 = document.getElementById('block4').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value =  val + num4;
}

function type_5() {
let num5 = document.getElementById('block5').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val +  num5;
}

function type_6() {

    let num6 = document.getElementById('block6').innerHTML;
    let val = document.getElementById('input').value;
    document.getElementById('input').value = val +  num6;

}

function type_7() {
let num7 = document.getElementById('block7').innerHTML;
    let val = document.getElementById('input').value;
    document.getElementById('input').value = val +  num7;
}

function type_8() {
let num8 = document.getElementById('block8').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val + num8;    
}

function type_9() {
    let num9 = document.getElementById('block9').innerHTML;
    let val = document.getElementById('input').value;
    document.getElementById('input').value = val + num9;
}

function type_0() {
let num0 = document.getElementById('block0').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val + num0;
}

function type_divide() {
let divide = document.getElementById('divide').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val + ' ' + divide + ' ';
}

function type_multiply() {
let multiply = document.getElementById('multiply').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val + ' ' + multiply + ' ';
}

function type_clr() {
// let clr = document.getElementById('clr').innerHTML;
 document.getElementById('input').value = "";
//document.getElementById('input').value = val + ' ' + clr + ' ';

}


function type_plus() {
let plus = document.getElementById('plus').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val + ' ' + plus + ' ';
}

function type_dot() {
let dot = document.getElementById('dot').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val  + dot ;
}

function type_multiply() {
let multiply = document.getElementById('multiply').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val + ' ' + multiply + ' ';
}
function type_minus() {
let minus = document.getElementById('minus').innerHTML;
let val = document.getElementById('input').value;
document.getElementById('input').value = val + ' ' + minus + ' ';
}



function type_ans() {
let val = document.getElementById('input').value;    
let arr = val.split(" ")
//console.log (arr) ;
let num1;
let num2 ;
let opr;
let res = parseFloat(arr[0]);
let i =2;
let j= 1;
let n =arr.length;
//console.log(res);

while(i<n || j<n){
num1 = parseFloat(arr[i]); // 2 5 2 5
// num2 = parseFloat(arr[i+2]); //


opr = arr[j]; // * * + -
// console.log (num1) ;
//console.log (opr) ;


 if(opr == '+'){
    if(res!= undefined){
        res = res + num1;  //110 + 2 = 112
      }
      
        
 }

  if(opr == '*'){
      if(res!= undefined){
        res = res * num1;   // 11 * 2 = 22 // 22 *5 = 110
      }
    
     
        
 }

 if(opr == '-'){
    if(res!= undefined){
        res = res - num1; // 112 -5 = 107
      }
      
    
 }

 if(opr == '/'){
     
    if(res!= undefined){
        res = res / num1;
      }

   
}


//console.log(res);


i = i+2;  
j = j+2;


}

//console.log(res);
document.getElementById('input').value = res;

}