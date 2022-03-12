import React from "react";
import PropTypes from "prop-types";
import { StartPageTemplate } from "../../templates/start-page";

const StartPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <StartPageTemplate
        content={widgetFor("body")}
        backgroundImage={getAsset(data.backgroundImage)}
        accentimage={getAsset(data.accentimage)}
        title={data.title}
        subtitle={data.subtitle}
        imageOne={data.imageOne}
        imageTwo={data.imageTwo}
        blurbs={data.blurbs || []}
        cto={data.cto}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

StartPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default StartPagePreview;
