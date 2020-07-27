import React from 'react';
import './InfoForm.css';

class InfoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false,
            userEmail: ''
        }
    }
    handleSubmit = () => {
        console.log(this.state.userEmail);
        debugger;
        this.setState({ submitted: true });
    }
    handleChange = (e) => {    
        this.setState({ userEmail: e.target.value})
    }
    render(){
        if (this.state.submitted){
            return (
                <p className="infoForm-text">Thanks. When the kingdom of comfort opens, we'll be in touch!</p>
            )
        } else {
            return (
                <div className="infoForm-container">
                    <p className="infoForm-text">Заполните форму ниже, чтобы узнать об открытии «Империи матрасов» первыми.</p>
                    <form onSubmit={this.handleSubmit} className="infoForm-form">
                        <input onChange={this.handleChange} className="infoForm-input" type="email" placeholder={"E-mail"}/>
                        <button className="infoForm-button" type="submit">Удивите меня!</button>
                    </form>
                </div>
            )
        }
        
    }
}

export default InfoForm;