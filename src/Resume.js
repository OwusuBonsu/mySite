import file from "./media/OwusuBonsu_Resume.pdf";
import img from "./media/OwusuBonsu_Resume-1.jpg";
import "./resume.css";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Card from "react-bootstrap/Card";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Resume() {
  return (
    <div>
      <div className="resumeCard bg-black bg-opacity-40 rounded-xl">
        <div className="pageHolder">
          <img src={img} className="resumeIMG" />
          <Document className="resumeSVG" file={file} renderMode="svg">
            <Page pageNumber={1} renderTextLayer={true} />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default Resume;
