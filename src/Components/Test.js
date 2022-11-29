import Draggable from 'react-draggable';

var index = 2;
function Object(){
    return(
        <Draggable>
            <div className='z-9 absolute cursor-move bg-white text-center w-36 h-24 rounded-lg font-bold '>
                <div className=" z-10 p-2 bg-sky-500/100 text-white">Lokallivet</div>
                <p className='inline-block align-middle'>Skolen</p>
            </div>

        </Draggable>
        
    );
    
}

export default Object;
