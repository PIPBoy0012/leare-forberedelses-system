import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

export function LokaleNode({ data }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);

    return (
        <div className="Customnode border border-black rounded-b-md">
          <Handle type="target" position={Position.Top} />
          <div className="nodenavn p-3">
            <input className="nodenavninput" name="navn" onChange={onChange} />
          </div>
          <textarea className="Customnodeinput rounded-b-md overflow-hidden" name="beskrivelse" onChange={onChange} />
          <Handle type="source" position={Position.Bottom} id="b" />
          <Handle type="source" position={Position.Left} id="d" />
          <Handle type="source" position={Position.Right} id="e" />
        </div>
      );
}