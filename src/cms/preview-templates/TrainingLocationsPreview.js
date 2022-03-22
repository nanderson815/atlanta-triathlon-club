import React from "react";
import PropTypes from "prop-types";
import { TrainingLocationsTemplate } from "../../templates/training-locations";

const TrainingLocationsPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <TrainingLocationsTemplate
        backgroundImage={getAsset(data.backgroundImage)}
        accentimage={getAsset(data.accentimage)}
        title={data.title}
        subtitle={data.subtitle}
        locations={data.locations || []}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

TrainingLocationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TrainingLocationsPagePreview;
