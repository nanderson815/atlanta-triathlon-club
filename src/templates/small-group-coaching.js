import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "../components/BackgroundImage";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const R2RTemplate = ({
  title,
  content,
  contentComponent,
  backgroundImage,
  subtitle,
  accentimage,
  button,
}) => {
  const PageContent = contentComponent || Content;
  const _backgroundImage = getImage(backgroundImage) || backgroundImage;
  const accentBackgroundImage = getImage(accentimage) || accentimage;

  return (
    <div>
      <Helmet title={`${title} | Atlanta Triathlon Club`} />
      <FullWidthImage height={400} img={_backgroundImage} title={title} />
      <BackgroundImage height={800} img={accentBackgroundImage}>
        <div style={{ minHeight: 800 }} className="container center">
          <div className="section" style={{ width: "100%" }}>
            <div className="content">
              <div className="content paper">
                <div className="tile mb center-text">
                  <h1 className="title has-text-weight-bold is-size-4-mobile is-size-3-tablet">
                    {title}
                  </h1>
                </div>
                <div className="mb">
                  <h1 className="tile pacifico primaryText center-text">
                    {subtitle}
                  </h1>
                </div>
                <div className="tile mb">
                  <PageContent className="content" content={content} />
                </div>
                <br />
                <a href={button.link}>
                  <Button className="is-medium is-fullwidth mb">
                    {button.text}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

R2RTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const R2R = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <R2RTemplate
        contentComponent={HTMLContent}
        backgroundImage={post.frontmatter.backgroundImage}
        accentimage={post.frontmatter.accentimage}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
        button={post.frontmatter.button}
      />
    </Layout>
  );
};

R2R.propTypes = {
  data: PropTypes.object.isRequired,
};

export default R2R;

export const R2RQuery = graphql`
  query R2R($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        button {
          text
          link
        }
        backgroundImage {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 3000)
          }
        }
        accentimage {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 1200)
          }
        }
      }
    }
  }
`;
