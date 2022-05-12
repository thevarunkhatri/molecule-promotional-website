import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Nav from '../components/nav.js'
import Footer from '../components/footer.js'

import Logo from '../public/logo.svg'

import styles from '../styles/preorder.module.scss'



export default function About() {
  return (
	<div className={styles.wrapper}>
		  <Head>
		  <title>Molecule | Pre-Order</title>
		  <meta name="description" content="Molecule is..." />
		  <link rel="icon" href="/favicon.ico" />
		  <link rel="stylesheet" href="https://use.typekit.net/zrr8nta.css"/>
		</Head>
		<Nav embeddedLogo={false}/>
		<div className={styles.logo}>
			<Logo/>	
		</div>
		<main>
			
		</main>
		<Footer/>
	</div>
  )
}