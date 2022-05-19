import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({
  imageInfo,
  imgPosition = "center center",
  ...props
}) => {
  const imageStyle = {};

  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        objectPosition={imgPosition}
        image={image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
        {...props}
      />
    );
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        objectPosition={imgPosition}
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
        {...props}
      />
    );
    // for Netlify CMS
  } else if (image) {
    return (
      <img
        objectPosition={imgPosition}
        style={{ imageStyle }}
        src={image}
        alt={alt}
        {...props}
      />
    );
  } else {
    return null;
  }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
