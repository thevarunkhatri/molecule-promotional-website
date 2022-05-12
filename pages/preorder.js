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
			<div className={`${styles.preorderHero} container`}>
				<h1>Sign-up to be notified</h1>
				<p>Enter your email to be notified when Molecule is avaliable to purchase</p>
				<form>
					
				</form>
				<span>You will not be opted in to any other e-mail communications by entering your email here.</span>
			</div>
			<div className={`${styles.preorderSale} container`}>
				<div>
					<h2>The Base Kit</h2>
					<div className={styles.baseKit}>
					
					</div>
				</div>
				<div>
					<h2>Expandable Accessories</h2>
					<div className={styles.threeColumns}>
						<div className={styles.accessory}>
							<div className={styles.accessoryText}>
								<h4>Printer</h4>
								<p>$200</p>
							</div>
							<div className={styles.imageHolder}>
							
							</div>
						</div>
						<div className={styles.accessory}>
							<div className={styles.accessoryText}>
								<h4>Keyboard</h4>
								<p>$75</p>
							</div>
							<div className={styles.imageHolder}>
							
							</div>
						</div>
						<div className={styles.accessory}>
							<div className={styles.accessoryText}>
								<h4>Hearing Loop</h4>
								<p>$50</p>
							</div>
							<div className={styles.imageHolder}>
							
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