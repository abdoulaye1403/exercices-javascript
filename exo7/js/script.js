let a = Number(prompt("entrez une valeur comprise entre 10 et 20"))
while(a<=10 || a>=20 ){
                if(a<=10){
                  alert('plus grand !')
                }else if(a>=20 ){
                   alert('plus petit !')
                }
                a = Number(prompt("entrez une valeur comprise entre 10 et 20"))     
}
alert("la valeur saisie est :" + a)