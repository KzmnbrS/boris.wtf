import Layout from "../components/Layout";

function CV() {
  return (
    <Layout title="CV" pathname="/curriculum_vitae">
      <h1>CV</h1>

      <h2>Jobs</h2>
      <section>
        <Block header="LUA-developer, self-employed — 2013–2014">
          Helping inept players to get better on World of Warcraft PvP.
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
          <Block header="Programming">Python, JavaScript, C</Block>
        </div>
        <div>
          <h3>Technologies</h3>
          <Block header="Python">
            fastapi, aiohttp, socketio, <br />
            gino (asyncio SQLAlchemy)
          </Block>
          <Block header="JavaScript">React, NextJS</Block>
          <Block header="DBMS">PostgreSQL, Redis</Block>
          <Block header="Message brokers">NSQ</Block>
          <Block header="Version control">git</Block>
          <Block header="Deployment">docker</Block>
          <Block header="Testing">behave, pySelenium, pytest</Block>
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
