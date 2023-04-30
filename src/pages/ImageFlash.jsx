import { imageImports } from "../constants/general";
import { useEffect, useState } from "react";

const ImageFlash = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    for (let i = 0; i < imageImports.length; i++)
      setTimeout(() => {
        setCurrentImage(i);
      }, i * 1000);
  }, []);
  return <img src={imageImports[currentImage].imageUrl} alt={imageImports[currentImage].name} />;
};

export default ImageFlash;
