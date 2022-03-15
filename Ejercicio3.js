/* Grogu ha iniciado su entrenamiento Jedi y debe
activar un software que permita clasificar su dieta:
alimento = {
 nombre,
 tipo (Puede ser vegetal, animal, insecto),
 nivel de energía (números entre 100-500)

}
Cree un programa que permita recibir 50 alimentos diferentes y
mediante una función primaria después de 5 segundos se
pueda obtener solo los alimentos de tipo vegetal que entreguen
mas de 200 unidades de energía. Finalmente, una función
callback debe permitir entregar la sumatoria de niveles de
energía entregados por los alimentos vegetales consumidos en
la dieta de Grogu.*/

let alimento=["maiz","carne","papas","pera","coco","huevo","carne","cucaracha"]
let tipo=["vegetal","animal","insecto"]

let total

let alimentos={}
for(let i=0; i<50; i++){
    let alimento={}
    
   alimento.nombreAlimento= (alimentos[Math.floor(Math.random()*alimentos.length)])
   alimento.tipoAlimento= (tipo[Math.floor(Math.random()*tipo.length)])
   alimento.nivelEnergiaAlimento= ((Math.floor((Math.random()*(500-100+1))+100)))

   alimentos.push(alimento)

 }


  function  clasificarAlimentos(alimentos,callback)

    setTimeout(function(){
    
        const filtrarAlimentos = alimentos.filter(function(alimento){

            return(tipoAlimento=="vegetal" && nivelEnergiaAlimento>=200 )

        })
           
      console.log(filtrarAlimentos)
       
    
        callback(filtrarAlimentos)
       
    },5000)



    clasificarAlimentos(alimentos,function(filtrarAlimentos){


    })




