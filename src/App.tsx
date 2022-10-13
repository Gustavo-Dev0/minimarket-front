import { BrowserRouter } from 'react-router-dom';
import { Login } from './shared/components/login';
import AppRoutes from './routes';
import { MenuLateral } from './shared/components';
import SideAndTopMenu from './shared/components/menu-lateral/SideAndTopMenu';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { AuthProvider } from './shared/contexts/AuthContext';

function App() {

    return (
        <AuthProvider>
            <AppThemeProvider>
                <Login>
                    <DrawerProvider>
                        <BrowserRouter>
                            <SideAndTopMenu>
                                <AppRoutes />
                            </SideAndTopMenu>
                        </BrowserRouter>
                    </DrawerProvider>
                </Login>
            </AppThemeProvider>
        </AuthProvider>
    )
}

export default App
