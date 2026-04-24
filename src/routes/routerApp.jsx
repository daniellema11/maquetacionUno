import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Philosophy from '../pages/Philosophy.jsx'
import Gallery from '../pages/Gallery.jsx'

const RouterApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pages/philosophy" element={<Philosophy />} />
                <Route path="/pages/gallery" element={<Gallery />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RouterApp
