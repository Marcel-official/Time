let circle = document.getElementById("#circle");
let circleIcon = document.getElementById("#circlei");
let timerIcon = document.getElementById("#headeri");
let seconds = 0;
let minutes= 0;
let hour = 0;
let rotateIntervalId;
let intervalId;
let rotate = 0;
let resetCon = document.getElementById("#reset")
let sectext = document.getElementById("#sec-text"); 
let minText = document.getElementById("#min-text");
let hourText = document.getElementById("#hour-text");
circle.onclick = function () {
    if (circleIcon.classList.contains("fa-play")) {
        circleIcon.classList.replace("fa-play", "fa-pause")
        resetCon.style.transform = "translateX(0%)";
        circleIcon.style.borderRadius = "50% 0% 0% 50%";
        intervalId = setInterval(function(){
            if(seconds > 9){
                seconds = 0;
                minutes++;
                if(minutes > 2){
                    minutes = 0;
                    hour++;
                }
            }
            sectext.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`
            seconds++;
            minText.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`
            hourText.innerHTML = `${hour < 10 ? `0${hour}` : hour}`
          
        }, 1000)
        rotateIntervalId = setInterval(() =>{
            if (rotate > 360){
                rotate = 0;
             }
           rotate+=20;
           timerIcon.style.transform = `translate(-50%, 0) rotate(${rotate}deg)`
        }, 100)
    } else{
        circleIcon.classList.replace("fa-pause, fa-play")
        clearInterval(intervalId)
        clearInterval(rotateIntervalId)
        timerIcon.classList.remove("rotate")
    }
}
//     //Flipping icon from play to pause and vice versa
//     if (circleIcon.classList.contains("fa-play")){
//         circleIcon.classList.replace("fa-play", "fa-pause")
//         // //Sliding in reset
//         // resetCon.style.transform = "translateX(0%)"
//         // sphere.style.borderRadius = "50% 0% 0% 50% "
//         //Starting Timer
//         intervalId = setInterval(function (){
//             //Returning seconds to 0 if it gets to 59
//             if(seconds > 9){
//                 seconds = 0;
//                 minutes++;
//                 if(minutes > 5){
//                     minutes = 0;
//                     hour++;
//                 }
//             }
             //Incrementing rotate value
            
//             //Pushing time to html
//            

//           
//            
//         }, 1000)
//         //Adding Rotation to timer
//         // timerIcon.classList.add("rotate")

//         // rotateIntervalId = setInterval(() => {
//         //       //Rotating timer
//         //       timerIcon.style.transform = `translate(-50%, 0%) rotate(${rotate}deg)`
//         // }, 100)
//     } else{
//         circleIcon.classList.replace("fa-pause", "fa-play");
//         clearInterval(intervalId);
//         //Removing Rotating timer
//         // timerIcon.classList.remove("rotate")
//     }
// }
