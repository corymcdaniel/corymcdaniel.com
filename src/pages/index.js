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
          <Img
            className={styles.heroImage}
            imgStyle={{ objectPosition: 'bottom center' }}
            fluid={data.hero.childImageSharp.fluid}
          />
        </div>
        <div className={styles.content}>
          <h3>Web Developer.</h3>
          <p>
            Hi! I build websites. Also internet applications, and have over a decade of experience
            doing so. I love working on front-end applications; focusing on React, but I'm pretty
            tech agnostic.
          </p>
          <p>
            While my core beginnings were in .NET, JavaScript really drew my attention early on,
            which led to me playing around with Node in my spare time around the v0.8 days (2012 - 8
            years already?). Since then, I've built multiple servers in Node with React consuming their
            APIs. Check out my work history below for more info!
          </p>
          <div className={styles.links}>
            <a href={'https://www.linkedin.com/in/corymcdaniel/'}>I'm on LinkedIn.</a>{' '}
            <a href={'https://www.clippedpixel.com'}>I take pictures.</a>{' '}
            <a href={'https://www.github.com/corymcdaniel/'}>I write code.</a>
          </div>
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
    hero: file(relativePath: { eq: "hero_green.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
