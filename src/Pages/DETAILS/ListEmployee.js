import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { ListItemText, makeStyles, Typography } from '@material-ui/core';
import { blue, pink, yellow } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import {DeleteOutlined} from '@material-ui/icons'
import EditIcon from '@material-ui/icons/Edit';
import DetailsIcon from '@material-ui/icons/Details';

const useStyles = makeStyles({
    root: {
        backgroundColor:'#f4f4f4',
        marginTop:10
    },
    avatar: {
        backgroundColor: (employee) => {
            if (employee.gender === 'male') {
                return yellow[700]
            }
            if (employee.gender === 'female') { 
            return pink[700];
        }
            return blue[700]
        }
    }
})

export const ListEmployee = ({ data , index,handleDelete }) => {

    const classes = useStyles(data)
    return (
        <ListItem className={classes.root} key={index}>
            <ListItemAvatar onClick={()=>{console.log("f")}}>
                <Avatar alt="Remy Sharp" className={classes.avatar}>
                    {data.name[0]}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={data.name}//Department of Employee
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                        
                            color="textPrimary"
                        >
                            {/* Name of Employee */}
                            {data.department}
                        </Typography>
                        {" "} —{data.createdAt }
                    </React.Fragment>
                }
            />
             <IconButton onClick={handleDelete(data.id)}>
                <DeleteOutlined color="secondary"/>
            </IconButton> 
            <IconButton>  
                <DetailsIcon color="primary"/>
            </IconButton> 
            <IconButton>  
                <EditIcon color="primary"/>
            </IconButton>
        </ListItem>
    )
}
