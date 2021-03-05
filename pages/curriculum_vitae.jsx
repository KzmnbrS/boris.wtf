import Layout from "../components/Layout";

function CV() {
  return (
    <Layout title="CV" pathname="/curriculum_vitae">
      <h1>CV</h1>

      <h2>Jobs</h2>
      <section>
        <Block header="LUA-developer, self-employed — Sep 2013 – Feb 2014">
          Helping inept players to get better on World of Warcraft PvP.
        </Block>

        <Block header="Golang developer, Gora.studio - Nov 2020 - now">
          Writing mobile backend in augmented reality.
        </Block>
      </section>

      <h2>Education</h2>
      <section>
        <Block header="BS Software Engineering | Baltic State Technical University — 2020">
          <em>Saint Petersburg, Russia</em>
        </Block>
        <Block header="MS Software Engineering | Baltic State Technical University — 2022">
          <em>Saint Petersburg, Russia</em>
        </Block>
      </section>

      <h2>Skills</h2>
      <section>
        <div style={{ marginRight: "45.18px" }}>
          <h3>Languages</h3>
          <Block header="Natural">Russian – native, English – B2</Block>
          <Block header="Programming">Golang, Python, SQL</Block>
        </div>
        <div>
          <h3>Technologies</h3>
            <Block header="Golang">
                echo, gRPC, casbin
            </Block>
          <Block header="Python">
            fastapi, aiohttp
          </Block>
          <Block header="DBMS">postgreSQL, redis, boltdb</Block>
          <Block header="Message brokers">nsq</Block>
          <Block header="Version control">git, liquibase, migrate</Block>
          <Block header="Deployment">docker, jenkins, gitlab CI</Block>
          <Block header="Testing">testify, behave, pySelenium</Block>
        </div>
      </section>

      <style jsx>{`
        section:last-child {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </Layout>
  );
}

export default CV;

function Block({ header, children }) {
  return (
    <>
      <div>
        <h4>{header}</h4>
        {children}
      </div>

      <style jsx>{`
        div {
          margin-bottom: 7.993px;
        }
      `}</style>
    </>
  );
}
