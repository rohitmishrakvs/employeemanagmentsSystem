import React from 'react'
import {ListEmployee} from './ListEmployee'
import List from '@material-ui/core/List';

const DetailList = ({ data }) => {

    const handleDelete = (id) => {
       console.log(id);
    }

    return (
        <List >
            {data.map((data,index) => {
               return (
                <ListEmployee data={data} index={index} key={index} handleDelete={handleDelete}/>
             ) })}
        </List>
    )

}//1

export default DetailList;
