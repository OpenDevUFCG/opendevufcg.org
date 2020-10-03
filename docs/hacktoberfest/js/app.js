let current_page = 1
const questions_per_page = 2
const itemTemplate = document.querySelector('.faq-template').cloneNode(true);

window.addEventListener('load', () => {
    setListenerFunctions()
    renderQuestionsPage(current_page)
    loadPagesMenu()
})

const loadPagesMenu = () => {
    const list = document.querySelector('#faq-menu ul');
    for(let i = 1; i <= getNumPages(); i++){
        const elm = document.createElement('li')
        elm.innerHTML = i
        elm.id = "page-" + i
        elm.addEventListener('click', () => {
            setActivePage(i)
         })

        list.appendChild(elm)
    }

    document.querySelector('#faq-menu ul li').classList.add('btn-active')
}

const clearActivePages = () => {
    const elements = document.querySelectorAll('#faq-menu ul li');

    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove('btn-active')
    }
}

const setActivePage = (page) => {
    current_page = page
    clearActivePages()
    document.getElementById('page-'+page).classList.add('btn-active')
    renderQuestionsPage(page)
}

const setListenerFunctions = () => {
    const prevBtn = document.querySelector('.prev')
    const nextBtn = document.querySelector('.next')

    nextBtn.addEventListener('click', next)
}

const getNumPages = () => {
    return Math.ceil(questions.length/ questions_per_page)
}

const prev = () => {
    if(current_page > 1){
        current_page--;
        renderQuestionsPage(current_page);
        setActivePage(current_page)
    } 
}

const next = () =>{

    current_page = current_page < getNumPages() ? current_page + 1 : 1
    
    renderQuestionsPage(current_page);
    setActivePage(current_page)
}

const renderQuestionsPage = (page) => {
    const questionContainer = document.getElementById('faq-list');

    questionContainer.innerHTML = "";


    for(let i = (page-1) * questions_per_page; i < (page * questions_per_page); i++){
        if(questions[i]){

            const item = itemTemplate.cloneNode(true);
            const question = item.querySelector('.question');
            const answer = item.querySelector('.answer');
    
            question.innerHTML = questions[i].question;
            answer.innerHTML = questions[i].answer;
    
            questionContainer.appendChild(item);

            if(questionContainer.childNodes.length == 1){
                const line = document.createElement('hr')
                line.classList.add('line')
                questionContainer.appendChild(line)
            }
        }
    }
}
