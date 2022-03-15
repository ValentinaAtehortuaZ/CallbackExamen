/* Han solo y Chewbacca deben infiltrarse en el planeta
yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte,
como distractor el imperio ha creado planos falsos y se tiene el dato de
que el número de serie de estos planos falsos comienza por encima del
número 10; es decir todos los planos falsos tienen números de serie
consecutivos comenzando desde el #11. SOLO si se obtiene un plano
verdadero Chewbacca y Han pueden abordar su nave y ejecutar un
mensajeen consola avisando que han despegado
Configure la rutina necesaria para despegar la nave utilizando callbacks*/

function recibirNumeros(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10,callback){

    let numeros=Array(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10)

    const filtrarNumeros = numeros.filter(function(numero){

        return(numero>=1 && numero<=10 )
    })
       
  console.log(filtrarNumeros)
   

    callback(filtrarNumeros)

}
                                                                   

recibirNumeros (1,2,3,7,9,10,17,18,19,20,function(filtrarNumeros){

    if(filtrarNumeros.length>0 ){
        console.log(`Bienvenidos a bordo señores Han solo y Chewbacca, pueden abordar la nave y despegar, los planos encontrados son ${filtrarNumeros} `)
    }
    else{
        console.log(` Lo siento señores Han solo y  Chewbacca, no han conseguido los planos de las naves... SIGAN INTENTANDO`)
    }

    
    filtrarNumeros.forEach(function(filtrarNumeros) {
        numeros=filtrarNumeros

    })

    console.log(` Los números que sirve para despegar que fueron encontrados son: ${filtrarNumeros.length}`)
})

