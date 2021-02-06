
var date1 = new Date();
let hours1 = date1.getHours();
let minute1 = date1.getMinutes();
let seconds1 = date1.getSeconds();
let month1 = date1.getMonth();
let year1 = date1.getFullYear();
let day1 = date1.getDate();
$('.time').text(hours1 + ":" + minute1 + ":" + seconds1);
$('.date').text(day1 + "/" + month1 + "/" + year1)

$('.start').on("click", function () {
    var timer = setInterval(function () {
        var date = new Date();
        let hours = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        let month = date.getMonth();
        let year = date.getFullYear();
        let day = date.getDate();
        $('.time').text(hours + ":" + minute + ":" + seconds);
        $('.date').text(day + "/" + month + "/" + year)

    }, 1000);
    $('.stop').on("click", function () {
        clearInterval(timer);
    });

});


