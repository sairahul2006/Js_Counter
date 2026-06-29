let bgimage = document.getElementById("bg");
let countdown = document.getElementById("cd");

let initialCountdown = countdown.innerHTML


// console.log(bgimage.src)
// bgimage.src = "./images/edinburgh.jpg"
// console.log(bgimage.src)

// initialCountdown = initialCountdown -1
// console.log(initialCountdown)
// countdown.innerHTML = initialCountdown

let interval = setInterval(function() {
    initialCountdown = initialCountdown -1;
    // console.log(initialCountdown);
    countdown.innerHTML = initialCountdown
    
    countdown.style.fontSize = initialCountdown *10 +"px"
// first way
    // if(initialCountdown %2 ===0){
    //     bgimage.src = "./images/edinburgh.jpg"
    // }
    // else {
    //     bgimage.src = "./images/Best-Things-to-do-in-Edinburgh-Scotland.jpg"
    // }

// second way
    let imagePath = initialCountdown %2===0 ? "./images/edinburgh (1).jpg" : "./images/Best-Things-to-do-in-Edinburgh-Scotland.jpg"
    bgimage.src = imagePath
    if(initialCountdown <=0){
        clearInterval(interval)
    }

}, 1000)