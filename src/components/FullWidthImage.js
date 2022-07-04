import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    frontImage,
    frontImage2,
    frontImage2Link,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

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
          <img
            src={img.url}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
              objectFit: "cover",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            // aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
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
            {title && (
              <div className="center-text">
                <h1
                  className="has-text-weight-bold is-size-3-mobile is-size-1-tablet"
                  style={{
                    color: "white",
                    lineHeight: "1",
                    padding: "0.25em",
                  }}
                >
                  {title}
                </h1>
              </div>
            )}
            {frontImage && (
              <PreviewCompatibleImage
                imageInfo={{ image: frontImage }}
                style={{
                  gridArea: "1/1",
                }}
                alt=""
              />
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-4-mobile is-size-2-tablet pacifico"
                style={{
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )}
            {frontImage2 && (
              <Link to={frontImage2Link}>
                <PreviewCompatibleImage
                  imageInfo={{ image: frontImage2 }}
                  style={{
                    gridArea: "1/1",
                  }}
                  alt=""
                />
              </Link>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
