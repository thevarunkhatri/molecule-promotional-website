import Link from 'next/link'

import Logo from '../public/logo.svg'
import styles from '../styles/nav.module.scss'

export default function Nav({scrollTop, embeddedLogo}) {
	console.log(scrollTop)	
	
  return (
	<nav className={scrollTop > 20 ?  `${styles.hidden} ${styles.navigation}` : styles.navigation}>
		<ul>
		  <li><Link href="/#hardware" scroll={false}><a>Hardware</a></Link></li>
		  <li><Link href="/#software" scroll={false}><a>Software</a></Link></li>
		  <li className="logoPlaceholder"><Link href="/"><a>
			  {embeddedLogo ? <Logo/> : null}
		  </a></Link></li>
		  <li><Link href="/about"><a>About</a></Link></li>
		  <li><Link href="/preorder"><a>Preorder</a></Link></li>
		</ul>	
	 </nav>  
  )
}