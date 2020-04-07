/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const classnames = (...args) => {
  let values = [...args];
  let classes = [];

  values.forEach(v => {
    if (!!v) {
    if (typeof v === 'string' && v !== '') {
      classes.push(v);
    } else if (Array.isArray(v)) {
      classes.push(classNames(v));
    } else if (v.constructor === Object) {
      let keys = Object.keys(v);
      keys.forEach(k => {
        if (v[k]) {
          classes.push(k);
        }
      });
    }
  }
});

  return classes.join(' ');
};

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/01-intro')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className="col">
                <h3>Resources</h3>
                  <ul>
                  <li><strong>Slack</strong>: Joined the slack through the workspace link: <a href="https://noderegjan23.slack.com">Node.js Regina 2020</a></li>
                  <li><strong>Articles</strong>: Check the <a href="https://medium.com/topic/javascript">Medium.com</a> for hot topics on Javascript</li>
                  <li><strong>Extra Content</strong>: Several examples ara avaliable at <a href="http://www.w3schools.com/">W3Schools</a></li>
                  <li><strong>JavaScript new Features</strong>: An excellent reference can be found on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction">MDN Web Docs</a></li>
                  </ul>

                <h3>Content</h3>

<p>This is the official course program! The course content will be distributed on a weekly basis, feel free to read it all and even pull request (more on that on the git lesson) suggestions.
 </p>               </div>
              </div>
            </div>
          </section>
      </main>
    </Layout>
  );
}

export default Home;
