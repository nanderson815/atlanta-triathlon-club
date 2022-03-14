import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import BackgroundImage from "../components/BackgroundImage";
import Button from "../components/Button";
import BlogRoll from "../components/BlogRoll";
import TestimonialsRoll from "../components/TestimonialsRoll";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  intro,
  heroimage,
  accentimage,
}) => {
  const backgroundImage = getImage(image) || image;
  const accentBackgroundImage = getImage(accentimage) || accentimage;

  return (
    <div>
      <FullWidthImage
        height={800}
        img={backgroundImage}
        frontImage={heroimage}
        title={title}
        subheading={subheading}
      />
      <BackgroundImage height={800} img={accentBackgroundImage}>
        <div style={{ minHeight: 800 }} className="container center">
          <div className="section">
            <div className="content">
              <div className="content paper">
                <div className="tile mb center-text">
                  <h1 className="title has-text-weight-bold is-size-4-mobile is-size-3-tablet">
                    {mainpitch.title}
                  </h1>
                </div>
                <div className="mb">
                  <h1 className="tile pacifico primaryText center-text">
                    {mainpitch.subtitle}
                  </h1>
                </div>
                <Button
                  className="is-medium is-fullwidth mb"
                  href="https://clients.mindbodyonline.com/classic/ws?studioid=30262&stype=40&prodId=109"
                >
                  7 DAY FREE TRIAL
                </Button>
                <div className="tile mb center-text">
                  <h3 className="subtitle">{mainpitch.description}</h3>
                </div>
                <Link to="/start-here">
                  <Button className="is-medium is-fullwidth mb">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <BackgroundImage height={800} img={backgroundImage}>
        <div style={{ minHeight: 800 }} className="container center">
          <div className="section">
            <div className="content">
              <div className="content">
                <div className="tile mb center-text">
                  <h1
                    className="title has-text-weight-bold is-size-4-mobile is-size-3-tablet"
                    style={{ color: "white" }}
                  >
                    {intro.heading}
                  </h1>
                </div>
                <div className="mb">
                  <h1 className="tile pacifico primaryText center-text">
                    {intro.description}
                  </h1>
                </div>
                <Features gridItems={intro.blurbs} />
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <BackgroundImage height={800} img={accentBackgroundImage}>
        <div style={{ minHeight: 800 }} className="container center">
          <div className="section">
            <div className="content">
              <div className="content">
                <div className="tile mb center-text">
                  <h1 className="title has-text-weight-bold is-size-4-mobile is-size-3-tablet">
                    Testimonials
                  </h1>
                </div>
                <div className="mb">
                  <h5 className="center-text is-size-6-mobile is-size-5-tablet">
                    If you can run or walk a mile, you’re ready to train for a
                    sprint triathlon. Don’t believe it? It’s true! At Atlanta
                    Triathlon Club, we’ve trained all kinds of athletes of all
                    ages, taught hundreds to swim, and helped thousands of
                    excited beginners cross their first finish line. Just check
                    out the latest Testimonials from our members:
                  </h5>
                </div>
                <TestimonialsRoll limit={3} />
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <BackgroundImage height={800} img={backgroundImage}>
        <div style={{ minHeight: 800 }} className="container center">
          <div className="section">
            <div className="content">
              <div className="content">
                <div className="tile mb center-text">
                  <h1
                    className="title has-text-weight-bold is-size-4-mobile is-size-3-tablet"
                    style={{ color: "white" }}
                  >
                    Latest Features
                  </h1>
                </div>
                <BlogRoll limit={2} />
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  accentimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heroimage={frontmatter.heroimage}
        accentimage={frontmatter.accentimage}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 1800)
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
        heroimage {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 300)
          }
        }
        subheading
        mainpitch {
          title
          subtitle
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            title
            desc
            link
          }
          heading
          description
        }
      }
    }
  }
`;
