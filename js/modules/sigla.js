'use strict'

const siglaMaker = (name) => {
    let splited = name.split(' ')

    let sigla

    splited.forEach(item => {
        sigla += item[0]
    })

    let siglaFixed = sigla.split('undefined')
    return siglaFixed[1].toUpperCase()
}

export {
    siglaMaker
}