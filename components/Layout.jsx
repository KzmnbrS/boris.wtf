import Head from "next/head";
import Link from "next/link";

const menu = [
  { name: "Home", link: "/" },
  { name: "CV", link: "/curriculum_vitae" },
  { name: "Writing", link: "/writing" },
];

function Layout({ pathname, title = null, children }) {
  function isActive(link) {
    if (link === "/" && pathname === "/about") return true;
    return link === pathname;
  }

  return (
    <>
      <Head>
        <title>{title || "boris.wtf"}</title>
      </Head>

      <main>
        <aside>
          <nav>
            <ul>
              {menu.map((item) => (
                <li key={item.name} className={isActive(item.link) && "active"}>
                  <Link href={item.link}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article>{children}</article>
      </main>

      <style jsx>{`
        main {
          padding: 22.597px 15.981px;
          display: flex;
          justify-content: center;
        }

        @media (min-width: 576px) {
          nav {
            flex: 0 0 100px;
          }

          article {
            flex: 0 0 361.11px;
          }
        }

        @media (min-width: 768px) {
          nav {
            flex: 0 0 100px;
          }

          article {
            flex: 0 0 510.609px;
          }
        }

        @media (min-width: 992px) {
          nav {
            flex: 0 0 100px;
          }

          article {
            flex: 0 0 722.002px;
          }
        }

        @media (min-width: 1200px) {
          nav {
            flex: 0 0 100px;
          }

          article {
            flex: 0 0 1020.911px;
          }
        }

        nav {
          margin-right: 31.952px;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        li {
          font-weight: bolder;
          margin-bottom: 11.302px;
        }

        li.active {
          color: royalblue;
        }
      `}</style>
    </>
  );
}

export default Layout;
