import Form from 'react-bootstrap/Form';

function SignUp() {
  return (
    <Form className='container mt-4'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea5">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default SignUp;