import { useEffect, useReducer } from 'react'

const texts = [
	'« Я фронтенд разработчик »',
	'« HTML — это просто! »',
	'« JavaScript — мой выбор! »',
	'« Обожаю CSS-анимации! »',
	'« Создаю магию в браузере! »',
	'« Программирую реальность на JS »',
	'« Фронтенд — это моя суперсила! »',
	'« Кодить и вдохновляться! »',
	'« React — моё второе имя! »',
	'« Каждый пиксель имеет значение! »',
	'« Превращаю код в красоту! »',
]

const initialState = {
	index: Math.floor(Math.random() * texts.length),
	phase: 'in',
}

const STATE = {
	ANIMATE_OUT: 'ANIMATE_OUT',
	NEXT_TEXT: 'NEXT_TEXT',
}

const CHANGE_TIMER = 5000

function reducer(state, action) {
	switch (action.type) {
		case STATE.ANIMATE_OUT:
			return {
				...state,
				phase: 'out',
			}
		case STATE.NEXT_TEXT:
			return {
				index: (state.index + 1) % texts.length,
				phase: 'in',
			}
	}
}

export const useWelcomeText = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch({ type: STATE.ANIMATE_OUT })
		}, CHANGE_TIMER)
		return () => clearInterval(interval)
	}, [])

	const handleTransitionEnd = () => {
		if (state.phase === 'out') {
			dispatch({ type: STATE.NEXT_TEXT })
		}
	}

	return { handleTransitionEnd, texts, state }
}
