import styles from './titleH1.module.scss'

export const TitleH1 = ({ text, name }) => {
	return (
		<h1 className={styles.title}>
			{text}
			<span className={styles.accent}> {name}</span>
		</h1>
	)
}
