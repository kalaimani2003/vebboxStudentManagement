import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import studentIcon from '../../../assets/icons/student.png';
import './DashboardStatsCard.css';

const DashboardStatsCard = ({ icon, label, value }) => {
  return (
    <Card className="dashboard-card">
      <CardContent className="dashboard-card-content">
        <Typography className="dashboard-label">
          {label}
        </Typography>

        <Box className="dashboard-info">
          <Box className="dashboard-icon">{icon}</Box>
          <Typography className="dashboard-value">{value}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

// Dashboard component using the card
const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <DashboardStatsCard
        icon={<img src={studentIcon} alt="student" className="icon-image" />}
        label="Total Student Registered"
        value="500"
      />
    </div>
  );
};

export default Dashboard;
