import React from 'react';
import {Provider} from 'react-redux';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {store} from 'root/store/store';
import {Navigation} from 'root/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <KeyboardProvider>
        <Navigation />
      </KeyboardProvider>
    </Provider>
  );
}

export default App;
