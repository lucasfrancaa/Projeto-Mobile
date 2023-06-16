import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login }  from "./screens/Login";
import { Cadastro } from "./screens/Cadastro";
import { Sobre } from "./screens/Sobre";
import { TerapiaLista } from "./screens/TerapiaLista";
import { SobreFabio } from "./screens/SobreFabio";
import { SobreMaria } from "./screens/SobreMaria";
import { SobreJulia } from "./screens/SobreJulia";
import { SobreMauricio } from "./screens/SobreMauricio";
import { UserProvider } from "./contexts/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ title: "Cadastro" }}
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Sobre" }}
          />

          <Stack.Screen
            name="TerapiaLista"
            component={TerapiaLista}
            options={{ title: "Lista de Terapeutas" }}
          />

          <Stack.Screen
            name="SobreFabio"
            component={SobreFabio}
            options={{ title: "Fabio" }}
          />

          <Stack.Screen
            name="SobreMaria"
            component={SobreMaria}
            options={{ title: "Maria" }}
          />      

          <Stack.Screen
            name="SobreJulia"
            component={SobreJulia}
            options={{ title: "Julia" }}
          />

          <Stack.Screen
            name="SobreMauricio"
            component={SobreMauricio}
            options={{ title: "Mauricio" }}
          />        
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}