import { useEffect, useReducer } from 'react'

const initialValue = {
	transformLeft: '',
	transformRight: '',
	transformFront: '',
	transformBack: '',
	transformImgFront: '',
	transformImgBack: '',
	transformFrontLeft: '',
	transformFrontRight: '',
	transformRightRight: '',
	transformRightLeft: '',
	transformBackRight: '',
	transformBackLeft: '',
	transformLeftRight: '',
	transformLeftLeft: '',
	transformShadow: '',
	phase: 'expand',
}

const STATE = {
	EXPAND_CUBE: 'EXPAND_CUBE',
	COLLAPSE_CUBE: 'COLLAPSE_CUBE',
}

const CHANGE_TIMER = 12000

function reducer(state, action) {
	switch (action.type) {
		case STATE.EXPAND_CUBE:
			return {
				...state,
				transformLeft: 'expandLeft',
				transformRight: 'expandRight',
				transformFront: 'expandFront',
				transformBack: 'expandBack',
				transformImgFront: 'expandImgFront',
				transformImgBack: 'expandImgBack',
				transformFrontLeft: 'expandInnerFrontLeft',
				transformFrontRight: 'expandInnerFrontRight',
				transformRightRight: 'expandInnerRightRight',
				transformRightLeft: 'expandInnerRightLeft',
				transformBackRight: 'expandInnerBackRight',
				transformBackLeft: 'expandInnerBackLeft',
				transformLeftRight: 'expandInnerLeftRight',
				transformLeftLeft: 'expandInnerLeftLeft',
				transformShadow: 'expandShadow',
				phase: 'collapse',
			}
		case STATE.COLLAPSE_CUBE:
			return {
				...initialValue,
				phase: 'expand',
			}
		default:
			return state
	}
}

export const useThreeDLogo = () => {
	const [state, dispatch] = useReducer(reducer, initialValue)

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch({ type: state.phase === 'expand' ? STATE.EXPAND_CUBE : STATE.COLLAPSE_CUBE })
		}, CHANGE_TIMER)
		return () => clearTimeout(timer)
	}, [state.phase])

	return { state }
}
