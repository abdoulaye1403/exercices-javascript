
// Exercice5 :

let a1 = parseFloat(prompt("entrez un nombre a :"));
let b1 = parseFloat(prompt("entrez un nombre b :"));
let c = parseFloat(prompt("entrez un nombre c :"));
if(a1 == 0){
               alert("veuillez entrer un nombre non nul");
               parseFloat(prompt("entrez une valeur de a :"))
               
}else{
               let delta = b1**2 - 4*a1*c
               if(delta>0){
                              x1 = (-b1-Math.sqrt(delta))/(2*a1)
                              x2 = (-b1+Math.sqrt(delta))/(2*a1)
                              document.write("l'equation admet deux solutions distinctes qui sont: ")
                              document.write(x1);
                              document.write(x2)
               }else if(delta == 0){
                         x0 = -b1/2*a1
                         document.write("l'equation admet une solution double qui est: " + x0)
               }
               else{
                              document.write("l'equqtion n'admet pas de solution")
               }
}



