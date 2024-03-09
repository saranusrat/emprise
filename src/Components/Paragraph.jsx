import React from 'react'
const Paragraph = ({className,text}) => {
    return (
        <div className={` ${className}`}>
            {text}
        </div>
    );
};

export default Paragraph;