'use strict';

const container = document.querySelector(".main-content");
const crono = document.querySelector(".crono");
const tempo = document.querySelector(".tempo");
const pomo = document.querySelector(".pomo");

crono.onclick = renderCrono;
tempo.onclick = renderTempo;
pomo.onclick = renderPomo;

let isPomodoro = false;
let isRest = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalCronos;
let intervalTempo;

let secondsPomo = "00";
let minutesPomo = "25";
let hoursPomo = "00";
let secondsRest = "00";
let minutesRest = "05";
let hoursRest = "00";

function renderCrono(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    const clock = document.createElement("div");
    const buttonsContainer = document.createElement("div");
    const playButton = document.createElement("button");
    const pauseButton = document.createElement("button");
    const restartButton = document.createElement("button");

    clock.classList.add("clock-container");
    playButton.classList.add("play-button");
    pauseButton.classList.add("pause-button");
    restartButton.classList.add("restart-button");

    buttonsContainer.classList.add("buttons-container");

    crono.classList.add("active");
    pomo.classList.remove("active");
    tempo.classList.remove("active");

    container.innerHTML = "";
    playButton.innerHTML = "Play";
    pauseButton.innerHTML = "Pause";
    restartButton.innerHTML = "Restart";
    clock.innerHTML = "00:00:00";

    pauseButton.setAttribute("onclick", "pauseClock()");
    restartButton.setAttribute("onclick", "restartClock()");

    container.appendChild(clock);
    container.appendChild(buttonsContainer);
    buttonsContainer.appendChild(playButton);
    buttonsContainer.appendChild(pauseButton);
    buttonsContainer.appendChild(restartButton);

    playButton.addEventListener('click', cronos);
}
function renderTempo(){
    const clock = document.createElement("div");
    const buttonsContainer = document.createElement("div");
    const playButton = document.createElement("button");
    const pauseButton = document.createElement("button");
    const restartButton = document.createElement("button");
    const secondsInput = document.createElement("input");
    const minutesInput = document.createElement("input");
    const hoursInput = document.createElement("input");
    const dots1 = document.createElement("p");
    const dots2 = document.createElement("p");

    clock.classList.add("clock-container");
    buttonsContainer.classList.add("buttons-container");
    playButton.classList.add("play-button");
    pauseButton.classList.add("pause-button");
    restartButton.classList.add("restart-button");

    tempo.classList.add("active");
    crono.classList.remove("active");
    pomo.classList.remove("active");

    secondsInput.setAttribute('minlength', "0");
    secondsInput.setAttribute('maxlength', "2");
    minutesInput.setAttribute('minlength', "0");
    minutesInput.setAttribute('maxlength', "2");
    hoursInput.setAttribute('minlength', "0");
    hoursInput.setAttribute('maxlength', "2");

    secondsInput.setAttribute("placeholder", "00");
    minutesInput.setAttribute("placeholder", "00");
    hoursInput.setAttribute("placeholder", "00");

    secondsInput.setAttribute("id", "secondsInput");
    minutesInput.setAttribute("id", "minutesInput");
    hoursInput.setAttribute("id", "hoursInput");

    playButton.setAttribute("onclick", "temporizar()");
    pauseButton.setAttribute("onclick", "pauseTempo()");
    restartButton.setAttribute("onclick", "renderTempo()");

    dots1.innerHTML = ":";
    dots2.innerHTML = ":";
    clock.innerHTML = "";
    buttonsContainer.innerHTML = "";
    container.innerHTML = "";
    playButton.innerHTML = "Play";
    pauseButton.innerHTML = "Pause";
    restartButton.innerHTML = "Restart";

    container.appendChild(clock);
    container.appendChild(buttonsContainer);
    clock.appendChild(hoursInput);
    clock.appendChild(dots1);
    clock.appendChild(minutesInput);
    clock.appendChild(dots2);
    clock.appendChild(secondsInput);
    
    buttonsContainer.appendChild(playButton);
    buttonsContainer.appendChild(pauseButton);
    buttonsContainer.appendChild(restartButton);

    isPomodoro = false;
    clearInterval(intervalTempo);
}
function renderPomo(){
    const clockPomo = document.createElement("div");
    const clockRest = document.createElement("div");
    const buttonsContainer = document.createElement("div");
    const playButton = document.createElement("button");
    const pauseButton = document.createElement("button");
    const restartButton = document.createElement("button");
    const configButton = document.createElement("button");

    const secondsInputPomo = document.createElement("p");
    const minutesInputPomo = document.createElement("p");
    const hoursInputPomo = document.createElement("p");

    const secondsInputRest = document.createElement("p");
    const minutesInputRest = document.createElement("p");
    const hoursInputRest = document.createElement("p");

    const dots1 = document.createElement("p");
    const dots2 = document.createElement("p");
    const dots3 = document.createElement("p");
    const dots4 = document.createElement("p");

    buttonsContainer.classList.add("buttons-container");

    clockPomo.classList.add("clock-container");
    clockRest.classList.add("clock-container");

    clockPomo.classList.add("clock-pomo");
    clockRest.classList.add("clock-rest");

    pomo.classList.add("active");
    crono.classList.remove("active");
    tempo.classList.remove("active");

    playButton.classList.add("play-button");
    pauseButton.classList.add("pause-button");
    restartButton.classList.add("restart-button");
    configButton.classList.add("config-button");

    secondsInputPomo.innerHTML = secondsPomo;
    minutesInputPomo.innerHTML = minutesPomo;
    hoursInputPomo.innerHTML = hoursPomo;
    secondsInputRest.innerHTML = secondsRest;
    minutesInputRest.innerHTML = minutesRest;
    hoursInputRest.innerHTML = hoursRest;

    secondsInputPomo.setAttribute("id", "secondsInputPomo");
    minutesInputPomo.setAttribute("id", "minutesInputPomo");
    hoursInputPomo.setAttribute("id", "hoursInputPomo");
    secondsInputRest.setAttribute("id", "secondsInputRest");
    minutesInputRest.setAttribute("id", "minutesInputRest");
    hoursInputRest.setAttribute("id", "hoursInputRest");

    playButton.setAttribute("onclick", "startPomodoro()");
    pauseButton.setAttribute("onclick", "pauseTempo()");
    restartButton.setAttribute("onclick", "renderPomo()");
    configButton.setAttribute("onclick", "configPomo()");

    dots1.innerHTML = ":";
    dots2.innerHTML = ":";
    dots3.innerHTML = ":";
    dots4.innerHTML = ":";
    clockPomo.innerHTML = "";
    buttonsContainer.innerHTML = "";
    container.innerHTML = "";
    playButton.innerHTML = "Play";
    pauseButton.innerHTML = "Pause";
    restartButton.innerHTML = "Restart";
    configButton.innerHTML = "Configure";

    container.appendChild(clockPomo);
    container.appendChild(clockRest);
    container.appendChild(buttonsContainer);

    clockPomo.appendChild(hoursInputPomo);
    clockPomo.appendChild(dots1);
    clockPomo.appendChild(minutesInputPomo);
    clockPomo.appendChild(dots2);
    clockPomo.appendChild(secondsInputPomo);

    clockRest.appendChild(hoursInputRest);
    clockRest.appendChild(dots3);
    clockRest.appendChild(minutesInputRest);
    clockRest.appendChild(dots4);
    clockRest.appendChild(secondsInputRest);
    
    buttonsContainer.appendChild(playButton);
    buttonsContainer.appendChild(pauseButton);
    buttonsContainer.appendChild(restartButton);
    buttonsContainer.appendChild(configButton);

    isPomodoro = true;
    clearInterval(intervalTempo);
}
function startPomodoro(){
    if(isPomodoro){
        if(!isRest){
            tempPomo();
        }
        else{
            tempRest();
        }
    }
}
function tempPomo(){
    let button = document.querySelector(".play-button");
    let elementS = document.querySelector("#secondsInputPomo");
    let elementM = document.querySelector("#minutesInputPomo");
    let elementH = document.querySelector("#hoursInputPomo");
    let s;
    let m;
    let h;
    
    if(elementS==null && elementM==null && elementH==null){
        let text = document.querySelector(".clock-pomo").innerHTML;
        let aux = text.split(":");
        s = aux[2];
        m = aux[1];
        h = aux[0];
    }
    else{
        s = elementS.innerHTML;
        m = elementM.innerHTML;
        h = elementH.innerHTML;
    }

    let auxS = s.split("");
    let auxM = m.split("");
    let auxH = h.split("");
    if(auxS[0] == 0){
        if(auxS[1] == 0){
            s = 0;
        }
        else{
            s = auxS[1];
        }
    }
    if(auxM[0] == 0){
        if(auxM[1] == 0){
            m = 0;
        }
        else{
            m = auxM[1];
        }
    }
    if(auxH[0] == 0){
        if(auxH[1] == 0){
            h = 0;
        }
        else{
            h = auxH[1];
        }
    }
    seconds = s;
    minutes = m;
    hours = h;

    isRest = true;
    intervalTempo = setInterval(substractToClock, 1000);
    
    button.disabled = true;
}
function tempRest(){
    let button = document.querySelector(".play-button");
    let elementS = document.querySelector("#secondsInputRest");
    let elementM = document.querySelector("#minutesInputRest");
    let elementH = document.querySelector("#hoursInputRest");
    let sR;
    let mR;
    let hR;
    
    if(elementS==null && elementM==null && elementH==null){
        let text = document.querySelector(".clock-rest").innerHTML;
        let aux = text.split(":");
        sR = aux[2];
        mR = aux[1];
        hR = aux[0];
    }
    else{
        sR = elementS.innerHTML;
        mR = elementM.innerHTML;
        hR = elementH.innerHTML;
    }

    let auxS = sR.split("");
    let auxM = mR.split("");
    let auxH = hR.split("");
    if(auxS[0] == 0){
        if(auxS[1] == 0){
            sR = 0;
        }
        else{
            sR = auxS[1];
        }
    }
    if(auxM[0] == 0){
        if(auxM[1] == 0){
            mR = 0;
        }
        else{
            mR = auxM[1];
        }
    }
    if(auxH[0] == 0){
        if(auxH[1] == 0){
            hR = 0;
        }
        else{
            hR = auxH[1];
        }
    }
    seconds = sR;
    minutes = mR;
    hours = hR;
    isRest = false;
    intervalTempo = setInterval(substractToClock, 1000);
    
    button.disabled = true;
}
function temporizar(){
    let button = document.querySelector(".play-button");
    let elementS = document.querySelector("#secondsInput");
    let elementM = document.querySelector("#minutesInput");
    let elementH = document.querySelector("#hoursInput");
    let s;
    let m;
    let h;
    
    if(elementS==null && elementM==null && elementH==null){
        let text = document.querySelector(".clock-container").innerHTML;
        let aux = text.split(":");
        s = aux[2];
        m = aux[1];
        h = aux[0];
    }
    else{
        s = elementS.value;
        m = elementM.value;
        h = elementH.value;
    }
    let auxS = s.split("");
    let auxM = m.split("");
    let auxH = h.split("");
    if(auxS[0] == 0 || auxS[0] == undefined){
        if(auxS[1] == 0 || auxS[1] == undefined){
            s = 0;
        }
    }
    if(auxM[0] == 0 || auxM[0] == undefined){
        if(auxM[1] == 0 || auxM[1] == undefined){
            m = 0;
        }
    }
    if(auxH[0] == 0 || auxH[0] == undefined){
        if(auxH[1] == 0 || auxH[1] == undefined){
            h = 0;
        }
    }
    seconds = parseInt(s) + 1;
    minutes = m;
    hours = h;
    intervalTempo = setInterval(substractToClock, 1000);
    button.disabled = true;
}
function cronos(){
    let button = document.querySelector(".play-button");
    addToClock();
    intervalCronos = setInterval(addToClock, 1000);
    button.disabled = true;
}
function substractToClock(){
    let clockContainer = document.querySelector(".clock-container");
    let clockPomo = document.querySelector(".clock-pomo");
    let clockRest = document.querySelector(".clock-rest");

    let concat;
    seconds--;
    if(seconds >= 0 && minutes >= 0 && hours >= 0){
        if(minutes == 0 && hours > 0){
            minutes = 59;
            hours--;
            seconds = 59;
        }
        if(seconds == 0 && minutes > 0){
            seconds = 59;
            minutes--;
        }
    }
    else{
        clearInterval(intervalTempo);
        let audio = document.getElementById("audio");
        audio.play();
        audio.addEventListener("ended", endTime);
        //endTime();
    }
    if(seconds < 0){
        concat = concatClock(seconds+1, minutes, hours);
    }
    else{
        concat = concatClock(seconds, minutes, hours);
    }

    if(isPomodoro){
        if(isRest){
            clockPomo.innerHTML = concat;
            
        }
        else{
            clockRest.innerHTML = concat;
        }
    }
    else{
        clockContainer.innerHTML = concat;
    }
}
function addToClock(){
    let clockContainer = document.querySelector(".clock-container");
    let concat;
    seconds++;
    //Avanzar los números
    if(seconds > 59){
        minutes++;
        seconds = 0;
    }
    if(minutes > 59){
        hours++;
        minutes = 0;
    }
    if(hours > 24){
        hours = 0;
    }
    concat = concatClock(seconds, minutes, hours);
    clockContainer.innerHTML = concat;
}
function pauseClock(){
    let button = document.querySelector(".play-button");
    button.disabled = false;
    clearInterval(intervalCronos);
}
function pauseTempo(){
    let button = document.querySelector(".play-button");
    isRest = !isRest;
    button.disabled = false;
    clearInterval(intervalTempo);
}
function restartClock(){
    let clockContainer = document.querySelector(".clock-container");
    let concat;
    hours = 0;
    minutes = 0;
    seconds = 0;
    concat = concatClock(seconds, minutes, hours);
    clockContainer.innerHTML = concat;
}
function concatClock(s, m, h){
    let tempHours, tempMinutes, tempSeconds;
    if(s < 10){
        tempSeconds = "0" + s;
    }
    else{
        tempSeconds = s;
    }
    if(m < 10){
        tempMinutes = "0" + m;
    }
    else{
        tempMinutes = m;
    }
    if(h < 10){
        tempHours = "0" + h;
    }
    else{
        tempHours = h;
    }
    return tempHours + ":" + tempMinutes + ":" + tempSeconds;
}
function endTime(){
    if(isPomodoro){
        if(isRest){
            let clock = document.querySelector(".clock-pomo");
            clock.innerHTML = "";
            const secondsInputPomo = document.createElement("p");
            const minutesInputPomo = document.createElement("p");
            const hoursInputPomo = document.createElement("p");
            const dots1 = document.createElement("p");
            const dots2 = document.createElement("p");

            secondsInputPomo.setAttribute("id", "secondsInputPomo");
            minutesInputPomo.setAttribute("id", "minutesInputPomo");
            hoursInputPomo.setAttribute("id", "hoursInputPomo");
            
            secondsInputPomo.innerHTML = secondsPomo;
            minutesInputPomo.innerHTML = minutesPomo;
            hoursInputPomo.innerHTML = hoursPomo;
            dots1.innerHTML = ":";
            dots2.innerHTML = ":";
            
            clock.appendChild(hoursInputPomo);
            clock.appendChild(dots1);
            clock.appendChild(minutesInputPomo);
            clock.appendChild(dots2);
            clock.appendChild(secondsInputPomo);

            tempRest();
        }
        else{
            let clock = document.querySelector(".clock-rest");
            clock.innerHTML = "";
            const secondsInputRest = document.createElement("p");
            const minutesInputRest = document.createElement("p");
            const hoursInputRest = document.createElement("p");
            const dots1 = document.createElement("p");
            const dots2 = document.createElement("p");

            secondsInputRest.setAttribute("id", "secondsInputRest");
            minutesInputRest.setAttribute("id", "minutesInputRest");
            hoursInputRest.setAttribute("id", "hoursInputRest");
            
            secondsInputRest.innerHTML = secondsRest;
            minutesInputRest.innerHTML = minutesRest;
            hoursInputRest.innerHTML = hoursRest;
            dots1.innerHTML = ":";
            dots2.innerHTML = ":";
            
            clock.appendChild(hoursInputRest);
            clock.appendChild(dots1);
            clock.appendChild(minutesInputRest);
            clock.appendChild(dots2);
            clock.appendChild(secondsInputRest);

            tempPomo();
        }
    }
    else{
        renderTempo();
    }
}
function configPomo(){
    const clockPomo = document.createElement("div");
    const clockRest = document.createElement("div");
    const buttonsContainer = document.createElement("div");

    const saveButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    const secondsInputPomo = document.createElement("input");
    const minutesInputPomo = document.createElement("input");
    const hoursInputPomo = document.createElement("input");

    const secondsInputRest = document.createElement("input");
    const minutesInputRest = document.createElement("input");
    const hoursInputRest = document.createElement("input");

    const dots1 = document.createElement("p");
    const dots2 = document.createElement("p");
    const dots3 = document.createElement("p");
    const dots4 = document.createElement("p");

    buttonsContainer.classList.add("buttons-container");

    clockPomo.classList.add("clock-container");
    clockRest.classList.add("clock-container");

    clockPomo.classList.add("clock-pomo");
    clockRest.classList.add("clock-rest");

    saveButton.classList.add("play-button");
    cancelButton.classList.add("pause-button");

    secondsInputPomo.setAttribute("id", "secondsInputPomo");
    minutesInputPomo.setAttribute("id", "minutesInputPomo");
    hoursInputPomo.setAttribute("id", "hoursInputPomo");
    secondsInputRest.setAttribute("id", "secondsInputRest");
    minutesInputRest.setAttribute("id", "minutesInputRest");
    hoursInputRest.setAttribute("id", "hoursInputRest");

    secondsInputPomo.setAttribute("placeholder", "00");
    minutesInputPomo.setAttribute("placeholder", "00");
    hoursInputPomo.setAttribute("placeholder", "00");
    secondsInputRest.setAttribute("placeholder", "00");
    minutesInputRest.setAttribute("placeholder", "00");
    hoursInputRest.setAttribute("placeholder", "00");

    saveButton.setAttribute("onclick", "saveNewPomo()");
    cancelButton.setAttribute("onclick", "renderPomo()");

    dots1.innerHTML = ":";
    dots2.innerHTML = ":";
    dots3.innerHTML = ":";
    dots4.innerHTML = ":";
    clockPomo.innerHTML = "";
    buttonsContainer.innerHTML = "";
    container.innerHTML = "";
    saveButton.innerHTML = "Save";
    cancelButton.innerHTML = "Cancel";

    container.appendChild(clockPomo);
    container.appendChild(clockRest);
    container.appendChild(buttonsContainer);

    clockPomo.appendChild(hoursInputPomo);
    clockPomo.appendChild(dots1);
    clockPomo.appendChild(minutesInputPomo);
    clockPomo.appendChild(dots2);
    clockPomo.appendChild(secondsInputPomo);

    clockRest.appendChild(hoursInputRest);
    clockRest.appendChild(dots3);
    clockRest.appendChild(minutesInputRest);
    clockRest.appendChild(dots4);
    clockRest.appendChild(secondsInputRest);
    
    buttonsContainer.appendChild(saveButton);
    buttonsContainer.appendChild(cancelButton);

    isPomodoro = true;
    clearInterval(intervalTempo);
}
function saveNewPomo(){
    secondsPomo = secondsInputPomo.value;
    minutesPomo = minutesInputPomo.value;
    hoursPomo = hoursInputPomo.value;
    secondsRest = secondsInputRest.value;
    minutesRest = minutesInputRest.value;
    hoursRest = hoursInputRest.value;
    if(secondsPomo == ""){secondsPomo = "00";}
    if(minutesPomo == ""){minutesPomo = "00";}
    if(hoursPomo == ""){hoursPomo = "00";}
    if(secondsRest == ""){secondsRest = "00";}
    if(minutesRest == ""){minutesRest = "00";}
    if(hoursRest == ""){hoursRest = "00";}

    let auxSecondsPomo = secondsPomo.split("");
    let auxMinutesPomo = minutesPomo.split("");
    let auxHoursPomo = hoursPomo.split("");
    let auxSecondsRest = secondsRest.split("");
    let auxMinutesRest = minutesRest.split("");
    let auxHoursRest = hoursRest.split("");

    if(auxSecondsPomo[1] == undefined){secondsPomo = "0" + auxSecondsPomo[0];}
    if(auxMinutesPomo[1] == undefined){minutesPomo = "0" + auxMinutesPomo[0];}
    if(auxHoursPomo[1] == undefined){hoursPomo = "0" + auxHoursPomo[0];}
    if(auxSecondsRest[1] == undefined){secondsRest = "0" + auxSecondsRest[0];}
    if(auxMinutesRest[1] == undefined){minutesRest = "0" + auxMinutesRest[0];}
    if(auxHoursRest[1] == undefined){hoursRest = "0" + auxHoursRest[0];}

    renderPomo();
}