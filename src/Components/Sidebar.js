import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { createRef } from "react";

export async function handleDownloadPdf() {
  const element = document.getElementById("test");
  const canvas = await html2canvas(element);
  const data = canvas.toDataURL("image/png");

  const pdf = new jsPDF();
  const imgProperties = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("print.pdf");
}

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>
<<<<<<< HEAD
      <div
        className="dndnode Test"
        onDragStart={(event) => onDragStart(event, "textUpdater")}
        draggable
      >
        Test Node
      </div>
      <div
        className="Customnode"
        onDragStart={(event) => onDragStart(event, "textUpdater")}
        draggable
      >
        <div className="nodenavn">
          <input className="nodenavninput" name="navn" />
=======
      <div className="Customnode rounded-b-lg" onDragStart={(event) => onDragStart(event, 'textUpdater')} draggable>
          <div className="nodenavn">
            <input className="nodenavninput" name="navn"/>
          </div>
>>>>>>> master
        </div>
      </div>
      <div>
        <button type="button" onClick={handleDownloadPdf}>
          Click me to download pdf
        </button>
      </div>
    </aside>
  );
};
