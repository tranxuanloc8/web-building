eventTimer = function () {
    eventTime = new Date(2018, 3, 26, 0, 0, 0, 0);
    currentTime = new Date();
    timeToEvent = eventTime - currentTime; //ra mili giây
    timeToEventround = Math.floor(timeToEvent / 1000);
    daysToEvent = Math.floor(timeToEventround / (60 * 60 * 24));
    hoursToEvent = Math.floor((timeToEventround % (60 * 60 * 24)) / (60 * 60));
    minutesToEvent = Math.floor((((timeToEventround % (60 * 60 * 24)) % (60 * 60)) / (60)));
    secondsToEvent = Math.floor(((((timeToEventround % (60 * 60 * 24)) % (60 * 60)) % (60))));

    if (timeToEvent > 0) {
        $('.ngayDenSK').text(daysToEvent);
        $('.gioDenSK').text(hoursToEvent);
        $('.phutDenSK').text(minutesToEvent);
        $('.giayDenSK').text(secondsToEvent);
    }
}

window.setInterval(eventTimer, 1000);