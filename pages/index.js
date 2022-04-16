import { useState, useEffect, useRef } from "react"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/index.module.scss'
import Logo from '../public/logo.svg'
import doubleDevice from '../public/doubleDevice.png'
import flatRender from '../public/flatRender.png'
import pen from '../public/pen.png'
import appDock from '../public/appDock.png'

import Nav from '../components/nav.js'
import ThreeCanvas from '../components/threeCanvas.js'
import Footer from '../components/footer.js'

function Feature({tag, header, description, image}) {
  return (
  <div className={styles.featureGrid}>
    <div className={styles.featureImage}>
      <Image
      src={image}
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
      <Nav scrollTop={scrollTop}/>
      <ThreeCanvas/>
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
              src={doubleDevice}
              alt="flat render"/>
          </div>
        </div>
        <div className={styles.features}>
          <div className={`${styles.hardware} container`}>
            <h2>Hardware</h2>
            <div className={styles.featureSection}>
              <Feature 
                image={flatRender}
                tag="Case" 
                header={<>Key actions. <br/> Right at your fingertips.</>}
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
              <Feature
                image={appDock}
                tag="App Dock" 
                header={<>Is your app running? <br/> Then catch it!</>}
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
              <Feature
                image={pen} 
                tag="Pen" 
                header="It's the write thing to do."
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
            </div>
          </div>
          <div className={`${styles.software} container`}>
            <h2>Software</h2>
            <div className={styles.featureSection}>
              <Feature
                image={flatRender}
                tag="Homepage" 
                header="All the app's a canvas."
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
              <Feature
                image={appDock}
                tag="Web Browser" 
                header="Weave your own web."
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
              <Feature
                image={pen}
                tag="Saved Items" 
                header="Never lose what you love."
                description="Molecule is  finibus, tortor sed condimentum luctus, diam felis rutrum nunc, vel condimentum sapien nibh eget magna."/>
            </div>
          </div>
        </div>
        <div className={styles.preorder}>
        
        </div>
      </main>
      <Footer/>
    </div>
  )
}
