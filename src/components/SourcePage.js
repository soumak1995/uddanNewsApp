import React,{useEffect,useState} from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import SourceCard from './SourceCard'
function SourcePage() {
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
       const [data, setData] = useState([]);
       const [sources,setSources]=useState([]);
       useEffect(()=>{
        axios.get('https://newsapi.org/v2/sources?apiKey=16be9d562bb1434786007ea73c6fe828')
        .then((res)=>setSources(res.data.sources))
        .catch((err)=>alert(err))
    },[])
    useEffect(()=>{
        const slice = sources.slice(offset, offset + perPage)
        setData(slice)
        setPageCount(Math.ceil(sources.length / perPage));

    },[offset]);
    useEffect(()=>{
        const slice = sources.slice(0, 0 + 10)
        setData(slice)
        setPageCount(Math.ceil(sources.length / 10));

    },[sources]);
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };
   
   
    return (

        <>
         
            <div className="sourcePage">
            {
               data.slice(0,10).map((m,index)=><SourceCard key={index} source={m}/>) 
            }
            {
                data.length>=10? <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>:""
        
            }
           
        </div>
        </>
       
    )
}

export default SourcePage
