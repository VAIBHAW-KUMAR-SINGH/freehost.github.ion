let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let flag = false;

// FOR START BUTTON
function start(){
    flag = true;
    stopwatch();
}

// FOR STOP BUTTON
function stop(){
    flag = false;
}

// FOR RESET BUTTON
function reset(){
    flag = false;
    
    
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";

    
}

// FOR STOPWATCH WHEN WE CLICK ON START
function stopwatch(){
    if(flag == true){
        count++;
        if(count == 100){
            sec++;
            count=0;
        }
        if(sec == 60){
            min++;
            sec=0;
        }
        if(min == 60){
            hr++;
            min=0;
        }

        let stringhr = hr;
        let stringMin = min;
        let stringSecond = sec;
        let stringCount = count;

        if(stringhr < 10){
            stringhr = "0" + hr;
        }
        if(stringMin < 10){
            stringMin = "0" + min;
        }
        if(stringSecond < 10){
            stringSecond = "0" + sec;
        }
        if(stringCount < 10){
            stringCount = "0" + count;
        }
        
        document.getElementById('hr').innerHTML = stringhr;
        document.getElementById('min').innerHTML =  stringMin;
        document.getElementById('sec').innerHTML = stringSecond;
        document.getElementById('count').innerHTML = stringCount;

        setTimeout("stopwatch()",20);
    }
    
}



