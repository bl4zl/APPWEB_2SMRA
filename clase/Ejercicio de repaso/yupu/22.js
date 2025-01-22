document.addEventListener("DOMContentLoaded", function(){

    function numeroDeCaracteres(String, char){

        let cont = 0;
        for(let i = 0; i < String.leght; 1++){
            if(String[i] == char){
                cont++;
            }
        }
        return cont;

    }

})