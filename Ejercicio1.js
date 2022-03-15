/*Yoda el maestro jedí, necesita asignar a sus aprendices
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años

Inicialmente, se debe programar una función que asocie los datos de:
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto (10
segundos) y una vez este objeto sea creado se debe llamar a una función
secundaria que clasifique y muestre en consola la actividad asignada al
Padawan*/

function RecibirAprendiz(nombre,edad,estatura,planeta,callback){
    setTimeout(function(){
        let aprendiz={
            nombre:nombre,
            edad:edad,
            estatura:estatura,
            planeta:planeta
        }
       callback(aprendiz) 
    },10000)  
}
RecibirAprendiz(`Jorus`,13,'1.50','venus',function(aprendiz){
    if(aprendiz.edad<15){
        console.log( "Bienvenid@: " + aprendiz.nombre +  ",tu actividad es Manejo de fuerza ")
       
    }else{
        console.log("Bienvenid@: " + aprendiz.nombre+ " tu actividad es Manejo del sable de luz ")
      
    }
})