import * as React from "react";

import Layout from "../../components/Layout";
import TestimonialsRoll from "../../components/TestimonialsRoll";
import FullWidthImage from "../../components/FullWidthImage";
import background from "../../img/background.png";
import { Helmet } from "react-helmet";


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <Helmet title={`Testimonials | Atlanta Triathlon Club`} />
        <FullWidthImage img={{ url: background }} title={"Testimonials"} />
        <section className="section">
          <div className="container">
            <div className="content">
              <TestimonialsRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
