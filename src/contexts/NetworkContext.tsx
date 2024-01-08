import React, {ReactNode, createContext, useMemo} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

export const initialNetworkState = {
  isConnected: false,
};
export const NetworkContext = createContext(initialNetworkState);

export const NetworkContextProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const nwtwork = useNetInfo();
  const isConnected = useMemo(() => {
    return nwtwork.isConnected ?? false;
  }, [nwtwork.isConnected]);

  const contextValue = useMemo(() => {
    return {
      isConnected,
    };
  }, [isConnected]);

  return (
    <NetworkContext.Provider value={contextValue}>
      {children}
    </NetworkContext.Provider>
  );
};
