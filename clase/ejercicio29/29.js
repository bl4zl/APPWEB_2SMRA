document.addEventListener("DOMContentLoaded", function(){
    
    /*Funciones */ 
    function capitalizar(texto){

        let espacio = false;
        let salida = "";
        for(let i = 0; i < texto.length; i++){
            if((i == 0) || (espacio == true && texto[i] != " ")){
                salida += texto[i] = texto[i].toUpperCase();
                espacio = false;
            }else if(texto[i] == " "){
                    espacio = true;
                    salida += texto[i];
            }else{
                salida += texto[i];
            }
                
        }

        return salida

    }
    
    console.log(capitalizar("paco come almendras"))


});