import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchArguments } from "../../../scripts/hook/useFetchArguments";
import { MediaCard } from "../../components/card/MediaCard/MediaCard";
import { fetchMediaData } from "../../../features/media/mediaSlice";
import styles from "./Medias.module.scss";

export const Medias = () => {
  const dispatch = useDispatch();
  const { movies, tvs } = useSelector(({ media }) => media);

  const fetchArguments = useFetchArguments();

  const isMovies = fetchArguments.mediaType === "movies";
  const isTVS = fetchArguments.mediaType === "tvs";

  useEffect(() => {
    dispatch(fetchMediaData(fetchArguments));
  }, [dispatch]);

  const mediaType = isMovies ? "movies" : "tvs";
  const currentMedia = isMovies ? movies : isTVS ? tvs : null;
  const isMediaLoaded = currentMedia && currentMedia.length > 0;

  return (
    <section className="section container">
      <ul className={styles.media}>
        {isMediaLoaded &&
          currentMedia.map((media) => {
            return <MediaCard key={media.id} media={media} type={mediaType} />;
          })}
      </ul>
    </section>
  );
};
