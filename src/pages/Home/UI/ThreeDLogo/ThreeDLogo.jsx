import styles from './threeDLogo.module.scss'

export const ThreeDLogo = () => {
	return (
		<div className={styles.block}>
			<div className={styles.inner}>
				<div className={styles.preserveContainer}>
					<div className={styles.front}>
						<img src="/assets/imgs/svg/logo3d.svg" alt="" />
					</div>
					<div className={styles.back}>
						<img src="/assets/imgs/svg/logo3d.svg" alt="" />
					</div>
					<div className={styles.left}></div>
					<div className={styles.right}></div>
					<div className={styles.shadow}></div>
				</div>
			</div>
		</div>
	)
}
