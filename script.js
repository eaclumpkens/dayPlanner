// RENDER TODAY'S DATE 
$("#date").text(`${moment().format('LL')}`);

// RENDER CURRENT TIME
function currentTime() {
    $("#current-time").text(`${moment().format('LTS')}`);
}

window.setInterval(currentTime, 1000);

// GET DATA

// TIME VARIABLES

var currentHour = moment().format('HH');
var times = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

for (i = 0; i < times.length; i++) {
    var hour = moment(times[i], 'HH:mm').format('LT');
    var hourAbr = moment(times[i], 'HH:mm').format('HH');

    $("#time-slots").append(`
        <div class="row">
            <h4 id="hour-${i}" class="time col-md-3">${hour}</h4>
            <input id="input-${i}" data-hour="${hour}" type="text" class="planner-input col-md-6">
            <i id="save-${i}" class="save-button col-md-3 far fa-save"></i>
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
    var taskData = JSON.parse(localStorage.getItem("taskData"));

    if (taskData) {
        if (taskData[`${i}`]) {
            $(`#input-${i}`).val(taskData[`${i}`]);
            $(`#input-${i}`).attr("value", taskData[`${i}`]);
        } 
    } 
}

$(document).ready(function(){

    function setTasks() {
        
        localStorage.setItem(
            "taskData",
            JSON.stringify({
                0: $("#input-0").attr("value"),
                1: $("#input-1").attr("value"),
                2: $("#input-2").attr("value"),
                3: $("#input-3").attr("value"),
                4: $("#input-4").attr("value"),
                5: $("#input-5").attr("value"),
                6: $("#input-6").attr("value"),
                7: $("#input-7").attr("value"),
                8: $("#input-8").attr("value"),
                9: $("#input-9").attr("value"),
                10: $("#input-10").attr("value"),
                11: $("#input-11").attr("value"),
                12: $("#input-12").attr("value")
            })
        )
    }

    $("input").on("keyup", function(){
        $(this).attr("value", `${$(this).val()}`)
    })

    $(".save-button").on("click", setTasks);

}) 
