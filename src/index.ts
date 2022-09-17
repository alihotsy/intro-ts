const array:number[] = [11,70,89,100,14,9];
const newArray:number[] = [];



let may = -Infinity;
let men = Infinity;
do {
    array.forEach(number => {
        if(number > may && !newArray.includes(number)){
             may = number;
        }
        if(number < men){
            men = number;
       }
    });
    newArray.push(may);
    may = -Infinity;

    if(!newArray.includes(men)){
        newArray.push(men);

    }
    
    
} while (newArray.length < 3);
console.log(newArray.sort());