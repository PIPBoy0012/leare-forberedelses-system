function Draw() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // set line stroke and line width
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(300, 100);
    ctx.stroke();

}

export default Draw;