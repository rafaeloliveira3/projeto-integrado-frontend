'use strict'

import { studentShow } from "../../app.js"
import { checker } from "./pageTwo.js"

const cardSpawner = (item) => {
    const card = document.createElement('a')
    card.innerHTML = `<img src="${item.foto}" class="student-photo"> <span>${item.nome}</span>`
    card.setAttribute('id', `${item.matricula}`)
    card.href = './studentInfo.html'
    card.classList.add('student-cards')
    card.onclick = checker
    if(item.status == 'Finalizado')
        card.classList.add('complete')

    return card
}

const studentSpawner = async () => {
    const cardsParent = document.getElementById('cards-container')
    const yearFilter = document.getElementById('filter-year')
    const sigla = localStorage.getItem('course')

    let year = yearFilter.value
    let filter = document.getElementById('filter-status').value

    if (year == '')
        year = 'default'
    if (filter == '')
        filter = 'default'
    
    const students = await studentShow(sigla, filter, year)

    if (students != '') {
        const spawner = students.map(cardSpawner)
        cardsParent.replaceChildren(...spawner)
    }
    else {
        cardsParent.textContent = 'Nenhum Item Encontrado, Tente alterar os Filtros.'
    }
}

const optionsSpawner = (item) => {
    const option = document.createElement('option')
    option.value = item
    option.textContent = item
    
    return option
}

export {
    studentSpawner,
    optionsSpawner
}