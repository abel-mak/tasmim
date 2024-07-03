import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import mediaIdToUri from "../../../utils/mediaIdToUri";
import styles from './carousel.module.css'

const toImageId = (data: any) => {
  const result = [];
  for (const key in data) {
    if (key.startsWith('images_')) {
      result.push(data[key]);
    }
  }
  return result;
}

function animate() {

}



export const Carousel = ({ data }) => {
  const imagesIds = toImageId(data);
  const [imagesUris, setImageUris] = useState([]);
  const divRef = useRef(null);

  useEffect(() => {
    const getImageUris = async (ids: any[]) => {
      const uris = await Promise.all(ids.map(async (id) => await mediaIdToUri(id)));
      setImageUris(uris);
    }
    const toAppend = [];
    getImageUris(imagesIds);
    const interval = setInterval(() => {
      /** 1- add css class that reduce the first image to 0 pixel clone it and save it for next iteration 
       *  2- remove the first image and append the cloned version of it saved from the iteration before
       */
      if (divRef.current) {
        if (toAppend.length) {
          const img = divRef.current.querySelector('img');
          if (img){
            img.parentNode.appendChild(toAppend.shift())
            img.parentNode.removeChild(img);
          }

        }
        const img = divRef.current.querySelector('img');
        if (img) {
          const clonedImg = img.cloneNode(true)
          toAppend.push(clonedImg);
          img.classList.add(styles.myTransition)
        }
      }
    }, 2000);

    return () => clearInterval(interval)
  }, [])
  return <div className={`flex max-w-5xl overflow-hidden mx-auto mb-2 mt-5 ${styles.container}`} ref={divRef}>
    {
      imagesUris.map((uri: string) => {

        return <img key={v4()} src={uri} className={``} />
      })}
  </div>
}