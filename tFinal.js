$(document).ready(()=>{
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
    if(verificador==10){
        verificador=0;
    }
    scuitParcial = inicial+centro+verificador;
    console.log(scuitParcial);
    return scuitParcial;

}



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


    $("#tabla").append(`<table class="table" id="tableTurnos"></table>`);
    let table = document.getElementById("tableTurnos");

$("#turnos").click(function(){
    crearTabla(table);
    return false;
})











