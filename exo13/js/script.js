let numbers = []
var i =1
let a = Number(prompt("Entrez le nombre numero "+ i +' :'))
while(a!=0){
       
    while(numbers.find((t) => t== a)){
                    a = Number(prompt("Entrez le nombre numero "+ i +' :'))
    }
    numbers.push(a);
    i +=1
  }
document.write(numbers)

let maxNumber = Math.max(...numbers);

document.write("la valeur du plus grand est : " + maxNumber)
document.write("elle  etait a la position :" + (numbers.indexOf(maxNumber)))
