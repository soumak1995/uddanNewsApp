import React from 'react'

function SourceCard({source}) {
    console.log(source)
    return (
        <div className="sourceCard">
            <strong>{source.name}</strong>
            <p>{source.description}</p>
        </div>
    )
}

export default SourceCard
