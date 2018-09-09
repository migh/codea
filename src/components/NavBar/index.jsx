import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { getPaths, getPathsActives } from 'utils/paths'

import Brand from './Brand'
import NavItem from './NavItem'
import styles from './NavBar.module.scss'

const stylesUi = theme => ({
  root: {
    maxHeight: '64px',
    minHeight: '64px',
    padding: '0 24px',
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
})

class NavBar extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object,
  }

  render() {
    const { classes } = this.props

    return (
      <AppBar
        elevation={0}
        classes={{ root: classes.root, colorPrimary: classes.colorPrimary }}>
        <Brand />
        <ul className={styles.navItemContainer}>
          {getPathsActives(getPaths).map(path => (
            <NavItem key={path.href} href={path.href}>
              {path.label}
            </NavItem>
          ))}
        </ul>
      </AppBar>
    )
  }
}

export default withStyles(stylesUi)(NavBar)