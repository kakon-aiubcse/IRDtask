import { useState } from "react";

const Category = ({ categories, subcategories, dua }) => {
  const [showsubcat, setShowsubcat] = useState(null);
  const [showdua, setShowdua] = useState(null);
  const [selectedSubcat, setSelectedSubcat] = useState(null);

  const handlesubcategoryclick = (cat_id) => {
    if (showsubcat === cat_id) {
      setShowsubcat(null);
    } else {
      setShowsubcat(cat_id);
    }
  };
  const handleduaclick = (subcat_id) => {
    if (showdua === subcat_id) {
      setShowdua(null);
      setSelectedSubcat(null);
    } else {
      setShowdua(subcat_id);
      setSelectedSubcat(subcat_id);
    }
  };

  const handleSubcatClick = (subcat_id) => {
    setSelectedSubcat(subcat_id);
  };
  const selectedSubcatName = subcategories.find(
    (s) => s.subcat_id === selectedSubcat
  )?.subcat_name_en;

  console.log(dua);
  return (
    <>
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
                  onClick={() => handlesubcategoryclick(cat.cat_id)}
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
                  <div className="flex flex-row justify-start w-full h-[361px] pl-[10px] gap-[19px] overflow-hidden">
                    <img src="/Frame172.png" className="h-[363px]" />
                    <div className="relative w-[314px] h-[337px]">
                      <div className="flex flex-col w-[399px] h-[361px] mt-[20px] whitespace-pre-wrap gap-[19px] overflow-y-auto overflow-x-hidden">
                        {subcategories
                          .filter((subcat) => subcat.cat_id === cat.cat_id)
                          .map((subcat) => (
                            <div key={subcat.subcat_id}>
                              <span
                                onClick={() => {
                                  handleduaclick(subcat.subcat_id);
                                  handleSubcatClick(subcat.subcat_id);
                                }}
                                className={`font-inter font-semibold text-[14px] cursor-pointer ${
                                  showdua === subcat.subcat_id
                                    ? "text-[#1FA45B]"
                                    : "text-black"
                                }`}
                              >
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

      {dua.length === 0 ? (
  <p>No duas available for this subcategory.</p>
) : (
  <>
    <div className="relative top-[135px] left-[632px] bg-[#FFFFFF] w-[889px] h-[55px] rounded-[10px] border-[0.5px] pt-[15px] pr-[30px] pb-[15px] pl-[30px] gap-[10px]">
      <span className="w-[64px] h-[25px] font-inter font-semibold text-[16px] leading-[25px] tracking-[0%] text-[#1FA45B]">
        Section:
      </span>
      {selectedSubcatName && (
        <span className="relative ml-[5px] w-[285px] h-[19px] font-inter font-medium text-[16px] leading-[100%] tracking-[0%] text-[#393939]">
          {selectedSubcatName}
        </span>
      )}
    </div>

   
    <div className="w-[889px] relative top-[150px] left-[632px] h-[1200px] overflow-y-auto">
      {dua
        .filter((d) => d.subcat_id === selectedSubcat)
        .map((d) => (
          <div key={d.dua_id} className="mb-4">
            <div className="rounded-[10px] border-[0.5px] pt-[15px] pr-[30px] pb-[15px] pl-[30px] bg-[#FFFFFF]">
              <div className="flex flex-col gap-[28px]">
                <div className="flex flex-row items-center gap-[10px]">
                  <img src="/allahulogo.png" className="h-[35px] w-[35px]" />
                  <span className="flex flex-row w-[325px] h-[25px] font-inter font-semibold text-[16px] leading-[25px]">
                    <label className="w-[305px] h-[25px] whitespace-nowrap font-inter font-semibold text-[16px] leading-[25px] text-[#1FA45B]">
                      {d.dua_id} {d.dua_name_en}
                    </label>
                  </span>
                </div>

                <div className="w-full min-h-[50px] overflow-hidden">
                  <label className="font-inter font-normal text-[16px] leading-[24px] text-[#393939]">
                    {d.top_en}
                  </label>
                </div>

                <div className="font-[me_quran] text-[24px] text-right text-black">
                  {d.dua_arabic}
                </div>

                <div className="font-inter font-semibold text-[16px]">
                  Transliteration:
                  <span className="font-inter font-normal italic">
                    {d.transliteration_en}
                  </span>
                </div>

                <div className="font-inter font-semibold text-[16px]">
                  Translation:
                  <span className="font-inter font-normal text-[#393939]">
                    {d.translation_en}
                  </span>
                </div>

                <div className="flex flex-col font-inter font-semibold text-[16px] text-[#1FA45B]">
                  Reference:
                  <span className="text-[#393939] font-inter font-medium text-[16px]">
                    {d.refference_en}
                  </span>
                </div>

                <div className="flex flex-row justify-end gap-[39px]">
                  <img src="copylastdiv.png" className="h-[24px] w-[24px]" />
                  <img src="bookmarklastdiv.png" className="h-[24px] w-[24px]" />
                  <img src="idealastdiv.png" className="h-[24px] w-[24px]" />
                  <img src="sharelastdiv.png" className="h-[24px] w-[24px]" />
                  <img src="reportlastdiv.png" className="h-[24px] w-[24px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  </>
)}

    </>
  );
};

export default Category;
