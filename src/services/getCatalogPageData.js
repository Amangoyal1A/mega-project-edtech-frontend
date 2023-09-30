import toast from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import { categories } from "./api";

export const getCatalogPageData = async (categoryId) => {
  try {
    // const toastId = toast.loading("Loading....");

    const response = await fetchCategoryPageDetails(categoryId); // Moved the API call to a separate function

    const result = response.data; 
    // toast.dismiss(toastId);
    return result;
  } catch (error) {
    handleCatalogPageError(error);
  }
};

const fetchCategoryPageDetails = async (categoryId) => {
  try {
    return await apiConnector("POST", categories.GET_CATEGORY_PAGE_DETAILS_API, { categoryId });
  } catch (error) {
    throw error;
  }
};

const handleCatalogPageError = (error) => {
  console.error("Error fetching catalog page data:", error);
  toast.error(error.message);
};
