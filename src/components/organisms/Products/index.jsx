import React, { PropTypes, Component } from 'react'
import {FormButton, FormInput} from 'components';
import theme from './_Products.scss';


class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.products = [
      {
        id: '1',
        location: '',
        title: '',
        name: '',
        hour: '',
        price:'',
        cost:''
      }]
  }

  handleRowDel(i) {
    this.state.products.splice(i, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    let id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    let product = {
        id: id,
        location: '',
        title: '',
        name: '',
        hour: '',
        price:'',
        cost:''
      }
    let item_list = this.state.products
    item_list.push(product);
    this.setState(item_list);
  }

  handleChange ( type, i, val) {
    let stateData = this.state.products;
    if(!stateData[i]) return;
    stateData[i][type] = val;
    this.setState({products: stateData});
  };

  render() {
    return (
      <div>
        <ProductTable onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} onInput={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

class ProductTable extends React.Component {

  render() {
    let rowDel = this.props.onRowDel;
    let productLength = this.props.products.length;
    let onInput = this.props.onInput;
    let product = this.props.products.map((product, i)=> {
      return (
        <ProductRow product={product} productLength={productLength} onDelEvent={rowDel.bind(this)} key={product.id} onInput={onInput} index={i}/>
      )
    });
    return (
      <div className={theme.ProductTable}>
        <table>
          <thead>
            <tr>
              <th> <h2> Location </h2> </th>
              <th> <h2> Tiltle </h2> </th>
              <th> <h2> Name </h2> </th>
              <th> <h2> Hours </h2> </th>
              <th> <h2> Price </h2> </th>
              <th> <h2> Cost </h2> </th>
            </tr>
          </thead>
          <tbody>
            {product}
          </tbody>
        </table>
        <FormButton icon='add' primary floating mini className={theme.addBtn} onClick={this.props.onRowAdd} />
      </div>
    );
  }
}

class ProductRow extends React.Component {
  onDelEvent(i) {
    this.props.onDelEvent(i);
  }
  render() {
    let index = this.props.index;
    let hideBtnStyle = {};
    if(this.props.productLength === 1) {
      hideBtnStyle = {display:'none'};
    }
    return (
      <tr>
        <td><FormInput onChange={this.props.onInput.bind(this,'location', index)}/></td>
        <td><FormInput onChange={this.props.onInput.bind(this,'title', index)}/></td>
        <td><FormInput onChange={this.props.onInput.bind(this,'name', index)}/></td>
        <td><FormInput onChange={this.props.onInput.bind(this,'hour', index)}/></td>
        <td><FormInput onChange={this.props.onInput.bind(this,'price', index)} disabled/></td>
        <td><FormInput onChange={this.props.onInput.bind(this,'cost', index)} disabled/></td>
        <td><FormButton icon="delete" style={hideBtnStyle} onClick={this.onDelEvent.bind(this, index)} primary mini /></td>
      </tr>
    );
  }
}

export default Products
