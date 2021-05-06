const towerOne = document.querySelector('.tOne')
const invisibleTONE = document.querySelector('.IT1')
const invisibleTTWO = document.querySelector('.IT2')
const invisibleTTHREE = document.querySelector('.IT3')
const pillars = document.querySelectorAll('.pillar')


// RING CREATING & APPENDING 
const ringOne = document.createElement('div')
ringOne.setAttribute("class", 'ring ringOne')
ringOne.setAttribute("data-ring", '1')
invisibleTONE.append(ringOne)

const ringTwo = document.createElement('div')
ringTwo.setAttribute("class", 'ring ringTwo')
ringTwo.setAttribute("data-ring", '2')
invisibleTONE.append(ringTwo)

const ringThree = document.createElement('div')
ringThree.setAttribute("class", 'ring ringThree')
ringThree.setAttribute("data-ring", '3')
invisibleTONE.append(ringThree)

const ringFour = document.createElement('div')
ringFour.setAttribute("class", 'ring ringFour')
ringFour.setAttribute("data-ring", '4')
invisibleTONE.append(ringFour)

const ringFive = document.createElement('div')
ringFive.className = 'ring ringFive'
ringFive.setAttribute("data-ring", '5')
invisibleTONE.append(ringFive)






const rings = document.querySelectorAll('.ring')








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



// EVENT LISTENER ON RINGS


function moveRings(towerFrom) {
    towerFrom.style.transform = 'translateY(-40vh)'
}

// for(let i = 0; i < rings.length; i++) {
//     rings[i].addEventListener('click', e => {
//         console.log(e.target)
//     })
// }
   
   
for(let i = 0; i < pillars.length; i++) {
    pillars[i].addEventListener('click', e => {
        if(e.target.classList[0] === 'invisible') {
            console.log(e.target)
            console.log(e.target.childNodes)
        }else if(e.target.classList[0] === 'ring') {
            // WHERE I LEFT OFF: trying to make a condiiton for second click to drop onto second pillar
            if(e.target.childNodes) {
                console.log(e.target)
                const target1 = e.target
                moveRings(target1)
            }
            function placeRings(towerTo) {
                towerTo.append(target1)
            }
            pillars[i].addEventListener('click', e => {
                placeRings(e.target)
            })
  
        }
    })
}



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








