import { BackgroundGradient } from '../../../UI/BackgroundGradient'
import { SkillsWelcome } from '../SkillsWelcome/SkillsWelcome'
import { ThreeDLogo } from '../ThreeDLogo/ThreeDLogo'
import { TitleH1 } from '../TitleH1/TitleH1'
import styles from './welcomeSection.module.scss'

export const WelcomeSection = () => {
	return (
		<section className={styles.section}>
			<div className="container">
				<BackgroundGradient />
				<div className={styles.wrapper}>
					<TitleH1 text="Привет я" name="Sunnat" />
					<SkillsWelcome />
					<ThreeDLogo />
				</div>
			</div>
		</section>
	)
}
