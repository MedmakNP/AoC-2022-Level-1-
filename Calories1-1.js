const fs = require('fs');
let input = fs.readFileSync('input.txt','utf-8');

const arrCalories = input.split('\n').map(Number);
let maxCalories = 0;

function MaxSum(){
    for(let i = 0; i<arrCalories.length; i++){
        if(arrCalories[i] != 0){
            if(arrCalories[i] > maxCalories){
                maxCalories = arrCalories[i]
            }
        }
        else{
            if(i<arrCalories.length-10){
                for(j = i;j<arrCalories.length;j++){
                    if(arrCalories[j+1] != 0){
                        arrCalories[j+1] = arrCalories[j] + arrCalories[j+1];
                    }
                    else{
                        break;
                    };
                };
            };           
       } ;
        
    };
}
MaxSum();

console.log(maxCalories)           