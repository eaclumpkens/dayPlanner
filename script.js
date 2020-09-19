
// RENDER TODAY'S DATE
$("#date").text(`${moment().format('LL')}`);

var currentTime = moment().format('LT');
var oneDay = 24;

for (i = 0; i < oneDay; i++) {
    var time;

    if (i < 10) {
        time = '0' + i + ':00';
    } else {
        time = i + ':00';
    }

    $("#time-slots").append(`
        <div class="row">
            <h4 id="time" class="col-md-4">${time}</h4>
            <input id="planner-input" type="text" class="col-md-4">
            <i id="save-button" class="col-md-4 far fa-save"></i>
        </div>
    `)
}