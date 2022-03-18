import React from "react";
import PropTypes from "prop-types";
import { ATCCoachesTemplate } from "../../templates/atc-coaches";

const ATCCoachesPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <ATCCoachesTemplate
        backgroundImage={getAsset(data.backgroundImage)}
        accentimage={getAsset(data.accentimage)}
        title={data.title}
        subtitle={data.subtitle}
        coaches={data.coaches || []}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ATCCoachesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ATCCoachesPagePreview;
