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
let winnerMoves = document.querySelector('.winnerMoves')
let winnerResets = document.querySelector('.winnerResets')
const winnerStatement = document.querySelector('.winner')
const ringCount = document.querySelector('#ringCount')
const submit = document.querySelector('#submit')


let resetSum = 0
let moveSum = 0

// CREATING RINGS TO APPEND TO TOWERS
const ringOne = document.createElement('div')
ringOne.setAttribute("class", 'ring ringOne')
ringOne.setAttribute("data-ring", '1')
ringOne.style.width = '150px'
ringOne.style.height = '70px'

const ringTwo = document.createElement('div')
ringTwo.setAttribute("class", 'ring ringTwo')
ringTwo.setAttribute("data-ring", '2')
ringTwo.style.width = '200px'
ringTwo.style.height = '70px'

const ringThree = document.createElement('div')
ringThree.setAttribute("class", 'ring ringThree')
ringThree.setAttribute("data-ring", '3')
ringThree.style.width = '250px'
ringThree.style.height = '70px'

const ringFour = document.createElement('div')
ringFour.setAttribute("class", 'ring ringFour')
ringFour.setAttribute("data-ring", '4')
ringFour.style.width = '300px'
ringFour.style.height = '70px'

const ringFive = document.createElement('div')
ringFive.className = 'ring ringFive'
ringFive.setAttribute("data-ring", '5')
ringFive.style.width = '350px'
ringFive.style.height = '70px'

const ringSix = document.createElement('div')
ringSix.className = 'ring ringSix'
ringSix.setAttribute('data-ring', '6')
ringSix.style.width = '400px'
ringSix.style.height = '70px'

const ringSeven = document.createElement('div')
ringSeven.className = 'ring ringSeven'
ringSeven.setAttribute('data-ring', '7')
ringSeven.style.width = '450px'
ringSeven.style.height = '70px'

const ringEight = document.createElement('div')
ringEight.className = 'ring ringEight'
ringEight.setAttribute('data-ring', '8')
ringEight.style.width = '500px'
ringEight.style.height = '70px'


// QUERY SELECTOR FOR ALL RINGS
const rings = document.querySelectorAll('.ring')


// TOWER ARRAYS, MIGHT NOT USE
// let towerOneArr = [ringOne, ringTwo, ringThree, ringFour, ringFive]
// let towerTwoArr = []
// let towerThreeArr = []

// SETTING UP GAME LOGIC WITH RINGS ON PILLARS
let selectedRing = ''
let previouslySelectedRing = ''
let selectedTower = ''

function ringSetUp(tower, ring){
    tower.append(ring)
}



// RING NUMBER SETUP

function threeRings() {
    ringSetUp(invisibleTONE, ringThree)
    ringSetUp(invisibleTONE, ringTwo)
    ringSetUp(invisibleTONE, ringOne)
}
function fourRings() {
    ringSetUp(invisibleTONE, ringFour)
    ringSetUp(invisibleTONE, ringThree)
    ringSetUp(invisibleTONE, ringTwo)
    ringSetUp(invisibleTONE, ringOne)
}
function fiveRings() {
    ringSetUp(invisibleTONE, ringFive)
    ringSetUp(invisibleTONE, ringFour)
    ringSetUp(invisibleTONE, ringThree)
    ringSetUp(invisibleTONE, ringTwo)
    ringSetUp(invisibleTONE, ringOne)
}
function sixRings() {
    ringSetUp(invisibleTONE, ringSix)
    ringSetUp(invisibleTONE, ringFive)
    ringSetUp(invisibleTONE, ringFour)
    ringSetUp(invisibleTONE, ringThree)
    ringSetUp(invisibleTONE, ringTwo)
    ringSetUp(invisibleTONE, ringOne)
}
function sevenRings() {
    ringSetUp(invisibleTONE, ringSeven)
    ringSetUp(invisibleTONE, ringSix)
    ringSetUp(invisibleTONE, ringFive)
    ringSetUp(invisibleTONE, ringFour)
    ringSetUp(invisibleTONE, ringThree)
    ringSetUp(invisibleTONE, ringTwo)
    ringSetUp(invisibleTONE, ringOne)
}
function eightRings() {
    ringSetUp(invisibleTONE, ringEight)
    ringSetUp(invisibleTONE, ringSeven)
    ringSetUp(invisibleTONE, ringSix)
    ringSetUp(invisibleTONE, ringFive)
    ringSetUp(invisibleTONE, ringFour)
    ringSetUp(invisibleTONE, ringThree)
    ringSetUp(invisibleTONE, ringTwo)
    ringSetUp(invisibleTONE, ringOne)
}



