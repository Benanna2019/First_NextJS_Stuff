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
       <script async type="application/javascript"></script>
          <script
            async
            dangerouslySetInnerHTML={{
                __html: `(function(b,o,n,g,s,r,c){if(b[s])return;b[s]={};b[s].scriptToken="XzE1NDM4MjA3NTI";b[s].callsQueue=[];b[s].api=function(){b[s].callsQueue.push(arguments);};r=o.createElement(n);c=o.getElementsByTagName(n)[0];r.async=1;r.src=g;r.id=s+n;c.parentNode.insertBefore(r,c);})(window,document,"script","https://cdn.oribi.io/XzE1NDM4MjA3NTI/oribi.js","ORIBI");`
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