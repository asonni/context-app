import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';

import useStyles from './styles/NavBarStyles';
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';

const content = {
  english: {
    search: 'Search',
    flag: '🇬🇧'
  },
  french: {
    search: 'Chercher',
    flag: '🇫🇷'
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸'
  }
};

const Navbar = () => {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  const { isDarkMode, changeThemeMode } = useContext(ThemeContext);
  const { search, flag } = content[language];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            Dark
          </Typography>
          <Switch checked={isDarkMode} onChange={changeThemeMode} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
