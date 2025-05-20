import { ThreeDLogo } from '../ThreeDLogo/ThreeDLogo'
import { TitleH1 } from '../TitleH1/TitleH1'
import styles from './welcomeSection.module.scss'

export const WelcomeSection = () => {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.wrapper}>
					<TitleH1 text="Привет я" name="Sunnat" />
					<ThreeDLogo />
				</div>
			</div>
		</section>
	)
}
