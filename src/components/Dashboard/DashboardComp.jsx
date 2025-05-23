import React from 'react'
import MonthlyCollectionChart from './MonthlyCollectionChart/MonthlyCollectionChart'
import DashboardStatsCard from './DashboardStatsCard/DashboardStatsCard'
import Dashboard from './DashboardStatsCard/DashboardStatsCard'
import Dashboard2 from './FeesCollectedCard/FeesCollectedCard'
import Dashboard3 from './PendingDues/PendingDues'
import Dashboard4 from './ExpectedFees/ExpectedFees'


const DashboardComp = () => {
  return (
    <>
     <MonthlyCollectionChart />
     <Dashboard />
     <Dashboard2 />
     <Dashboard3 />
     <Dashboard4 />
     

    

    </>
    
   
    

    
  )
}

export default DashboardComp
