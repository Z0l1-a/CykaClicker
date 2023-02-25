var cyka = 0
var gyasz = 0
var pimp = 0
var rizz = 1
var anthem = new Audio("National Anthem of USSR.mp3")


function click1() {
    cyka += 1
    cyka += gyasz
    document.getElementById("cykalabel").innerHTML = cyka
        if (cyka >= 100 && rizz == 1){
            rizz += 1
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 200 && rizz == 2) {
            rizz += 1
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 250 && rizz == 3) {
            rizz += 1
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 500 && rizz == 4) {
            rizz += 1
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 750 && rizz == 5) {
            rizz += 1
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 1000 && rizz == 6) {
            rizz += 1
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 2500 && rizz == 7) {
            rizz += 0.25
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 5000 && rizz == 7.25) {
            rizz += 0.25
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 7500 && rizz == 7.5) {
            rizz += 0.25
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 10000 && rizz == 7.75) {
            rizz += 1
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 12500 && rizz == 8.75) {
            rizz += 0.5
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 15000 && rizz == 9.25) {
            rizz += 0.5
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 17500 && rizz == 9.75) {
            rizz += 0.1
            document.getElementById("rizz").innerHTML = rizz
        } else if (cyka >= 20000 && rizz == 9.85) {
            rizz += 0.15
            document.getElementById("rizz").innerHTML = "MAXIMUM RIZZ ACHIEVED"
            anthem.play()
            setInterval(function (){cyka += 12345; document.getElementById("cyka").innerHTML = cyka}, 1000)
    }
}  

function click2() {
    if (cyka >= 10) {
        cyka -= 10
        gyasz += 0.5
    }
    document.getElementById("gyaszlabel").innerHTML = (gyasz*2)
}

function click3() {
    if (cyka >= 100) {
        cyka -= 100
        pimp +=1
    }
    document.getElementById("pimplabel").innerHTML = pimp
    document.getElementById("cykalabel").innerHTML = cyka
}

