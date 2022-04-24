import React, { createContext, useState, useEffect } from 'react'
import { photosGet } from '../constants';

export const PhotosContext = createContext();

const PhotosContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [photos, setPhotos] = useState();


    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = () => {
        fetch(photosGet())
        .then(res => res.json())
        .then(data => {
            setDoneFetch(true);
            setPhotos(data);
        })
        .catch(err => console.log(err));
    };

    return (
        <PhotosContext.Provider value={{doneFetch, photos}}>
            {children}
        </PhotosContext.Provider>
    )
}

export default PhotosContextProvider;