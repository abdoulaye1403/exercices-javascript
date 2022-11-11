//exercice1:
const user = {
               name: "Oumar",
               motdepass: "oumar123@"
}



let mp = prompt("Entrez votre mot de passe SVP");

if (user.motdepass == mp){
               alert("Bienvenue M. " + user.name);
}else{
               alert("erreur dans le mot de passe")
}

              

// exercice2 :
         let X = parseInt(prompt("Entrez un nombre entier SVP"));
          for(let i=0 ; i<=X ;i++){
               p = 2*i
               console.log(p)
          }

         let Y = parseInt(prompt("Entrez un nombre entier SVP"));
          for(let i=0 ; i<=Y ;i++){
               k = 2*i + 1
               console.log(k)
          }

// Exercice3:
               let  a = parseInt(prompt("entrez un nombre a :"));
               let b = parseInt(prompt("entrez un nombre b :"));
               c = a
               a = b
               b = c
               console.log(a)
               console.log(b)
               
// Exercice4 :

let annee = parseInt(prompt("veuillez saisir l'annee SVP"));
if(annee % 4 == 0){
               if(annee % 100 !== 0){
                              console.log("c'est bissextile");
               }else{
                              if(annee % 400 == 0){
                                             console.log("c'est bissextile")
                                    }else{
                                             console.log("c'est pas bissextile")
                                    }
                    
               }
}else{
      
               console.log("c'est pas bissextile")
     
}

// Exercice5 :

let a1 = parseFloat(prompt("entrez un nombre a :"));
let b1 = parseFloat(prompt("entrez un nombre b :"));
let c = parseFloat(prompt("entrez un nombre c :"));
if(a1 == 0){
               alert("veuillez entrer un nombre non nul")
}else{
               let delta = b1**2 - 4*a1*c
               if(delta>0){
                              x1 = (-b1-Math.sqrt(delta))/(2*a1)
                              x2 = (-b1+Math.sqrt(delta))/(2*a1)
                              console.log("l'equation admet deux solutions distinctes qui sont: ")
                              console.log(x1);
                              console.log(x2)
               }else if(delta == 0){
                         x0 = -b1/2*a1
                         console.log("l'equation admet une solution double qui est: " + x0)
               }
               else{
                              console.log("l'equqtion n'admet pas de solution")
               }
}


