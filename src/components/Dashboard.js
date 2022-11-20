import React from 'react'
import BasicCard from './CardComponents/BasicCard'
import ProgressCard from './CardComponents/ProgressCard'

function Dashboard({data}) {
  return <div id="content-wrapper" className="d-flex flex-column">
  {/* <!-- Main Content --> */}
  <div id="content">

      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">

          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
          <div className="row">
            <BasicCard lable='Earnings (Monthly)' value={data.earningsMonthly} icon='fa-calendar' border='primary'/>
            <BasicCard lable='Earnings (Annual)' value={data.earningsYearly} icon='fa-dollar-sign' border='success'/>
            <ProgressCard lable='Tasks' value={data.task} icon='fa-clipboard-list' border='info'/>
            <BasicCard lable='Pending Requests' value={data.pendingRequest} icon='fa-comments' border='warning'/>
          </div>
        </div>
    </div>
    </div>
}

export default Dashboard