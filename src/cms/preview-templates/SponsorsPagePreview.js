import React from "react";
import PropTypes from "prop-types";
import { SponsorsTemplate } from "../../templates/sponsors";

const SponsorsPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <SponsorsTemplate
        backgroundImage={getAsset(data.backgroundImage)}
        accentimage={getAsset(data.accentimage)}
        title={data.title}
        subtitle={data.subtitle}
        sponsors={data.sponsors || []}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

SponsorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SponsorsPagePreview;
