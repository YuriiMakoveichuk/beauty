import TopHeader from 'Container/Header/TopHeader'
import Header from 'Container/Header/Header'

import { Routes, Route } from 'react-router-dom'
import CartPage from 'components/CartPage/CartPage'
import Bandage from 'components/Bandage/Bandage'
import Hoop from 'components/Hoop/Hoop'
import Gum from 'components/Gum/Gum'
import Point from 'components/Point/Point'
import Main from 'Container/Main/Main'
import Footer from 'Container/Footer/Footer'
import { useState } from 'react'

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductInCart = { ...prevState }
            delete prevProductInCart[id]
            return prevProductInCart
        })
    }
    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <>
            <TopHeader />
            <Header productsInCart={productsInCart} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/bandage"
                    element={
                        <Bandage
                            addProductToCart={addProductToCart}
                            minCount={1}
                        />
                    }
                />
                <Route
                    path="/hoop"
                    element={
                        <Hoop
                            addProductToCart={addProductToCart}
                            minCount={1}
                        />
                    }
                />
                <Route
                    path="/gum"
                    element={
                        <Gum addProductToCart={addProductToCart} minCount={1} />
                    }
                />
                <Route
                    path="/point"
                    element={
                        <Point
                            addProductToCart={addProductToCart}
                            minCount={1}
                        />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                        />
                    }
                />
            </Routes>
            <Footer />
        </>
    )
}

export default App
