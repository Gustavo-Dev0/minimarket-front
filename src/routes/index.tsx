import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Page2 } from '../pages';
import { Products } from '../pages/products';
import { Providers } from '../pages/providers';
import { Sales } from '../pages/sales';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';


export default function AppRoutes() {

    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();


    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'point_of_sale',
                label: 'Punto de venta',
                path: '/sales'
            },
            {
                icon: 'diversity_3',
                label: 'Mis proveedores',
                path: '/providers'
            },
            {
                icon: 'inventory_2',
                label: 'Ver productos',
                path: '/products'
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path='/index' element={<Dashboard /> } />

            <Route path='/sales' element={<Sales />} />
            <Route path='/providers' element={<Providers />} />
            <Route path='/products' element={<Products />} />

            {/* <Route path='*' element={<Navigate to="/index" />} /> */}
        </Routes>
    );
}
