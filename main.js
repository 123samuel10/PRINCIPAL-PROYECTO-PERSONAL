//primer estudiante
let NguardarNota=[];
let NguardarEstudiante=[];
let guardandoTodasLasNotas=[];

function enviar1(){
    let nombreEstudiante=document.getElementById("nombre").value;
    alert(`el estudiante es ${nombreEstudiante}`)

}
function enviar2(){
 

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
        alert(`La nota mayor obtenida por el estudiante es: ${funcionalidad(NguardarNota)}`)
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
    alert(`La nota menor obtenida por el estudiante es: ${funcionalidadDos(NguardarNota)}`)
}

let guardarPromedio=[];
function promedioEstudiante(){
    let suma=0;
    let promedio=0;
    for(let i of NguardarNota){
        suma+=i;
        promedio=suma/NguardarNota.length;
       
     
    }
    alert(`El promedio que obtuvo ${NguardarEstudiante} es: ${promedio}`)
    guardarPromedio.push(promedio);
}
// --------------------------------------------------------------------------------------
//segundo estudiante
let guardarNotasSegundoEstudiante=[];
function enviar3(){
    let nombreEstudianteDos=document.getElementById("nombreDos").value;
    alert(`el estudiante es ${nombreEstudianteDos}`)
}

function enviar4(){

    let cantidadDeNotaUno=document.getElementById("notaNumero1").value;
    let cantidadDeNotaDos=document.getElementById("notaNumero2").value;
    let cantidadDeNotaTres=document.getElementById("notaNumero3").value;
    let cantidadDeNotaCuatro=document.getElementById("notaNumero4").value;
  

    cantidadDeNotaUno=parseInt(cantidadDeNotaUno);
    cantidadDeNotaDos=parseInt(cantidadDeNotaDos);
    cantidadDeNotaTres=parseInt(cantidadDeNotaTres);
    cantidadDeNotaCuatro=parseInt(cantidadDeNotaCuatro);
    guardarNotasSegundoEstudiante.push(cantidadDeNotaUno,cantidadDeNotaDos,cantidadDeNotaTres,cantidadDeNotaCuatro)

 
}
function NOTAMayorE(){
    let notaMayor=0;
    for(let i in guardarNotasSegundoEstudiante){
        if( guardarNotasSegundoEstudiante[i]>notaMayor){
            notaMayor=guardarNotasSegundoEstudiante[i];
        }
       
    }
    alert(`la nota mayor obtenida por el estudiante:${notaMayor}`)
}
function notaMenorDos(){
    let notamenor=2000;
    for(let i in guardarNotasSegundoEstudiante){
        if(guardarNotasSegundoEstudiante[i]<notamenor){
            notamenor=guardarNotasSegundoEstudiante[i]
        }
   
    }
    alert(`la nota menor obtenida por el estudiante es ${notamenor}`)
}
function promedioEstudianteDos(){
    let suma2=0;
    let promedio2=0;
    for(let i of guardarNotasSegundoEstudiante){
        suma2+=i;
        promedio2=suma2/guardarNotasSegundoEstudiante.length;

     
    }
    alert(`El promedio que obtuvo es: ${promedio2}`)
   
}
// ------------------------------------------------------------------------
//tercer estudiante
let guardarNotasTercerEstudiante=[];
function enviar5(){
    let nombreEstudianteTres=document.getElementById("nombreTres").value;
    alert(`el estudiante es ${nombreEstudianteTres}`)
}

function enviar6(){

    let cantidadDeNotaUno3=document.getElementById("notaNumeroE1").value;
    let cantidadDeNotaDos3=document.getElementById("notaNumeroE2").value;
    let cantidadDeNotaTres3=document.getElementById("notaNumeroE3").value;
    let cantidadDeNotaCuatro3=document.getElementById("notaNumeroE4").value;
  

    cantidadDeNotaUno3=parseInt(cantidadDeNotaUno3);
    cantidadDeNotaDos3=parseInt(cantidadDeNotaDos3);
    cantidadDeNotaTres3=parseInt(cantidadDeNotaTres3);
    cantidadDeNotaCuatro3=parseInt(cantidadDeNotaCuatro3);
    guardarNotasTercerEstudiante.push(cantidadDeNotaUno3,cantidadDeNotaDos3,cantidadDeNotaTres3,cantidadDeNotaCuatro3)

 
}
function notaMayorE3(){
    let notaMayor3=Math.max.apply(null,guardarNotasTercerEstudiante);
    alert(`la nota mayor obtenida por el estudiante:${notaMayor3}`)
}
function notaMenorE3(){
    let notaMenor3=Math.min.apply(null,guardarNotasTercerEstudiante);
    alert(`La nota menor obtenida por el estudiante: ${notaMenor3}`)
}
function promedioEstudianteTres(){
    let promedio3=0;
    let Suma3=0;
    for(let i of guardarNotasTercerEstudiante){
        Suma3=Suma3+i
        promedio3=Suma3/guardarNotasTercerEstudiante.length
    }
    alert(`El promedio obtenido por el estudiante es ${promedio3}`)
}
//----------------------------------------------------------------------------------------------------
///CUatro estudiante.
let guardareNotasCuartoEstudiante=[];
function enviarEstudinate4(){
    let nombreDeEstudiante4=document.getElementById("nombreCuatro").value;
    alert(`El estudiante es ${nombreDeEstudiante4}`)
}
function enviarNotasE4(){
    let cantidadDeNotaUno4=document.getElementById("notaNumeroEstudinate4.1").value;
    let cantidadDeNotaDos4=document.getElementById("notaNumeroEstudinate4.2").value;
    let cantidadDeNotaTres4=document.getElementById("notaNumeroEstudinate4.3").value;
    let cantidadDeNotaCuatro4=document.getElementById("notaNumeroEstudinate4.4").value;
  

    cantidadDeNotaUno4=parseInt(cantidadDeNotaUno4);
    cantidadDeNotaDos4=parseInt(cantidadDeNotaDos4);
    cantidadDeNotaTres4=parseInt(cantidadDeNotaTres4);
    cantidadDeNotaCuatro4=parseInt(cantidadDeNotaCuatro4);
    guardareNotasCuartoEstudiante.push(cantidadDeNotaUno4,cantidadDeNotaDos4,cantidadDeNotaTres4,cantidadDeNotaCuatro4)

}
function notaMayorE4(){
    
        let notaMayorEstudianteCuatro=0;
        guardareNotasCuartoEstudiante.forEach(element=>{
            if(element>notaMayorEstudianteCuatro){
                notaMayorEstudianteCuatro=element;
            }
        })
    alert(`La nota mayor obtenida por el estudiante es ${notaMayorEstudianteCuatro}`)
}

