import React from "react";
import PropTypes from "prop-types";
import { R2RTemplate } from "../../templates/rookie-2-race";

const StartPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <R2RTemplate
        content={widgetFor("body")}
        backgroundImage={getAsset(data.backgroundImage)}
        accentimage={getAsset(data.accentimage)}
        title={data.title}
        subtitle={data.subtitle}
        button={data.button}
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
