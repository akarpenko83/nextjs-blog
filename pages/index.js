import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a full-stack developer with a high level of
          self-organization and a predilection for
          self-development. Currently, I'm done with
          studying HTML, CSS and JS and started with React.
          All my previous work experience has taught me to
          take responsibility for my tasks and do them in a
          timely and high-quality manner. I am sure my
          programming skills and valuable experience gained
          in previous jobs will add value to your company.
          You can count on my rapid professional growth due
          to my proactive attitude in life. I'm also fluent
          in English(upper-intermediate) and I'm sure that
          will help to build good communications.
        </p>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
