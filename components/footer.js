import Link from 'next/link'

import Logo from '../public/logo.svg'
import Arrow from '../public/arrow.svg'
import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
  	<footer className={styles.footer}>
	  <div className={`${styles.footerContainer} container`}>
		<div className={styles.footerBrand}>
			<Logo class={styles.logo}/>
			<div>
				<p>
					<a href="" target="_blank">Privacy</a> |
					<a href="" target="_blank"> Terms</a> |
					<a href="" target="_blank"> Cookie Preferences</a>
				</p>
				<p class={styles.copyright}>©2022 All Rights Reserved by Molecule</p>
			</div>
		</div>
	    <ul>
		  	<a href="" target="_blank"><li>Facebook <Arrow/></li></a>
		  	<a href="" target="_blank"><li>Instagram <Arrow/></li></a>
		  	<a href="" target="_blank"><li>Vimeo <Arrow/></li></a>
		  	<a href="" target="_blank" className="buttonSecondary white"><li>Pre-Order</li></a>
	    </ul>
	  </div>
	</footer>
  )
}