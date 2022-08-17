const $changeSwitch = document.getElementById('changeSwitch'),
    
    $changeFocus = document.getElementById('changeFocus'),
    $switch = document.querySelector(".switch");

function changeImg(){

    if($changeFocus.src.match("assets/img/Focus-On.png") && $changeSwitch.src.match("assets/img/on-or.png")) {
        $changeFocus.src = "assets/img/Focus-Off.png";
        $cchangeSwitch.src = "assets/img/off-or.png";
    }else{
        $changeFocus.src = "assets/img/Focus-On.png";
        $changeSwitch.src = "assets/img/on-or.png";
    }
}

$switch.addEventListener("click", changeImg)