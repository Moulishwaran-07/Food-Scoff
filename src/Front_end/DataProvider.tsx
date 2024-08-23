import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  image: string;
}

interface DataContextType {
  data: Product[];
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
  Count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Product[]>([]);
  const [Count, setCount] = useState<number>(0);

  return (
    <DataContext.Provider value={{ data, setData, Count, setCount }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

export { DataProvider, useDataContext };
