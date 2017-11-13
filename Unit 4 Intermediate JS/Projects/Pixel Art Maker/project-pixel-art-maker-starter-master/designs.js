// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let size, color

$('#sizePicker').click('submit',makeGrid())

function makeGrid() {
    $('#pixel_canvas').addclass('style',"width:100%");
    //set the height and width variables
    height = $('#input_height').value
    width = $("input_width").value
    color = $('#colorpicker').css()
    console.log(height)
    console.log(width)
    console.log(color)
    $('#pixel_canvas').attr
}
