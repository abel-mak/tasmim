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

  function removeFirst() {
    const all = divRef.current.querySelectorAll('img');
    // const firstImg = divRef.current.querySelector('img');
    // divRef.current.removeChild(firstImg);
    // Append the removed img element as the last child


    // firstImg.classList.remove(styles.moveOut);
    all.forEach((element, index) => {
      // if (index != 0)
      element.classList.remove(styles.moveOut)
      if (index == 0)
        element.parentNode.removeChild(element);
    });
  }



  useEffect(() => {
    console.log('====')
    const getImageUris = async (ids: any[]) => {
      const uris = await Promise.all(ids.map(async (id) => await mediaIdToUri(id)));
      setImageUris(uris);
    }
    const toRemove = [];
    getImageUris(imagesIds);
    // const interval = setInterval(() => {
    // }, 2000);

    // return clearInterval(interval)
  }, [])
  return <div className={`flex max-w-4xl overflow-auto mx-auto ${styles.container}`} ref={divRef}>
    {
      imagesUris.map((uri: string) => {
        return <img key={v4()} src={uri} className={`${styles.myTransition}`} />
      })}
  </div>
}