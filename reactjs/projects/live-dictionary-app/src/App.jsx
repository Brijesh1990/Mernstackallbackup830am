import React,{useState} from 'react'
import axios from 'axios'
import {FaSearch} from 'react-icons/fa'
export default function App() {
  const [data,setData]=useState("");
  const [searchWord,setSearchWord]=useState("");

  // create a function to fetch data from the api
  function getMeaning(){
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(url).then((response)=>{
      setData(response.data[0]);
      console.log(response.data[0]);
    }).catch((error)=>{
      console.log(error);
      alert("No word found");
    })

  }

  //create a function for play sound or audio
  function playAudio(){
    let audio=new Audio(data.phonetics[0].audio);
    audio.play();
  }

  //create a function for handle form submit
  return (
    <>
    <div className='w-200 text-center mt-10 mb-10 min-h-screen bg-gray-200  p-15 shadow-lg mx-auto'>
     <h1 className="text-4xl font-bold text-blue-600 mt-10">Live Dictionary app!</h1>
    <div className="flex items-center justify-center mt-5">
     
      <form>
        <input type="text" className="border-2 bg-white border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Type a word for search..." onChange={(e)=>{setSearchWord(e.target.value);}} />
        <button type="button" onClick={()=>{getMeaning();}} className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Search <FaSearch className='inline-flex' /> </button>
      </form>
    </div>
    {/* get all data here */}
    <div className="mt-10">
      {data && (
        <div>
          <h2 className="text-2xl font-bold text-blue-600">{data.word}</h2>
          <p className="text-gray-600">{data.meaning}</p>
          <button onClick={playAudio} className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
             Play Audio <span className='text-red-600'> 🔊 </span>
          </button>

           <h4 className='text-center'>Part of speech</h4>
            <p className='text-center'>{data.meanings[0].partOfSpeech}</p>
            <h4 className='text-center'>Definition</h4>
            <p className='text-center'>{data.meanings[0].definitions[0].definition}</p>
            <h4 className='text-center'>Example</h4>
            <p className='text-center'>{data.meanings[0].definitions[0].example}</p>
            {data.meanings[0].synonyms && (
              <div>
                <h4 className='text-center'>Synonyms</h4>
                <p className='text-center'>{data.meanings[0].synonyms.join(", ")}</p>
              </div>
            )}
            {data.meanings[0].antonyms && (
              <div>
                <h4 className='text-center'>Antonyms</h4>
                <p className='text-center'>{data.meanings[0].antonyms.join(", ")}</p>
              </div>
            )}
        </div>
       
      )}
    </div>
    </div>
    </>
  )
}
