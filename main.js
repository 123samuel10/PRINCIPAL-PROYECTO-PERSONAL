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







// suma del promedio de todos los estudiantes
function total(){
let suma1=0;
let promedio1=0;


for(let i of NguardarNota){
    suma1+=i;
    promedio1=suma1/NguardarNota.length;
}
let suma2=0;
let promedio2=0;
for(let i of guardarNotasSegundoEstudiante){
    suma2+=i
    promedio2=suma2/guardarNotasSegundoEstudiante.length
}
let suma3=0;
let promedio3=0;
for(let i of guardarNotasTercerEstudiante){
    suma3+=i;
    promedio3=suma3/guardarNotasTercerEstudiante.length;
}

alert(`el promedio es`+(promedio1+promedio2+promedio3))
}


function borrar(){
    window.location.reload();
}

