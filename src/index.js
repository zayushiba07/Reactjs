import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Iteam extends React.Component{
    constructor(props){
        super(props);
             this.name = props.name;
             this.description = props.description;
             this.price = props.price;
             this.photo = props.photo;
            this.state={
                quantity: props.quantity,
                deleted:false
            }
    }
    deleteItem = () => {
    this.setState({ deleted: true });
}


    UpdateIteam=(mode)=>{
        switch(mode){
            case '+':
                this.setState({
                    quantity:parseInt(this.state.quantity)+1
                });
                break;
            case '-':
               if (parseInt(this.state.quantity) > 1) {
                    this.setState({
                        quantity: parseInt(this.state.quantity) - 1
                    });
                }
                break;
        }
    }
    render(){
        if (this.state.deleted){
    return null;
    }
        return(
            <div className='row'>
                <div className='col-2 mt-2'>
                        <img src={this.photo} alt={this.name} className="item-img"></img>
                </div>
                 <div className='col-2 mt-2'>
                        {this.name}
                        {this.description}
                </div>
                 <div className='col-2 mt-2'>
                       {this.price}
                </div>
                <div className='col mt-2'>
                      <div className='input-group'>
                         <button className='btn btn-light' onClick={()=>this.UpdateIteam('-')}>-</button>
                       <input type="text" className='form-control text-center' value={this.state.quantity} readOnly/>
                         <button  className='btn btn-light' onClick={()=>this.UpdateIteam('+')}>+</button>
                      </div>
                </div>
                <div className='col-2 mt-2'>
                    {this.state.quantity*this.price}
                </div>
                <div className="col-2">
                <button className="btn btn-danger" onClick={this.deleteItem}>
    Delete
</button>

            </div>
            </div>
       )
    }
}
class Cart extends React.Component{
    render(){
        return(<div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Your Cart</h1>
                        </div>
                        <div className='card-body'>
                            <Iteam name='IPhone' photo='http://picsum.photos/100?random=1' description='apple smartphone' price='100000' quantity='1' />
                        <Iteam name='Macbook air' photo='http://picsum.photos/100?random=2' description='apple laptop' price='125000' quantity='1' />
                        <Iteam name='Airpods' photo='http://picsum.photos/100?random=3' description='apple earbuds' price='25001' quantity='1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
root.render(<Cart/>);