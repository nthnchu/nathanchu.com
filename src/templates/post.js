import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import './post.css'
import '../css/nord.css'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ItemsUl = ({ items }) => (
  <ul>
    {items.map((e, i) => (
      <li key={i}>
        <a href={e.url}>{e.title}</a>
        {e.items ? <ItemsUl items={e.items} /> : null}
      </li>
    ))}
  </ul>
)

const Post = ({ data }) => {
  return (
    <Layout article title={data.mdx.frontmatter.title}>
      <div>
        <div className="mt-32 md:px-24 mx-auto">
          <div className="mx-auto max-w-3xl bg-gray-50 shadow-card dark:bg-black-light dark:text-gray-50 rounded-lg p-12 text-center mb-12">
            <h1 className="text-6xl font-bold">{data.mdx.frontmatter.title}</h1>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {' '}
              By: {data.mdx.frontmatter.author} | Date:{' '}
              {new Date(data.mdx.frontmatter.date).toDateString()} | Tags: [{' '}
              {data.mdx.frontmatter.tags
                .map(e => e.charAt(0).toUpperCase() + e.substr(1))
                .join(', ')}{' '}
              ]
            </span>
          </div>
          <div className="flex justify-center">
            <div className="max-w-5xl min-w-xl flex-auto w-max">
              <div className="markdown-body">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div>
            </div>
            <div
              className="hidden table-of-contents ml-16 my-8 lg:block"
              style={{ flexBasis: '12rem' }}
            >
              <ItemsUl items={data.mdx.tableOfContents.items} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Posts($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        title
        tags
        author
      }
      fields {
        slug
      }
      body
      tableOfContents
    }
  }
`

export default Post
