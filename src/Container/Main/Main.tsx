import Price from 'components/Price/Price'
import Reviews from 'components/Reviews/Reviews'
import Slider from 'components/Slider/Slider'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Slider />
            <Price />
            <Reviews />
        </>
    )
}

export default Main
