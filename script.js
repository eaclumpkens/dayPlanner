// RENDER TODAY'S DATE 
$("#date").text(`${moment().format('LL')}`);

// RENDER CURRENT TIME
function currentTime() {
    $("#current-time").text(`${moment().format('LTS')}`);
}

window.setInterval(currentTime, 1000);

// TIME VARIABLES

var currentHour = moment().format('HH');
var times = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

for (i = 0; i < times.length; i++) {
    var hour = moment(times[i], 'HH:mm').format('LT');
    var hourAbr = moment(times[i], 'HH:mm').format('HH');

    $("#time-slots").append(`
        <div class="row">
            <h4 id="hour-${i}" class="time col-md-3">${hour}</h4>
            <input id="input-${i}" data-index="${i}" type="text" class="planner-input col-md-6">
            <i id="save-${i}" data-index="${i}" class="save-button col-md-3 far fa-save"></i>
        </div>
    `)

    if (currentHour === hourAbr) {
        $(`#hour-${i}`).attr("style", "font-weight:600")
        $(`#input-${i}`).attr("style", "background:#509048");
    } else if (currentHour < hourAbr) {
        // FUTURE HOURS
        $(`#input-${i}`).attr("style", "background:#90c058");
    } else {
        // PAST HOURS
        $(`#input-${i}`).attr("style", "background:#307820");
        $(`#input-${i}`).attr("disabled", "true");
        $(`#save-${i}`).attr("disabled", "true");
    }

    // GET TASKS
    if (localStorage[`${i}`]) {
            $(`#input-${i}`).val(localStorage[`${i}`]);
            $(`#input-${i}`).attr("value", localStorage[`${i}`]);
    } 
}

$(document).ready(function(){

    $("input").on("keyup", function(){
        var index = $(this).attr("data-index");
        if (!$(this).val()) {
            $(`#save-${index}`).attr("value", "");
        };

        $(`#save-${index}`).attr("value", `${$(this).val()}`);
    });

    //  SET TASKS
    $(".save-button").on("click", function(){

        if ($(this).attr("value")) {
            localStorage[$(this).attr("data-index")] = $(this).attr("value");
        }; 
    });

}) 
