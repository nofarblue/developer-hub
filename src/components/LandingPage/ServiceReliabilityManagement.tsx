import React from 'react'
// import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.scss';
import ModuleCard from './ModuleCard'; 

enum docType {
  Documentation = 'doc',
  Interactive = 'interactive',
  Video = 'video',
}

type FeatureItem = {
  title: string;
  module: string;
  ribbon: boolean;
  description: JSX.Element;
  type: docType[];
  time: string;
  link?: string;
};
 
const FeaturedList: FeatureItem[] = [{
  title: 'Introduction to SLO Management with Prometheus',
  module: 'ccm',
  description: (
    <>
      Introducing SLOs and how to measure and manage your SLOs leveraging Prometheus.
    </>
  ),
  ribbon: true,
  type: [docType.Documentation],
  time: '15min',
  link: '/tutorials/manage-service-reliability/intro-to-srm'
}]; 

const SRMList: FeatureItem[] = [{
  title: 'Introduction to SLO Management with Prometheus',
  module: 'ccm',
  description: (
    <>
      Introducing SLOs and how to measure and manage your SLOs leveraging Prometheus.
    </>
  ),
  ribbon: false,
  type: [docType.Documentation],
  time: '15min',
  link: '/tutorials/manage-service-reliability/intro-to-srm'
}];

export default function SRM() {
  return (
    // <Layout title="SRM" description="SRM">
    //   <ul className={styles.breadCrumb}>
    //     <li>Get Started</li>
    //     <li>Manage SLOs</li>
    //   </ul>
      <div className="container">
        <img src="/img/srm.svg"/>
        <div className={styles.SectionName}><h3>Manage SLOs</h3></div>
        <div className={styles.topSection}>
          <div className={styles.spaceBetween}>
            <div className={styles.moduleTitle}>
              <img src="/img/icon_srm.svg"/>
              <h1>Service Reliability Management</h1>
            </div>
            <div>
              <Link
                href="https://docs.harness.io/category/ko19u4brsv-howtos-service-reliability-management">
                <button className={clsx('button button--lg', styles.btn, styles.btnLight)}><img src="/img/icon_document.png"/> Documentation</button>
              </Link>
            </div>       
          </div>
          <div className={styles.spaceBetween}>
            <div className={styles.content}>
              <p>
                Harness Service Reliability Management (SRM) module helps engineering and DevOps teams to balance feature velocity and bug fixes along with the stability and reliability needs in a production environment.  
              </p>
              <div className={styles.alignCenter}>
                <Link
                  className={clsx('button button--lg', styles.btn, styles.btnSRM)}
                  to="#all-tutorials">
                  SRM Quickstart
                  <img src="/img/Stroke.svg"/>
                </Link>
                <Link href="https://harness.io/products/service-reliability-management"><button className={styles.link}>Learn more about SRM</button></Link>
              </div>
            </div>
            <div>
              <img src="/img/srm_flow.svg"/>
            </div>       
          </div>         
        </div>
        <div className={styles.subSection}>
          <h3>
            Featured Tutorials
          </h3>
            <ModuleCard FeatureList={FeaturedList} featureCard={true}/>
        </div>
        <div className={styles.subSection}>
          <h3 id="all-tutorials">
            All Cloud Cost Tutorials 
          </h3>
            <ModuleCard FeatureList={SRMList}/>
        </div>
      </div>
    // </Layout>
  );
}