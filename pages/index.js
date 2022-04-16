import { useState, useEffect } from "react"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/index.module.scss'
import Logo from '../public/logo.svg'
import flatRender from '../public/flatRender.png'

function Feature({tag, header, description}) {
  return (
  <div className={styles.featureGrid}>
    <div className={styles.featureImage}>
      <Image
      src={flatRender}
      alt="flat render"/>
    </div>
    <div className={styles.featureText}>
      <span>{tag}</span>
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  </div>
  )
}

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  
  useEffect(() => {
    setScrollTop(document.querySelector('#heroLogo').getBoundingClientRect().top)
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  });
  
  const onScroll = () => {
    var distanceToTop = document.querySelector('#heroLogo').getBoundingClientRect().top;
    setScrollTop(distanceToTop)
  }
  
  
  
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Molecule | Simplified Computing for Older Adults</title>
        <meta name="description" content="Molecule is..." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zrr8nta.css"/>
      </Head>
      <div className={styles.mobileLogoGradient}></div>
      <nav className={scrollTop > 20 ?  "hidden" : null}>
        <ul>
          <li><a href="https://www.google.com">Hardware</a></li>
          <li><a href="https://www.google.com">Software</a></li>
          <li className={styles.logoPlaceholder}></li>
          <li><a href="https://www.google.com">About</a></li>
          <li><a href="https://www.google.com">Pre-Order</a></li>
        </ul>
      </nav>
      <main>
        <div className={styles.heroLogo} id="heroLogo" style={{height: 80 + ((scrollTop - 20)/100) * 40 + 'px'}}>
          <Logo/>
        </div>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
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
            <div className={styles.featureSection}>
              <Feature 
                tag="Case" 
                header={<>Key actions. <br/> Right at your fingertips.</>}
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
              <Feature
                tag="App Dock" 
                header={<>Is your app running? <br/> Then catch it!</>}
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
              <Feature
                tag="Pen" 
                header="It's the write thing to do."
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
            </div>
          </div>
          <div className={`${styles.software} container`}>
            <h2>Software</h2>
            <div className={styles.featureSection}>
              <Feature
                tag="Homepage" 
                header="All the app's a canvas."
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
              <Feature
                tag="Web Browser" 
                header="Weave your own web."
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
              <Feature
                tag="Saved Items" 
                header="Never lose what you love."
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
            </div>
          </div>
        </div>
        <div className={styles.preorder}>
        
        </div>
      </main>
      <footer>
        <div className="container">
          <div>
            <h4>Molecule</h4>
            <p>Tagline goes here</p>
          </div>
          
        </div>
      </footer>
    </div>
  )
}
