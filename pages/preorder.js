import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Nav from '../components/nav.js'
import Footer from '../components/footer.js'

import Logo from '../public/logo.svg'
import Stars from '../public/stars.svg'
import Information from '../public/information-circle.svg'
import MoreCubes from '../public/moreCubes.svg'

import Basekit from '../public/basekit.png'

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
				<div>
					<h1><Stars/> Sign-up to be notified</h1>
					<p>Enter your email to be notified when Molecule is avaliable to purchase</p>
					<form>
						<input type="email" id="email" name="email" placeholder="Your Email" required/>
						<input type="submit" className="button buttonPrimary white" value="Pre-Order"/>
					</form>
					<span><Information/> You will not be opted in to any other e-mail communications by entering your email here.</span>
				</div>
			</div>
			<div className={`${styles.preorderSale} container`}>
				<div>
					<h2>The Base Kit</h2>
					<div className={styles.baseKit}>
						<Image src={Basekit} alt="Base Kit"/>
						<div className={styles.basekitText}>
							<div>
								<h2>Base Kit</h2>
								<p>Case | Stylus | App Dock + 3 Cubes</p>
							</div>
							<a className="button buttonPrimary">Pre-Order ($299)</a>
						</div>
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
								<div className={styles.hoverEffect}>
									<a className="button buttonPrimary">Add to Cart</a>
								</div>
							</div>
						</div>
						<div className={styles.accessory}>
							<div className={styles.accessoryText}>
								<h4>Keyboard</h4>
								<p>$75</p>
							</div>
							<div className={styles.imageHolder}>
								<div className={styles.hoverEffect}>
									<a className="button buttonPrimary">Add to Cart</a>
								</div>
							</div>
						</div>
						<div className={styles.accessory}>
							<div className={styles.accessoryText}>
								<h4>Hearing Loop</h4>
								<p>$50</p>
							</div>
							<div className={styles.imageHolder}>
								<div className={styles.hoverEffect}>
									<a className="button buttonPrimary">Add to Cart</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.moreCubes}`}>
				<div  className={styles.cubesText}>
					<div>
						<h3>Your favorite apps, in your hands</h3>
						<p>The Molecule Case gives you three new buttons for the things you do most. Get back home, go back one step, and get help when you need it using the side buttons. Add some copy about what our story of creating Molecule.</p>
					</div>
					<a className="button buttonPrimary">Customize yours</a>
				</div>
				<div className={styles.cubesSVG}>
					<MoreCubes/>
				</div>
			</div>
		</main>
		<Footer/>
	</div>
  )
}