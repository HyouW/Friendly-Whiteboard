var canvas = document.getElementById("myCanvas");

//2D drawing context
var pencil = canvas.getContext("2d");

pencil.lineWidth = "1";

canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", end, false);

//Flag for if the mouse is being held down
var mouseHeld = false;

//Array that collects coordinates travelled by the held down mouse
var coords = [];

function start(event)
{
	mouseHeld = true;
}

function end(event)
{
	mouseHeld = false;

	//Reset array of coords
	coords = [];
}

function draw(event)
{
	if (!mouseHeld)
		return;

  	var x = event.offsetX || event.layerX - canvas.offsetLeft;
	var y = event.offsetY || event.layerY - canvas.offsetTop;

	coords.push({x: x, y: y});

	canvasDraw(coords);
}

function canvasDraw(coords)
{
	pencil.beginPath();
	pencil.moveTo(coords[0].x, coords[0].y);

	for (var index = 1; index < coords.length; index++)
	{
		pencil.lineTo(coords[index].x, coords[index].y);
	}

	pencil.stroke();
}