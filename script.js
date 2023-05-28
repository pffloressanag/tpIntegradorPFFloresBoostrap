function resumen(){

    let cant = document.getElementById('cant').value;

    let operando = document.getElementById('selectOper').value;

    let total = 0;
    

    if(operando == 'estudiante'){
        total = parseInt(((200*cant)) - parseInt((cant*200*0.80)));
    }else if(operando == 'trainee'){
        total = parseInt(((200 * cant)) - parseInt((cant*200*0.50)));
    }else{
        total = parseInt(((200 * cant)) - parseInt((cant*200*0.15)));
    }

    let actualizar = document.getElementById('total_pagar').innerHTML = total;

}

function borrarCampos() {
    document.getElementById("nombre").value = ""; 
    document.getElementById("apellido").value = ""; 
    document.getElementById("correo").value = "";
    document.getElementById("cant").value = ""; 
    document.getElementById("total_pagar").innerHTML = ""; 
  }