import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import Home from '../pages/Home.jsx'

const RouterApp = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RouterApp
