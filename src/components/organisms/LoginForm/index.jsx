import React, { PropTypes, Component } from 'react'
import { Button } from 'react-toolbox/lib/button'
import { FormInput, FormLink, FormSearchBox } from 'components';
import theme from './_LoginForm.scss'

class LoginForm extends Component {
  static propTypes = {
    user: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      items :[]
    }
  }

   handleAddRow = () => {
    const arr = this.state.items;
    arr.push({'name':''});
    this.setState({items:arr})
  }

   handleDeleteRow = (i) => {
    let a = this.state.items;
    a.splice(i, 1);
    this.setState( {items: a} );
  }

  handleChange (i,val){
    const arr = this.state.items;
    arr[i]['name'] = val;
    this.setState({items: arr});
  }

  render() {
    return (

    <div>
      <form>
        {this.state.items.map((item, i)=>{
        return (
          <div key={i}>
              <div>
                  <FormInput type='text' label='added row' name='name' value={this.state.items[i].name} onChange={this.handleChange.bind(this, i)} maxLength={16} />
                  <Button type="button" label="Delete Row" onClick={this.handleDeleteRow.bind(this, i)} raised />
              </div>
          </div>
        )
      })}
        <Button type="button" label="Add Row" onClick={this.handleAddRow.bind(this)} raised accent theme={theme}/>
        <FormLink className="mylink" href='http://www.google.com' label='eg link' icon='person' />
      </form>
    </div>
    )
  }
}

export default LoginForm
