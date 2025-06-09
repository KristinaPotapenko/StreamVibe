import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchArguments } from "../../../scripts/hook/useFetchArguments";
import { FreeTrial } from "../../sections/FreeTrial/FreeTrial";
import { MediaInfo } from "../../sections/MediaInfo/MediaInfo";
import { Preview } from "../../sections/Preview/Preview";
import { fetchMediaData } from "../../../features/media/mediaSlice";

export const Media = () => {
  const dispatch = useDispatch();
  const { movie, tv } = useSelector(({ media }) => media);

  const fetchArguments = useFetchArguments();

  const isMovie = fetchArguments.mediaType === "movie";
  const isTV = fetchArguments.mediaType === "tv";

  useEffect(() => {
    dispatch(fetchMediaData(fetchArguments));
  }, [dispatch]);

  const currentMedia = isMovie ? movie : isTV ? tv : null;
  const isMediaLoaded = currentMedia && Object.keys(currentMedia).length !== 0;

  return (
    <>
      {isMediaLoaded && <Preview media={currentMedia} isMovie={isMovie} />}
      {isMediaLoaded && <MediaInfo media={currentMedia} isMovie={isMovie} />}
      <FreeTrial />
    </>
  );
};
