let mike = document.querySelectorAll(".mike");
let sensorTextVal = document.querySelectorAll(".sensorTextVal");
let level = document.currentScript.getAttribute("level");
let y;
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
mike.forEach((elem, index) => {
    setInterval(function () {
        $.get({ 
            url: '/data' + level + letters[index],
            contentType: "text/plain"
        }, function(data) {
            y = Number(data);
            sensorTextVal[index].innerHTML = y;
            if (y >= 50) {
                elem.classList.add("icon-noisy");
                sensorTextVal[index].classList.add("text-noisy");
            } else {
                elem.classList.remove("icon-noisy");
                sensorTextVal[index].classList.remove("text-noisy");
            }
        });
    }, 1000); 
});
