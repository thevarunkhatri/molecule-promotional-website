import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Nav from '../components/nav.js'
import Footer from '../components/footer.js'

import styles from '../styles/about.module.scss'

export default function About() {
  return (
	<div className={styles.wrapper}>
  		<Head>
	  	<title>Molecule | About Us</title>
	  	<meta name="description" content="Molecule is..." />
	  	<link rel="icon" href="/favicon.ico" />
	  	<link rel="stylesheet" href="https://use.typekit.net/zrr8nta.css"/>
		</Head>
		<Nav embeddedLogo={true}/>
		<main>
			
		</main>
		<Footer/>
	</div>
  )
}