import { useEffect, useRef, useState } from "react";
import mediaIdToUri from "../../../utils/mediaIdToUri";
import styles from "./styles.module.css";

export const ImageParagraphAnimated = ({ data }) => {
  if (!data) return <span>no data to display</span>;
  const {
    image: imageId,
    title,
    paragraph,
    paragraph_position: paragraphPosition,
  } = data;
  const [imageSrc, setImageSrc] = useState("");
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const [classNameExtension, setClassNameExtension] = useState("");
  // const [key, setKey] = useState(Math.random())
  // console.log(data);

  useEffect(() => {
    const getImageUri = async () => {
      setImageSrc(await mediaIdToUri(imageId));
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const classList = entry.target.classList;
          if (entry.isIntersecting) {
            if (classList.contains(styles.left)) {

              classList.add("show-left");
              classList.remove(styles.left);
            }
            if (classList.contains(styles.right)) {
              classList.add("show-right")
              classList.remove(styles.right);
            }
            classList.remove("opacity-0");
            /** just to trigger rerender */
            // setKey(Math.random());
          }
          else {
            if (classList.contains("show-left")) {

              classList.remove("show-left");
              classList.add(styles.left);
            }
            if (classList.contains("show-right")) {
              classList.remove("show-right")
              classList.add(styles.right);
            }
            classList.add("opacity-0");


          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the target is visible
      }
    );
    if (leftDivRef.current) {
      observer.observe(leftDivRef.current);
    }
    if (rightDivRef.current) {
      observer.observe(rightDivRef.current);
    }
    getImageUri();
    return () => {
      observer.disconnect();
    };
  }, []);
  // console.log(styles.left);
  return (
    <div
      className={`flex ${paragraphPosition == "left" ? "flex-row-reverse" : ""
        } max-w-5xl mx-auto`}
    >
      <div
        style={{ transition: "1s" }}
        className={`flex-1 opacity-0 ${paragraphPosition == "left" ? styles.right : styles.left
          } ${classNameExtension}`}
        ref={leftDivRef}
      >
        <img src={imageSrc} id="my_image" />
      </div>
      <div
        style={{ transition: "1s" }}
        className={`flex-1 opacity-0 ${paragraphPosition == "left" ? styles.left : styles.right
          } ${classNameExtension}`}
        ref={rightDivRef}
      >
        <h5 className={`text-2xl`}>{title}</h5>
        <hr className="my-2 text-xl border-black"></hr>
        <p className="text-xl">{paragraph}</p>
      </div>
    </div>
  );
};
