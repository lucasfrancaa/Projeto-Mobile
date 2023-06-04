import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login }  from "./screens/Login";
import { Cadastro } from "./screens/Cadastro";
import { Sobre } from "./screens/Sobre";
import { Diagnostico } from "./screens/Diagnostico";
import { Upload } from "./screens/Upload";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sobre">
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
            name="Upload"
            component={Upload}
            options={{ title: "Upload" }}
          />
          <Stack.Screen
            name="Diagnostico"
            component={Diagnostico}
            options={{ title: "Diagnóstico" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
