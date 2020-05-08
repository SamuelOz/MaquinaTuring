const caracterBlanco = 'ß';
var cabecera = undefined;

//
$(function() {
    //Funcionalidad del boton ingresar
    $('#ingresar').click(function(){
        if($('#texto').val() == ""){
            //Muestra un mensaje return falso si no hay valor y true al reves
            $(this).popover('show');
            return false;
        }else{
            var inpObj = document.getElementById("texto");
            if (!inpObj.checkValidity()) {
                alert("Error datos incorrectos");
            } else {
                $(this).popover('hide');
                leerCaracteresDeEntrada();
                main();
                return true;
            }
            
        }
    });
    //Funcionalidad del boton verificar
    $('#verificar').click(
        function(){
            tiempo = 1000 - $("#rango").val();
            cabecera = setInterval(function(){evaluarEntrada()}, tiempo);
            
        }

    );
});
//Muestra el mensaje de error en caso de que este vacio el input
function main() {
    $('[data-toggle="popover"]').popover();
}

//Agrega los caractes que estan en el input
function agregarCaracteres(valor, id_valor, clase){

    contenedor = $('#tabla tbody');
    elemento = `<td id='${id_valor}' class='${clase}'>
                ${valor}
            </td>`
     contenedor.append(elemento);
    return true
}
//Esta funcion resetea la tabla para agregar nuevos datos
function eliminarTabla(){
    $('#tabla  tbody td').remove();
    return true
}
//Crear la tabla apartir de la entrada de datos 
function leerCaracteresDeEntrada(){
    var cadena = $('#texto').val();
        eliminarTabla();
        cadena = caracterBlanco+cadena+caracterBlanco;
        for(i = 0; i < cadena.length; i++){
            agregarCaracteres(cadena.charAt(i), i, "");
        }
        return true;
}



function evaluarEntrada() {
    let cadena = caracterBlanco + $('#texto').val() + caracterBlanco;
    let i = 1;
    let estado='q1';
    setInterval(()=>{
        while(estado != 'q3' ){
            if ((cadena[i] == 'a' || cadena[i] == 'b') && estado == 'q1'){
                console.log("hola");
                $('#'+i).text('a');
                i++;
            }
            if(cadena[i] == caracterBlanco && estado == 'q1'){
                console.log("loco");
                
                estado='q2';
                console.log(estado);
            }
            if(estado == 'q2' ){

                if (i>=1) {
                    i--;
                    console.log(i);
                    console.log(cadena[i]);
                    console.log("mundo");
                    $('#'+i).text('a');
                    
                }
                if (i==0) {
                    $('#'+i).text(caracterBlanco);
                    i=1;
                    estado = 'q3'; 
                    break;
                }
                
            }
        }
        console.log(i);
        
        
    },500);
}



        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
            break;
            }
            }
        }

        function demo(i) {
                var cualquiera = $('#'+ i).text();
                console.log(typeof cualquiera);
                sleep(2000);
                console.log($('#'+ i).text());
        }
        
        //Detiene el indice
        function detenerMaquina(){
            clearInterval(cabecera);
            slepp(2000);
        }
