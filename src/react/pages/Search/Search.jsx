import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../../../features/searchMedia/searchMediaSlice";
import { Input } from "../../components/inputs/Input/Input";
import { MediaCard } from "../../components/card/MediaCard/MediaCard";
import { Pagination } from "../Medias/Pagination/Pagination";
import styles from "./Search.module.scss";

export const Search = () => {
  const dispatch = useDispatch();
  const media = useSelector(({ searchMedia }) => searchMedia.media);

  const [activePage, setActivePage] = useState(1);
  const [mediaTitle, setMediaTitle] = useState("");

  useEffect(() => {
    dispatch(fetchSearchResults({ query: mediaTitle, page: activePage }));
  }, [mediaTitle, activePage]);

  const handleChangeMediaTitle = ({ target }) => {
    setMediaTitle(target.value);
  };

  const isMediaLoaded = Array.isArray(media) && media.length > 0;

  return (
    <section className="section container first-section">
      <div className={styles.search}>
        <Input
          placeholder="Enter media title"
          value={mediaTitle}
          onChange={handleChangeMediaTitle}
        />
        <svg className="icon">
          <use
            xlinkHref={`${
              import.meta.env.BASE_URL
            }assets/icon/sprite.svg#search`}
          />
        </svg>
      </div>
      <ul className={styles.media}>
        {isMediaLoaded &&
          media.map((media) => {
            const mediaType = media?.media_type === "movie" ? "movies" : "tvs";
            return <MediaCard key={media.id} media={media} type={mediaType} />;
          })}
      </ul>
      {isMediaLoaded && (
        <Pagination activePage={activePage} setActivePage={setActivePage} />
      )}
    </section>
  );
};
