'use strict'

import { studentShow } from "../../api/studentCourse.js"

const cardCreator = (item) => {
    const card = document.createElement('div')
    card.innerHTML = `<img src="${item.foto}" class="student-photo"> <span>${item.nome}</span>`
    card.setAttribute('id', `${item.matricula}`)
    card.href = '#'
    card.classList.add('student-cards')
    if(item.status == 'Finalizado')
        card.classList.add('complete')

    return card
}

const students = async () => {
    const title = document.getElementById('page-title')
    const container = document.getElementById('cards-container')
    const course = localStorage.getItem('course')

    const students = await studentShow(course)
    
    const spawner = students.map(cardCreator)
    title.textContent = students[0].curso
    container.replaceChildren(...spawner)
}
students()