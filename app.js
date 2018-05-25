window.onload = function(){
    function extractUneven(abc){
        let unevenABC = "";
        for(let index = 1; index < abc.length; index+=2){ // equivalente a index = index + 2
            unevenABC += abc.charAt(index);
        }
        //Acá devolvemos el valor de unevenABC
        return unevenABC;
    }

    const abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const abcUneven = extractUneven(abc);
    const bleh = extractUneven(abcUneven);

    let index = 0;

    var printLetter = (character) => { //<--- Contrato de la función
        document.writeln("Letra "+
        index+
        " del abcdario : "+
        character+
        "\n");
    } //<--- qué retorna es parte del contrato, en este caso : nada

    for(index = 0; index < abcUneven.length; index++){
        printLetter(abcUneven.charAt(index));
    }
}
