import { useEffect, useRef, useState } from "react";

function useLazyImageObserver(src: string) {
  const [imageSrc, setImageSrc] = useState("");
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef && !imageSrc) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            if (imageRef.current) {
              observer.unobserve(imageRef.current);
            }
          }
        },
        { threshold: [0.25] }
      );
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }

      return () => {
        observer && observer.disconnect();
      };
    }
  }, [imageSrc, imageRef]);

  return { imageRef, imageSrc };
}

export default useLazyImageObserver;
