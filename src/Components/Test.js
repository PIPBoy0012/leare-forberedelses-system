import Draggable from 'react-draggable';

function appentoSidepanel(Object){
    Element.append()
}

function Object(){
    return(
        <Draggable className="Baerk opacity-100 w-36 m-8" bounds="body">
            <div className='z-9 absolute cursor-move bg-white text-center rounded-lg font-bold border border-black '>
                <div className=" z-10 p-2 bg-sky-500/100 text-black border-b border-black rounded-t-lg"><input className='w-32 tex bg-sky-500/100' placeholder='title' maxLength="15"></input></div>
                <textarea wrap='hard' className='inline-block align-middle w-32 mt-2 mb-2 ' placeholder='Beskrivelse'></textarea>
            </div>

        </Draggable>
        
    );
    
}

export default Object;
