import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/index.module.scss'
import Logo from '../public/logo.svg'
import flatRender from '../public/flatRender.png'

function Feature() {
  return (
  <div className={styles.featureGrid}>
    <div className={styles.featureImage}>
      <Image
      src={flatRender}
      alt="flat render"/>
    </div>
    <div className={styles.featureText}>
      <span>Molecule Case</span>
      <h3>Key actions. <br/> Right at your fingertips.</h3>
      <p>Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna. Quisque malesuada tincidunt purus, sit amet euismod erat feugiat quis.</p>
    </div>
  </div>
  )
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Molecule | Simplified Computing for Older Adults</title>
        <meta name="description" content="Molecule is..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <li><a href="https://www.google.com">Hardware</a></li>
          <li><a href="https://www.google.com">Software</a></li>
          <li><a href="https://www.google.com"><Logo/></a></li>
          <li><a href="https://www.google.com">About</a></li>
          <li><a href="https://www.google.com">Pre-Order</a></li>
        </ul>
      </nav>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            {/* <Logo/> */}
            <h1>A new way to experience the digital world.</h1>
            <p>Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna. Quisque malesuada tincidunt purus, sit amet euismod erat feugiat quis.</p>
          </div>
          <div className={styles.flatRender}>
            <Image
              src={flatRender}
              alt="flat render"/>
          </div>
        </div>
        <div className={styles.features}>
          <div className={`${styles.hardware} container`}>
            <h2>Hardware</h2>
            <Feature/>
            <Feature/>
            <Feature/>
          </div>
          <div className={`${styles.software} container`}>
            <h2>Software</h2>
            <Feature/>
            <Feature/>
            <Feature/>
          </div>
        </div>
        <div className={styles.preorder}>
        
        </div>
      </main>
      <footer>
        <div class="container">
          <div>
            <h4>Molecule</h4>
            <p>Tagline goes here</p>
          </div>
          
        </div>
      </footer>
    </div>
  )
}
