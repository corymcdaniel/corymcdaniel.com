import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './index.module.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import WorkHistory from '../components/WorkHistory';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.hero}>
        {/*<div className={styles.block} />*/}
        <h1>Cory McDaniel</h1>
      </div>

      <div className={styles.about}>
        <div className={styles.img}>
          <Img className={styles.heroImage} fluid={data.hero.childImageSharp.fluid} />
        </div>
        <div className={styles.content}>
          <h3>Web Developer.</h3>
          <p>
            Front-End Developer, software engineer, web dev, coder... I have never been big on
            titles, but basically I've been working on software and the web for more than a decade
            (add a few years if you count GeoCities). While I have always worked on the front-end, a
            good chunk of my career includes building back-end systems using C#, NodeJS, and/or SQL.
          </p>
          <p>
            However, My main love is JavaScript -- React preferred but not absolute. I can also code
            up a page to design, but I am by no means a designer. Big surprise right?
          </p>
          <p>
            <a href={'https://www.linkedin.com/in/corymcdaniel/'}>I'm on LinkedIn.</a>
          </p>
        </div>
      </div>

      <div className={styles.history}>
        <WorkHistory />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
