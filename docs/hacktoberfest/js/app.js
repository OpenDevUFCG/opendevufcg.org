const basicWeb = document.getElementById('web-b')
const  advancedWeb = document.getElementById('web-a')
const specifics = document.getElementById('esp')

const renderActivity = ({titulo, horario, responsavel}, template) => {
    
    const activity = document.getElementById(template).cloneNode(true)
    
    const [hour, minutes] = horario.split(':') 

    activity.querySelector('.hour').textContent = hour
    activity.querySelector('.minutes').textContent = minutes
    activity.querySelector('.title').textContent = titulo

    if (template != 'break-template')
        activity.querySelector('.speaker').textContent = responsavel

    return activity
}

const renderAllActivities = () => {
    atividades.forEach(activity => {

        const { titulo } = activity;
        
        const template = titulo == 'Pausa' ? 'break-template'  :  'activity-template'
        
        document.querySelector( '#' + activity.tipo).appendChild(renderActivity(activity, template))

    });
    document.getElementById('activity-template').remove()
    document.getElementById('break-template').remove()

}

renderAllActivities();