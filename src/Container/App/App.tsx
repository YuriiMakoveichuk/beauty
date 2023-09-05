import TopHeader from 'Container/Header/TopHeader'
import Header from 'Container/Header/Header'
import Slider from 'components/Slider/Slider'
import Products from 'components/Products/Products'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <TopHeader />
            <Header />
            <Slider />
            <Products />
        </>
    )
}

export default App
