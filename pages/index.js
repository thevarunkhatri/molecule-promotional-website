import { useState, useEffect, useRef } from "react"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/index.module.scss'
import Logo from '../public/logo.svg'
import heroImage from '../public/heroImage.png'
import flatRender from '../public/flatRender.png'
import pen from '../public/pen.png'
import appDock from '../public/appDock.png'
import caseEmpty from '../public/caseEmpty.png'

import Case from '../public/flatCut.png'
import PenOnTablet from '../public/penOnTablet.png'
import AppCubes from '../public/appCubes.png'
import Printer from '../public/printer.png'
import Keyboard from '../public/keyboard.png'

import testUIScroll from '../public/scrollTest.png'
import homepage from '../public/home.png'
import webBrowser from '../public/webBrowser.png'

import Nav from '../components/nav.js'
import ThreeCanvas from '../components/threeCanvas.js'
import Footer from '../components/footer.js'

function Feature({tag, header, description, image}) {
  return (
  <div className={`${styles.featureGrid}`}>
  {/* <div className={`${styles.featureGrid}`} style={{height: '1000px'}}> */}
    <div className={`${styles.featureImage}`}>
        <Image src={image} alt="flat render"/>
    </div>
    <div className={styles.featureText}>
      <span>{tag}</span>
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  </div>
  )
}

