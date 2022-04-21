//Clases Paciente y Turno
class paciente{
    constructor(nombre,apellido,dni){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
    }
    listaTurnos = [];
}
class turno{
    constructor(id, inicial, validez, fecha,horarios){
        this.id=id;
        this.inicial=inicial;
        this.validez=validez;
        this.horarios=horarios;
        this.fecha=fecha;
    }
}
//Lista pacientes que usamos para saber quien reservo turno.
const listaPacientes = [];

$(document).ready(()=>{

    const turno1= new turno(1,"Laboratorio","Villa Urquiza","20/06/2021","9:00");
    const turno2= new turno(2,"Laboratorio","Villa Urquiza","20/06/2021","10:00");
    const turno3= new turno(3,"Vacunas","Villa Urquiza","20/06/2021","9:00");
    const turno4= new turno(4,"Vacunas","Villa Urquiza","20/06/2021","10:00");
    const turno5= new turno(5,"inicial Medico","Villa Urquiza","20/06/2021","9:00");
    const turno6= new turno(6,"inicial Medico","Villa Urquiza","20/06/2021","10:00");
    //turnos Belgrano
    const turno7 = new turno(7,"Laboratorio","Belgrano","20/06/2021","9:00");
    const turno8 = new turno(8,"Laboratorio","Belgrano","20/06/2021","10:00");
    const turno9 = new turno(9,"Vacunas","Belgrano","20/06/2021","9:00");
    const turno10 = new turno(10,"Vacunas","Belgrano","20/06/2021","10:00");
    //turnos flores
    const turno11=new turno(11,"Laboratorio","Flores","20/06/2021","9:00");
    const turno12=new turno(12,"Laboratorio","Flores","20/06/2021","10:00");
    const turno13=new turno(13,"inicial Medico","Flores","20/06/2021","9:00");
    const turno14=new turno(14,"inicial Medico","Flores","20/06/2021","10:00");
    //Cargar Turnos en el localStorage
    const arrayTurnos = [turno1,turno2,turno3,turno4,turno5,turno6,turno7,turno8,turno9,turno10,turno11,turno12,turno13,turno14];
    for (const turno of arrayTurnos) {
        localStorage.setItem(turno.id,JSON.stringify(turno));
    }



})
function generarCuitValido(dni,inicial){
    let centro
    if(dni.length==8){
        centro=dni;    
    }else{
        centro="0"+dni;
    }
    
    let scuitParcial = inicial+centro;
    let arraycuitParcial = Array.from(scuitParcial);
    console.log(arraycuitParcial);
    let totalParcial=0;;
    let contador=0;
    arraycuitParcial.forEach(snumero => {
        let iNumero = parseInt(snumero);
        switch(contador){
            case 0: 
                totalParcial+=(iNumero*5);
                break;
            case 1:
                totalParcial+=(iNumero*4);
                break;
            case 2:
                totalParcial+=(iNumero*3);
                break;
            case 3:
                totalParcial+=(iNumero*2);
                break;
            case 4:
                totalParcial+=(iNumero*7);
                break;
            case 5:
                totalParcial+=(iNumero*6);
                break;
            case 6:
                totalParcial+=(iNumero*5);
                break;
            case 7:
                totalParcial+=(iNumero*4);
                break;
            case 8:
                totalParcial+=(iNumero*3);
                break;
            case 9:
                totalParcial+=(iNumero*2);
                break;
            default:
                break;
        }
        console.log(totalParcial);
        console.log(contador);
        contador+=1;
        
    });
    console.log(totalParcial);
    let IverificadorParcial=(totalParcial%11);
    let verificador = 11-IverificadorParcial;
    scuitParcial = inicial+centro+verificador;
    console.log(scuitParcial);
    return scuitParcial;

}

//Genero turnos que se guardan en el json con el boton generar turnos

function crearTabla(tabla){
    let dni=document.getElementById("dni").value;
    let inicial;
    if(document.getElementById("gridRadios1").checked){
        inicial=document.getElementById("gridRadios1").value;
    }else if(document.getElementById("gridRadios2").checked){
        inicial=document.getElementById("gridRadios2").value;
    }else if(document.getElementById("gridRadios3").checked){
        inicial=document.getElementById("gridRadios3").value;
    }
    else{
        inicial=document.getElementById("gridRadios4").value;
    }
    let validez;
    if(document.getElementById("Radios1").checked){
        validez=document.getElementById("Radios1").value;
    }else{
        validez=document.getElementById("Radios2").value;
    }
    let cuit = generarCuitValido(dni,inicial);

    if(tabla.hasChildNodes()){
        while(tabla.hasChildNodes()>=1){
            tabla.removeChild(tabla.firstChild);
        }
    }
    $("#tableTurnos").append("<th scope=\"col\">Cuit</th>")
    $("#tableTurnos").append(`<tbody id="bodyTabla"></tbody>`)
    let bodyTabla = document.getElementById("bodyTabla")
    let contador = 1;
    let filaTurno = document.createElement("tr");
    filaTurno.innerHTML= " <tr><th scope=\"row\">"+cuit+"</th>";
    bodyTabla.appendChild(filaTurno);
    
        
      
}

//Genero Tabla Turnos
    $("#tabla").append(`<table class="table" id="tableTurnos"></table>`);
    let table = document.getElementById("tableTurnos");
//funcion del boton Turnos disponibles.
$("#turnos").click(function(){
    crearTabla(table);
    return false;
})











