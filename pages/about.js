import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Vimeo from 'react-vimeo-embed';

import Nav from '../components/nav.js'
import Footer from '../components/footer.js'

import styles from '../styles/about.module.scss'

import Documentation from '../public/documentation.png'
import PreorderCase from '../public/preorderCase.png'
import Ecosystem from '../public/ecosystem.png'
import ImpactPeople from '../public/impactPeople.png'
import Varun from '../public/varun.png'
import Nandika from '../public/nandika.png'
import Quint from '../public/quint.png'
import Amanda from '../public/amanda.png'
import Aparna from '../public/aparna.png'
import Logo from '../public/logo.svg'


export default function About() {
  return (
	<div className={styles.wrapper}>
  		<Head>
	  	<title>Molecule | About Us</title>
	  	<meta name="description" content="Molecule is..." />
	  	<link rel="icon" href="/favicon.ico" />
	  	<link rel="stylesheet" href="https://use.typekit.net/zrr8nta.css"/>
		</Head>
		<Nav embeddedLogo={false}/>
		<div className={styles.logo}>
			<Logo/>	
		</div>
		<main>
			<div className={styles.header}>
				<h1>Our mission is to <span>streamline</span> the digital world and make it more <span>tangible and accessible.</span></h1>
			</div>
			<div className={styles.ourStory}>
				<div className="container two-grid">
					<div className={styles.ourStoryImage}>
						<Image src={Ecosystem} alt="Molecule ecosystem"/>
					</div>
					<div className={styles.ourStoryText}>
						<span>Our Story</span>
						<h3>The digital divide brought us together.</h3>
						<p>We all have someone older than us that we look up to. Whether it’s a mentor, a loved one, or someone else who’s invested in us, the advice of someone who’s been around longer than you is invaluable.</p>
					    <p>But we saw a need in those people. Unfortunately, modern technology is not designed with older adults in mind, and often seeks to remove agency from them instead of returning it. That’s not okay.</p>
						<p>We want to give back to the people in our lives who helped us, so we set out to make a system that lets anyone — regardless of age or accessibility needs — use digital technology to its fullest.</p>
					</div>
				</div>
			</div>
			<div className={styles.impact}>
				<div className={styles.impactText}>
				  <h2>Made for older adults,</h2>
				  <span>Improving accessibility for everyone</span>
				  <p>We believe technology is for everyone, and that includes older adults and others with accessibility needs. One of the great things about designing for older adults is that every accessibility need they have is shared with another demographic. </p>
				  <p>For example, there are children who struggle with vision, or middle-aged people that struggle with motor function. By designing for older adults, we’re paving the way for many others.</p>
				</div>
				<div className={styles.impactImage}>
					<Image src={ImpactPeople} alt="Target Audience"/>
				</div>
			</div>
			<div className={styles.video}>
				<div className={`${styles.videoOffset} container`}>
					<div className={styles.videoHolder}>
						<Vimeo
				  		video="705576059"
				  		autoplay={false}
				  		showByline={false}
				  		showPortrait={false}
				  		showTitle={false}
				  		controls={false}
				  		color="7C5CD2"
						responsive={true}
						/>
					</div>
					<p>Watch: our vision for Molecule, a product that broadens your ability to utilize the digital world.</p>
				</div>
			</div>
			<div className={`${styles.team} container`}>
				<h2>Meet the Team</h2>
				<div className={styles.teamPhotos}>
					<div>
						<Image src={Nandika} alt="Nandika"/>
						<h4>Nandika Gupta</h4>
					</div>
					<div>
						<Image src={Varun} alt="Varun"/>
						<h4>Varun Khatri</h4>
					</div>
					<div>
						<Image src={Aparna} alt="Aparna"/>
						<h4>Aparna Somvanshi</h4>
					</div>
					<div>
						<Image src={Amanda} alt="Amanda"/>
						<h4>Amanda Kong</h4>
					</div>
					<div>
						<Image src={Quint} alt="Quint"/>
						<h4>Quint Bailey</h4>
					</div>
				</div>
			</div>
			<div className={styles.documentation}>
				<div className="container two-grid">
					<div className={styles.documentationText}>
						<span>Documentation</span>
						<h3>Learn more about Molecule</h3>
						<p>If you’d like to learn more about Molecule and how it works, visit <a href="https://help.getmolecule.app">help.getmolecule.app</a> for our support guides. Or, visit our home page for more information about the Molecule ecosystem.</p>
					</div>
					<Image src={Documentation} alt="Documentation illustration" />
				</div>
			</div>
			<div className={`${styles.preorder} container`}>
				<div className={styles.preorderText}>
					<h2>An app that&#39;s made for you</h2>
					<p>Molecule App is free and always will be. You don’t need a subscription to access full functionality: every feature, unlimited saved items, and support documentation are all include</p>
				</div>
				<a className="button buttonPrimary">Pre-Order Now</a>
				<div className={`${styles.preorderCase}`}>
					<Image src={PreorderCase} alt="cut off Molecule case"/>
				</div>
			</div>
		</main>
		<Footer/>
	</div>
  )
}