import PropTypes from "prop-types";
import { slugify } from "../../../utils";
const PortfolioFilter = ({ categories }) => {
    console.log(categories);
    return (
        <div className="messonry-button text-center mb-50">
            <button data-filter="*" className="is-checked">
                <span className="filter-text">تمامی عکس ها</span>
            </button>
            {categories?.map((cat, idx) => (
                <button key={idx} data-filter={`.${slugify(cat.categoryName)}`}>
                    <span className="filter-text">{cat.persianText}</span>
                </button>
            ))}
        </div>
    );
};

PortfolioFilter.propTypes = {
    categories: PropTypes.array,
};

export default PortfolioFilter;
