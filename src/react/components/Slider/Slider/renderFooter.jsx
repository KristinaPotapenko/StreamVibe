import { getRouteWithId } from "../../../../scripts/helpers/getRouteWithId";
import {
  SliderCardCategoriesFooter,
  SliderCardGenresFooter,
  SliderCardMustWatchFooter,
  SliderCardReleasesFooter,
  SliderCardTrendingFooter,
} from "../SliderCard/SliderCardFooter/SliderCardFooter";

export const renderFooter = (footer, slide, route) => {
  const name = slide.title ? slide.title : slide.name;
  const path = getRouteWithId(route, slide.id);

  switch (footer) {
    case "genres":
      return <SliderCardCategoriesFooter path={path} name={slide.name} />;
    case "topGenres":
      return <SliderCardGenresFooter path={path} name={slide.name} />;
    case "trending":
      return (
        <SliderCardTrendingFooter
          name={name}
          average={parseInt(slide.vote_average)}
          popularity={parseInt(slide.popularity)}
        />
      );
    case "releases":
      return (
        <SliderCardReleasesFooter
          name={name}
          releaseDate={
            slide?.release_date ? slide?.release_date : slide?.first_air_date
          }
        />
      );
    case "mustWatch":
      return (
        <SliderCardMustWatchFooter
          name={name}
          average={slide.vote_average}
          popularity={parseInt(slide.vote_count)}
        />
      );
    default:
      return null;
  }
};
