import fs from "fs";
import path from "path";
import _ from "lodash";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

function Content({ pathname, title, contents }) {
  return (
    <Layout pathname={pathname} title={title}>
      <ReactMarkdown source={contents} />
    </Layout>
  );
}

const contentDirectory = path.join(process.cwd(), "content");

export async function getStaticPaths() {
  const filenames = fs.readdirSync(contentDirectory);

  const paths = [
    { params: { path: undefined } },
    ...filenames.map((filename) => ({
      params: {
        path: filename.replace(".md", "").split("/"),
      },
    })),
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  if (params.path === undefined) params.path = ["about"];

  const relativePath = params.path.join("/");
  const filename = path.join(contentDirectory, relativePath) + ".md";

  return {
    props: {
      pathname: "/" + relativePath,
      title: _.startCase(_.last(params.path)),
      contents: fs.readFileSync(filename, "utf8"),
    },

    revalidate: 3,
  };
}

export default Content;
