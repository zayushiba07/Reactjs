import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Component function
function DigitalClock() {
    const now = new Date();
    return (
        <div className="container clock-container">
            <div className="clock" id="clock">
                {now.getHours()}:{now.getMinutes()}:{now.getSeconds()}
            </div>
        </div>
    );
}

//normal function
function updateTime() {
    root.render(<DigitalClock />);   // ✅ correct render syntax
}

setInterval(updateTime, 1000);
