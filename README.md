# Towers_of_Hanoi
---
##### Towers of hanoi game built with:
- Css
- Html 
- Javascript 

#### Play the game: 
https://westonperkins.github.io/Towers_of_Hanoi/
###### **Enable your browers camera for the full effect*

---

### How to play Towers of Hanoi
Simply put, the goal is to get the rings, however many there may be, from the starting position (tower) to the end position (tower) in the same order that the rings were origionally placed in. There are typically three towers, a starting tower, a central tower to help distribute movements, and an end tower. In my edition there is no explicit "end" tower, either two of the origionally empty towers can act as an "end" or a central". Upon moving the rings, you will see they descend in width from top to bottom. `You cannot place a ring of greater width on top of a ring with smaller width when trying to move, if a movement is made, the ring being placed must be smaller than the ring underneath it or the tower must be empty on placement. The only rings that can be moved are the highest rings on any given tower, if the ring is not at the highest point on the tower it cannot be moved.` Once the rings are succesfully placed from the starting tower for an alternative tower in the same starting order (from smallest to largest), the game has been won. 


![screenshot](/Towers_of_Hanoi/img/gamescreenshotone.png)
##### Key
- Top right displays the amount of moves you've made during a given level/turn as well as the amount of times you've had to reset the playing field during the game level.
- Underneath the towers displays a drop down menu where you can choose between 3 - 8 rings. After you successfully beat a given set of rings, the following number of rings will be automatically suggested to you, if you wish to play on just hit `submit` as the new number will be rendered automatically within the dropdown
-  The top left offers a `reset` button where you are able to reset the field if you get stuck. Pressing the button does not count as a move however it does not reset the counter, and it will add 1 to the reset counter (obviously)
