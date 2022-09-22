'use strict'

const courseFinder = async () => {
    const url = `http://localhost:8080/cursos`
    const response = await fetch(url)

    const courses = await response.json()
    return courses.cursos
}
const studentShow = async (sigla, status) => {
    const url = `http://localhost:8080/alunos/${sigla}/?status=${status}`
    const response = await fetch(url)

    const students = await response.json()
    console.log(students.status)
    return students.status
}
const studentInfo = async (numero) => {
    const url = `http://localhost:8080/aluno/${numero}`
    const response = await fetch(url)
    
    const students = await response.json()
    return students.aluno
}
const subjectInfo = async (numero) => {
    const url = `http://localhost:8080/aluno/${numero}`
    const response = await fetch(url)
    
    const students = await response.json()
    const info = students.aluno
    return info[0].materias
}

export {
    courseFinder,
    studentShow,
    studentInfo,
    subjectInfo
}