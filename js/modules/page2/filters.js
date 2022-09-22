'use strict'

import { studentShow } from "../../apiCalls.js"

const filterByStatus = async () => {
    const status = document.getElementById('filter-status').value
    const sigla = localStorage.getItem('course')

    const students = await studentShow(sigla, status)
}

const filterByYear = async () => {
    const cards = document.querySelectorAll('.student-cards')
    const filter = document.getElementById('filter-year').value
    cards.forEach(card => {
        if(filter == 'default') {
            card.classList.remove('hide')
        }
        else if(card.classList.contains(filter) == false) {
            card.classList.add('hide')
        }
        else {
            card.classList.remove('hide')
        }
    })
    
}
export {
    filterByStatus,
    filterByYear
}