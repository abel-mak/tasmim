import { useEffect, useRef, useState } from "react";
import mediaIdToUri from "../../../utils/mediaIdToUri";
import { Heading } from "../heading";
import styles from "./index.module.css";

export const PrestationCard = ({ data }) => {
  const {
    black_font_img: blackImgId,
    white_font_img: whiteImgId,
    title,
  } = data;
  const [blackImgUri, setBlackImgUri] = useState("");
  const [whiteImgUri, setWhiteImgUri] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef(null);

  const handleMouseEnter = () => {
    if (divRef.current) {
      divRef.current.classList.add(styles.hover);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (divRef.current) {
      divRef.current.classList.remove(styles.hover);
    }
    setIsHovered(false);
  };

  useEffect(() => {
    const setImgs = async () => {
      setWhiteImgUri(await mediaIdToUri(whiteImgId));
      setBlackImgUri(await mediaIdToUri(blackImgId));
    };
    setImgs();
  }, []);
  return (
    <div
      ref={divRef}
      className="p-4 m-2 rounded-xl shadow-md h-100 w-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Heading
        attributes={{
          content: title,
          level: 5,
          textAlign: "center",
          textColor: isHovered ? "white" : "black",
        }}
      />
      <div className="flex justify-center p-3">
        {isHovered ? (
          <img src={whiteImgUri} alt="" />
        ) : (
          <img src={blackImgUri} alt="" />
        )}
      </div>
    </div>
  );
};
