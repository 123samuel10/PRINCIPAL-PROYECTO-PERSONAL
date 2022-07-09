// let arreglo=[3,4,5,56,7,77,100,120,345];

// let suma=0;

// for(let i of arreglo){
//     suma+=i;
// }
// console.log(`La suma de los datos del arreglo es ${suma}`)

// let metodo1=arreglo.reduce(function(valor1, valor2){
//     return valor1 + valor2
// })
// console.log(metodo1)

// let metodo2=arreglo.map(function(arreglo){
//     return arreglo *2
// })
// console.log(metodo2)

// console.log(Math.min.apply(null,arreglo))
// console.log(Math.max.apply(null,arreglo))

// let mayor=(arreglo)=>{
//     let numMyor=0;
//     arreglo.forEach(element => {
//         if(element>numMyor){
//             numMyor=element;
//         }
        
//     });
//     return numMyor;
// }
// console.log(`EL numero mayor es ${mayor(arreglo)}`)

// let segundoMenor=()=>{
//     let segundoMenor=0;
//     arreglo.forEach(elemento=>{
//         if(elemento<mayor(arreglo)){
//             segundoMenor=elemento;
            
//         }
        
//     })
//     return segundoMenor;
// }
// console.log(`El segundo mayor es ${segundoMenor(arreglo)}`)

// let tercerMayor=(arreglo)=>{
//     let tercerMayor=0;
//     arreglo.forEach(elemento=>{
//         if(elemento<segundoMenor(arreglo)){
//             tercerMayor=elemento;
//         }
//     })
// return tercerMayor;
// }
// console.log(`El tercer mayor es: ${tercerMayor(arreglo)}`)


// let cuartoNumeroMayor=(arreglo)=>{
//     let cuartoNUmero=0;
//     arreglo.forEach(element=>{
//         if(element<tercerMayor(arreglo)){
//             cuartoNUmero=element;
//         }
//     })
//     return cuartoNUmero

// }
// console.log(`El cuarto numero mayor es ${cuartoNumeroMayor(arreglo)}`)











// // let mostrar=arreglo.filter(element=>element<=segundoMenor(arreglo))
// // console.log(mostrar)

// console.log("--------------------------------------------------------------------")




// // for(let i=0;i<=10;i++){
// //     let numerosi=prompt(`Digite 10 numeros cualquiera`);
// //     if(numerosi%2===0){
// //         console.log(`${numerosi} es un numero par`)
// //     }else{
// //         console.log(`${numerosi} es un numero impar`)
// //     }
// // }

// let aleatorioNumeros=[300,43,34,244];

// let mayorcito=Math.max.apply(null,aleatorioNumeros);
// console.log("mayor esss"+mayorcito);

// console.log("menor esss"+Math.min.apply(null,aleatorioNumeros))

// let mayorn=0;
// for(let i in aleatorioNumeros){
//     if(aleatorioNumeros[i]>mayorn){
//         mayorn=aleatorioNumeros[i]
//     }
// }
// console.log("utilizando for in"+mayorn)

// let buscar1=(aleatorioNumeros)=>{
//     let numeroB1=0;
//     aleatorioNumeros.forEach(element=>{
//         if(element>numeroB1)
//         numeroB1=element;
//     })
// return numeroB1
// }
// console.log(`el numero mayor del otro arreglo es ${buscar1(aleatorioNumeros)}`)


// let buscar2=()=>{
//     let numeroB2=0;
//     aleatorioNumeros.forEach(element=>{
//         if(element<buscar1(aleatorioNumeros)){
//             numeroB2=element;
//         }
//     })
//     return numeroB2
// }
// console.log(`El numero segundo mayor es ${buscar2(aleatorioNumeros)}`)
// console.log("---------------------------------------------")

// let guardarn=[];
// function boton1(){
//     let numero=document.getElementById("cuadro").value;
//     guardarn.push(numero);
//     console.log("el numero es"+numero)

// }
// function boton(){
//     let numeroMy=0;
//     for(let i in guardarn){
//         if(guardarn[i]>numeroMy){
//             numeroMy=guardarn[i]
//         }
//     }
// alert("el numero mayor es"+numeroMy)
// }


// // let gu=[]
// // let numeroM=0;
// // let variable;
// // for(let i=1;i<=10;i++){
// //     let numero=parseInt(prompt("digite 10 numeros"))
// //     gu.push(numero);

// //   variable=Math.max.apply(null,gu);
// // }
// // console.log("con la variable el numero mayor es"+variable)

// // let buscar3=()=>{
// //     let numer=0;
// //     gu.forEach(element=>{
// //         if(element>numer){
// //             numer=element;
// //         }
// //     })
// //     return numer;
// // }
// // console.log(buscar3(gu))

// let guardarEstudiante=[];
// let guardarNOTAS=[];


// function total(){
//     let estudiante=document.getElementById("estudiante")
//     let nota1=document.getElementById("nota1").value;
//     let nota2=document.getElementById("nota2").value;
//     let nota3=document.getElementById("nota3").value;
//     nota1=parseInt(nota1)
//     nota2=parseInt(nota2)
//     nota3=parseInt(nota3)
//     guardarEstudiante.push(estudiante);
//     guardarNOTAS.push(nota1,nota2,nota3);

