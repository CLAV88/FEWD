// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//n.change(update_n());
//m.change(update_m());

document.getElementById('sizePicker').onsubmit = function() {
    saveData();
};


function saveData() {
    event.preventDefault();
    resetGrid();
    let height = document.getElementById('input_height').value;
    let width = document.getElementById('input_width').value;

    makeGrid(height, width);
};

function resetGrid() {
    document.getElementById("pixel_canvas").innerHTML = "";
}

function fillcolor(){
    $(this).toggleClass('colored');
    let newfill = $('#colorPicker').val()
    $('.colored').css('background-color', newfill)
    if(!$(this).is(".colored")) {
        $(this).css('background-color',"");
    }
};

function makeGrid(height, width) {
    // Get a reference to the table
    let n = $('#sizePicker').children('#input_height').val();
    let m = $('#sizePicker').children('#input_width').val();
    let tableRef = document.getElementById("pixel_canvas");
    for(y=0;y<m;y++) {
       let row = tableRef.insertRow();
        for(x=0;x<n;x++) {
            let cell = row.insertCell();
            cell.addEventListener('click', fillcolor);
        };
    };
};


