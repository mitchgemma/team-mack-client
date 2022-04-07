import { Form, Container, Button } from 'react-bootstrap'

const CommentForm = (props) => {
    
    const { comment, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Submit your comments!</Form.Label>
                <Form.Control 
                    placeholder="enter your thoughts on the performer, event or venue here..."
                    type='text'
                    name='comment'
                    value={comment.text}
                />
                <Form.Control 
                    type='hidden'
                    name='seatGeekId'
                    value={comment.seatGeekId}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default CommentForm
