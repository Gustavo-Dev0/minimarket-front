import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Page2 } from '../pages';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';


export default function AppRoutes() {

    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();


    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                label: 'Home',
                path: '/index'
            },
            {
                icon: 'add',
                label: 'Theme',
                path: '/index2'
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path='/index' element={<Dashboard /> } />

            <Route path='/index2' element={<Page2 />} />

            {/* <Route path='*' element={<Navigate to="/index" />} /> */}
        </Routes>
    );
}
