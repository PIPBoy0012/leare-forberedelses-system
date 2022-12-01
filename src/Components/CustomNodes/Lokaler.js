import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

// Jeg er død i dag mand og i andre har efterladt mig...

const handleStyle = { left: 10 };

function LokaleNode({ data }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);

    return (
        <div className="Lokale-node">
          <Handle type="target" position={Position.Top} />
          <div>
            <label htmlFor="text">Text:</label>
            <input id="text" name="text" onChange={onChange} />
          </div>
          <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
          <Handle type="source" position={Position.Bottom} id="b" />
        </div>
      );
}

export default LokaleNode;