import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/api";
import { getCatalogPageData } from "../../services/getCatalogPageData";

const Catalog = () => {
  const { category: catalogName } = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);

  useEffect(() => {
    async function fetchCategoryId() {
      try {
        const response = await apiConnector("GET", categories.GET_CATEGORIES);
        const categoryData = response.data.Category.find(
          (data) => data.name === catalogName
        );

        if (categoryData) {
          const categoryId = categoryData._id;
          const pageData = await getCatalogPageData(categoryId);
          setCatalogPageData(pageData);
        }
      } catch (error) {
        console.error("Error fetching category and catalog page data:", error);
      }
    }

    fetchCategoryId();
  }, [catalogName]);
  console.log("line 31", catalogPageData);
  return (
    <div>
      <div>
        <p>
          {`Home / catalog/ `}
          <span>{catalogPageData?.selectedCategory?.name}</span>
        </p>
        <p> {catalogPageData?.selectedCategory?.name}</p>
        <p>{catalogPageData?.selectedCategory?.description}</p>
      </div>

      <div>
        {/* section1 */}
        <div>
          <div>Course to get you started</div>
          <div>
            <p>Most Popular</p>
            <p>New</p>
          </div>
          {/* <CourseSlider /> */}
          <div>{/* <CourseSlider /> */}</div>
        </div>

        {/* section2 */}
        <div>
          <p>Top Courses</p>
          <div>
            <CourseSlider courses={catalogPageData?.selectedCategory?.course} />
          </div>
        </div>

        <div>
          <p>Frequently bougth together</p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
