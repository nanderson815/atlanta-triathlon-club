import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "../components/BackgroundImage";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  accentimage,
  backgroundImage,
}) => {
  const PageContent = contentComponent || Content;
  const _backgroundImage = getImage(backgroundImage) || backgroundImage;
  const accentBackgroundImage = getImage(accentimage) || accentimage;

  return (
    <div>
      <Helmet title={`${title} | Atlanta Triathlon Club`} />
      <FullWidthImage height={400} img={_backgroundImage} title={title} />
      <BackgroundImage height={800} img={accentBackgroundImage}>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <div className="content paper">
                    <PageContent className="content" content={content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        backgroundImage={post.frontmatter.backgroundImage}
        accentimage={post.frontmatter.accentimage}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        backgroundImage {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 3000)
            fluid {
              ...GatsbyImageSharpFluid
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
      }
    }
  }
`;
