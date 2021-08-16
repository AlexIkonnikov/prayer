/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { AuthRoute } from './src/routes/AuthRoute';
import { StackRoute } from './src/routes/StackRoute';
import { useAppSelector } from './src/store/hooks';

const App = () => {
  const token = useAppSelector((state) => state.user.user.token);
  return token ? <StackRoute/> : <AuthRoute/>;
};

export default App;
