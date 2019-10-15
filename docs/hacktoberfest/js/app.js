const renderActivity = ({titulo, horario, responsavel, duracao}, template) => {
    
    const activity = document.getElementById(template).cloneNode(true)
    
    const [ hour, minutes ] = horario.split(':')

    activity.querySelector('.hour').textContent = hour
    activity.querySelector('.minutes').textContent = minutes
    activity.querySelector('.title').textContent = titulo.toUpperCase()
    
    if (template != 'break-template')
        activity.querySelector('.speaker').textContent = responsavel

    if (duracao >= 120) 
        activity.classList.add("two-hours")  

    return activity
}

const renderAllActivities = () => {
    atividades.forEach(activity => {

        const { titulo } = activity;        
        const template = titulo == 'Pausa' ? 'break-template'  :  'activity-template'
        
        document.querySelector( '#' + activity.tipo + " main").appendChild(renderActivity(activity, template))        
    });

    document.getElementById('templates').remove()
}

renderAllActivities();