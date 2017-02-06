import React, { PropTypes, Component } from 'react'
import { FormButton} from 'components';
import { FormInput, MyLink, FormSearchBox } from 'components';
import theme from './_LoginInput.scss';

const countriesArray = ['abc', 'abcd', 'USA', 'Thailand', 'Tongo', 'Slovenia'];

class LoginInput extends Component {

  state = { name: '', phone: '', email: '', hint: '' , simple: '', multiple: '', Password: ''};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  handleSimpleChange = (value) => {
    this.setState({simple: value});
  };

  validateEmail = (value) => {
    console.log( value)
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }

 render () {
    return (
      <div>
        <FormInput type='text' label='Namee' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
        <FormInput type='email' label='Email address' onKeyPress={this.validateEmail}  value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
        <FormInput type='Password' label='Password' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
        <FormButton label="login" raised primary />
        <MyLink className="mylink" href='http://www.google.com' label='Forgot Password' />
        <FormSearchBox direction="top" label="Choose a name" hint="You can only choose one..." multiple={false} onChange={this.handleSimpleChange} source={countriesArray} value={this.state.simple}/>
      </div>
    );
  }
}

export default LoginInput