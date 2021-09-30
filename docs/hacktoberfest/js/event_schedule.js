const eventTemplate = document.querySelector('.schedule-item').cloneNode(true);


const createScheduleCards = () => {
    const list = document.getElementById('schedule-list');
    
    list.innerHTML = "";

    for(const week of schedule){
        const card = createCard(week);
        list.appendChild(card);
    }
}

const createCard = (data) => {
    const card = eventTemplate.cloneNode(true);

    card.querySelector('.schedule-item-title').innerHTML = data.title
    card.querySelector('.schedule-item-topic').innerHTML = data.topic

    const daysList = card.querySelector('.days-list');
    const dayTemplate = daysList.querySelector('.day-template').cloneNode(true);

    daysList.innerHTML = ""

    for(const day of data.days){

        const dayElement = createDay(day, dayTemplate)

        daysList.appendChild(dayElement)
    }

    return card
}

const createDay = (data, template) => {
    const day = template.cloneNode(true);

    day.querySelector('.day-item-date').innerHTML = data.date
    const eventsList = day.querySelector('.day-item-events');

    const eventTemplate = eventsList.querySelector('.day-item-event-template').cloneNode(true);

    eventsList.innerHTML = ""

    for(const event of data.events){
        eventsList.innerHTML += "------------------"

        const eventElement = createEvent(event, eventTemplate)
        eventsList.appendChild(eventElement)
    }
    

    return day
}

const createEvent = (data, template) => {
    const event = template.cloneNode(true);

    event.querySelector('.day-item-topic').innerHTML = "> " + data.topic
    event.querySelector('.day-item-speaker').innerHTML = "speaker: <span>" + data.speaker + "</span"
    event.querySelector('.day-item-type').innerHTML = data.isAsync ? "Assíncrono" : "Síncrono"

    return event
}

createScheduleCards()