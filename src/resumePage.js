import React, {Component    } from 'react';
import ReactDOM, { render } from 'react-dom';
import Navi from './Navbar';
import Resume from './resume';
import { Document, Page, pdfjs } from "react-pdf";

clas resumePage extends Component {
    render() {  
        return (
            <div className = "resumePage">
                <Navi />
                <Switch>
                    
                </Switch>
            </div>
        )
    )
}