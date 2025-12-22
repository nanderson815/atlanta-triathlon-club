import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Helmet } from "react-helmet";
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "../components/BackgroundImage";
import FullWidthImage from "../components/FullWidthImage";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { convertMarkdownToHTML } from "../utilities";

// eslint-disable-next-line
export const StartPageTemplate = ({
  title,
  content,
  contentComponent,
  backgroundImage,
  subtitle,
  imageOne,
  imageTwo,
  blurbs,
  accentimage,
  cto,
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
                <div className="center">
                  <PreviewCompatibleImage imageInfo={{ image: imageOne }} />
                </div>
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
                {/* <a href="https://clients.mindbodyonline.com/classic/ws?studioid=30262&stype=-2&subTab=info">
                  <Button className="is-medium is-fullwidth mb">
                    LEARN MORE
                  </Button>
                </a> */}
                <br />
                <br />
                {blurbs.map(({ title, desc }) => {
                  const html = convertMarkdownToHTML(desc);
                  return (
                    <div style={{ marginBottom: "4rem" }}>
                      <div className="tile mb center-text">
                        <h1 className="title has-text-weight-bold is-size-4-mobile is-size-3-tablet">
                          {title}
                        </h1>
                      </div>
                      <div class="columns">
                        <div class="column is-10 is-offset-1">
                          <HTMLContent className="content" content={html} />
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="center mb">
                  <PreviewCompatibleImage imageInfo={{ image: imageTwo }} />
                </div>
                <br />
                <div className="tile mb center-text">
                  <h1 className="title has-text-weight-bold is-size-4-mobile is-size-3-tablet">
                    {cto.title}
                  </h1>
                </div>
                <div class="column is-10 is-offset-1">
                  <HTMLContent
                    className="content"
                    content={convertMarkdownToHTML(cto.body)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

StartPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const StartPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <StartPageTemplate
        contentComponent={HTMLContent}
        backgroundImage={post.frontmatter.backgroundImage}
        accentimage={post.frontmatter.accentimage}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
        imageOne={post.frontmatter.imageOne}
        imageTwo={post.frontmatter.imageTwo}
        blurbs={post.frontmatter.blurbs}
        cto={post.frontmatter.cto}
      />
    </Layout>
  );
};

StartPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StartPage;

export const StartPageQuery = graphql`
  query StartPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        cto {
          title
          body
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
        imageOne {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        imageTwo {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        blurbs {
          desc
          title
        }
      }
    }
  }
`;
