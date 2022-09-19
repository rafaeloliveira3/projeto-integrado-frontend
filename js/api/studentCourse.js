'use strict'

const studentShow = async (sigla) => {
    const url = `http://localhost:8080/alunos/${sigla}`
    const response = await fetch(url)

    const students = await response.json()
    return students.stats
}

export {
    studentShow
}