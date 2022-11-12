
// Exercice4 :

let annee = parseInt(prompt("veuillez saisir l'annee SVP"));
if(annee % 4 == 0){
               if(annee % 100 !== 0){
                              document.write("c'est bissextile");
               }else{
                              if(annee % 400 == 0){
                                             document.write("c'est bissextile")
                                    }else{
                                             document.write("c'est pas bissextile")
                                    }
                    
               }
}else{
      
               document.write("c'est pas bissextile")
     
}

