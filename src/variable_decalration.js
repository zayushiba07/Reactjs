
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 10;
var num2 = 20;
var name = "Ayushiba Zala";
var output = (
    <div>
        <h1 align="center">{name}</h1>
        <table border='1' align="center">
            <tr>
                <td>
                    Addition :
                </td>
                <td>
                    {num1+num2}
                </td>
            </tr>
            <tr>
                <td>
                    Substarction :
                </td>
                <td>
                    {num1-num2}
                </td>
            </tr>
            <tr>
                <td>
                    Multiplication :
                </td>
                <td>
                    {num1*num2}
                </td>
            </tr>
            <tr>
                <td>
                    Division :
                </td>
                <td>
                    {num1/num2}
                </td>
            </tr>
        </table>
    </div>
)   
root.render(output);
