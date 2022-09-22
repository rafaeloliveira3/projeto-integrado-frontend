'use strict'

import { studentShow } from "../../apiCalls.js"
import { filterByStatus, filterByYear } from "./filters.js"

/* FUNÇÃO PRINCIPAL DO ARQUIVO */
const studentMain = async () => {
    const cardsParent = document.getElementById('cards-container')
    const sigla = localStorage.getItem('course')
    const yearFilter = document.getElementById('filter-year')

    const students = await studentShow(sigla, 'default')
    // Definindo Titulo da Página
    const title = students[0].curso
    document.getElementById('page-title').textContent = titleMaker(title)
    
    // Definindo filtro por ano
    const yearsOrdered = yearGet(students)
    const years = yearsOrdered.map(optionsSpawner)
    yearFilter.append(...years)
    
    // Definindo cards de alunos
    const spawner = students.map(cardCreator)
    cardsParent.replaceChildren(...spawner)
}

/* FUNÇÕES AUXILIÁRES */
const titleMaker = (title) => {
    const separator = title.split(' em ')
    return separator[1]
}

const cardCreator = (item) => {
    const card = document.createElement('a')
    card.innerHTML = `<img src="${item.foto}" class="student-photo"> <span>${item.nome}</span>`
    card.setAttribute('id', `${item.matricula}`)
    card.href = './studentInfo.html'
    card.classList.add('student-cards', item.conclusao)
    card.onclick = checker
    if(item.status == 'Finalizado')
        card.classList.add('complete')

    return card
}

const optionsSpawner = (item) => {
    const option = document.createElement('option')
    option.value = item
    option.textContent = item
    
    return option
}
const arrayOrder = (array) => {
    array.sort((a, b) => a - b)
    const ordered = array.filter((item, i) => array.indexOf(item) === i)
    return ordered
}
const yearGet = (object) => {
    const yearConclusion = []
    object.forEach(student => {
        yearConclusion.push(student.conclusao)
    })
    const years = arrayOrder(yearConclusion)
    
    return years
}
const checker = (e) => {
    const matricula = e.currentTarget.id
    localStorage.setItem('registration', matricula)
}

document.getElementById('filter-status').addEventListener('change', filterByStatus)
document.getElementById('filter-year').addEventListener('change', filterByYear)
studentMain()