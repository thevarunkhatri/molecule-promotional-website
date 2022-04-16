import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
	<div>
  		<Head>
	  	<title>Molecule | About Us</title>
	  	<meta name="description" content="Molecule is..." />
	  	<link rel="icon" href="/favicon.ico" />
	  	<link rel="stylesheet" href="https://use.typekit.net/zrr8nta.css"/>
		</Head>
		<nav>
			<ul>
			  <li><a href="https://www.google.com">Hardware</a></li>
			  <li><a href="https://www.google.com">Software</a></li>
			  <li></li>
			  <li><Link href="/about"><a>About</a></Link></li>
			  <li><a href="https://www.google.com">Pre-Order</a></li>
			</ul>
		</nav>
		<main>
			
		</main>
	</div>
  )
}