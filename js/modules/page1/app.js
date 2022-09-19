'use strict'

import { courseFinder } from "../../api/coursesApi.js"

const cardCreator = (item) => {
    const card = document.createElement('a')
    card.innerHTML = `<img src="${item.icone}" class="course-image"> <span>${item.sigla}</span>`
    card.setAttribute('id', `${item.sigla.toLowerCase()}`)
    card.href = './pages/students.html'
    card.classList.add('courses-button')
    card.onclick = checker

    return card
}

const courses = async () => {
    const container = document.getElementById('courses-container')
    const cursos = await courseFinder()

    const spawner = cursos.map(cardCreator)
    
    container.replaceChildren(...spawner)
}
courses()

const checker = (e) => {
    const sigla = e.currentTarget.id
    localStorage.setItem('course', sigla)
}