//     var mayor=Math.max(nota1,nota2,nota3)
//     alert(`la nota mayor ${mayor}`)

//     var menor=Math.min(nota1,nota2,nota3);
//     alert(`la nota menor ${menor}`)
// }

// function notamayor(){
//     let notaM=0;
//     for(let i in guardarNOTAS){
//         if(guardarNOTAS[i]>notaM){
//             notaM=guardarNOTAS[i]
//         }
//     }
//     alert(`la nota mayor es ${notaM}`)
// }


// // let numarreglo=[45,66,567,7,8,8];

// // let fun=(numarreglo)=>{
// //     let num=0;
// //     numarreglo.forEach(element=>{
// //         if(element>num){
// //             num=element;
// //         }
// //     })
// // return num;
// // }
// // console.log(`----${fun(numarreglo)}`)
// console.log("hoyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")

// var nleo=[6,7,7,8,53,3];

// let num=(nleo)=>{
//     let numeromayor=0;

//     nleo.forEach(element=>{
//         if(element>numeromayor){
//             numeromayor=element;
//         }
//     })
//     return numeromayor;

// }
// console.log(`${num(nleo)}`)




// // let numm=(nleo)=>{
// //     let numeromenor=5000;
// //     nleo.forEach(element=>{
// //         if(element<numeromenor){
// //             numeromenor=element;
// //         }
// //     })
// //     return numeromenor

// // }
// // console.log("yo sabie el numero menor es"+numm(nleo))

// let arreglo54=[5,6,7,8,20];

// let nummayor2=()=>{
//     let numeroMyaor=0;

//     arreglo54.forEach(element=>{
//         if(element>numeroMyaor){
//             numeroMyaor=element;
//         }
//     })
//     return numeroMyaor
// }
// console.log(`mayor es: ${nummayor2(arreglo54)}`)
// console.log(Math.max.apply(null,arreglo54))

// var almuerzos=[
//     {principal:"arepa", postre: "helado"},
//     {principal:"pechuga",postre:"papas"},
//     {principal:"frijoles", postre:"papas"},
//     {principal:"pera",postre:"gaseosa"},
// ]

// let arregloalmuerzos=[];
// for(let i=0; i<almuerzos.length;i++){
//     arregloalmuerzos.push(almuerzos[i].postre)
// }
// console.log(arregloalmuerzos)

// var platos=almuerzos.map(function(mostrar){
//     return mostrar.principal
    
// })
// console.log(platos)
// console.log("-------------------------")

// let arreglo23=[2,4,6,8,10,12];

// for(let i=0;i<arreglo23.length;i++){
//     const item=arreglo23[i]
//     const index=i;
//     console.log(index)
//     console.log(item)
// }

//  let mosyrar=arreglo23.forEach((itm, inde)=>{
//     console.log(itm,inde)

//  })
//  console.log(mosyrar)


// let arr=[2,4,6,78,8,4,4,2,5,7,89];
// let resul=[];

// for(let i=0; i<arr.length;i++){
//     const item=arr[i];

//     if(item>7){
//         resul.push(item)
//     }
// }
// console.log(resul)


// let mos=["samuel","pedro","marcos","samuel"];
// let a=[]
// for(let i=0; i<mos.length;i++){
//     let mi=mos[i];
//     if(mi==="samuel"){
//         a.push(mi)
//     }
// }
// console.log(a)
// -------------------------------------------------------------
let NguardarNota=[];
let NguardarEstudiante=[];

function enviar2(){
    let nombreEstudiante=document.getElementById("nombre").value;
    NguardarEstudiante.push(nombreEstudiante);//guardamos los estudiantes

    let cantidadDeNota1=document.getElementById("nota1").value;
    let cantidadDeNota2=document.getElementById("nota2").value;
    let cantidadDeNota3=document.getElementById("nota3").value;
    let cantidadDeNota4=document.getElementById("nota4").value;

    cantidadDeNota1=parseInt(cantidadDeNota1);
    cantidadDeNota2=parseInt(cantidadDeNota2);
    cantidadDeNota3=parseInt(cantidadDeNota3);
    cantidadDeNota4=parseInt(cantidadDeNota4);
    NguardarNota.push(cantidadDeNota1,cantidadDeNota2,cantidadDeNota3,cantidadDeNota4);

 

}

function notaMayor(){
    let funcionalidad=(NguardarNota)=>{
        let notaMayor=0;
        NguardarNota.forEach(element => {
            if(element>notaMayor){
                notaMayor=element;
            }
            
        });
        return notaMayor;
        }
        alert(`La nota mayor obtenida por el estudiante ${NguardarEstudiante} es: ${funcionalidad(NguardarNota)}`)
}

function notaMenor(){
     funcionalidadDos=(NguardarNota)=>{
        let notaMenor=1000;
        NguardarNota.forEach(element=>{
            if(element<notaMenor){
                notaMenor=element;            
            }
        })
        return notaMenor;

    }
    alert(`La nota menor obtenida por el estudiante ${NguardarEstudiante} es: ${funcionalidadDos(NguardarNota)}`)
}

function promedioEstudiante(){
    let suma=0;
    let promedio=0;
    for(let i of NguardarNota){
        suma+=i;
        promedio=suma/NguardarNota.length;
     
    }
    alert(`El promedio que obtuvo ${NguardarEstudiante} es: ${promedio}`)
}
