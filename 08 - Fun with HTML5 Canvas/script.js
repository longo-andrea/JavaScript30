const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = window.innerHeight - 10;

ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 40;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue = 0;
let grow = 1;

function draw(e) {
	if(!isDrawing) return;

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();

	lastX = e.offsetX;
	lastY = e.offsetY;

	hue++;

	if(hue >= 360) 
		hue = 0;

	if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1)
		grow = !grow;

	if(grow)
		ctx.lineWidth++;
	else
		ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', e => {
	isDrawing = true;
	lastX = e.offsetX;
	lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

document.querySelector('input').addEventListener('change', e => canvas.style.background = e.target.value)