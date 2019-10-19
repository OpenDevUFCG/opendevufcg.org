const renderTimer = () => {

    const { interval, days, hours, minutes, seconds } = convertTime()

    document.getElementById('days').innerHTML = parseValue(days)
    document.getElementById('hours').innerHTML = parseValue(hours)
    document.getElementById('minutes').innerHTML = parseValue(minutes)
    document.getElementById('seconds').innerHTML = parseValue(seconds) 
    
    if (interval > 0){
        setTimeout(renderTimer, 1000)
    }
}

const parseValue = (value) => {    
    return value < 10 ?  '0' + value  :  value
} 

const convertTime = () => {
    const eventDate = 'Oct 19, 2019 08:30:00'

    const countdownDate = new Date(eventDate).getTime()
    const currentDate = new Date().getTime()
    const interval  = countdownDate - currentDate

    const days = interval <= 0 ? 0 : Math.floor(interval / (1000 * 60 * 60 * 24));
    const hours = interval <= 0 ? 0 : Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = interval <= 0 ? 0 : Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = interval <= 0 ? 0 : Math.floor((interval % (1000 * 60)) / 1000);
    
    return {
        interval,
        days,
        hours,
        minutes,
        seconds
    }
}



renderTimer()