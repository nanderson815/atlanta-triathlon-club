import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

class TestimonialsRollTemplate extends React.Component {
  render() {
    const { data, limit } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const _posts = limit ? posts.slice(0, limit) : posts;

    return (
      <div className="columns is-multiline">
        {posts &&
          _posts.map(({ node: post }) => (
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

TestimonialsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function TestimonialsRoll(props) {
  const { limit } = props;
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
        <TestimonialsRollTemplate data={data} count={count} limit={limit} />
      )}
    />
  );
}
