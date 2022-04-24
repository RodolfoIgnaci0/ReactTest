import React, { Fragment } from 'react'
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Photo from "./Photo";





const Images = ({ photos }) => (
    <Fragment>
        <Container>
            <Grid container spacing={3} justify="center">
                {
                    photos.map(photo => {
                        const { id, description, urls, likes, user } = photo;
                        return (
                            <Photo
                                key={id}
                                id={id}
                                description={description ? description : "Sin Descripción"}
                                url_image={urls.thumb}
                                likes={likes}
                                social_instagram={user.social.instagram_username}
                                social_portfolio={user.social.portfolio_url}
                            />
                        )
                    })
                }
            </Grid>
        </Container>
    </Fragment>
);

export default Images;