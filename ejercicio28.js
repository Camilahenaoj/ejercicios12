var uno = prompt("Ingresa un numero");
var dos = 2;
var perfecto = 0;

    while(dos <= uno ){
            if (uno % dos == 0){
                perfecto = perfecto +(uno / dos);
            }
        dos = dos +1;
    }

        if(perfecto == uno){
            console.log ("El numero es perfecto")
        }

        else{
            console.log("El numero no es perfecto")
        }