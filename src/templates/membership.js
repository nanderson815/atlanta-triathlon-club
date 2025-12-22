import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "../components/BackgroundImage";
import Button from "../components/Button";
import FullWidthImage from "../components/FullWidthImage";
import { Helmet } from "react-helmet";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { convertMarkdownToHTML } from "../utilities";

// eslint-disable-next-line
export const MembershipTemplate = ({
  title,
  content,
  contentComponent,
  backgroundImage,
  subtitle,
  imageOne,
  imageTwo,
  tiers,
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
                <Link to="/start-here">
                  <Button className="is-medium is-fullwidth mb">
                    LEARN MORE
                  </Button>
                </Link>
                <br />
                <br />
                <div className="columns is-multiline">
                  {tiers.map(({ title, desc, price }) => {
                    const html = convertMarkdownToHTML(desc);
                    return (
                      <div className="is-parent column is-4" key={title}>
                        <div className="paper" style={{ height: "100%" }}>
                          <div className="tile mb center-text">
                            <h1 className="title has-text-weight-bold is-size-4-mobile is-size-4-tablet">
                              {title}
                            </h1>
                          </div>
                          <div className="tile mb center-text">
                            <h1 className="title has-text-weight-bold is-size-2-mobile is-size-1-tablet primaryText">
                              {price}
                            </h1>
                          </div>
                          <div class="columns">
                            <div class="column is-11 is-offset-1">
                              <HTMLContent className="content" content={html} />
                            </div>
                          </div>
                          <div class="columns">
                            <div class="column is-8 is-offset-2">
                              <a href="https://clients.mindbodyonline.com/classic/ws?studioid=30262&stype=40">
                                <Button className="is-medium is-fullwidth is-outlined">
                                  LET'S DO IT
                                </Button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br />
                <br />
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

MembershipTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Membership = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <MembershipTemplate
        contentComponent={HTMLContent}
        backgroundImage={post.frontmatter.backgroundImage}
        accentimage={post.frontmatter.accentimage}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
        imageOne={post.frontmatter.imageOne}
        imageTwo={post.frontmatter.imageTwo}
        tiers={post.frontmatter.tiers}
        cto={post.frontmatter.cto}
      />
    </Layout>
  );
};

Membership.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Membership;

export const MembershipQuery = graphql`
  query Membership($id: String!) {
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
        tiers {
          desc
          title
          price
        }
      }
    }
  }
`;
