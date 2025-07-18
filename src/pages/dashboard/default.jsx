// material-ui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';
import ReportAreaChart from 'sections/dashboard/default/ReportAreaChart';
import UniqueVisitorCard from 'sections/dashboard/default/UniqueVisitorCard';
import SaleReportCard from 'sections/dashboard/default/SaleReportCard';
import OrdersTable from 'sections/dashboard/default/OrdersTable';

// assets
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import FileTextOutlined from '@ant-design/icons/FileTextOutlined';

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid sx={{ mb: -2.25 }} size={12}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
        <AnalyticEcommerce title="Total Appointments" count="4,42,236" percentage={59.3} extra="35,000" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
        <AnalyticEcommerce title="Total AI Agent Calls" count="78,250" percentage={70.5} extra="8,900" />
      </Grid>
      {/* row 2 */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
          <Grid sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.lighter', color: 'primary.main' }}>
              <UserOutlined />
            </Avatar>
            <Typography variant="h5">Technician Calendar Utilization</Typography>
          </Grid>
        </Grid>
        <MainCard content={false}>
          <List sx={{ p: 0 }}>
            {[
              { name: 'Dr. Sarah Johnson', appointments: 12, utilization: 85 },
              { name: 'Dr. Mike Chen', appointments: 14, utilization: 92 },
              { name: 'Dr. Emily Davis', appointments: 10, utilization: 78 },
              { name: 'Dr. James Wilson', appointments: 13, utilization: 88 }
            ].map((technician, index) => (
              <ListItem key={technician.name} divider={index < 3} sx={{ px: 3, py: 2 }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'primary.lighter', color: 'primary.main' }}>
                    <UserOutlined />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" fontWeight={600}>
                      {technician.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {technician.appointments} appointments
                    </Typography>
                  }
                />
                <Box sx={{ flexGrow: 1, mx: 3, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 2 }}>
                    <Box
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: 'grey.200',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          width: `${technician.utilization}%`,
                          borderRadius: 4,
                          bgcolor: 'primary.main',
                          position: 'absolute',
                          left: 0,
                          top: 0
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {technician.utilization}%
                </Typography>
              </ListItem>
            ))}
          </List>
        </MainCard>
      </Grid>
      {/* row 3 - Recent Activity */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
          <Grid sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.lighter', color: 'primary.main' }}>
              <ClockCircleOutlined />
            </Avatar>
            <Typography variant="h5">Recent Activity</Typography>
          </Grid>
        </Grid>
        <MainCard content={false}>
          <Stack sx={{ p: 0 }}>
            {[
              {
                icon: <CheckCircleOutlined />,
                text: 'New appointment booked via AI agent',
                time: '2 min ago',
                bgcolor: '#e8f5e9',
                color: '#2e7d32'
              },
              {
                icon: <FileTextOutlined />,
                text: 'Digital referral received from Dr. Smith',
                time: '5 min ago',
                bgcolor: '#e3f2fd',
                color: '#1565c0'
              },
              {
                icon: <ClockCircleOutlined />,
                text: 'Appointment rescheduled automatically',
                time: '12 min ago',
                bgcolor: '#fff3e0',
                color: '#ef6c00'
              }
            ].map((activity, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 2,
                  mx: 2,
                  my: 1.5,
                  borderRadius: 2,
                  bgcolor: activity.bgcolor,
                  '&:first-of-type': { mt: 2 },
                  '&:last-of-type': { mb: 2 }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'transparent', color: activity.color }}>{activity.icon}</Avatar>
                  <Typography variant="body1" color="text.primary">
                    {activity.text}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {activity.time}
                </Typography>
              </Box>
            ))}
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
}
