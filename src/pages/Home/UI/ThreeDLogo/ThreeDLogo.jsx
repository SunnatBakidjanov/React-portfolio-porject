import styles from './threeDLogo.module.scss'

export const ThreeDLogo = () => {
	return (
		<div className={styles.block}>
			<div className={styles.inner}>
				<div className={styles.preserveContainer}>
					<div className={styles.front}></div>
					<div className={styles.back}></div>
					<div className={styles.left}></div>
					<div className={styles.right}></div>
					<div className={styles.shadow}></div>
				</div>
			</div>
		</div>
	)
}
