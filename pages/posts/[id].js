import Layout from "../../components/layout";
import {
  getAllPostIds,
  getPostData
} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({
  postData
}) {
  return ( 
    <Layout>
      <Head>
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-LZJEVFYV5F"></script>
          <script
            async
            dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-LZJEVFYV5F');`
            }}
          />
         
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params
}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}