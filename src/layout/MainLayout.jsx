import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Sidebar } from '../components/Sidebar/Sidebar'

export const MainLayout = ({ children }) => {
	return (
		<div>
			<Header />

			<Sidebar />

			<main>{children}</main>

			<Footer />
		</div>
	)
}
