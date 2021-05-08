const towerOne = document.querySelector('.tOne')
const invisibleTONE = document.querySelector('.IT1')
const invisibleTTWO = document.querySelector('.IT2')
const invisibleTTHREE = document.querySelector('.IT3')
const invis = document.querySelectorAll('.invisible')
const pillars = document.querySelectorAll('.pillar')
const reset = document.querySelector('.reset')
const counter = document.querySelector('.counter')
let counterNum = document.querySelector('.counterNum')



let sum = 0




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

ringSetUp(invisibleTONE, ringFive)
ringSetUp(invisibleTONE, ringFour)
ringSetUp(invisibleTONE, ringThree)
ringSetUp(invisibleTONE, ringTwo)
ringSetUp(invisibleTONE, ringOne)

let selectedRing = ''
let selectedTower = ''

// DROP RING
function resetRing(ring) {
    ring.style.transform = 'translateY(0vh)'
    ring.style.bottom = '0' + ((selectedTower.childNodes.length - 1) * 75) + 'px'
}
// RAISE RING
function setRing() {
    selectedRing.style.transform = 'translateY(-20vh)'
}


// MOVE RING
function moveRings(ring, towerTo) {
    if(ring.classList[0] === 'ring' && towerTo.classList[0] === 'invisible') {
        towerTo.append(ring)
        sum += 1
        counterNum.innerText = sum
    }
}

// able to move rings (NOT DONE)


for(let i = 0; i < invis.length; i++) {
    invis[i].addEventListener('click', e => {
        if((e.target.classList[0] === 'ring') && (e.target === e.target.parentNode.childNodes[e.target.parentNode.childNodes.length-1])) {
            selectedRing = e.target
            setRing()
        }
    })
}
    
for(let i = 0; i < invis.length; i++) {
    invis[i].addEventListener('click', e => {
        if(e.target.classList[0] == "invisible") {
            if(selectedRing === null) {
                alert('you must only choose a ring')
            } else {
                selectedTower = e.target
                if(selectedTower.childNodes.length === 0) {
                    moveRings(selectedRing, selectedTower)
                    resetRing(selectedRing)
                    selectedRing = ''
                } else if(selectedTower.childNodes.length >= 1) {
                    if(selectedRing.dataset['ring'] < selectedTower.childNodes[selectedTower.childNodes.length-1].dataset['ring']) {
                        moveRings(selectedRing, selectedTower)
                        resetRing(selectedRing)
                    } else if(selectedRing.dataset['ring'] > selectedTower.childNodes[selectedTower.childNodes.length-1].dataset['ring']) {
                        alert('the ring on this tower is not wide enough')
                    }
                }
            }
        }
    })
}






// RESET BUTTON 
reset.addEventListener('click', () => {
    ringSetUp(invisibleTONE, ringFive)
    ringSetUp(invisibleTONE, ringFour)
    ringSetUp(invisibleTONE, ringThree)
    ringSetUp(invisibleTONE, ringTwo)
    ringSetUp(invisibleTONE, ringOne)
})

































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






