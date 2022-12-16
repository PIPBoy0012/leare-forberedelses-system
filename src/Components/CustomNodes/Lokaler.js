import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { SaveNodeIntoDB } from '../SQLConn';




export function LokaleNode({ data }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, [])

    return (
        <div className="Customnode rounded-b-lg border truncate border-black ">
          <Handle type="target" position={Position.Top} />
          <div className="nodenavn">
            <input className="nodenavninput" name="navn" onChange={onChange} />
          </div>
          <button onClick={SaveNodeIntoDB()} className='gemknap absolute text-transparent text-xs bg-transparent w-16 h-5 z-4 rounded-md hover:bg-slate-500 hover:text-black'>Gem Node</button>
          <textarea rows='1' className="Customnodeinput resize-none text-xs" name="beskrivelse" onChange={onChange} />
          <Handle type="source" position={Position.Bottom} id="b" />
          <Handle type="source" position={Position.Left} id="d" />
          <Handle type="source" position={Position.Right} id="e" />
        </div>
      );
}