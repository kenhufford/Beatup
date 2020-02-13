import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            body: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak({ 
            message: this.state.body, 
            user_id: this.props.userId, 
            channel_id: this.props.selectedChannelId });
        this.setState({ body: "" });
    }

    render() {
        return (
            <div className="chat-message-form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Type message here"
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default MessageForm;