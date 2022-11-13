import { useState } from 'react';
import NavBar from './components/NavBar';
function App() {
  let [count,setCount] = useState(0);
  let [toggle,setToggle] = useState(true)
  let [toggle1,setToggle1] = useState(true)
  let [toggle2,setToggle2] = useState(true)
  return <>
  <NavBar data={{count,setCount}}/>           
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center"><h5 className="fw-bolder">Fancy Product</h5> $40.00</div>
                    </div>
                    {/* <!-- Product actions--> */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                         {
                          toggle? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                            setCount(++count); 
                            setToggle(!toggle)
                          }}>Add to Cart</button>
                          :
                          <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                            setCount(--count); 
                            setToggle(!toggle)
                          }}>Remove</button>
                         }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center"><h5 className="fw-bolder">Dairy Product</h5> $20.00</div>
                    </div>
                    {/* <!-- Product actions--> */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                         {
                          toggle1? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                            setCount(++count); 
                            setToggle1(!toggle1)
                          }}>Add to Cart</button>
                          :
                          <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                            setCount(--count); 
                            setToggle1(!toggle1)
                          }}>Remove</button>
                         }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center"><h5 className="fw-bolder">Auto Product</h5> $50.00</div>
                    </div>
                    {/* <!-- Product actions--> */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                         {
                          toggle2? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                            setCount(++count); 
                            setToggle2(!toggle2)
                          }}>Add to Cart</button>
                          :
                          <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                            setCount(--count); 
                            setToggle2(!toggle2)
                          }}>Remove</button>
                         }
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </section>
  </>
}

export default App;
