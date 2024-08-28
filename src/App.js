import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { HashRouter } from "react-router-dom";
import AppRouter from './AppRouter.js';
import { getCardsAction } from './store/cardReducer.js';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const API = 'https://fakestoreapi.com/products/';
  
  async function getApi() {
		try{
		  const response = await axios.get(API);
		  const data = response.data;	     
		  dispatch(getCardsAction(data));
		}catch(e){ throw new Error(e);}
	};	
	
	useEffect(() => {getApi()}, []);

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []); 


  return (
    <HashRouter>
     <AppRouter/>
    </HashRouter>
  );
}

export default App;
