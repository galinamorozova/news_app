import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNews } from '../redux/actions'



const CreateNews = () => {

    const [titleValue, setTitleValue] = useState (null);
    const [bodyValue, setBodyValue] = useState (null)
    let dispatch = useDispatch();

    const addNewsOnClick = (e) => {
        e.preventDefault ();
        let payload = {
                id: Date.now(),
                title: titleValue,
                body: bodyValue
               };
            dispatch(  addNews(payload));
              setTitleValue('');
              setBodyValue('');
         }
    

    return (
        <div className='createNews'>
            <form>
                <h2>Do you want to add news?</h2>
                <input placeholder='add title' value={titleValue} onChange={(e) => {setTitleValue(e.target.value)}}/>
                <textarea placeholder='add description' value={bodyValue} onChange={(e) => {setBodyValue(e.target.value)}}/>
                <button onClick={addNewsOnClick}>Add news</button> 
            </form>

        </div>
    )
}

export default CreateNews;