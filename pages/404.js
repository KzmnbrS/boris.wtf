import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout pathname="///" title="Not found">
      <section>
        <h1>Not Found</h1>
        <p>Or you're just not Boris enough yet to see.</p>
      </section>
    </Layout>
  );
}
