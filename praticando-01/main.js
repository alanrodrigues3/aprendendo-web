window.onload = function(){
    var segundos = 00;
    var dezenas = 00;
    var maisDezenas = document.getElementById("dezenas")
    var maisSegundos = document.getElementById("segundos")
    var buttonStart = document.getElementById ('button-start');
    var buttonStop = document.getElementById ('button-stop');
    var buttonReset = document.getElementById ("button-reset");
    var interval ; 

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTime, 10);
    }
    
    buttonStop.onclick = function(){
        clearInterval(interval);
    }
    buttonReset.onclick = function(){
        clearInterval(interval);
        dezenas = "00";
        segundos = "00";
        maisDezenas.innerHTML = dezenas;
        maisSegundos.innerHTML = segundos;

    }
    function startTime(){
        dezenas++;

        if(dezenas <= 99){
            maisDezenas.innerHTML =  + dezenas;
        }

        if(dezenas < 9 ){
            maisDezenas.innerHTML = dezenas;
        }

        if(dezenas > 99){
            console.log("segundos");
            segundos++;
            maisSegundos.innerHTML = "0" +segundos;
            dezenas = 0;
            maisDezenas.innerHTML = "0" + 0;
        }

        if(segundos > 9){
            maisSegundos.innerHTML = segundos;
        }
    }

}