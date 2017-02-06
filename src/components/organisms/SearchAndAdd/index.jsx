import React, { PropTypes, Component } from 'react'
import { Button } from 'react-toolbox/lib/button'
import { FormButton, FormInput, FormLink, FormSearchBox } from 'components';


class SearchAndAdd extends Component {
  static propTypes = {
    user: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      nameArr:[],
      nameArr1: []
    }
  }

  addRow = () => {
    let arr = this.state.nameArr;
    arr.push(this.state.name)
    this.setState({nameArr:arr, nameArr1: arr})
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  searchChange = () =>{
    let value = this.state.name;
    let arr = [];
    if(value === ""){
      arr = this.state.nameArr1;
      this.setState({nameArr:arr})
    }
    this.state.nameArr1.map((item, i)=>{
      if(item.includes(value)){
        arr.push(item)
        this.setState({nameArr:arr})
      }
    else{
    let a=[]
    this.setState({nameArr:a})
    }
  })
  }


  render() {
    return (

    <div>
        <FormInput type='text' label='Namee' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
        <Button type="button" label="Add Row" onClick={this.addRow.bind(this)} raised accent />

        <FormButton label="search" onClick={this.searchChange.bind(this)} raised accent  />
      {this.state.nameArr.map((item, i)=>{
        return (
          <div key={i}>
              <div>
                  {item}
              </div>
          </div>
        )
      })}
    </div>
    )
  }
}

export default SearchAndAdd
