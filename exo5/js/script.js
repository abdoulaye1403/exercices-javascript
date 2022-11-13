
// Exercice5 :

let a1 = Number(prompt("entrez un nombre a :"));
if(!isNaN(a1)){
               if( a1 != 0){
                let b1 = Number(prompt("entrez un nombre b :"));
                let c = Number(prompt("entrez un nombre c :"));
                   if(!isNaN(b1) & !isNaN(c)){
                    let delta = b1**2 - 4*a1*c
                    if(delta>0){
                                  let  x1 = (-b1-Math.sqrt(delta))/(2*a1)
                                  let  x2 = (-b1+Math.sqrt(delta))/(2*a1)
                                   document.write("l'equation admet deux solutions distinctes qui sont: ")
                                   document.write(x1);
                                   document.write(x2)
                    }else if(delta == 0){
                            let  x0 = -b1/2*a1
                              document.write("l'equation admet une solution double qui est: " + x0)
                    }
                    else{
                                   document.write("l'equqtion n'admet pas de solution")
                    }
                   }else{
                    alert("les valeurs de b et c doivent etre numeriques")
                   }
                              
                              
               }else{
                              alert("la valeur de a ne doit pas etre 0");     
               }
               
}else{
               alert("veuillez saisir un nombre reels")
}


