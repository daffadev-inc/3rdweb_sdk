import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'
import Link from 'next/link'
import Date from '../lib/date'
import utilStyles from '../styles/App.module.scss'

export default function Blog({ allPostsData }) {
  return (
    <div clasName={utilStyles.blog}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, image, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Image src={image} className={utilStyles.image} width={505} height={350} alt={title} />
        <div className={utilStyles.listItemBody}>
              <Link href={`/posts/${id}`}>
                <a style={{fontSize: '20px'}}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
        </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
