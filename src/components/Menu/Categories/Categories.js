import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Draggable from 'react-draggable'

import Items from './Items.js'

const TabContainer = ({ children, dir }) => (
  <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
)

class CategoriesMenu extends React.Component {
  state = {
    selected: 0,
  }

  handleChange = (event, value) => {
    this.setState({ selected: value })
  }

  handleChangeIndex = index => {
    this.setState({ selected: index })
  }

  render() {
    const { selected } = this.state
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Draggable
            axis="x"
            bounds={{
              right: 0
            }}
          >
            <Tabs
              value={selected}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Home" />
              <Tab label="Games" />
              <Tab label="Movies" />
              <Tab label="Music" />
              <Tab label="Utils" />
            </Tabs>
          </Draggable>
        </AppBar>

        <SwipeableViews
          index={selected}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer>
            <Items />
            <Items />
          </TabContainer>
          <TabContainer>Item Two</TabContainer>
          <TabContainer>Item Three</TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

CategoriesMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
}

const styles = theme => ({
  root: {
    backgroundColor: '#eeeeee',
    position: 'relative',
    minHeight: 200,
  },
})

export default withStyles(styles, { withTheme: true })(CategoriesMenu)