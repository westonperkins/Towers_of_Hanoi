const towerOne = document.querySelector('.tOne')
const invisibleTONE = document.querySelector('.IT1')
const invisibleTTWO = document.querySelector('.IT2')
const invisibleTTHREE = document.querySelector('.IT3')
const invis = document.querySelectorAll('.invisible')
const pillars = document.querySelectorAll('.pillar')
const reset = document.querySelector('.reset')
const counter = document.querySelector('.counter')
let counterNum = document.querySelector('.counterNum')
let resetNum = document.querySelector('.resetCounterNum')

let resetSum = 0
let moveSum = 0

// CREATING RINGS TO APPEND TO TOWERS
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

// QUERY SELECTOR FOR ALL RINGS
const rings = document.querySelectorAll('.ring')

// TOWER ARRAYS, MIGHT NOT USE
let towerOneArr = [ringOne, ringTwo, ringThree, ringFour, ringFive]
let towerTwoArr = []
let towerThreeArr = []

// SETTING UP GAME LOGIC WITH RINGS ON PILLARS
let selectedRing = ''
let previouslySelectedRing = ''
let selectedTower = ''

function ringSetUp(tower, ring){
    tower.append(ring)
}
ringSetUp(invisibleTONE, ringFive)
ringSetUp(invisibleTONE, ringFour)
ringSetUp(invisibleTONE, ringThree)
ringSetUp(invisibleTONE, ringTwo)
ringSetUp(invisibleTONE, ringOne)

// RESET BUTTON 
reset.addEventListener('click', () => {
    ringSetUp(invisibleTONE, ringFive)
    ringSetUp(invisibleTONE, ringFour)
    ringSetUp(invisibleTONE, ringThree)
    ringSetUp(invisibleTONE, ringTwo)
    ringSetUp(invisibleTONE, ringOne)
    ringFive.style.bottom = '0px'
    ringFour.style.bottom = '75px'
    ringThree.style.bottom = '150px'
    ringTwo.style.bottom = '225px'
    ringOne.style.bottom = '300px'
    if(selectedRing) {
        selectedRing.style.transform = 'translateY(0px)'
    }
    resetSum += 1
    resetNum.innerText = resetSum
})

// DROP RING
function resetRing(ring) {
    ring.style.transform = 'translateY(0vh)'
    ring.style.bottom = '0' + ((selectedTower.childNodes.length - 1) * 75) + 'px'
}
// RAISE RING
function setRing(x) {
    console.log(selectedRing.classList[1])
    if(previouslySelectedRing) {
        console.log(previouslySelectedRing.classList[1] + ' prev')
    }
    if(selectedRing === previouslySelectedRing) {
        previouslySelectedRing = ''
    }
    selectedRing.style.transform = 'translateY(' + (-1*(150 + (x * 75))) + 'px)'
    previouslySelectedRing.style.transform = 'translateY(0vh)'
}

// MOVE RING
function moveRings(ring, towerTo) {
    if(ring.classList[0] === 'ring' && towerTo.classList[0] === 'invisible') {
        towerTo.append(ring)
        moveSum += 1
        counterNum.innerText = moveSum
    }
}

// ABLE TO MOVE RINGS FROM PILLAR TO PILLAR, *********STILL NEED TO MAKE IT SO THAT WHEN ONE RING IS RAISED(setRing), THE OTHER RINGS CANNOT BE RAISED AS WELL

for(let i = 0; i < invis.length; i++) {
    invis[i].addEventListener('click', e => {
        if((e.target.classList[0] === 'ring') && (e.target === e.target.parentNode.childNodes[e.target.parentNode.childNodes.length-1])) {
            if(selectedRing === '') {
                selectedRing = e.target
                setRing(e.target.dataset['ring'])
            }else if(selectedRing != '') {
                previouslySelectedRing = selectedRing
                selectedRing = e.target
                setRing(e.target.dataset['ring'])
            }
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
                    if(invisibleTTWO.childNodes.length === 5 || invisibleTTHREE.childNodes.length === 5) {
                        console.log("GAMNE WON")
                    }
                } else if(selectedTower.childNodes.length >= 1) {
                    if(selectedRing.dataset['ring'] < selectedTower.childNodes[selectedTower.childNodes.length-1].dataset['ring']) {
                        moveRings(selectedRing, selectedTower)
                        resetRing(selectedRing)
                        if(invisibleTTWO.childNodes.length === 5 || invisibleTTHREE.childNodes.length === 5) {
                            console.log("GAME WON")
                        }
                    } else if(selectedRing.dataset['ring'] > selectedTower.childNodes[selectedTower.childNodes.length-1].dataset['ring']) {
                        alert('the ring on this tower is not wide enough')
                    }
                }
            }
        }
    })
}



// MIGHT NOT USE, CLASSES AND METHODS FOR POTENTIAL BACKEND

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






