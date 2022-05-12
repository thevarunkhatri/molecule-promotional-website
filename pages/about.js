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
						<p>The Molecule Case gives you three new buttons for the things you do most. Get back home, go back one step, and get help when you need it using the side buttons. Add some copy about what our story of creating Molecule.</p>
					</div>
				</div>
			</div>
			<div className={styles.impact}>
				<div className={styles.impactText}>
				  <h2>Made for everyone.</h2>
				  <span>Design with accessibility needs in mind</span>
				  <p>The Molecule Case gives you three new buttons for the things you do most. Get back home, go back one step, and get help when you need it using the side buttons. Add some copy about what our story of creating Molecule.</p>
				</div>
				<Image src={ImpactPeople} alt="Target Audience"/>
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
					<p>A peek into the Molecule world</p>
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
						<p>Get the help you want with 24/7 support anytime <a href="https://help.getmolecule.app">help.getmolecule.app</a> new buttons for the things you do most. Get back home, go back one step, and get help when you need it using the side buttons.</p>
					</div>
					<Image src={Documentation} alt="Documentation illustration" />
				</div>
			</div>
			<div className={styles.preorder}>
				<div className={styles.preorderText}>
					<h2>An app that&#39;s made for you</h2>
					<p>Molecule App is free and always will be. You don’t need a subscription to access full functionality: every feature, unlimited saved items, and support documentation are all include</p>
				</div>
				<a className="button buttonPrimary">Pre-Order Now</a>
				<div className={`${styles.preorderCase} container`}>
					<Image src={PreorderCase} alt="cut off Molecule case"/>
				</div>
			</div>
		</main>
		<Footer/>
	</div>
  )
}