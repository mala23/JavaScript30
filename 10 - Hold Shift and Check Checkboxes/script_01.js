const checkboxes = document.querySelectorAll('input')
let lastClicked = 0
let secondlastClicked = 0

for (let e = 0 ; e < checkboxes.length ; e++) {
    checkboxes[e].addEventListener('click', function() {
        lastClicked = e
        console.log("lastClicked:" + lastClicked)
    })
}

document.addEventListener('keydown', (e) => {
    if (e.key == "Shift") {
        console.log("Shift")
        for (let e = 0 ; e < checkboxes.length ; e++) {
            checkboxes[e].addEventListener('click', function() {
                secondlastClicked = e
                console.log("secondlastClicked:" + secondlastClicked)
            })
        }
        if (lastClicked < secondlastClicked) {
            for (let x = lastClicked ; x <= secondlastClicked ; x++) {
                console.log("clicked" + x)
                checkboxes[x].checked = true
            }
        } else {
            for (let x = lastClicked ; x >= secondlastClicked ; x--) {
                checkboxes[x].checked = true
            }
        }
    }
})