function notaMenorE4(){
  let notaMenorCuatro4=1000;
  for(let i=0; i<guardareNotasCuartoEstudiante.length;i++){
    if(guardareNotasCuartoEstudiante[i]<notaMenorCuatro4){
        notaMenorCuatro4=guardareNotasCuartoEstudiante[i]
    }
  }
  alert(notaMenorCuatro4)

}
function promedioEstudianteCuatro(){
    let promedio4=0;
    let sumaEst4=0;
    for(let i=0; i<guardareNotasCuartoEstudiante.length;i++){
        sumaEst4=sumaEst4+guardareNotasCuartoEstudiante[i];
        promedio4=sumaEst4/guardareNotasCuartoEstudiante.length;
      
    }
    alert("El promedio obtenido por el estudiante es:"+  promedio4)
}
// -----------------------------------------------------------------------------------------------
//quinto estudiante
let guardareNotasQuintoEstudiante=[];
function enviarEstudiante5(){
    let estudiante5=document.getElementById("nombreQuinto").value;
    alert("el estudiante es "+" "+estudiante5)
}
function enviarNotasE5(){
    let cantidadDeNota1=document.getElementById("notaNumeroEstudinate5.1").value;
    let cantidadDeNota2=document.getElementById("notaNumeroEstudinate5.2").value;
    let cantidadDeNota3=document.getElementById("notaNumeroEstudinate5.3").value;
    let cantidadDeNota4=document.getElementById("notaNumeroEstudinate5.4").value;

    cantidadDeNota1=parseInt(cantidadDeNota1);
    cantidadDeNota2=parseInt(cantidadDeNota2);
    cantidadDeNota3=parseInt(cantidadDeNota3);
    cantidadDeNota4=parseInt(cantidadDeNota4);
    guardareNotasQuintoEstudiante.push(cantidadDeNota1,cantidadDeNota2,cantidadDeNota3,cantidadDeNota4);

}

function notaMayorE5(){
    let numero=0;
   
        guardareNotasQuintoEstudiante.forEach(element=>{
            if(element>numero){
                numero=element;
            }
        })
        alert(`la nota mayor obtenida es ${numero}`)

    }
function notaMenorE5(){
    let numerob5=1000;
    for(let i=0;i<guardareNotasQuintoEstudiante.length;i++){
        if(guardareNotasQuintoEstudiante[i]<numerob5){
            numerob5=guardareNotasQuintoEstudiante[i];
        }
    }
    alert(`la nota menor obtenida es ${numerob5}`)
}
function promedioEstudianteQuinto(){
    let promedio=0;
    let suma=0;
     for(let i=0; i<guardareNotasQuintoEstudiante.length;i++){
        suma+=guardareNotasQuintoEstudiante[i]
        promedio=suma/guardareNotasQuintoEstudiante.length;   
     }
     alert(`el promedio del estudiante es ${promedio}`)
   
}









// suma del promedio de todos los estudiantes
function total(){
let suma1=0;
let promedio1=0;


for(let i of NguardarNota){
    suma1+=i;
   promedio1=suma1/NguardarNota.length;
}
// ----------------------------------
let suma2=0;
let promedio2=0;
for(let i of guardarNotasSegundoEstudiante){
    suma2+=i
    promedio2=suma2/guardarNotasSegundoEstudiante.length
}
// ------------------------------------------------------
let suma3=0;
let promedio3=0;
for(let i of guardarNotasTercerEstudiante){
    suma3+=i;
    promedio3=suma3/guardarNotasTercerEstudiante.length;

}
// ------------------------------------------------------------
let suma4=0;
let promedio4=0;
for(let i of guardareNotasCuartoEstudiante){
    suma4+=i;
    promedio4=suma4/guardareNotasCuartoEstudiante.length;
}
// -------------------------------------------
let suma5=0;
let promedio5=0;
for(let i of guardareNotasQuintoEstudiante){
    suma5+=i
    promedio5=suma5/guardareNotasQuintoEstudiante.length;
}

alert(`el promedio es`+` `+(promedio1+promedio2+promedio3+promedio4+promedio5))
}


function borrar(){
    window.location.reload();
}

