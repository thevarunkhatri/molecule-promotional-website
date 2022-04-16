import Link from 'next/link'

import Logo from '../public/logo.svg'
import styles from '../styles/nav.module.scss'

export default function Nav({scrollTop, embeddedLogo}) {
	console.log(scrollTop)	
	
  return (
	<nav className={scrollTop > 20 ?  `${styles.hidden} ${styles.navigation}` : styles.navigation}>
		<ul>
		  <li><a href="https://www.google.com">Hardware</a></li>
		  <li><a href="https://www.google.com">Software</a></li>
		  <li className="logoPlaceholder"><Link href="/"><a>
			  {embeddedLogo ? <Logo/> : null}
		  </a></Link></li>
		  <li><Link href="/about"><a>About</a></Link></li>
		  <li><a href="https://www.google.com">Pre-Order</a></li>
		</ul>
	 </nav>  
  )
}