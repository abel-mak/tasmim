import React from "react";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import mediaIdToUri from "../../../utils/mediaIdToUri";
import styles from "./carousel.module.css";

const toImageId = (data: any) => {
  const result = [];
  for (const key in data) {
    if (key.startsWith("images_")) {
      result.push(data[key]);
    }
  }
  return result;
};

const toDataURL = (uri: string) => {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = '/api/media/' + uri.replace(`${process.env.NEXT_PUBLIC_WP_URL}/wp-content/uploads`, '');
  console.log(`${process.env.NEXT_PUBLIC_WP_URL}/wp-content/uploads`);
  return new Promise((resolve, reject) => {
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      try {
        const r = canvas.toDataURL()
        resolve(r);
      } catch (e) {
        reject(e);
      }
    };
  });
};

let imagesMediaIds = null;
export const Carousel = ({ data }) => {
  imagesMediaIds = imagesMediaIds || toImageId(data);
  const [imagesUris, setImageUris] = useState([]);
  const divRef = useRef(null);

  useEffect(() => {
    const getImageUris = async (mediaIds: any[]) => {
      const urisAndId = await Promise.all(
        mediaIds.map(async (id) => {
          const uri = await mediaIdToUri(id)
          const dataUrl = await toDataURL(uri)
          return { dataUrl, id: v4() }
        }
        )
      );
      setImageUris(urisAndId);
    };
    const toAppend = [];
    getImageUris(imagesMediaIds);
    const interval = setInterval(() => {
      /** 1- add css class that reduce the first image to 0 pixel clone it and save it for next iteration
       *  2- remove the first image and append the cloned version of it saved from the iteration before
       */
      if (divRef.current) {
        if (toAppend.length) {
          const img = divRef.current.querySelector("img");
          if (img) {
            img.parentNode.appendChild(toAppend.shift());
            img.parentNode.removeChild(img);
          }
        }
        const img = divRef.current.querySelector("img");
        if (img) {
          const clonedImg = img.cloneNode(true);
          toAppend.push(clonedImg);
          img.classList.add(styles.myTransition);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`flex max-w-5xl overflow-hidden mx-auto mb-2 mt-5 ${styles.container}`}
      ref={divRef}
    >
      {imagesUris.map(({ dataUrl, id }) => {
        // console.log('========');
        return <img key={id} src={dataUrl} className={``} />;
      })}
    </div>
  );
};
