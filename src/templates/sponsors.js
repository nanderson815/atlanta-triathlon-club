import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import BackgroundImage from "../components/BackgroundImage";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Helmet } from "react-helmet";

// eslint-disable-next-line
export const SponsorsTemplate = ({
  title,
  subtitle,
  sponsors,
  backgroundImage,
  accentimage,
}) => {
  const _backgroundImage = getImage(backgroundImage) || backgroundImage;
  const accentBackgroundImage = getImage(accentimage) || accentimage;

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
        <div style={{ minHeight: 800 }} className="container center">
          <div className="section" style={{ width: "100%" }}>
            <div className="content">
              <div className="columns is-multiline">
                {sponsors.map(({ link, logo }, i) => (
                  <div className="is-parent column is-3" key={i}>
                    <a href={link}>
                      <div
                        className="content paper center"
                        style={{ minHeight: 182 }}
                      >
                        <PreviewCompatibleImage imageInfo={{ image: logo }} />
                      </div>
                    </a>
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

SponsorsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  sponsors: PropTypes.array.isRequired,
};

const Sponsors = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SponsorsTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        sponsors={post.frontmatter.sponsors}
        backgroundImage={post.frontmatter.backgroundImage}
        accentimage={post.frontmatter.accentimage}
      />
    </Layout>
  );
};

Sponsors.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sponsors;

export const sponsorsQuery = graphql`
  query sponsors($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        sponsors {
          link
          logo {
            childImageSharp {
              gatsbyImageData(height: 150)
            }
          }
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
