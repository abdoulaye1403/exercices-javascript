let numbers = []

for(let i = 1; i<= 20 ; i++){
               let a = Number(prompt("Entrez le numero "+ i +' :'))
               while(numbers.find((t) => t== a)){
                               a = Number(prompt("Entrez le numero "+ i +' :'))
               }
               numbers.push(a);
}
document.write(numbers)

let maxNumber = Math.max(...numbers);

document.write("la valeur du plus grand est : " + maxNumber)
document.write("elle  etait a la position :" + (numbers.indexOf(maxNumber)))
