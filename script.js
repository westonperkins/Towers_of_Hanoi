const towerOne = document.querySelector('.tOne')
const invisibleTONE = document.querySelector('.IT1')
const invisibleTTWO = document.querySelector('.IT2')
const invisibleTTHREE = document.querySelector('.IT3')
const pillars = document.querySelectorAll('.pillar')
const rings = document.querySelectorAll('.ring')


// RING CREATING & APPENDING 
const ringFive = document.createElement('div')
ringFive.className = 'ring ringFive'
ringFive.setAttribute("data-ring", '5')
invisibleTONE.append(ringFive)
// console.log(ringFive.classList)
// console.log(rings)
// console.log(pillars[0].classList)
// console.log(pillars)

const ringFour = document.createElement('div')
ringFour.setAttribute("class", 'ring ringFour')
ringFour.setAttribute("data-ring", '4')
invisibleTONE.append(ringFour)

const ringThree = document.createElement('div')
ringThree.setAttribute("class", 'ring ringThree')
ringThree.setAttribute("data-ring", '3')
invisibleTONE.append(ringThree)

const ringTwo = document.createElement('div')
ringTwo.setAttribute("class", 'ring ringTwo')
ringTwo.setAttribute("data-ring", '2')
invisibleTONE.append(ringTwo)

const ringOne = document.createElement('div')
ringOne.setAttribute("class", 'ring ringOne')
ringOne.setAttribute("data-ring", '1')
invisibleTONE.append(ringOne)

const ringFivee = document.querySelector('.ringFive')

// TOWER ARRAY

class Ring {
    constructor(width) {
        this.width = width
    }
}

function moveRing(towerFrom, towerTo, ring) {
    if(towerFrom === towerTo) {
        console.log('nothing happened')
    } else if(towerTo === [] || towerTo[0].this.width > ring.this.width) {
        towerFrom.shift()
        towerTo.unshift(ring)
    } else {
        console.log('error')
    }
}



const rOne = new Ring(1)
const rTwo = new Ring(2)
const rThree = new Ring(3)
const rFour = new Ring(4)
const rFive = new Ring(5)


let towerOneArr = [rOne, rTwo, rThree, rFour, rFive]
let towerTwoArr = []
let towerThreeArr = []

towerTwoArr.moveRing(towerOneArr, towerTwoArr, rOne)
console.log(towerOneArr)

// LOGIC






// EVENT LISTENER ON RINGS

for(let i = 0; i < rings.length; i++) {
    rings[i].addEventListener('click', e => {
        console.log(e.target)
    })
    
}


for(let i = 0; i < pillars.length; i++) {
    pillars[i].addEventListener('click', e => {
        if(e.target.classList[0] = 'ring') {
            console.log(e.target)
        }
        
    })
}


