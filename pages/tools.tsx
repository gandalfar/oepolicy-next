import React, { FunctionComponent } from "react";
import Layout from "../components/Layout";

import ContentBlock from "../components/ContentBlock";
import Hero from "../components/Hero";

import ToolsPageMd, { frontMatter as toolsPage } from "../docs/301-tools.mdx";
import ReadingsPageMd, {
  frontMatter as readingsPage,
} from "../docs/302-readings.mdx";
import GraphicOrangeTools from "../components/GraphicOrangeTools";

const ToolsPage: FunctionComponent = () => {
  return (
    <Layout
      title="Tools &amp; Resources for creating Open Education Policies"
      hero={
        <Hero background="pink">
          <h1 className="text-4xl font-sans">
            Tools &amp; Resources for creating{" "}
            <br className="hidden md:block" />
            <b>Open Education Policies</b>
          </h1>
        </Hero>
      }
    >
      <ContentBlock {...toolsPage}>
        <ToolsPageMd />
      </ContentBlock>
      <GraphicOrangeTools />
      <ContentBlock {...readingsPage}>
        <ReadingsPageMd />
      </ContentBlock>
    </Layout>
  );
};

export default ToolsPage;
