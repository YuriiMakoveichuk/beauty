import { useState } from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = () => {
    const arrReviews: Review[] = [
        {
            name: '',
            text: '',
        },
    ]

    const [reveiw, setReview] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '') {
            alert("Введіть ім'я")
        } else if (newReview.text === '') {
            alert('Введіть відгук')
        } else {
            setReview((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }
    return (
        <>
            <div className="product-text">ВІДГУКИ</div>
            <div
                style={{
                    backgroundColor: 'rgb(255, 255, 0)',
                    paddingTop: '30px',
                    paddingBottom: '30px',
                }}
            >
                <Container>
                    {reveiw.map(({ name, text }, i) => (
                        <div
                            key={i}
                            // style={{
                            //     border: 'solid  blue',
                            // }}
                        >
                            <div>{name}</div>
                            <div>{text}</div>
                        </div>
                    ))}
                    <form onSubmit={onSend}>
                        <Col style={{ width: '50%', margin: '20px 0' }}>
                            <Form.Control
                                placeholder="Ваше ім'я"
                                value={newReview.name}
                                onChange={handleName}
                            />
                        </Col>
                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Ваш відгук"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{
                                    height: '100px',
                                    width: '50%',
                                    marginBottom: '20px',
                                }}
                                value={newReview.text}
                                onChange={handleText}
                            />
                        </FloatingLabel>
                        <Button
                            type="submit"
                            variant="primary"
                            className="price-btn"
                        >
                            Надіслати
                        </Button>
                    </form>
                </Container>
            </div>
        </>
    )
}

export default Reviews
