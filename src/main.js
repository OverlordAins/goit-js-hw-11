import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");


hideLoader();


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = e.target.elements["search-text"].value.trim();
  if (!query) {
    iziToast.warning({
      title: "Attention",
      message: "Type word for search",
    });
    return;
  }

    
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

      if (!data || !data.hits || data.hits.length === 0) {
          iziToast.error({
              title: "Error",
              message:
                  "Sorry, there are no images matching your search query. Please try again!",
          });
      
      } else {
          createGallery(data.hits);
      }

  } catch (error) {
      console.error("Download Error:", error);
    iziToast.error({
      title: "Error",
      message: "Something went wrong",
    });
  } finally {
    hideLoader();
  }
});