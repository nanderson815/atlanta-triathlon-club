import * as React from "react";

import Layout from "../../components/Layout";
import ResultsRoll from "../../components/ResultsRoll";
import FullWidthImage from "../../components/FullWidthImage";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FullWidthImage
          img={{ url: "/img/ATC-repeating-background_Artboard-2.png" }}
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
