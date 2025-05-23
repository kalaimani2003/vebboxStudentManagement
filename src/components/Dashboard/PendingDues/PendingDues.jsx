import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import pendingIcon from '../../../assets/icons/pendingIcon.png';
import './PendingDues.css';


const PendingDues = ({ icon, label, value }) => {
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
const Dashboard3 = () => {
  return (
    <div className="dashboard-wrapper">
      <PendingDues
        icon={<img src={pendingIcon} alt="student" className="icon-image" />}
        label="Pending Dues"
        value="500"
      />
    </div>
  );
};

export default Dashboard3;
