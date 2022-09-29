'use strict'

import { studentShow } from "../../app.js"
import { optionsSpawner, studentSpawner } from "./spawners.js"

/* FUNÇÃO PRINCIPAL DO ARQUIVO */
const studentMain = async () => {
    const sigla = localStorage.getItem('course')
    const yearFilter = document.getElementById('filter-year')

    const students = await studentShow(sigla, 'default', 'default')

    // Definindo Titulo da Página
    const title = students[0].curso
    document.getElementById('page-title').textContent = titleMaker(title)
    
    // Definindo filtro por ano
    const yearsOrdered = yearGet(students)
    const years = yearsOrdered.map(optionsSpawner)
    yearFilter.append(...years)
    
    // Definindo cards de alunos
    studentSpawner()
}

/* FUNÇÕES AUXILIÁRES */
const titleMaker = (title) => {
    const separator = title.split(' em ')
    return separator[1]
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

document.getElementById('filter-status').addEventListener('change', studentSpawner)
document.getElementById('filter-year').addEventListener('change', studentSpawner)
studentMain()

export {
    checker
}