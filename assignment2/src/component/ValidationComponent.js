import React from 'react'

const ValidationComponent = (props) => {

    let length = props.length;
    let outputText = "";
    if (length <= 5 && length > 0) {
        outputText = (
            <div>
                Error: Short Text
            </div>
        )
    }
    else if (length > 10) {
        outputText = (
            <div>
                Error: Very Long Text
            </div>
        )
    }
    return (
        <div>
            Length: {length}
            {outputText}
        </div>

    );
};

export default ValidationComponent