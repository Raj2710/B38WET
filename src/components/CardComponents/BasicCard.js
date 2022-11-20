import React from 'react'

function BasicCard({lable,value,border,icon}) {
  return <div className="col-xl-3 col-md-6 mb-4">
  <div className={`card border-left-${border} shadow h-100 py-2`}>
      <div className="card-body">
          <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                  <div className={`text-xs font-weight-bold text-${border} text-uppercase mb-1`}>
                      {lable}</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">${value}</div>
              </div>
              <div className="col-auto">
                  <i className={`fas ${icon} fa-2x text-gray-300`}></i>
              </div>
          </div>
      </div>
  </div>
</div>
}

export default BasicCard