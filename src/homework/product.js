

import React, {Component} from 'react';
import Name from './name';
import Price from  './price';
import Description from './description'




class Product extends Component {

   render(){
       return (
           <div>
             <Price gin={this.props.price}/>
            <Name anun = {this.props.name}/>
            <Description nkaragrutyun = {this.props.description}/>
        
           </div>
       )
       }

     
     
     
      }


export default Product;