import PropTypes from "prop-types";

const Qute = ({ data }) => {
    return (
        <div className="slider-content-area" data-aos="fade-up">
            <h5
                dangerouslySetInnerHTML={{ __html: data.qute }}
                style={{ whiteSpace: "pre-wrap", lineHeight: "37px" }}
            ></h5>
        </div>
    );
};

Qute.propTypes = {
    data: PropTypes.object,
};

export default Qute;
