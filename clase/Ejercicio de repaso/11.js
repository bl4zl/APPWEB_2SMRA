document.addEventListener("DOMContentLoaded", function(){

    function FindLargestNumber(array){
        
        let max = array[0];
        for(let i = 0; i < array.lenght; i++){
            if (array[i] > max){
                max = array[i];
            }
        }

        return max;
    }

    const num_ele_usr = parseInt(prompt("¿Cuantos elementos vas a introducir en el array?"));
    let lst_usr = []

    for(let i = 0; i < num_ele_usr; i++){
        const num_usr = parseFloat(prompt("introduce un numero plis"))
        lst_usr.push(num_usr)

    }

    alert("El numero maximo de la lista " + lst_usr + " es " + FindLargestNumber(lst_usr))

});