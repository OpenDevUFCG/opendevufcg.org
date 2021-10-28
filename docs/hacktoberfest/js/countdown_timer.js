var interval = 0

calculateInterval = () => {
    const startDate = new Date()
    const endDate = new Date("October 03, 2020 14:00:00")
    interval = endDate - startDate
}

calculateTime = () => {
    const days = Math.floor(interval / (1000*3600*24))
    const hours = Math.floor(interval % (1000*3600*24) / (1000 * 3600))
    const minutes = Math.floor(interval % (1000*3600*24) % (1000 * 3600) / (1000 * 60))
    const seconds = Math.floor(interval % (1000*3600*24) % (1000 * 3600) % (1000 * 60) / 1000)

    return {days, hours, minutes, seconds}
} 

refreshTimer = () => {
    interval -= 1000
    if(interval <= 0){
        interval = 0
    }

    displayTimer();
}

startTimer = () => {
    calculateInterval()
    displayTimer()

    setInterval(refreshTimer, 1000);
}

displayTimer = () => {
    const { days, hours, minutes, seconds } = calculateTime()

    setValueToTimer('.days', days)
    setValueToTimer('.hours', hours)
    setValueToTimer('.minutes', minutes)
    setValueToTimer('.seconds', seconds)
    // document.getElementById('days').innerHTML = fillZeroes(days)
    // document.getElementById('hours').innerHTML = fillZeroes(hours)
    // document.getElementById('minutes').innerHTML = fillZeroes(minutes)
    // document.getElementById('seconds').innerHTML = fillZeroes(seconds)
}

setValueToTimer = (selector, value) => {
    const elements = document.querySelectorAll(selector)
    for(let i = 0; i < elements.length; i++){
        elements[i].innerHTML = fillZeroes(value)
    }
}


fillZeroes = (value) => {
    value += ""

    if(value.length==1)
        return "0" + value
    else
        return value
}

startTimer()