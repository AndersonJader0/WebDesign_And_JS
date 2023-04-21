function calcularMedia(){
        var total = 0;
        var qntd = arguments.length;
        var x = 0;

        while(typeof arguments[x] === 'number'){
            total += arguments[x];
            x++;
        }
        return total / qntd;
}
