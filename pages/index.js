import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Blog({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-LZJEVFYV5F"
				></script>
				<script
					async
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-LZJEVFYV5F');`,
					}}
				/>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hello, I'm Ben. I'm a Fullstack JavaScript Developer. I love software
					engineering, not just for the creativity but for the type of work it
					is. Problem solving, helping others, creating software is amazing to
					me.
				</p>
				<p>
					This is my blog. I have called this site 'Henneth Annun Tavern.' The
					name comes from my deep enjoyment of Lord of the Rings. Henneth Annun
					was a hideout of sorts, a place of refuge, for the rangers of Middle
					earth. Lord of the Rings has many elements of its literature that
					speak to me but non more deeply, possibly, than that of a place of
					refuge and safety away from all the chaos of the world.
				</p>
				<p>So, welcome.</p>
				<p>
					I hope this to be somewhere you can read all my musings about
					software, life, philosophy, religion, culture and so on.
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Articles</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
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
