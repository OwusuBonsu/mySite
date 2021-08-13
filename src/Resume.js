import file from "./OwusuBonsu_Resume.pdf";
import "./resume.css";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Card from "react-bootstrap/Card";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Resume() {
  return (
    <>
      <div className="Header">
        <h1>My Resume</h1>
      </div>
      <div className="pageHolder">
        <Document file={file}>
          <Page pageNumber={1} renderTextLayer={false} />
        </Document>
      </div>
    </>
  );
}

export default Resume;
