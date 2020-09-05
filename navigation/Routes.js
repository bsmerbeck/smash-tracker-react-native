import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../components/Firebase/firebase';
import { Appbar } from 'react-native-paper';
import navigationTheme from './navigationTheme';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthUserContext } from './AuthUserProvider';
import Spinner from '../components/Spinner';
import { Provider as PaperProvider } from 'react-native-paper';

export default function Routes() {
  const { user, setUser } = useContext(AuthUserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber

    const unsubscribeAuth = auth.onAuthStateChanged(async authUser => {
      try {
        await (authUser ? setUser(authUser) : setUser(null));
        console.log('authStateChanged')
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);


  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PaperProvider theme={navigationTheme}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>

  );
}
