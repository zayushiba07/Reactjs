import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (
  <div className="page-wrapper">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4">
          <div className="card custom-card">
            <div className="card-header">
              <h1 className="mb-0">My Login</h1>
            </div>

            <div className="card-body">
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email Address" />
                </div>

                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-primary">Login</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

root.render(output);
