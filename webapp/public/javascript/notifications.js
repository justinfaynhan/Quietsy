level = document.currentScript.getAttribute("level");
letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
mike = document.querySelectorAll(".mike");
mike.forEach((elem, index) => {
    setInterval(function () {
        $.get({ 
            url: '/data' + level + letters[index],
            contentType: "text/plain"
        }, function(data) {
            y[index] = Number(data);
        });
    }, 1000); 
});

window.addEventListener('load', function () {
    // At first, let's check if we have permission for notification
    // If not, let's ask for it
    if (window.Notification && Notification.permission !== "granted") {
        Notification.requestPermission(function (status) {
            if (Notification.permission !== status) {
                Notification.permission = status;
            }
        });
    }
    mike.forEach((elem, index) => {
        setInterval(function () {
            $.get({ 
                url: '/data' + level + letters[index],
                contentType: "application/text"
            }, function(data) {
                if (Number(data) >= 50) {
                    var n = new Notification ("Noisy around sensor " + level + letters[index]);
                }
            });
        }, 4000); 
    }); 
});

