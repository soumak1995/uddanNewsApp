import React,{useEffect,useState} from 'react'
import ReactPaginate from 'react-paginate';
import {DebounceInput} from 'react-debounce-input';
import axios from 'axios';
import Card from './Crad'
import Header from './Header'

function Dashboard() {
 
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    const [search,setSearch]=useState('');
   const [data, setData] = useState([]);
   const [everythingData,setEverythingData]=useState([]);
   const [headlines, setHeadlines] = useState([]);
   useEffect(()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=16be9d562bb1434786007ea73c6fe828')
    .then((res)=>setHeadlines(res.data.articles))
    .catch((err)=>alert(err))
},[])
    useEffect(()=>{
        const slice = headlines.slice(offset, offset + perPage)
        setData(slice)
        setPageCount(Math.ceil(headlines.length / perPage));

    },[offset]);
    useEffect(()=>{
        const slice = headlines.slice(0, 0 + 10)
        setData(slice)
        setPageCount(Math.ceil(headlines.length / 10));

    },[headlines]);
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };
    const searchItem=(value)=>{
        setSearch(value)
     
    }
    const handleSeacrch=(e)=>{
        console.log(e.target.value)
        axios.get(`https://newsapi.org/v2/everything?q=${e.target.value}&apiKey=16be9d562bb1434786007ea73c6fe828`)
       .then((res)=>setHeadlines(res.data.articles))
       .catch((err)=>alert(err))
      
    }
    //const updatedData=headlines.filter(news=>news.title.toLowerCase().includes(search.toLowerCase()));
    return (

        <>
       
                 <DebounceInput
                minLength={2}
                debounceTimeout={300}
                onChange={handleSeacrch}/>
            <div className="dashbord">
            {
               data.slice(0,10).map((m,index)=><Card key={index} headlines={m}/>) 
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
        <div className="view_height">

        </div>
        </>
       
    )
}

export default Dashboard
