import React,{useContext} from 'react'
const ThemeContext=React.createContext('light');
// useContext is one type of a hooks
// useContext is access context value without using , <consumer>  we used useContext 
// useContext 

export default function App() 
{
  const theme=useContext(ThemeContext);  
  return <button className='theme' type='button'>I am  {theme} using useContext hooks</button>

  
}
