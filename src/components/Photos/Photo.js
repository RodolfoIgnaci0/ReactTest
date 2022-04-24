import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Photo = ({id, description, url_image, likes, social_instagram, social_portfolio}) => {
  return (
    <Grid item xs={ 12 } sm={ 3 }>
      <Paper>
        <h3>{description}</h3>
        <img src={url_image} alt="imagen" /><br />
        <span><FavoriteIcon style={{ color: `red`}}/>{likes}</span>
        <p>By {social_instagram}</p>
        <p>{social_portfolio}</p>
      </Paper>
    </Grid>
    
  )
}

export default Photo;