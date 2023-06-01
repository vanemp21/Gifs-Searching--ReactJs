import { useEffect, useState } from "react";
import { getGif } from "../components/helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async () => {
        const newImages = await getGif(category);
        setimages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, []);
    return {
        images,
        isLoading
    }
}
//un hook es solo una funcion que retorna algo