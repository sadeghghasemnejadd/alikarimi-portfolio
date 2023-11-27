import imagesloaded from "imagesloaded";
import Isotope from "isotope-layout";
import { useEffect, useState } from "react";

const useMasonry = (
    PortfolioData,
    masonryListWrap,
    masonryGrid,
    btnWrap,
    btn
) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const mixCategories = PortfolioData.map((item) => {
            return {
                categoryName: item.categories[0],
                persianText: item.persianText,
            };
        });

        console.log(mixCategories);
        setCategories(mixCategories);

        // This for Images
        const masonryList = document.querySelector(masonryListWrap);
        imagesloaded(masonryList, () => {
            const projectItems = masonryList.querySelectorAll(masonryGrid);
            let start = 1;
            while (start < projectItems.length) {
                projectItems[start].classList.add("grid-width-2");
                start += 4;
            }
            let Iso = new Isotope(masonryList, {
                itemSelector: masonryGrid,
            });

            const filterWrap = document.querySelector(btnWrap);
            const filterItems = document.querySelectorAll(btn);
            filterItems.forEach((filterItem) => {
                filterItem.addEventListener("click", (e) => {
                    const filterCate = filterItem.dataset.filter;
                    filterWrap
                        .querySelector(".is-checked")
                        .classList.remove("is-checked");
                    e.target.classList.add("is-checked");
                    Iso.arrange({
                        filter: filterCate,
                    });
                });
            });
        });
    }, [btn, btnWrap, masonryGrid, masonryListWrap, PortfolioData]);
    return { categories };
};

export default useMasonry;
