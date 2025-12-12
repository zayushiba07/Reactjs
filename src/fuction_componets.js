import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Details(props){
    return(
        <div className='text-center p-3 border rounded'>
            <img src={props.photos} alt="" className="img-fluid mb-2" />
            <p>
                Name : {props.name}<br/>
                Age : {props.age}<br/>
                Gender : {props.gender}<br/>
            </p>
        </div>
    );
}

function Name(){
    return(
        <div className='container mt-4'>
            <div className='row justify-content-center'>
                
                <div className='col-md-4'>
                    <Details name="Ayushiba" photos="https://www.picsum.photos/100?random=2" age="21" gender="Female"/>
                </div>

                <div className='col-md-4'>
                    <Details name="Anu" photos="https://www.picsum.photos/100?random=3" age="22" gender="Female"/>
                </div>

            </div>
        </div>
    );
}

root.render(<Name/>);
