import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box, blocks, CloseButton, AssetButton, gui, Meter} from 'scratch-gui';



import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Button>Click Me!</Button>
      {/* <blocks></blocks> */}
      {/* <CloseButton></CloseButton> */}
      <AssetButton></AssetButton>
      {/* <Meter></Meter> */}
      {/* <Box></Box> */}
      {/* <gui></gui> */}
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
