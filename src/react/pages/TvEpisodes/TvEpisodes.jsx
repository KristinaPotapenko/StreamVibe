import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getTvEpisodeImages,
  getTvEpisodes,
} from "../../../features/tv/tvEpisodes/tvEpisodesSlice";
import { MediaBlock } from "../../sections/MediaInfo/MediaBlocks/MediaBlock";
import { MediaItem } from "../../sections/MediaInfo/MediaBlocks/MediaItem/MediaItem";
import styles from "../../sections/MediaInfo/MediaInfo.module.scss";

export const TvEpisodes = ({ isFirstSection }) => {
  const dispatch = useDispatch();

  const { tvId, seasonId } = useParams();

  const tvEpisodes = useSelector(({ tvEpisodes }) => tvEpisodes.tvEpisodes);
  const episodesImages = useSelector(
    ({ tvEpisodes }) => tvEpisodes.tvEpisodeImages
  );

  useEffect(() => {
    dispatch(getTvEpisodes({ tvId, seasonId }));
    dispatch(getTvEpisodeImages({ tvId, seasonId }));
  }, []);

  return (
    <section
      className={`section container ${isFirstSection ? "first-section" : ""}`}
    >
      <MediaBlock subtitle="Episodes">
        <ul className={styles.medias}>
          {tvEpisodes.map((tvEpisode, index) => {
            return (
              <MediaItem
                key={tvEpisode.id}
                media={tvEpisode}
                imageInfo={episodesImages[index]}
                index={index}
              />
            );
          })}
        </ul>
      </MediaBlock>
    </section>
  );
};
