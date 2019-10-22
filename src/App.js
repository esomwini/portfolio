import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Portfolio from './components/Portfolio';
import './app.css';
// import 'material-icons/iconfont/material-icons.scss';
//import MaterialIcon, {colorPalette} from 'material-icons-react';

const App = () => {
    useEffect(() => {
      console.log('useEffect- mounting autoInit');
      M.AutoInit();
    }, [])
 
    return (
      <>
      <Portfolio />
      </>
    );
  }
  

export default App;
