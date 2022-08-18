import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import BackgroundImage from "../components/BackgroundImage";
import { Helmet } from "react-helmet";


// eslint-disable-next-line
export const TrainingLocationsTemplate = ({
  title,
  subtitle,
  locations,
  backgroundImage,
  accentimage,
}) => {
  const _backgroundImage = getImage(backgroundImage) || backgroundImage;
  const accentBackgroundImage = getImage(accentimage) || accentimage;

  const [filtered, setFiltered] = useState(locations);

  const [venue, setVenue] = useState("Venue");
  const [activity, setActivity] = useState("Activity");
  const [time, setTime] = useState("Time");

  const handleFilter = () => {
    let _locations = locations;
    // handle venue change
    if (venue !== "Venue") {
      _locations = _locations.filter((loc) => loc.venue.includes(venue));
    }
    // handle activity change
    if (activity !== "Activity") {
      _locations = _locations.filter((loc) => loc.activity.includes(activity));
    }
    // handle venue change
    if (time !== "Time") {
      _locations = _locations.filter((loc) => loc.time.includes(time));
    }
    setFiltered(_locations);
  };

  useEffect(() => {
    handleFilter();
  }, [venue, activity, time]);

  return (
    <div>
      <Helmet title={`${title} | Atlanta Triathlon Club`} />
      <FullWidthImage
        height={400}
        img={_backgroundImage}
        title={title}
        subheading={subtitle}
      />
      <BackgroundImage height={800} img={accentBackgroundImage}>
        <div className="container">
          <div
            className="section center"
            style={{ width: "100%", flexWrap: "wrap" }}
          >
            <div class="select is-rounded m-1">
              <select onChange={(e) => setVenue(e.target.value)}>
                <option>Venue</option>
                <option>Indoor</option>
                <option>Outdoor</option>
              </select>
            </div>
            <div class="select is-rounded m-1">
              <select onChange={(e) => setActivity(e.target.value)}>
                <option>Activity</option>
                <option>Swim</option>
                <option>Bike</option>
                <option>Run</option>
              </select>
            </div>
            <div class="select is-rounded m-1">
              <select onChange={(e) => setTime(e.target.value)}>
                <option>Time</option>
                <option>Weekday</option>
                <option>Weekend</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ minHeight: 800 }} className="container center">
          <div className="section" style={{ width: "100%" }}>
            <div className="content">
              <div className="columns is-multiline">
                {filtered.map(
                  ({ name, address, details, venue, activity, time }, i) => (
                    <div className="is-parent column is-6" key={i}>
                      <div className="paper" style={{ height: "100%" }}>
                        <div>
                          <div className="tile center-text">
                            <h1 className="title has-text-weight-bold is-size-4-mobile is-size-3-tablet">
                              {name}
                            </h1>
                          </div>
                          <iframe
                            // width="450"
                            title={`map ${name}`}
                            height="300"
                            frameborder="0"
                            style={{ width: "100%" }}
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBmeZVx6YKWwqMP8FvsEyoG0eIxcinHYc4&q=${address}`}
                            allowfullscreen
                          ></iframe>
                          <h1 className="title has-text-weight-bold is-size-5-mobile is-size-4-tablet">
                            {address}
                          </h1>
                          <p>{details}</p>
                          <div>
                            {venue.map((v) => (
                              <span class="tag is-primary is-medium m-1">
                                {v}
                              </span>
                            ))}
                            {activity.map((a) => (
                              <span class="tag is-link is-medium m-1">{a}</span>
                            ))}
                            {time.map((t) => (
                              <span class="tag is-info is-medium m-1">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

TrainingLocationsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  TrainingLocations: PropTypes.array.isRequired,
};

const TrainingLocations = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TrainingLocationsTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        locations={post.frontmatter.locations}
        backgroundImage={post.frontmatter.backgroundImage}
        accentimage={post.frontmatter.accentimage}
      />
    </Layout>
  );
};

TrainingLocations.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TrainingLocations;

export const TrainingLocationsQuery = graphql`
  query TrainingLocations($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        locations {
          name
          address
          details
          venue
          activity
          time
        }
        accentimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        backgroundImage {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 3000)
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
