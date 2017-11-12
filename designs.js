var grid = $("#pixel_canvas");

// Select color input
function color_input() {
    return document.getElementById("colorPicker").value;
}

// Select size input
function size_input() {
    var user_height = document.getElementById("input_height").value;
    var user_width = document.getElementById("input_width").value;
    return {'width': user_width, 'height': user_height};
}


// Adds rows and columns to make grid
function makeGrid() {
    var {width, height} = size_input();

    for (rowNum = 0; rowNum < height; rowNum++) {
       grid.append("  <tr></tr>");
    }
    for (colNum = 0; colNum < width; colNum++) {
       $("#pixel_canvas tr").append("    <td></td>");
   }
}

// Adds event click listeners to each cell
function attachCellClickListeners() {
    $.each(grid[0].rows, function(i, row) {
        $.each(row.cells, function(j, cell) {
            $(cell).click(function changeColor() {
                var color = color_input();
                $(this).css({backgroundColor: color});
            });
        });
    });
}

// When size is submitted by the user, call makeGrid()
$('#submit').click(function(event) {
    event.preventDefault();
    grid.children().remove();
    makeGrid();
    attachCellClickListeners();
});