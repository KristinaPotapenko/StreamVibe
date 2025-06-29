import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewRealeasesTV } from "../../../../features/tv/newReleasesTV/newReleasesTVSlice";
import { ROUTES } from "../../../../utils/routes";
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
      id="tvNewReleases"
      route={ROUTES.TV_DETAILS}
      routeMore={ROUTES.TV_UPCOMING}
      title="New Releases"
      list={newRealeasesTV}
      footer="releases"
      shouldShowMoreCard={true}
    />
  );
};
