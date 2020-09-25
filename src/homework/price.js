import React, {Component} from 'react';



class Price extends Component{
 
   constructor(props){
       super(props)
      
   }
   
     render(){
         return(
             <div>{this.props.price} </div>
         )
     }
    

}



export default Price;