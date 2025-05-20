import { useWelcomeText } from '../../hooks/useWelcomeText'
import styles from './skillsWelcome.module.scss'

export const SkillsWelcome = () => {
	const { handleTransitionEnd, texts, state } = useWelcomeText()
	const { index, phase } = state

	return (
		<div className={styles.block}>
			<div className={`${styles.text} ${styles[phase]}`} onTransitionEnd={handleTransitionEnd}>
				{texts[index]}
			</div>
		</div>
	)
}
