import React from 'react'
export const DashboardContext = React.createContext();
function DashboardContextComponent({children}) {
    let data = {
        earningsMonthly:"40,000",
        earningsYearly:"2,15,000",
        task:"70",
        pendingRequest:"18",
      }
  return <DashboardContext.Provider value={data}>
    {children}
  </DashboardContext.Provider>
}

export default DashboardContextComponent