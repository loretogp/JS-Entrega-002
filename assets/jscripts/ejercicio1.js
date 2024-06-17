function agregaBorde() {
    if (document.getElementById("imagen_urza").style.border =='none'){
        document.getElementById("imagen_urza").style.borderRadius = '8px';
        document.getElementById("imagen_urza").style.border = '4px solid green';
    }else{
        document.getElementById("imagen_urza").style.borderRadius = '0px';
        document.getElementById("imagen_urza").style.border = 'none';
    }
}


function calcularCantidadStickers() {
    let cantidad1 = Number(document.getElementById('sticker_gideon').value);
    let cantidad2 = Number(document.getElementById('sticker_jace').value);
    let cantidad3 = Number(document.getElementById('sticker_liliana').value);

    let total = cantidad1 + cantidad2 + cantidad3;
    if (total > 10) {
        document.getElementById("respuesta_valida").innerHTML = ("Llevas demasiados stickers");
    } else {
        document.getElementById("respuesta_valida").innerHTML = ("Llevas " + total + " stickers");
    }
}


function validaPassword(){
    let valor1 = document.getElementById('valor_1').value;
    let valor2 = document.getElementById('valor_2').value;
    let valor3 = document.getElementById('valor_3').value;

    let valorConcatenado = valor1 + valor2 + valor3;
    if(valorConcatenado == "911"){
        document.getElementById("mensaje_verifica").innerHTML = "Password 1 correcto";
        document.getElementById("mensaje_ok").style.display = "block";
        document.getElementById("mensaje_ok").style.color = "green";
        document.getElementById("mensaje_nok").style.display = "none";
    } else if (valorConcatenado == "714"){
        document.getElementById("mensaje_verifica").innerHTML = "Password 2 correcto";
        document.getElementById("mensaje_ok").style.display = "block";
        document.getElementById("mensaje_ok").style.color = "green";
        document.getElementById("mensaje_nok").style.display = "none";
    } else{
        document.getElementById("mensaje_verifica").innerHTML = "Password incorrecto";
        document.getElementById("mensaje_nok").style.display = "block";
        document.getElementById("mensaje_nok").style.color = "red";
        document.getElementById("mensaje_ok").style.display = "none";
    }
}