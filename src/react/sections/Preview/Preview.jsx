import { useState } from "react";
import { baseImageURL, FALLBACK_IMAGE } from "../../../utils/constants";
import { MediaContent } from "../../components/MediaContent/MediaContent";
import styles from "./Preview.module.scss";

export const Preview = ({ isFirstSection = false, media, isMovie }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      className={`section container ${isFirstSection ? "first-section" : ""} 
     `}
    >
      <div
        className={showVideo ? undefined : styles.sliderBg}
        style={
          showVideo
            ? undefined
            : {
                backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 1) 16%, rgba(20, 20, 20, 0.26) 100%), url(${
                  media.backdrop_path
                    ? baseImageURL + media?.backdrop_path
                    : FALLBACK_IMAGE
                })`,
              }
        }
      >
        <div className={showVideo ? undefined : styles.sliderContent}>
          <MediaContent
            media={media}
            showVideo={showVideo}
            setShowVideo={setShowVideo}
            isMovie={isMovie}
          />
        </div>
      </div>
    </section>
  );
};
