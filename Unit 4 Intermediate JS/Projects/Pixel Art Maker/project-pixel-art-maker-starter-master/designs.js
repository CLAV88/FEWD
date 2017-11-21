// Select color input
// Select size input

//-----------------------------------------------------------//
//When the size button is pressoed run the saveData function
//----------------------------------------------------------//
document.getElementById('sizePicker').onsubmit = function() {
    saveData();
};
//------------------------------------------------------------------------//
//This implies the submit button has been pushed, it calls the resetGrid, 
//to make changes to the height and width of the grid given the new values in the input fields.
//These values are taken as params to the makeGrid function
//---------------------------------------------------------//
function saveData() {
    event.preventDefault();
    resetGrid();
    let height = document.getElementById('input_height').value;
    let width = document.getElementById('input_width').value;
    makeGrid(height, width);
};
//----------------------------------------------------------------------------------------------------------------------------//
//implies that the submit button has been pressed, and that saveData has run, it is the antecedent to the saveData() function
//----------------------------------------------------------------------------------------------------------------------------//
function resetGrid() {
    document.getElementById("pixel_canvas").innerHTML = "";
};
//----------------------------------------------------------------------------------//
//this function is called by the makeGrid function implying the submit function has been pressed,
//implying the resetGrid function has run, and the new params have been created, the event listeners have been added to each cell
//----------------------------------------------------------------------------------//
function fillcolor(){
    let newfill = $('#colorPicker').val();
    $(this).css('background-color', newfill);
};
//----------------------------------------------------------------------------------//
//This function is used to denote  the 
//----------------------------------------------------------------------------------//
function makeGrid(height, width) {
    //let n = $('#sizePicker').children('#input_height').val();
    //let m = $('#sizePicker').children('#input_width').val();
    let tableRef = document.getElementById("pixel_canvas");
    for(y=0;y<height;y++) {
       let row = tableRef.insertRow();
        for(x=0;x<width;x++) {
            let cell = row.insertCell();
            cell.addEventListener('click', fillcolor);
        };
    };
};


