import { AuthProvider } from './src/contexts/auth.js';
import Routes from './src/routes/routes.js';
import { NavigationContainer } from '@react-navigation/native';

function App() {  
  return (
    <NavigationContainer>
      <AuthProvider>
         <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;
