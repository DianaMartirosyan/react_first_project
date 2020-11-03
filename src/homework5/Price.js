import React, { Component }  from 'react';



class Price extends Component {
    state = {
        price:this.props.defaultValue, 
        currency: this.props.currency
    }
    

    handleClick  = () =>{
       

       this.setState((prevState) => ({
            price: prevState.currency === "USD" ? prevState.price * 487 : prevState.price / 487,
            currency: prevState.currency === "USD" ? "AMD" : "USD",
       })
       )
      
    }

    

    
    render(){
        
        return(
            <div>

       <p>  {this.state.price} , {this.state.currency} </p>
       <button onClick = {this.handleClick}  >
            Change the currency </button>
            </div>
           
        )
    }



}



export default Price;