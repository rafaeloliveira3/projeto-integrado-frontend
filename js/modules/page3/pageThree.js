'use strict'

import { studentInfo, subjectInfo } from "../../app.js"
import { siglaMaker } from "../sigla.js"

const infoCreator = (item) => {
    const card = document.createElement('div')
    card.innerHTML = `<img src="${item.foto}" class="student-photo"> <span>${item.nome}</span>`
    card.classList.add('student')

    return card
}
const subjectCreator = (item) => {
    const element = document.createElement('div')
    const sigla = siglaMaker(item.nome)

    element.innerHTML = `
    <span class="nota">${item.media}</span>
    <progress value="${item.media}" max="100"></progress>
    <span class="subject-name">${sigla}</span>
    `
    if(item.status == 'Aprovado') 
        element.classList.add('aproved')
    else if(item.status == 'Reprovado') 
        element.classList.add('reproved')
    else 
        element.classList.add('exam')

    element.classList.add('subject-info')

    return element
}

const studentSpawnerInfo = async () => {
    const main = document.querySelector('main')
    const studentRegistration = localStorage.getItem('registration')

    const student = await studentInfo(studentRegistration)

    const spawner = student.map(infoCreator)
    main.appendChild(...spawner)
}

const subjectsSpawner = async () => {
    const main = document.querySelector('main')
    const container = document.createElement('div')
    container.classList.add('subjects')

    const studentRegistration = localStorage.getItem('registration')

    const subject = await subjectInfo(studentRegistration)

    const spawner = subject.map(subjectCreator)
    container.append(...spawner)
    main.append(container)
}

studentSpawnerInfo()
subjectsSpawner()