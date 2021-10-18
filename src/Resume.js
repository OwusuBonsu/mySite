import file from "./OwusuBonsu_Resume.pdf";
import img from "./OwusuBonsu_Resume-1.jpg";
import "./resume.css";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Card from "react-bootstrap/Card";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Resume() {
  return (
    <div className="mb-5">
      <div className="Header">
        <h1>My Resume</h1>
      </div>
      <Card
        className="m-3 resumeCard"
        style={{ backgroundColor: `rgb(18, 18, 18)` }}
      >
        <div className="pageHolder">
          <img src={img} className="resumeIMG" />
          <Document className="resumeSVG" file={file} renderMode="svg">
            <Page pageNumber={1} renderTextLayer={true} />
          </Document>
        </div>
      </Card>
    </div>
  );
}

export default Resume;
