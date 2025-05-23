import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import feesIcon from '../../../assets/icons/fees.png';
import './FeesCollectedCard.css';

const FeesCollectedCard = ({ icon, label, value }) => {
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

// Dashboard component for displaying this card
const Dashboard2 = () => {
  return (
    <div className="dashboard-wrapper">
      <FeesCollectedCard
        icon={<img src={feesIcon} alt="fees" className="icon-image" />}
        label="Total Fees Collected ( July 2024 )"
        value="₹500"
      />
    </div>
  );
};

export default Dashboard2;
