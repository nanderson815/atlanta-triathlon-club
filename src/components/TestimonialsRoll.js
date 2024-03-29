import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { graphql, StaticQuery } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

class TestimonialsRollTemplate extends React.Component {
  render() {
    const { data, scroll } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    console.log(scroll);

    if (scroll) {
      return (
        <div style={{ width: "90vw" }}>
          {posts && (
            <Slider {...settings}>
              {posts.map(({ node: post }) => (
                <div key={post.id}>
                  <div style={{ padding: "0px 10px" }}>
                    <Link to="/testimonials">
                      <article
                        className={`blog-list-item tile is-child box notification`}
                      >
                        <header className="center">
                          <div className="post-meta">
                            <div className="title has-text-primary is-size-5 center-text">
                              <h4>{post.frontmatter.title}</h4>
                            </div>
                            <span className="subtitle is-size-6 is-block">
                              {post.frontmatter.description}
                            </span>
                          </div>
                        </header>
                        <p>{post.excerpt}</p>
                      </article>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      );
    } else {
      return (
        <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (
              <div className="is-parent column is-4" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification`}
                >
                  <header className="center">
                    <div className="post-meta">
                      <div className="title has-text-primary is-size-5 center-text">
                        <h4>{post.frontmatter.title}</h4>
                      </div>
                      <span className="subtitle is-size-6 is-block">
                        {post.frontmatter.description}
                      </span>
                    </div>
                  </header>
                  <p>
                    {post.excerpt}
                    {/* <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                    </Link> */}
                  </p>
                </article>
              </div>
            ))}
        </div>
      );
    }
  }
}

TestimonialsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function TestimonialsRoll(props) {
  const { scroll } = props;
  return (
    <StaticQuery
      query={graphql`
        query TestimonialsRollQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "testimonials" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  templateKey
                }
              }
            }
          }
        }
      `}
      render={(data, count) => (
        <TestimonialsRollTemplate data={data} count={count} scroll={scroll} />
      )}
    />
  );
}
