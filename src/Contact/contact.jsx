import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        workoutType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://gym-backend-o4od.onrender.com/contacts', formData);
            console.log('Contact submitted:', response.data);
            alert('Contact submitted successfully!');
            setFormData({
                name: '',
                email: '',
                message: '',
                workoutType: ''
            });
        } catch (error) {
            console.error('Error submitting contact:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100">
                <Col md={8} lg={6} className="mx-auto border p-3 p-lg-5">
                    <h1 className="text-center mb-4">Contact Us</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mt-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formWorkoutType" className="mt-3">
                            <Form.Label>Workout Type</Form.Label>
                            <Form.Control
                                as="select"
                                name="workoutType"
                                value={formData.workoutType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Strength Training">Strength Training</option>
                                <option value="Yoga">Yoga</option>
                                <option value="Pilates">Pilates</option>
                                <option value="Cardio">Cardio</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-4 w-100">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;
