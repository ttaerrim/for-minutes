import React, { useState, useEffect } from "react";
import axios from "axios";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./Main.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
    margin: "auto",
  },
  scroll: {
    overflow: "auto",
    height: "500px",
  },
}));

const Result = ({ pk }) => {
  const [script, setScript] = useState("아직 없음");
  const [summary, setSummary] = useState("아직 없음");
  const [keywords, setKeywords] = useState("아직 없음");
  const [url, setUrl] = useState("");
  const [summaryUrl, setSummaryUrl] = useState("");
  const [editing, setEditing] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleToggleEdit = () => {
    setEditing(!editing);
  };

  const Example = React.memo(
    () => {},
    (prevProps, nextProps) => {
      if (!prevProps.editing && !nextProps.editing) {
        return false;
      }
      // 나머지 경우엔 리렌더링함
      return true;
    }
  );

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const TabPanel = (props) => {
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
  };

  const renderResult = async () => {
    await axios
      .get(url)
      .then((response) => {
        setScript(response.data.script);
        // .replace(/. /g, ".\n")/
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    await axios
      .get(summaryUrl)
      .then((response) => {
        setSummary(response.data.summary);
        setKeywords(response.data.keyword);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  useEffect(() => {
    setUrl(`/testapp/result/${pk}`);
    setSummaryUrl(`/testapp/summary/${pk}`);
    renderResult();
  }, [{ pk }]);

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
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          className={classes.scroll}
        >
          <button onClick={handleToggleEdit}>수정</button>
          <br />
          {scripts}
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          className={classes.scroll}
        >
          {keywords}
          <br />
          <br />
          {summary}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
export default Result;
