import Link from 'next/link'

import Logo from '../public/logo.svg'
import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
  	<footer className={styles.footer}>
	  <div className="container">
		<div>
		  <h4>Molecule</h4>
		  <p>Tagline goes here</p>
		</div>
	  </div>
	</footer>
  )
}