import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { useGlobalContext } from '../context/store';


const Cardimage = (props) => {
    const { cocktails } = useGlobalContext()
  
    return (
      <div style={{margin: "15px", padding: "0 2rem"}}>
        <Grid container spacing={3}>
        {cocktails.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia component="img" image={image.strDrinkThumb} alt={image.strDrink} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {image.strDrink}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      </Grid>
    </div>
      
    )
}

export default Cardimage; 

