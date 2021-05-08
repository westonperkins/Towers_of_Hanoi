const towerOne = document.querySelector('.tOne')
const invisibleTONE = document.querySelector('.IT1')
const invisibleTTWO = document.querySelector('.IT2')
const invisibleTTHREE = document.querySelector('.IT3')
const invis = document.querySelectorAll('.invisible')
const pillars = document.querySelectorAll('.pillar')


// RING CREATING & APPENDING 
const ringOne = document.createElement('div')
ringOne.setAttribute("class", 'ring ringOne')
ringOne.setAttribute("data-ring", '1')

const ringTwo = document.createElement('div')
ringTwo.setAttribute("class", 'ring ringTwo')
ringTwo.setAttribute("data-ring", '2')

const ringThree = document.createElement('div')
ringThree.setAttribute("class", 'ring ringThree')
ringThree.setAttribute("data-ring", '3')

const ringFour = document.createElement('div')
ringFour.setAttribute("class", 'ring ringFour')
ringFour.setAttribute("data-ring", '4')

const ringFive = document.createElement('div')
ringFive.className = 'ring ringFive'
ringFive.setAttribute("data-ring", '5')


const rings = document.querySelectorAll('.ring')

// EVENT LISTENER ON RINGS

let towerOneArr = [ringOne, ringTwo, ringThree, ringFour, ringFive]
let towerTwoArr = []
let towerThreeArr = []

function ringSetUp(tower, ring){
    tower.append(ring)
}

ringSetUp(invisibleTONE, ringOne)
ringSetUp(invisibleTONE, ringTwo)
ringSetUp(invisibleTONE, ringThree)
ringSetUp(invisibleTONE, ringFour)
ringSetUp(invisibleTONE, ringFive)

let selectedRing = null

function setRing(ring) {
    ring.style.transform = 'translateY(-40vh)'
}
function resetRing(ring) {
    ring.style.transform = 'translateY(0vh)'
}

function moveRings(ring, towerTo) {
    towerTo.append(ring)
}

// able to move rings (NOT DONE)

for(let i = 0; i < invis.length; i++) {
    invis[i].addEventListener('click', e => {
        if(e.target.childNodes.length >= 1) {
            console.log(e.target.childNodes.length)
            // console.log(e.target.classList[0])
            selectedRing = e.target.childNodes[0]
            setRing(selectedRing)
            console.log(selectedRing)
        } else if(e.target.classList[0] == "invisible") {
            invis[i].addEventListener('click', e => {
                // moveRings(selectedRing, e.target)
                // resetRing(selectedRing)
                // console.log(selectedRing)
            })
        }
    })
}


// moveRings(ringOne, invisibleTTHREE)
// moveRings(ringTwo, invisibleTTWO)



// e.target.classList[0] === 'ring'

// RING AND TOWER CLASSES WITH BACKEND LOGIC

class Ring {
    constructor(width) {
        this.width = width
    }
}

const rOne = new Ring(1)
const rTwo = new Ring(2)
const rThree = new Ring(3)
const rFour = new Ring(4)
const rFive = new Ring(5)


class Tower {
    constructor(name, rings) {
        this.name = name
        this.rings = rings
    }
    moveRing(towerFrom, towerTo) {
        if(towerFrom.name === towerTo.name) {
           console.log('nothing happened')
        } else if(towerFrom.rings.length > 0) {
            if(towerTo.rings.length === 0) {
                let ringMove = towerFrom.rings.shift()
                towerTo.rings.unshift(ringMove)
                console.log(`worked: tower ${towerTo.name} had no rings. you moved ring #${towerTo.rings[0].width}`)
            } else if(towerTo.rings.length > 0) {
                if(towerTo.rings[0].width > towerFrom.rings[0].width) {
                    let ringMove = towerFrom.rings.shift()
                    towerTo.rings.unshift(ringMove)
                    console.log(`worked: you moved ring #${towerTo.rings[0].width} on top of ring #${towerTo.rings[1].width} on tower ${towerTo.name}`)
                    if(towerTo != tOne && towerTo.rings === [rOne, rTwo, rThree, rFour, rFive]) {
                        // win condition
                        console.log('win')
                    }
                } else if(towerTo.rings[0].width < towerFrom.rings[0].width) {
                    console.log(`invalid move. ring #${towerFrom.rings[0].width} is bigger than ring #${towerTo.rings[0].width} ...`)
                }
            } else {
               console.log('error')
            }
        } else if(towerFrom.rings.length === 0) {
            console.log(`Tower ${towerFrom.name} does not have rings.. try another tower`)
        } else {
            console.log('error')
        }
    }
}

const tOne = new Tower('one', [rOne, rTwo, rThree, rFour, rFive])
const tTwo = new Tower('two', [])
const tThree = new Tower('three', [])



// SELECTED RINGS
0







// for(let i = 0; i < rings.length; i++) {
//     rings[i].addEventListener('click', e => {
//         console.log(e.target)
//     })
// }
   
   
// for(let i = 0; i < pillars.length; i++) {
//     pillars[i].addEventListener('click', e => {
//         if(e.target.classList[0] === 'invisible') {
//             console.log(e.target)
//             console.log(e.target.childNodes)
//         }else if(e.target.classList[0] === 'ring') {
//             // WHERE I LEFT OFF: trying to make a condiiton for second click to drop onto second pillar
//             if(e.target.childNodes) {
//                 console.log(e.target)
//                 const target1 = e.target
//                 moveRings(target1)
//             }
//             // function placeRings(towerTo) {
//             //     towerTo.append(target1)
//             // }
//             pillars[i].addEventListener('click', i => {
//                 placeRings(i.target)
//             })
  
//         }
//     })
// }



// console.log(tOne)
// tOne.moveRing(tOne, tThree)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)
// tOne.moveRing(tOne, tTwo)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)
// tOne.moveRing(tTwo, tOne)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)
// tOne.moveRing(tOne, tTwo)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)
// tOne.moveRing(tThree, tTwo)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)
// tOne.moveRing(tOne, tThree)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)
// tOne.moveRing(tTwo, tOne)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)
// tOne.moveRing(tTwo, tThree)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)
// tOne.moveRing(tOne, tThree)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)
// tOne.moveRing(tOne, tTwo)
// console.log(tOne)
// console.log(tTwo)
// console.log(tThree)














// LOGIC








