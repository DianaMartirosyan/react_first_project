

import React, {Component} from 'react';
import Name from './name';
import Price from './price';
import Description from './description'



class Product extends Component{
   
   render(){
       return( 
       <div>  {this.props.price} {this.props.name} {this.props. description} </div>
    
     )
   }
    

}




export default Product;