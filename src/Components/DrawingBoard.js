import Draw from "../Functions/Draw";

function DrawingBoard(){
    
    return(
        <div>
            <h2>Drawing Board</h2>

            <canvas id="canvas" height="500" width="500">

            </canvas>
            <button id ="drawbtn" onClick={Draw()}>Draw</button>

        </div>
    );

    
}



export default DrawingBoard;

