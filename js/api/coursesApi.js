'use strict'

const courseFinder = async () => {
    const url = `http://localhost:8080/cursos`
    const response = await fetch(url)

    const courses = await response.json()
    return courses.cursos
}

export {
    courseFinder
}