function SoftwarePillar({tag, header, description}) {
  return (
  <div className={styles.softwarePillar}>
    <div className={styles.pillarHeader}>
      <span>{tag}</span>
      <h3>{header}</h3>
    </div>
    <p>{description}</p>
  </div>
  )
}

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollUI, setScrollUI] = useState(0);
  
  useEffect(() => {
    setScrollTop(document.querySelector('#heroLogo').getBoundingClientRect().top)
    setScrollUI(document.querySelector('#softwarePillars').getBoundingClientRect().top)
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  });
  
  const calculateScrollUI = (distance, offset) => {
    if (distance >= 0 - offset) {
      return 0
    } else if (distance < 0 - offset && distance >= -1000 - offset) {
      return Math.abs(distance + offset)/1000
    } else {
      return 1
    }
  }
  
  const onScroll = () => {
    var distanceToTop = document.querySelector('#heroLogo').getBoundingClientRect().top;
    var uiDistanceToTop = document.querySelector('#softwarePillars').getBoundingClientRect().top;
    setScrollTop(distanceToTop)
    setScrollUI(uiDistanceToTop)
    {/* console.log(document.querySelector('#softwarePillars').getBoundingClientRect()) */}
  }
  
  let translate1 = {
    transform: `translateY(${1000 - (1000 * calculateScrollUI(scrollUI, 0))}px)`
  }
  
  let translate2 = {
    transform: `translateY(${1000 - (1000 * calculateScrollUI(scrollUI, 1000))}px)`
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
      <main>
        <div className={styles.heroLogo} id="heroLogo" style={{height: 80 + ((scrollTop - 20)/100) * 40 + 'px'}}>
          <Logo/>
        </div>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <h1>Software shouldn't be this hard!</h1>
              <p>
                We built Molecule with a mission to make an accessible experience that doesn’t compromise on aesthetics. 
                <b> If you’ve ever felt like technology wasn’t made for you, we’re here to help.</b>
              </p>
            </div>
            <div className="groupedButtons">
              <a className="button buttonPrimary">See How</a>
              <a className="button buttonSecondary">Pre-Order $299</a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={heroImage}
              alt="flat render"/>
          </div>
        </div>
        <div className={styles.features}>
          <div className={`${styles.hardware}`}>
            <div className={styles.hardwareHeader}>
              <div className={`${styles.twoColumn}`}>
                <div className={styles.hardwareTitle}>
                  <span>Modern technology isn’t made for you</span>
                  <h2>That's not your fault.</h2>
                </div>
                <div className={styles.paragraphs}>
                  <p>
                    Every product in the tech world tries to be brighter, faster, and pack in more features. New technology is rarely designed with older adults’ needs in mind.
                  </p>
                  <p>
                    At Molecule, we want to change that. We think that older adults stand to benefit so much from accessible technology, but it isn’t designed with them in mind. So, we made our own specifically for them.
                  </p>
                  <p>
                    Most importantly, we think technology is for everyone, so we built a system that bridges the gap between the digital world of information and the physical world we live in — whoever you are.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.featureSection}`}>
              <Feature 
                image={Case}
                tag="Case" 
                header={<>Key actions. <br/> Right at your fingertips.</>}
                description="The Molecule Case gives you three new buttons for the things you do most. Get back home, go back one step, and get help when you need it using the side buttons."/>
              <Feature
                image={AppCubes}
                tag="App Dock" 
                header={<>Is your app running? <br/> Then catch it!</>}
                description="Open, close, and switch apps with App Blocks. App Blocks live in the real world, so you’re always aware of what’s running and what’s not."/>
              <Feature
                image={PenOnTablet} 
                tag="Pen" 
                header="It's the write thing to do."
                description="Sometimes you just don’t want to use your finger, and that’s okay. The Molecule Pen gives you precision-pointing superpowers and the ability to write in text fields instead of typing."/>
              <div className={styles.printerImage}>
                <Image
                  src={Printer}/>
              </div>
              <div className={styles.modularAccessories}>
                <div className={styles.featureText}>
                  <span>Modular Accessories</span>
                  <h3>Expandable accessories. <br/> Infinite possibilities!</h3>
                  <p>Sometimes you just don’t want to use your finger, and that’s okay. The Molecule Pen gives you precision-pointing superpowers and the ability to write in text fields instead of typing.</p>
                </div>
              </div>
              <div className={styles.keyboardImage}>
                <Image
                  src={Keyboard}/>
              </div>
            </div>
          </div>
          <div className={`${styles.software}`}>
            <div className={styles.softwareHeader}>
              <div className="container">
                <h2>An app that’s made for you.</h2>
                <p>Molecule’s hardware works best with the Molecule App. We designed the Molecule app to support the way older adults think and use computers. </p>
                <p> Best of all, the Molecule App is free and always will be. You don’t need a subscription to access full functionality: every feature, unlimited saved items, and support documentation are all included.</p>
                <div className="groupedButtons">
                    <a className="button buttonPrimary white">Learn More</a>
                    <div className="buttonWithDisclaimer">
                      <a className="button buttonSecondary white">Get on the App Store ($0)</a>
                      <span className="buttonDisclaimer">*No subscription needed for full app functionality</span>
                    </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div className={styles.softwareFeatures}>
                <div className={styles.softwareHolder}>
                  <Image className={styles.placeholderImage} src={caseEmpty} alt="empty case"/>
                  <div className={styles.staticCase}>
                    <Image src={caseEmpty} alt="empty case"/>
                  </div>
                  <div className={`${styles.testUIScroll1} ${styles.testUIScroll}`}>
                    <Image src={homepage} alt="empty case"/>
                  </div>
                  <div className={`${styles.testUIScroll2} ${styles.testUIScroll}`} style={translate1}>
                    <Image src={webBrowser} alt="empty case"/>
                  </div>
                  <div className={`${styles.testUIScroll3} ${styles.testUIScroll}`} style={translate2}>
                    <Image src={testUIScroll} alt="empty case"/>
                  </div>
                </div>
                <div id="softwarePillars">
                  <SoftwarePillar
                    tag="Homepage"
                    header="All the app's a canvas"
                    description="Molecule’s home page features an interactive canvas for quick note-taking, provides quick access to Saved Items, and lets you switch between apps with the menu at the top."/>
                  <SoftwarePillar
                    tag="Web Browser"
                    header="Weave your own Web."
                    description="What if the Internet were a more organized place to browse your hobbies and interests? Molecule’s web browser provides a streamlined view with a focus on important tasks — like note-taking, saving items, and picking up where you left off."/>
                  <SoftwarePillar
                    tag="Saved Items"
                    header="Never lose what you love."
                    description="The Saved Items feature gives you a centralized location to access web articles, notes, photos, documents, and anything else you want to save.
                    Explore suggested items in the For You page, organize items in collections, and take a nostalgic look back in the Scrapbook."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
