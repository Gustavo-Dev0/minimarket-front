import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { MenuLateral } from './shared/components';
import SideAndTopMenu from './shared/components/menu-lateral/SideAndTopMenu';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';

function App() {

  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <SideAndTopMenu>
            <AppRoutes />
          </SideAndTopMenu>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  )
}

export default App
