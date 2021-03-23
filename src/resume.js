import file from './obResume.pdf'
import './resume.css'
import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from 'react-bootstrap';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    return(
        <div className="pageHolder">
            <Document file={file}>
                <Page pageNumber={1}/>
            </Document>
            <Button href= {file} download>Download</Button>
        </div>
    );
}

export default Resume;