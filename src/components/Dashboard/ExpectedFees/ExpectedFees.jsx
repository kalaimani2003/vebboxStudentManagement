import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ExpectedFeess from '../../../assets/icons/EF.png';
import './ExpectedFees.css';

const ExpectedFees = ({ icon, label, value }) => {
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
const Dashboard4 = () => {
  return (
    <div className="dashboard-wrapper">
      <ExpectedFees
        icon={<img src={ExpectedFeess} alt="student" className="icon-image" />}
        label="Expected Fees"
        value="500"
      />
    </div>
  );
};

export default Dashboard4;
