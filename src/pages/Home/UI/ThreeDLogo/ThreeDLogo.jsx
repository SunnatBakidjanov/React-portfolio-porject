import { useThreeDLogo } from '../../hooks/useThreeDLogo'
import styles from './threeDLogo.module.scss'
import cn from 'classnames'

export const ThreeDLogo = () => {
	const { state } = useThreeDLogo()
	const {
		transformLeft,
		transformRight,
		transformFront,
		transformBack,
		transformImgFront,
		transformImgBack,
		transformFrontLeft,
		transformFrontRight,
		transformRightRight,
		transformRightLeft,
		transformBackRight,
		transformBackLeft,
		transformLeftRight,
		transformLeftLeft,
		transformShadow,
	} = state

	return (
		<div className={styles.block}>
			<div className={styles.inner}>
				<div className={styles.preserveContainer}>
					<div className={cn(styles.front, styles[transformFront])}></div>
					<div className={cn(styles.innerFrontLeft, styles[transformFrontLeft])}></div>
					<div className={cn(styles.innerFrontRight, styles[transformFrontRight])}></div>
					<div className={cn(styles.back, styles[transformBack])}></div>
					<div className={cn(styles.innerBackRight, styles[transformBackRight])}></div>
					<div className={cn(styles.innerBackLeft, styles[transformBackLeft])}></div>
					<div className={cn(styles.left, styles[transformLeft])}></div>
					<div className={cn(styles.innerLeftRight, styles[transformLeftRight])}></div>
					<div className={cn(styles.innerLeftLeft, styles[transformLeftLeft])}></div>
					<div className={cn(styles.right, styles[transformRight])}></div>
					<div className={cn(styles.innerRightRight, styles[transformRightRight])}></div>
					<div className={cn(styles.innerRightLeft, styles[transformRightLeft])}></div>
					<img className={cn(styles.imgFront, styles[transformImgFront])} src="/assets/imgs/svg/logo3d.svg" alt="" />
					<img className={cn(styles.imgBack, styles[transformImgBack])} src="/assets/imgs/svg/logo3d.svg" alt="" />
					<div className={cn(styles.shadow, styles[transformShadow])}></div>
				</div>
			</div>
		</div>
	)
}
