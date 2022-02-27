import React from "react";
import PropTypes from "prop-types";
import { default as BGImage } from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";

export default function BackgroundImage(props) {
  const { height = 400, img, children } = props;

  let translatedImage;

  if (img.images) {
    translatedImage = convertToBgImage(img);
  }

  const pageStyle = {
    backgroundRepeat: "repeat",
    backgroundPosition: "top left",
    backgroundSize: 100,
    minHeight: height,
  };

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {img?.url ? (
          <div style={{ backgroundImage: `url(${img})`, minHeight: height }}>
            {children}
          </div>
        ) : img?.childImageSharp ? (
          <BGImage
            height={height}
            style={pageStyle}
            fluid={img?.childImageSharp?.fluid}
          >
            {children}
          </BGImage>
        ) : (
          <BGImage
            height={height}
            style={{ minHeight: height, objectFit: "contain" }}
            {...translatedImage}
          >
            {children}
          </BGImage>
        )}
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Any content here will be centered in the component */}
        </div>
      </div>
    </React.Fragment>
  );
}

BackgroundImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  height: PropTypes.number,
};
