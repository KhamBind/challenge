import React from 'react'

const Health = (props) => {
    return(
        <div className="progress-bar">
            <div className="progress-inbar" 
                style={{
                    width: props.value +'%', 
                    backgroundColor: props.value <= 50 ? '#5cb85c': props.value <= 70 ? '#f0ad4e' : '#f0ad4e'
                }}>
            </div>
        </div>
    );
}

export default Health;