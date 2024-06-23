const data = [
    {
        length: 166.5,
        deg: 0
    },
    {
        length: 94.7,
        deg: 90
    },
    {
        length: 55.7,
        deg: 0
    },
    {
        length: 130.0,
        deg: 90
    },
    {
        length: 222.5,
        deg: 180
    },
    {
        length: 223.9,
        deg: 270
    },
]

const dots = [
    [0, 0]
]

function toRad(deg) {
    return deg * Math.PI / 180
}

function findX(deg, length, initial = 0) {
    const x = (Math.round(Math.cos(toRad(deg))) * length) + initial

    return x
}

function findY(deg, length, initial = 0) {
    const y = (Math.round(Math.sin(toRad(deg))) * length) + initial

    return y 
}

function findCoords(obj, prevCoords = [0, 0]) {
    const x = findX(obj.deg, obj.length, prevCoords[0])
    const y = findY(obj.deg, obj.length, prevCoords[1]) 

    const coords = [x, y]
    
    return coords
}

function calculateDots(i = 0, dot = [0, 0]) {
    dot = findCoords(data[i], dot)

    //Приблизить к нулю, если (-1 < число < 1), при необходимости
    /* 
    if (dot[0] > -1 && dot[0] < 1) {
        dot[0] = parseInt(dot[0])
    }
    if (dot[1] > -1 && dot[1] < 1) {
        dot[1] = parseInt(dot[1])
    }
    */

    dots.push(dot)
    
    if (data[i + 1]) {
        calculateDots(i + 1, dot)
    }
}

calculateDots()

//Написать начальные данные
data.forEach(obj => {
    document.body.innerText += `Длина: ${obj.length}, угол ${obj.deg}\u00B0 \n`
})

document.body.innerText += '\n \n'

//Написать получившиеся точки
dots.forEach((dot, index) => {
    document.body.innerText += `Точка \u2116${index + 1} - ${dot[0]}, ${dot[1]}\n`
})

console.log(data)
console.log(dots)