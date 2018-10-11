import React from 'react';
import Table from '../table/table';
import './Rating.css'


export default (props) => (
    <div className="conten">
    <h1 className="ratingTitle">Rating</h1>
    <Table data={props.data}></Table>
    </div>

);