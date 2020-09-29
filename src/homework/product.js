

import React, {Component} from 'react';
import Name from './Name';
import Price from  './Price';
import Description from './Description'




class Product extends Component {

   render(){
       return (
           <div>
             <Price price={this.props.price}/>
            <Name name = {this.props.name}/>
            <Description description = {this.props.description}/>
        
           </div>
       )
       }

     
     
     
      }


export default Product;