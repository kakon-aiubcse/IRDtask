import { useState } from "react";

const Category = ({ categories, subcategories }) => {
  const [showsubcat, setShowsubcat] = useState(null);

  const handleOnclick = (cat_id) => {
    if (showsubcat === cat_id) {
      setShowsubcat(null); // Close subcategory if already open
    } else {
      setShowsubcat(cat_id); // Show subcategory
    }
  };

  console.log(categories);
  console.log(subcategories);

  return (
    <div className="bg-white border-[#E2E2E2] absolute w-[429px] h-[837px] top-[133px] left-[170px] rounded-[10px] border-[0.5px] pb-[15px] gap-[15px]">
      {/* Header and Search */}
      <div className="w-full h-[122px]">
        <span className="flex w-full h-[57px] pt-[18px] pb-[18px] items-center justify-center gap-[10px] rounded-tl-[10px] rounded-tr-[10px] bg-[#1FA45B]">
          <label className="text-white font-semibold text-[17px]">
            Categories
          </label>
        </span>

        <div className="flex items-center w-[399px] h-[45px] mx-auto mt-[10px] px-[15px] border-[2px] border-[#E2E2E2] rounded-md gap-[10px]">
          <img src="Frame2.png" className="h-[24px] w-[24px] bg-white" />
          <input
            placeholder="Search by Categories"
            className="flex-1 rounded-md text-sm"
            type="text"
          />
        </div>
      </div>

      <div className="overflow-y-auto max-h-[680px] mt-[10px] px-[15px] space-y-[10px]">
        {categories.length === 0 ? (
          <p className="text-center text-gray-600 mt-4">
            No categories available.
          </p>
        ) : (
          categories.map((cat) => (
            <div key={cat.cat_id}>
              {/* Category div */}
              <div
                onClick={() => handleOnclick(cat.cat_id)}
                className="w-full h-[80px] rounded-[10px] bg-[#E8F0F5] p-[10px] cursor-pointer"
              >
                <div className="flex flex-row justify-between items-center">
                  <img
                    src="/Framlogo.png"
                    className="w-[60px] h-[60px] rounded-[10px] p-[10px]"
                  />
                  <div className="flex flex-col w-[251px]">
                    <span
                      className={`font-inter font-semibold text-[16px] leading-[100%] ${
                        showsubcat === cat.cat_id
                          ? "text-[#1FA45B]"
                          : "text-black"
                      }`}
                    >
                      {cat.cat_name_en}
                    </span>
                    <span className="text-[14px]">
                      Subcategory: {cat.no_of_subcat}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center h-[36px] w-[45px]">
                    <span className="font-semibold text-[16px]">
                      {cat.no_of_dua}
                    </span>
                    <span className="text-[14px]">Duas</span>
                  </div>
                </div>
              </div>

              {/* Subcategories displayed when category is clicked */}
              {showsubcat === cat.cat_id && (
                <div className="flex flex-row justify-start w-full h-[361px] pl-[10px] gap-[19px]">
                  <img src="/Frame172.png" className="h-[363px]" />
                  <div className="relative w-[314px] h-[337px]">
                    <div className="flex flex-col w-[399px] h-[361px] mt-[20px] pl-[24px] gap-[19px] overflow-y-auto">
                      {subcategories
                        .filter((subcat) => subcat.cat_id === cat.cat_id)
                        .map((subcat) => (
                          <div key={subcat.subcat_id}>
                            <span className="font-poppins text-[14px]">
                              {subcat.subcat_name_en}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
