import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";

const name = "Ben Patton";
export const siteTitle = "Henneth Annun Tavern";

export default function Layout({ children, home }) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.headerStuff}>
        <div className={styles.headerIcons}>
          <Link href="/">
            <HomeIcon className={styles.icons}></HomeIcon>
          </Link>
          <GitHubIcon
            className={styles.icons}
            onClick={() =>
              window.open("https://github.com/Benanna2019", "_blank")
            }
          ></GitHubIcon>
          <LinkedInIcon
            className={styles.icons}
            data-version="v1"
            data-size="medium"
            data-locale="en_US"
            data-type="horizontal"
            data-theme="light"
            data-vanity="benjaminpatton41992"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/benjaminpatton41992?trk=profile-badge",
                "_blank"
              )
            }
          ></LinkedInIcon>
          <TwitterIcon
            className={styles.twitterIcon}
            onClick={() =>
              window.open("https://twitter.com/BenAPatton", "_blank")
            }
          ></TwitterIcon>
        </div>

        {/* <div>
          <img
            className={`${styles.studyLogo} `}
            src="/images/study.jpg"
            alt="The Study"
          />
        </div>  */}
      </div>

      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta property="og:image" content="/images/color-study.jpg" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/study.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
