import React, {useState} from 'react';
import PropTypes from 'prop-types';

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

    const toggleColor = () => {
        color === 'white' ? setColor('yellow') : setColor('white');
    }
    const toggleBackgroundColor = () => {
        backgroundColor === 'blue' ? setBackgroundColor('black') : setBackgroundColor('blue');
    }
    const toggleWidth = () => {
        width === '400px' ? setWidth('600px') : setWidth('400px');
    }
    const toggleTextAlign = () => {
        textAlign === 'center' ? setTextAlign('left') : setTextAlign('center');
    }

    return(
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                <FunctionalComponent string="Do you want to change the font color?" function={toggleColor} selectedStyle={color} />
                <FunctionalComponent string="How about the background color?" function={toggleBackgroundColor} selectedStyle={backgroundColor} />
                <FunctionalComponent string="You could change the width of this component..." function={toggleWidth} selectedStyle={width} />
                <FunctionalComponent string="... or just the text alignment." function={toggleTextAlign} selectedStyle={textAlign} />
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
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    );
};

const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is {props.selectedStyle}</p>
            <hr></hr>
        </div>
    )
};


FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'What style??'
}

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}