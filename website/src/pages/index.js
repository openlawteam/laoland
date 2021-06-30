import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepageHero from "../components/HomepageHero";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--lg"
//             to="/docs/intro/overview-and-benefits"
//             style={{
//               marginTop: 15,
//               marginBottom: 20,
//               border: "none",
//               fontWeight: "2em",
//             }}
//           >
//             Get Started
//           </Link>

//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/tutorial/dao/installation"
//             style={{ backgroundColor: "white", color: "#3c6b7e" }}
//           >
//             Launch your DAO Tutorial
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description=" - A new modular DAO framework, inspired by the Moloch smart contracts."
    >
      {/* <HomepageHeader /> */}
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
