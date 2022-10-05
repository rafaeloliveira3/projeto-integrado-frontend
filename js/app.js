'use strict'

const courseFinder = async () => {
    const url = `https://projeto-integrado-api.netlify.app/.netlify/functions/api/cursos`
    const response = await fetch(url)

    const courses = await response.json()
    return courses.cursos
}
const studentShow = async (sigla, status, ano) => {
    const url = `https://projeto-integrado-api.netlify.app/.netlify/functions/api/alunos/${sigla}/?status=${status}&ano=${ano}`
    const response = await fetch(url)

    const students = await response.json()
    return students.status
}
const studentInfo = async (numero) => {
    const url = `https://projeto-integrado-api.netlify.app/.netlify/functions/api/aluno/${numero}`
    const response = await fetch(url)
    
    const students = await response.json()
    return students.aluno
}
const subjectInfo = async (numero) => {
    const url = `https://projeto-integrado-api.netlify.app/.netlify/functions/api/aluno/${numero}`
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