import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.desc} className="column is-4">
        <a href={item.link}>
          <div className="card cardButton">
            <div
              className="card-image"
              style={{ height: 225, overflow: "hidden" }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="card-content">
              <div className="content">
                <h3
                  className="is-size-6-mobile is-size-5-tablet cardButtonText"
                  style={{ color: "white" }}
                >
                  {item.title}
                </h3>
              </div>
              <div className="content">
                <h3
                  className="is-size-5-mobile is-size-4-tablet"
                  style={{ color: "white" }}
                >
                  {item.desc}
                </h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
