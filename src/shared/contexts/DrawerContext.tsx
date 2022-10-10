import React, { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean,
    toggleDrawerOpen: () => void;
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
    drawerOptions: IDrawerOption[]
}

const DrawerContext = createContext({} as IDrawerContextData);

interface IDrawerProviderProps {
    children: React.ReactNode
}


export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

interface IDrawerOption {
    path: string
    label: string
    icon: string
}


export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newdrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newdrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions, drawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
};