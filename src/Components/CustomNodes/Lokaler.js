import { useCallback } from 'react';
import { Handle, Position, Node } from 'reactflow';

export function LokaleNode({ data }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
      console.log(data);
    }, []);

    return (
        <div className="Customnode  border border-black rounded-b-md">
          <Handle type="target" position={Position.Top} />
          <div className="nodenavn p-3">
            <input className="nodenavninput overflow-hidden" name="navn" /* TODO value={data.Customnodeinput}*/ onChange={onChange} />
          </div>
          <textarea className="Customnodeinput rounded-b-md overflow-hidden" name="beskrivelse" /* TODO value={data.Customnodeinput}*/ onChange={onChange} />
          <Handle type="source" position={Position.Bottom} id="b" />
          <Handle type="source" position={Position.Left} id="d" />
          <Handle type="source" position={Position.Right} id="e" />
        </div>
      );
}