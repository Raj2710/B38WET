import React from 'react'

function ProgressCard({lable,value,border,icon}) {
  return  <div className="col-xl-3 col-md-6 mb-4">
  <div className={`card border-left-${border} shadow h-100 py-2`}>
      <div className="card-body">
          <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                  <div className={`text-xs font-weight-bold text-${border} text-uppercase mb-1`}>{lable}
                  </div>
                  <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                          <div className="h5 mb-0 mr-1 font-weight-bold text-gray-800" style={{marginLeft:"10px"}}>${value}%</div>
                      </div>
                      <div className="col">
                          <div className="progress progress-sm mr-2">
                              <div className={`progress-bar bg-${border}`} role="progressbar"
                                  style={{width: `${value}%`, ariaValueNow:`${value}`, ariaValueMin:"0",
                                  ariaValueMax:"100"}}></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-auto">
                  <i className={`fas ${icon} fa-2x text-gray-300`}></i>
              </div>
          </div>
      </div>
  </div>
</div>
}

export default ProgressCard