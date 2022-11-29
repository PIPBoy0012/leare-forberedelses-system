import Draggable from 'react-draggable';

function Object(){
    return(
        <Draggable >
            <div className='z-9 absolute cursor-move bg-white text-center rounded-lg font-bold '>
                <div className=" z-10 p-2 bg-sky-500/100 text-black"><input className='w-32 tex bg-sky-500/100' placeholder='title' maxLength="15"></input></div>
                <input className='inline-block align-middle w-32 h-12 mt-2 mb-2' placeholder='Beskrivelse'></input>
            </div>

        </Draggable>
        
    );
    
}

export default Object;
