import React from 'react';
import FormError from './FormError';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.OnFieldChanged = this.OnFieldChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            email: '',
            message: '',
            emailError: '',
            messageError: '',
            emailValid: false,
            messageValid: false,
            formValid: false
        }
    }

    ValidateField(fieldName, value) {
        console.log(fieldName, value);
        let emailValid = this.state.emailValid;
        let msgValid = this.state.messageValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/);
                //formErrors.email = emailValid ? '' : 'Email does not follow correct format';
                break;
            case 'message-body':
                msgValid = value.length > 0;
                //formErrors.password = msgValid ? '' : 'Message cannot be empty';
                break;
            default:
                break;
        }

        this.setState({
            emailValid: emailValid,
            messageValid: msgValid
        }, this.ValidateForm);
    }


    ValidateForm() {
        this.setState({
            emailError: this.state.emailValid ? '' : 'Email does not follow correct format',
            messageError: this.state.messageValid ? '' : 'Message cannot be empty'
        });
    }

    OnFieldChanged = (event) => {
        console.log('something');
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value },
            () => { this.ValidateField(name, value) });
    }

    handleClick(){
        alert("sdfds");
        console.log('Button Clicked');
        this.setState({ email: "fkjshfjshfdsf" });
    }
    
    render() {
        return (
            <div className="main-container contact">
                <h2 className="section-title">Get in Touch</h2>
                <div className='contact-fields-wrapper'></div>
                <div className="message-field-wrapper">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" onChange={this.OnFieldChanged}
                        value={this.state.email} className="contact-field email" />
                </div>
                <FormError errorMsg={this.state.emailError}></FormError>
                <div className="message-field-wrapper">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" className="contact-field subject" />
                </div>
                <div className="message-field-wrapper">
                    <label for="message-body">Message</label>
                    <textarea id="message-body" name="message" rows="20"
                        value={this.state.message} onChange={this.OnFieldChanged} className="contact-field message-body"></textarea>
                </div>
                <FormError errorMsg={this.state.messageError}></FormError>
                <div className="submit-wrapper">
                    <button type="submit" id="submit-msg" onClick={this.handleClick} className="submit-msg">Send</button>
                </div>
            </div>
        );
    }
}

export default ContactForm;