//exercice1:
const user = {
               name: "Oumar",
               motdepass: "oumar123@"
}


let resp = document.getElementById("resp");
let mp = prompt("Entrez votre mot de passe SVP");

if (user.motdepass == mp){
               resp.innerText = "Bienvenue M. " + user.name
              // document.write("Bienvenue M. " + user.name);
}else{
               resp.innerText = "oups! erreur dans le mot de passe" 
               //document.write("erreur dans le mot de passe")
}

              


