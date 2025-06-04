import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewRealeasesTV } from "../../../../features/tv/newReleasesTV/newReleasesTVSlice";
import { Slider } from "../../../components/Slider/Slider/Slider";

export const NewReleasesTV = () => {
  const dispatch = useDispatch();
  const { newRealeasesTV } = useSelector(
    ({ newRealeasesTV }) => newRealeasesTV
  );

  useEffect(() => {
    dispatch(getNewRealeasesTV());
  }, [dispatch]);

  return (
    <Slider
      type="tv"
      title="New Releases"
      list={newRealeasesTV}
      footer="releases"
    />
  );
};
