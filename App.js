import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login }  from "./screens/Login";
import { Cadastro } from "./screens/Cadastro";
import { Sobre } from "./screens/Sobre";
import { TerapiaLista } from "./screens/TerapiaLista";
import { SobreFabio } from "./screens/SobreFabio";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
            options={{ title: "TerapiaLista" }}
          />

          <Stack.Screen
            name="SobreFabio"
            component={SobreFabio}
            options={{ title: "SobreFabio" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
