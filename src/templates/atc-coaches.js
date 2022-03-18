import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import BackgroundImage from "../components/BackgroundImage";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { convertMarkdownToHTML } from "../utilities";
import { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ATCCoachesTemplate = ({
  title,
  subtitle,
  coaches,
  backgroundImage,
  accentimage,
}) => {
  const _backgroundImage = getImage(backgroundImage) || backgroundImage;
  const accentBackgroundImage = getImage(accentimage) || accentimage;

  console.log(coaches);

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
                {coaches.map(({ name, image, about }, i) => (
                  <div className="is-parent column is-4" key={i}>
                    <div className="paper" style={{ height: "100%" }}>
                      <PreviewCompatibleImage imageInfo={{ image: image }} />
                      <p>{name}</p>
                      <HTMLContent
                        className="content"
                        content={convertMarkdownToHTML(about)}
                      />
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

ATCCoachesTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  ATCCoaches: PropTypes.array.isRequired,
};

const ATCCoaches = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ATCCoachesTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        coaches={post.frontmatter.coaches}
        backgroundImage={post.frontmatter.backgroundImage}
        accentimage={post.frontmatter.accentimage}
      />
    </Layout>
  );
};

ATCCoaches.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ATCCoaches;

export const ATCCoachesQuery = graphql`
  query ATCCoaches($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        coaches {
          name
          about
          image {
            childImageSharp {
              gatsbyImageData
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