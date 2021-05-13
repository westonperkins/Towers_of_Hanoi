// VARIABLES
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
const instruct = document.querySelector('.instruct')
const body = document.querySelector('body')



//  Initializing reset and move values
let resetSum = 0
let moveSum = 0


// function to assign video and appropriate arguments to them
function applyVideo(ring, width, height, aspectRatio) {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true, video: {width: width, height: height}, video: {aspectRatio: aspectRatio} })
          .then(function (stream) {
            ring.srcObject = stream;
          })
          .catch(function (err0r) {
            //   location.reload()
            console.log("Something went wrong!");
          });
      }
}

// CREATING RINGS TO APPEND TO TOWERS
const ringOne = document.createElement('video')
ringOne.setAttribute("autoplay", 'true')
ringOne.setAttribute("class", 'ring ringOne')
ringOne.setAttribute("data-ring", '1')
ringOne.style.width = '150px'
ringOne.style.height = '50px'
applyVideo(ringOne, 1280, 720, 3)

const ringTwo = document.createElement('video')
ringTwo.setAttribute("autoplay", 'true')
ringTwo.setAttribute("class", 'ring ringTwo')
ringTwo.setAttribute("data-ring", '2')
ringTwo.style.width = '200px'
ringTwo.style.height = '50px'
applyVideo(ringTwo, 1280, 720, 4)

const ringThree = document.createElement('video')
ringThree.setAttribute("autoplay", 'true')
ringThree.setAttribute("class", 'ring ringThree')
ringThree.setAttribute("data-ring", '3')
ringThree.style.width = '250px'
ringThree.style.height = '50px'
applyVideo(ringThree, 1280, 720, 5)


const ringFour = document.createElement('video')
ringFour.setAttribute("autoplay", 'true')
ringFour.setAttribute("class", 'ring ringFour')
ringFour.setAttribute("data-ring", '4')
ringFour.style.width = '300px'
ringFour.style.height = '50px'
applyVideo(ringFour, 1280, 720, 6)

const ringFive = document.createElement('video')
ringFive.setAttribute("autoplay", 'true')
ringFive.className = 'ring ringFive'
ringFive.setAttribute("data-ring", '5')
ringFive.style.width = '350px'
ringFive.style.height = '50px'
applyVideo(ringFive, 1280, 720, 7)

const ringSix = document.createElement('video')
ringSix.setAttribute("autoplay", 'true')
ringSix.className = 'ring ringSix'
ringSix.setAttribute('data-ring', '6')
ringSix.style.width = '400px'
ringSix.style.height = '50px'
applyVideo(ringSix, 1280, 720, 8)

const ringSeven = document.createElement('video')
ringSeven.setAttribute("autoplay", 'true')
ringSeven.className = 'ring ringSeven'
ringSeven.setAttribute('data-ring', '7')
ringSeven.style.width = '450px'
ringSeven.style.height = '50px'
applyVideo(ringSeven, 1280, 720, 9.1)

const ringEight = document.createElement('video')
ringEight.setAttribute("autoplay", 'true')
ringEight.className = 'ring ringEight'
ringEight.setAttribute('data-ring', '8')
ringEight.style.width = '500px'
ringEight.style.height = '50px'
applyVideo(ringEight, 1280, 720, 10.1)


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

// Ring setup function
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
// function eightRingstwo() {
//     ringSetUp(invisibleTTHREE, ringEight)
//     ringSetUp(invisibleTTHREE, ringSeven)
//     ringSetUp(invisibleTTHREE, ringSix)
//     ringSetUp(invisibleTTHREE, ringFive)
//     ringSetUp(invisibleTTHREE, ringFour)
//     ringSetUp(invisibleTTHREE, ringThree)
//     ringSetUp(invisibleTTHREE, ringTwo)
//     ringSetUp(invisibleTTHREE, ringOne)
// }

// LOGIC TO PROCESS INCREASING RINGS ACCORDINGLY ON THE PILLARS
function ringBottomStyling() {
    for(let i = 0; i < invis.length; i++) {
        if(invis[i].childNodes[0]){
            invis[i].childNodes[0].style.bottom = '0px'
        }
        if(invis[i].childNodes[1]) {
            invis[i].childNodes[1].style.bottom = '60px'
        }
        if(invis[i].childNodes[2]) {
            invis[i].childNodes[2].style.bottom = '120px'
        }
        if(invis[i].childNodes[3]) {
            invis[i].childNodes[3].style.bottom = '180px'
        }
        if(invis[i].childNodes[4]) {
            invis[i].childNodes[4].style.bottom = '240px'
        }
        if(invis[i].childNodes[5]) {
            invis[i].childNodes[5].style.bottom = '300px'
        }
        if(invis[i].childNodes[6]) {
            invis[i].childNodes[6].style.bottom = '360px'
        }
        if(invis[i].childNodes[7]) {
            invis[i].childNodes[7].style.bottom = '420px'
        }
        if(invis[i].childNodes === []) {
            console.log('error')
        }
    }
}

// 3 RINGS WILL BE DEFAULT
threeRings()
ringBottomStyling()

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

