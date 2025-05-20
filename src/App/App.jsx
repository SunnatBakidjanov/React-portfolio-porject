import { MainLayout } from '../layout/MainLayout'
import { Home } from '../pages/Home/Home'
import { Uses } from '../pages/Uses/Uses'
import { Resume } from '../pages/Resume/Resume'
import { AboutMe } from '../pages/AboutMe/AboutMe'

import './reset.scss'
import './main.scss'

export const App = () => {
	return (
		<MainLayout>
			<Home />
			<Uses />
			<Resume />
			<AboutMe />
		</MainLayout>
	)
}
