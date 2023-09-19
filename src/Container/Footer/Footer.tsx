import { Container } from 'react-bootstrap'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <div className="footer">
                <Container>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <div>КОНТАКТИ:</div>
                            <div>+380677983989</div>
                            <div>snake77778@gmail.com</div>
                        </div>
                        <div>©2023</div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer
