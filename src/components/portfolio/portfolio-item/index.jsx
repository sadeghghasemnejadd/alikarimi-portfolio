import PropTypes from "prop-types";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio, gallery }) => {
    return (
        <div className="single-portfolio">
            <LightgalleryProvider>
                <LightgalleryItem
                    group="any"
                    src={process.env.PUBLIC_URL + gallery.src}
                >
                    <div className="thumbnail">
                        <div className="overlay">
                            <img
                                src={process.env.PUBLIC_URL + gallery.src}
                                alt="portfolio"
                            />
                        </div>
                    </div>
                </LightgalleryItem>
            </LightgalleryProvider>
            <div className="content">
                <h3 className="title">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            `/portfolio-details/${portfolio.id}`
                        }
                    >
                        {portfolio.title}
                    </Link>
                </h3>
                <p className="desc">{portfolio.excerpt}</p>
            </div>
        </div>
    );
};

PortfolioItem.propTypes = {
    portfolio: PropTypes.object,
    gallery: PropTypes.object,
};

export default PortfolioItem;
