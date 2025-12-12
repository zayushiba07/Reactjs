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
                quantity: props.quantity
            }
    }
    render(){
        return(<div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Your Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
class Cart extends React.Component{
    render(){
        return(<div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Your Cart</h1>
                        </div>
                        <div className='card-body'>
                            <CartItem name='IPhone' photo='http://picsum.photos/100?random=1' description='apple smartphone' price='100000' quantity='1' />
                        <CartItem name='Macbook air' photo='http://picsum.photos/100?random=2' description='apple laptop' price='125000' quantity='1' />
                        <CartItem name='Airpods' photo='http://picsum.photos/100?random=3' description='apple earbuds' price='25001' quantity='1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
root.render(<Cart/>);