// LOGIC TO PROCESS INCREASING RINGS ACCORDINGLY ON THE PILLARS
function check() {
    for(let i = 0; i < invis.length; i++) {
        if(invis[i].childNodes[0]){
            invis[i].childNodes[0].style.bottom = '0px'
        }
        if(invis[i].childNodes[1]) {
            invis[i].childNodes[1].style.bottom = '76px'
        }
        if(invis[i].childNodes[2]) {
            invis[i].childNodes[2].style.bottom = '152px'
        }
        if(invis[i].childNodes[3]) {
            invis[i].childNodes[3].style.bottom = '228px'
        }
        if(invis[i].childNodes[4]) {
            invis[i].childNodes[4].style.bottom = '304px'
        }
        if(invis[i].childNodes[5]) {
            invis[i].childNodes[5].style.bottom = '380px'
        }
        if(invis[i].childNodes[6]) {
            invis[i].childNodes[6].style.bottom = '456px'
        }
        if(invis[i].childNodes[7]) {
            invis[i].childNodes[7].style.bottom = '532px'
        }
        if(invis[i].childNodes === []) {
            console.log('error')
        }
    }
}

// FIVE RINGS WILL BE DEFAULT
fiveRings()
check()

function clearRings() {
    if(invisibleTONE.hasChildNodes(ringOne)) {
        invisibleTONE.removeChild(ringOne)
    }
    if(invisibleTONE.hasChildNodes(ringTwo)) {
        invisibleTONE.removeChild(ringTwo)
    }
    if(invisibleTONE.hasChildNodes(ringThree)) {
        invisibleTONE.removeChild(ringThree)
    }
    if(invisibleTONE.hasChildNodes(ringFour)) {
        invisibleTONE.removeChild(ringFour)
    }
    if(invisibleTONE.hasChildNodes(ringFive)) {
        invisibleTONE.removeChild(ringFive)
    }
    if(invisibleTONE.hasChildNodes(ringSix)) {
        invisibleTONE.removeChild(ringSix)
    }
    if(invisibleTONE.hasChildNodes(ringSeven)) {
        invisibleTONE.removeChild(ringSeven)
    }
    if(invisibleTONE.hasChildNodes(ringEight)) {
        invisibleTONE.removeChild(ringEight)
    }
}


console.log(invisibleTONE.childNodes)

// SUBMIT BUTTON
submit.addEventListener('click', () => {
    console.log(ringCount.value)
    if(ringCount.value == 3) {
        threeRings()
        clearRings()
        threeRings()
    } else if(ringCount.value == 4) {
        fourRings()
        clearRings()
        fourRings()
    } else if(ringCount.value == 5) {
        fiveRings()
        clearRings()
        fiveRings()
    } else if(ringCount.value == 6) {
        sixRings()
        clearRings()
        sixRings()
    } else if(ringCount.value == 7) {
        sevenRings()
        clearRings()
        sevenRings()
    } else if(ringCount.value == 8) {
        eightRings()
        clearRings()
        eightRings()
    }
    check()
})

// RESET BUTTON 
reset.addEventListener('click', () => {
    if(ringCount.value == 3) {
        threeRings()
        check()
    } else if(ringCount.value == 4) {
        fourRings()
        check()
    } else if(ringCount.value == 5) {
        fiveRings()
        check()
    } else if(ringCount.value == 6) {
        sixRings()
        check()
    } else if(ringCount.value == 7) {
        sevenRings()
        check()
    } else if(ringCount.value == 8) {
        eightRings()
        check()
    }
    
    if(selectedRing) {
        selectedRing.style.transform = 'translateY(0px)'
    }
    resetSum += 1
    resetNum.innerText = resetSum
    winnerResets.innerText = resetSum
})

// DROP RING
function resetRing(ring) {
    ring.style.transform = 'translateY(0vh)'
    ring.style.bottom = '0' + ((selectedTower.childNodes.length - 1) * 75) + 'px'
}
// RAISE RING
function setRing(x) {
    console.log(selectedRing.classList[1])
    // ENSURING THAT NO TWO RINGS CAN BE UP AT THE SAME TIME 
    if(previouslySelectedRing) {
        console.log(previouslySelectedRing.classList[1] + ' prev')
        previouslySelectedRing.style.transform = 'translateY(0vh)'
    } else if(selectedRing === previouslySelectedRing) {
        previouslySelectedRing = ''
    } else {
        console.log('there is no previously selected ring')
    }
    selectedRing.style.transform = 'translateY(' + (-1*(150 + (x * 75))) + 'px)'
}


// MOVE RING
function moveRings(ring, towerTo) {
    if(ring.classList[0] === 'ring' && towerTo.classList[0] === 'invisible') {
        towerTo.append(ring)
        moveSum += 1
        counterNum.innerText = moveSum
        winnerMoves.innerText = moveSum
        check()
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
                        winnerStatement.style.opacity = '100'
                    }
                } else if(selectedTower.childNodes.length >= 1) {
                    if(selectedRing.dataset['ring'] < selectedTower.childNodes[selectedTower.childNodes.length-1].dataset['ring']) {
                        moveRings(selectedRing, selectedTower)
                        resetRing(selectedRing)
                        if(invisibleTTWO.childNodes.length === 5 || invisibleTTHREE.childNodes.length === 5) {
                            console.log("GAME WON")
                            winnerStatement.style.opacity = '100'
                        }
                    } else if(selectedRing.dataset['ring'] > selectedTower.childNodes[selectedTower.childNodes.length-1].dataset['ring']) {
                        alert('the ring on this tower is not wide enough')
                    }
                }
            }
        }
    })
}

winnerStatement.style.opacity = '0'











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






