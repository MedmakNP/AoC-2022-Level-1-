const fs = require('fs');
let input = fs.readFileSync('input.txt','utf-8');

const arrCalories = input.split('\n').map(Number);
let maxCalories = 0;
let maxCalories2 = 0;
let arrMax = [];
let Trmax = [];
function MAXCALORIES(){
    for(let i = 0; i<arrCalories.length; i++){
        if(arrCalories[i] != 0){
            if(arrCalories[i] > maxCalories){
                maxCalories = arrCalories[i]
                Trmax = arrMax.push(arrCalories[i])
            }
        }
        else{
            if(i<arrCalories.length-10){
                for(let j = i;j<arrCalories.length;j++){
                    if(arrCalories[j+1] != 0){
                        arrCalories[j+1] = arrCalories[j] + arrCalories[j+1];
                    }
                    else {
                       break;
                    }; 
                };
            };            
       };
        
    }; 
};
function MaxNumber(){
    for(let i = 0; i<arrCalories.length; i++){
        if(arrCalories[i] != 0){
            if(arrCalories[i] > maxCalories2){
                maxCalories2 = arrCalories[i]
                Trmax = arrMax.push(arrCalories[i])
            }
        }
       
    };
} 
function sum (){ 
    MaxNumber();
    MAXCALORIES();
    Trmax = arrMax.sort((a, b) => a - b)
    Trmax = arrMax.slice(-3)
       maxCalories = Trmax[0] + Trmax[1] + Trmax[2]  
}
sum();
console.log(maxCalories)
