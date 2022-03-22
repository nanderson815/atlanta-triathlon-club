import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import BackgroundImage from "../components/BackgroundImage";

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

  return (
    <div>
      <FullWidthImage
        height={400}
        img={_backgroundImage}
        title={title}
        subheading={subtitle}
      />
      <BackgroundImage height={800} img={accentBackgroundImage}>
        <div style={{ minHeight: 800 }} className="container center">
          <div className="section" style={{ width: "100%" }}>
            <div className="content">
              <div className="columns is-multiline">
                {locations.map(({ name, address, details }, i) => (
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
                      </div>
                    </div>
                  </div>
                ))}
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
