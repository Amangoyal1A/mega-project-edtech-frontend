const BASE_URL = process.env.REACT_APP_BASE_URL;

export const categories = {
  GET_CATEGORIES: BASE_URL + "/course/showAllCategories",
  GET_CATEGORY_PAGE_DETAILS_API: BASE_URL + "/course/getCategoryPageDetails",
};
