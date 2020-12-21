import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import * as auth from '../services/auth';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('user');
      const storagedToken = await AsyncStorage.getItem('token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }

      await new Promise(resolve =>{setTimeout(resolve, 2000)});

      setLoading(false);
    }
    console.log('passando pelo useEffect');
    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    await AsyncStorage.setItem('user', JSON.stringify(response.user));
    await AsyncStorage.setItem('token', response.token);
  }

  async function signOut() {
    console.log('chegou no signOut')
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');

    setUser(null);
  }
  
  return (
    <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}