import * as React from "react";

import Layout from "../../components/Layout";
import ResultsRoll from "../../components/ResultsRoll";
import FullWidthImage from "../../components/FullWidthImage";
import background from "../../img/background.png";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FullWidthImage
          img={{ url: background }}
          title={"Latest Race Results"}
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <ResultsRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
