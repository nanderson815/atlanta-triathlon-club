import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import background from "../../img/background.png";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Features | Atlanta Triathlon Club`} />
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: "white",
              padding: "1rem",
            }}
          >
            Features
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
