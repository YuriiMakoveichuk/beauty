import TopHeader from 'Container/Header/TopHeader'
import Header from 'Container/Header/Header'

import { Routes, Route } from 'react-router-dom'
import CartPage from 'components/Cart/CartPage'
import Bandage from 'components/Bandage/Bandage'
import Hoop from 'components/Hoop/Hoop'
import Gum from 'components/Gum/Gum'
import Point from 'components/Point/Point'
import Main from 'Container/Main/Main'
import Footer from 'Container/Footer/Footer'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <TopHeader />
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/bandage" element={<Bandage />} />
                <Route path="/hoop" element={<Hoop />} />
                <Route path="/gum" element={<Gum />} />
                <Route path="/point" element={<Point />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
