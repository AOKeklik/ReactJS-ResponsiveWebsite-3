import React from 'react'
import loading from '../assets/images/gif/loading-arrow.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={loading} />
        </div>
    )
}

export default Loading
