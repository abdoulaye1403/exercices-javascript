//exercice1:
const user = {
               name: "Oumar",
               motdepass: "oumar123@"
}



let mp = prompt("Entrez votre mot de passe SVP");

if (user.motdepass == mp){
               document.write("Bienvenue M. " + user.name);
}else{
               document.write("erreur dans le mot de passe")
}

              


