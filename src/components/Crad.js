import React from 'react'

function Crad({headlines}) {
    console.log(headlines)
    return (
        <div className="card">
            <img src={headlines?.urlToImage} alt={headlines?.author}/>
             <section>
                 <h4>{headlines?.author}</h4>
                 <p>Author:{headlines?.author}</p>
                 <p>{headlines?.description}</p>
                 <p>{headlines?.content}</p>
                 <strong>{headlines?.publishedAt}</strong>
                 <a href={headlines?.url} style={{display:"block"}} target="_blank">More</a>
             </section>
        </div>
    )
}

export default Crad
