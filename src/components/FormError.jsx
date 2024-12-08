import React from "react";

class FormError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {msg: ''}
    }

    render() {
        return (
            this.state.msg.length > 0 ?
                <div className="contact-notification-error"
                    id="email-notification-error" hidden>{`*${this.state.msg}`}
                </div> :
                <div></div>
        )
    }
}

export default FormError;