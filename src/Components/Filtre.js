import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import {HandleRate, HandleSearch} from '../Actions';

const Filter= () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('');
    const [rate, setRate] = useState(0);
    const style={width:'250px',marginRight:'40px'}
    const style1={display: 'flex', gridTemplateColumns:'row', paddingLeft:'800px', margin:'0px 0px 50px 0px',paddingTop:'40px'}
    return (
        <div>
                <Form style={style1}>
                <Form.Group>
                    <Form.Control style={style} type="text" placeholder="Search" 
                    onChange={(e) => {setSearch(e.target.value)
                        dispatch(HandleSearch(search))}}/>  
                    </Form.Group>
                    <StarRatingComponent starCount={8} emptyStarColor={'white'} onStarClick={(value)=>{setRate(value)
                    dispatch(HandleRate(rate))}}/>
                </Form>
        </div>
    )
}

export default Filter
