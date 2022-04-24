import React from 'react'
import { Fragment, useContext } from "react";
import { PhotosContext } from '../../contexts/PhotosContext';
import Images from "./Images";

const Photos = () => {
  const { doneFetch, photos } = useContext(PhotosContext);
  return (
    <Fragment>
      {doneFetch ? (
          photos.length ? (
            <Images photos={photos} />
          ) : (
            ""
          )
        ) : (
          ""
        )}
    </Fragment>
  );
};

export default Photos; 