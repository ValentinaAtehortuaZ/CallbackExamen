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

let alimentos=["maiz","carne","papas","pera","coco","huevo","carne"]
let tipos=["vegetal","animal","insecto"]
//let nivelEnergiaAlimento=[200,400,500,100,120]


let comidas=[]
for(let i=0; i<50; i++){
    let comida={}
    
   comida.alimentos= (alimentos[Math.floor(Math.random()*alimentos.length)])
   comida.tipos= (tipos[Math.floor(Math.random()*tipos.length)])
   comida.nivelEnergiaAlimento= ((Math.floor((Math.random()*(500-100+1))+100)))


   comidas.push(comida)
   //console.log(comida)
 }


 function  clasificarAlimentos(comidas,callback){
  let sumatoriasEnergiaAlimentos=0

  setTimeout(function(){

    comidas.forEach(function(comida){
      if(comida.tipos == 'vegetal' && comida.nivelEnergiaAlimento >= 200){
        sumatoriasEnergiaAlimentos = sumatoriasEnergiaAlimentos + comida.nivelEnergiaAlimento
          console.log(comida.alimentos);

      }
    });

    console.log(sumatoriasEnergiaAlimentos)
       
    
      callback(sumatoriasEnergiaAlimentos)

  },5000)

  
}

clasificarAlimentos(comidas,function(sumatoriasEnergiaAlimentos){
  console.log(`la sumatoria de los niveles de energia son ${sumatoriasEnergiaAlimentos}`)
})