// SUBMIT BUTTON
submit.addEventListener('click', () => {
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
    
    if(selectedRing) {
        resetRing(selectedRing)
    } else if(previouslySelectedRing) {
        resetRing(previouslySelectedRing)

    }
    winnerStatement.style.opacity = '0'
    counterNum.innerText = 0
    moveSum = 0
    resetNum.innerText = 0
    resetSum = 0
    ringBottomStyling()
    instruct.style.opacity = '0'
    body.style.backgroundImage = ''
    reset.style.boxShadow = ''
    submit.style.boxShadow = ''
    ringCount.style.boxShadow = ''
    reset.style.opacity = '100'
})

// RESET BUTTON 
reset.addEventListener('click', () => {
    if(ringCount.value == 3) {
        threeRings()
        ringBottomStyling()
    } else if(ringCount.value == 4) {
        fourRings()
        ringBottomStyling()
    } else if(ringCount.value == 5) {
        fiveRings()
        ringBottomStyling()
    } else if(ringCount.value == 6) {
        sixRings()
        ringBottomStyling()
    } else if(ringCount.value == 7) {
        sevenRings()
        ringBottomStyling()
    } else if(ringCount.value == 8) {
        eightRings()
        ringBottomStyling()
    }
    
    if(selectedRing) {
        selectedRing.style.transform = 'translateY(0px)'
    }
    resetSum += 1
    resetNum.innerText = resetSum
    winnerResets.innerText = resetSum
    previouslySelectedRing = ''
    selectedRing = ''
})

// DROP RING
function resetRing(ring) {
    ring.style.transform = 'translateY(0vh)'
    ring.style.bottom = '0' + ((selectedTower.childNodes.length - 1) * 60) + 'px'
    selectedRing = ''
}
// RAISE RING
function setRing(x) {
    // ENSURING THAT NO TWO RINGS CAN BE UP AT THE SAME TIME 
    if(previouslySelectedRing) {
        previouslySelectedRing.style.transform = 'translateY(0vh)'
    } else if(selectedRing == previouslySelectedRing) {
        previouslySelectedRing = ''
    } else {
        console.log('')
    }
    selectedRing.style.transform = 'translateY(' + (-1*(10 + (x * 60))) + 'px)'
    selectedRing.style.transition = 'transform 0.15s'
}


// MOVE RING
function moveRings(ring, towerTo) {
    if(ring.classList[0] === 'ring' && towerTo.classList[0] === 'invisible') {
        towerTo.append(ring)
        moveSum += 1
        counterNum.innerText = moveSum
        winnerMoves.innerText = moveSum
        ringBottomStyling()
        console.log("hi " + selectedRing.classList[1])
        if(previouslySelectedRing) {
            console.log('bye ' + previouslySelectedRing.classList[1])

        }
    } else {
        selectedRing = ''
        console.log('error')
    }
}

// ABLE TO MOVE RINGS FROM PILLAR TO PILLAR
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
        }else {
            // console.log('error')
        }
    })
}

for(let i = 0; i < invis.length; i++) {
    invis[i].addEventListener('click', e => {
        if(e.target.classList[0] == "invisible") {
            if(selectedRing == '') {
                console.log('you must choose a ring')
            } else {
                selectedTower = e.target

                if(selectedTower.childNodes.length === 0) {
                    moveRings(selectedRing, selectedTower)
                    resetRing(selectedRing)
                    selectedRing = ''
                    if(invisibleTTWO.childNodes.length === ringCount.value || invisibleTTHREE.childNodes.length === ringCount.value) {
                        winnerStatement.style.opacity = '100'
                        ringCount.value = parseInt(ringCount.value) + 1
                        instruct.style.opacity = '100'
                        body.style.backgroundImage = 'url(/Towers_of_Hanoi/img/giphyleo.gif)'                      
                        reset.style.opacity = '0'
                        submit.style.boxShadow = '1px 1px 30px 10px white'
                        ringCount.style.boxShadow = '1px 1px 30px 10px white'
                    }
                } else if(selectedTower.childNodes.length >= 1) {
                    if(selectedRing.dataset['ring'] < selectedTower.childNodes[selectedTower.childNodes.length-1].dataset['ring']) {
                        moveRings(selectedRing, selectedTower)
                        resetRing(selectedRing)
                        if(invisibleTTWO.childNodes.length == ringCount.value || invisibleTTHREE.childNodes.length == ringCount.value) {
                            winnerStatement.style.opacity = '100'
                            ringCount.value = parseInt(ringCount.value) + 1
                            instruct.style.opacity = '100'
                            body.style.backgroundImage = 'url(/Towers_of_Hanoi/img/giphyleo.gif)'
                            reset.style.opacity = '0'
                            submit.style.boxShadow = '1px 1px 30px 10px white'
                            ringCount.style.boxShadow = '1px 1px 30px 10px white'   
                        }
                    } else if(selectedRing.dataset['ring'] > selectedTower.childNodes[selectedTower.childNodes.length-1].dataset['ring']) {
                        alert('the highest ring on this tower is too small for this ring')
                    } else {
                        console.log('error')
                    }
                }
            }
        }
    })
}

winnerStatement.style.opacity = '0'





// body.style.backgroundImage = 'url(/Towers_of_Hanoi/img/giphyleo.gif)'










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






