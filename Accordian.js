import React from 'react';
import { useState } from "react";

 
const Accordian = ({question, answer}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="box">
            <div>
                <h4>{question}</h4>
                <div className="toggle" onClick={() => setIsVisible(!isVisible)}>{isVisible ? '-' : '+'}    </div>
            </div>
            {isVisible && <p className="answerText">{answer}</p>}
        </div>
    )
}

export default Accordian;