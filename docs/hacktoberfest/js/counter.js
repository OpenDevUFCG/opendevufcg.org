const renderTimer = () => {

    const { distance, days, hours, minutes, seconds } = convertTime()

    document.getElementById('days').innerHTML = parseValue(days)
    document.getElementById('hours').innerHTML = parseValue(hours)
    document.getElementById('minutes').innerHTML = parseValue(minutes)
    document.getElementById('seconds').innerHTML = parseValue(seconds) 
    
    if (distance > 0){
        setTimeout(renderTimer, 1000)
    }
}

const parseValue = (value) => {    
    return value < 10 ?  '0' + value  :  value
} 

const convertTime = () => {
    const eventDate = 'Oct 19, 2019 09:00:00'

    const countdownDate = new Date(eventDate).getTime()
    const currentDate = new Date().getTime()
    const distance  = countdownDate - currentDate

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    return {
        distance,
        days,
        hours,
        minutes,
        seconds
    }
}

renderTimer()