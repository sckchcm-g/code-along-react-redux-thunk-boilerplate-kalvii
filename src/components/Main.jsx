import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {listAction, listSelector} from '../redux/reducer'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchUser } from '../redux/reducer';

const Main = () => {

    const dispatch = useDispatch();

    const list = useSelector(listSelector);

    useEffect(() => {
    dispatch(fetchUser());
    }, []);

  return (
    <div>
        {
            list.map((item,index)=>{
                return(
                    <div className='container'>
                        <div className='blocks'>
                            <p className='name'>{item.name}</p>
                            <p className='email'>{item.email}</p>
                            
                        </div>
                        
                    </div>
                )
            })
        }     
    </div>
  )
}
export default Main;2