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
				<p className={styles.copyright}>©2022 All Rights Reserved by Molecule</p>
			</div>
		</div>
	    <ul>
		  	<a href="https://www.facebook.com/getmoleculeapp" target="_blank" rel="noreferrer"><li>Facebook <Arrow/></li></a>
		  	<a href="https://www.instagram.com/molecule.app/" target="_blank" rel="noreferrer"><li>Instagram <Arrow/></li></a>
		  	<a href="https://vimeo.com/705576059" target="_blank" rel="noreferrer"><li>Vimeo <Arrow/></li></a>
		  	<Link href="/preorder"><a className="buttonSecondary white"><li>Pre-Order</li></a></Link>
	    </ul>
	  </div>
	</footer>
  )
}