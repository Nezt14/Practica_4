function OrdenComida(Orden){
    return new Promise((resolve, reject)=>{
        console.log(`verificando su orden de ${Orden}...`)
        setTimeout(()=>{
            if(Orden){
                resolve(`Orden de ${Orden} ingresada correctamente `)
            }
            else{
                reject(`No se a ingresado una orden`)
            }
        },2000)
    })
}
OrdenComida("Pupusas") //ingrese la orden aqui

.then(res=>{
    console.log(`Mensaje: ` + res)
})
.catch(error=>{
    console.log(`Falla: `+ error)
})