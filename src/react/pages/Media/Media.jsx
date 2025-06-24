import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMediaData } from "../../../features/media/mediaSlice";
import { useFetchArguments } from "../../../scripts/hook/useFetchArguments";
import { Preview } from "../../sections/Preview/Preview";
import { MediaInfo } from "../../sections/MediaInfo/MediaInfo";
import { FreeTrial } from "../../sections/FreeTrial/FreeTrial";

export const Media = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

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
      {isMediaLoaded && (
        <Preview
          isFirstSection={true}
          media={currentMedia}
          isMovie={isMovie}
          setShowModal={setShowModal}
        />
      )}
      {isMediaLoaded && (
        <MediaInfo
          media={currentMedia}
          isMovie={isMovie}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <FreeTrial />
    </>
  );
};
