import React from "react";
import PropTypes from "prop-types";
import { MembershipTemplate } from "../../templates/membership";

const MembershipPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <MembershipTemplate
        content={widgetFor("body")}
        backgroundImage={getAsset(data.backgroundImage)}
        accentimage={getAsset(data.accentimage)}
        title={data.title}
        subtitle={data.subtitle}
        imageOne={data.imageOne}
        imageTwo={data.imageTwo}
        tiers={data.tiers || []}
        cto={data.cto}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

MembershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default MembershipPagePreview;
