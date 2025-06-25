import axios from "axios";
import { account_id, API_KEY, BASE_URL } from "../utils/constants";

export const fetchPaginatedTMDB = async ({
  endpoint,
  sessionId,
  singlePage = null,
}) => {
  const allResults = [];
  let currentPage = 1;
  let totalPages = 1;

  try {
    do {
      const pageToFetch = singlePage || currentPage;

      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/account/${account_id}/${endpoint}?language=en-US&page=${pageToFetch}&session_id=${sessionId}&sort_by=created_at.asc`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      const { results, total_pages } = response.data;

      allResults.push(...results);
      totalPages = total_pages;
      currentPage++;

      if (singlePage) break;
    } while (currentPage <= totalPages);

    return { results: allResults, totalPages };
  } catch (error) {
    throw error;
  }
};
