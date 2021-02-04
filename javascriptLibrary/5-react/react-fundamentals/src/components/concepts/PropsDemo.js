import React, {useState} from 'react';
import FunctionalComponentDemo from './FunctionalComponentDemo';

const PropsDemo = () => {
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');
    
    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    return(
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                <FunctionalComponent string="Will this display?"/>
                <FunctionalComponent string="Props can do a lot on a website"/>
                <FunctionalComponent string="You can even send data from one component ..."/>
                <FunctionalComponent string="... to another component."/>
                <FunctionalComponent />
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    

    

    return (
        <div>
            <p>{props.string}</p>
        </div>
    );
};