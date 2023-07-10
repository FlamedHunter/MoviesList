import { StatusBar } from 'expo-status-bar';
import Movie from './components/movie/Movie';
import { NavigationContainer } from "@react-navigation/native";
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favourites from './components/favourites/Favourites';
import { Provider } from 'react-redux';
import store from './app/store';
import { Search } from './components/search/Search';
import { useEffect } from 'react';
import { loadLikedMovies } from './components/favourites/favouritesSlice';


const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(()=>{
      store.dispatch(loadLikedMovies());
  })
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
      
  );
}


const AppContainer = ()=>{
  
    return (
      <NavigationContainer>
        <StatusBar style='light' translucent={true} backgroundColor='rgba(0,0,0,0.15)'/>
        <Stack.Navigator>
          <Stack.Screen name = "Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
          <Stack.Screen name="Movie" component={Movie} options={({ route }) => ({ title: route.params.title, headerShown: false })}/>
          <Stack.Screen name="Favourites" component={Favourites} options={{ headerShown: false }}/>
        </Stack.Navigator>
        <Navbar/>
      </NavigationContainer>
    );
}
