import React from 'react';
import ReactDOM from 'react-dom/client';
import Iteam from './iteam';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Cart extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h1>Your Cart</h1>
                    </div>

                    <div className="card-body">
                        <Iteam
                            name="iPhone"
                            photo="http://picsum.photos/100?random=1"
                            description="Apple smartphone"
                            price={100000}
                            quantity={1}
                        />

                        <Iteam
                            name="MacBook Air"
                            photo="http://picsum.photos/100?random=2"
                            description="Apple laptop"
                            price={125000}
                            quantity={1}
                        />

                        <Iteam
                            name="AirPods"
                            photo="http://picsum.photos/100?random=3"
                            description="Apple earbuds"
                            price={25001}
                            quantity={1}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

root.render(<Cart />);
