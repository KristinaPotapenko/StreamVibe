import { Hero } from "../../sections/Hero/Hero";
import { Categories } from "../../sections/Categories/Categories";
import { Devices } from "../../sections/Devices/Devices";
import { Questions } from "../../sections/Questions/Questions";
import { Pricing } from "../../sections/Pricing/Pricing";
import { FreeTrial } from "../../sections/FreeTrial/FreeTrial";
import { FavoritesMovies } from "../../sections/FavoritesMovies/FavoritesMovies";
import { FavoriteTV } from "../../sections/FavoriteTV/FavoriteTV";
import { WatchlistMovies } from "../../sections/WatchlistMovies/WatchlistMovies";
import { WatchlistTV } from "../../sections/WatchlistTV/WatchlistTV";

export const Home = () => {
  const accountType = localStorage.getItem("accountType");

  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Questions />
      <Pricing />
      {accountType === "user" && <FavoritesMovies />}
      {accountType === "user" && <WatchlistMovies />}
      {accountType === "user" && <FavoriteTV />}
      {accountType === "user" && <WatchlistTV />}
      <FreeTrial />
    </>
  );
};
