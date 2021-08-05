import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import "./Main.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
    margin: 'auto',
  },
  scroll:{
    overflow: 'auto',
    height: '500px'
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Scripts" {...a11yProps(0)} />
          <Tab label="Summary" {...a11yProps(1)} />
          <Tab label="Key Words" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        
        <TabPanel value={value} index={0} dir={theme.direction} className={classes.scroll}>
        말했잖아 언젠가 이런 날이 온다면 난 널 혼자 내버려두지 않을 거라고 죄다 낭떠러지야, 봐 예상했던 것보다 더 아플지도 모르지만 
        내 손을 잡으면 하늘을 나는 정도 그 이상도 느낄 수 있을 거야 눈 딱 감고 낙하- 하-
        믿어 날 눈 딱 감고 낙하 눈 딱 감고 낙하- 하- 믿어 날 눈 딱 감고 낙하
        
        </TabPanel>
        
        <TabPanel value={value} index={1} dir={theme.direction} className={classes.scroll}>
        믿어 날 눈 딱 감고 낙하 눈 딱 감고 낙하- 하- 믿어 날 눈 딱 감고 낙하
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} className={classes.scroll}>
        낙하, 눈
        </TabPanel>
        
      </SwipeableViews>
    </div>
  );
}
