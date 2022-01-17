import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  ButtonSignUp,
  ButtonSubmit,
  ContainerForm,
  ContainerSession,
  ContainerShadow,
  DontHaveAccount,
  FooterSection,
  InputIconEmail,
  InputIconPassword,
  InputItem,
  SubTitle,
  TextButtonSubmit,
  Title,
} from "../styles";

const Login: React.FC = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [inputEmailIsFocus, setInputEmailIsFocus] = useState(false);
  const [inputPasswordIsFocus, setInputPasswordIsFocus] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ContainerSession behavior="position">
        <ContainerForm>
          <Title>Entre</Title>
          <SubTitle>Por favor digite suas credenciais</SubTitle>

          <ContainerShadow>
            <InputIconEmail
              isFocus={inputEmailIsFocus}
              size={22}
              name="user-o"
            />
            <InputItem
              placeholder="Digite seu e-mail"
              underlineColorAndroid="transparent"
              onFocus={() => setInputEmailIsFocus(true)}
              onBlur={() => !userEmail && setInputEmailIsFocus(false)}
              onChangeText={setUserEmail}
              value={userEmail}
            />
          </ContainerShadow>
          <ContainerShadow>
            <InputIconPassword
              isFocus={inputPasswordIsFocus}
              color={"#00000066"}
              size={22}
              name="lock"
            />
            <InputItem
              placeholder="Digite sua senha"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              onFocus={() => setInputPasswordIsFocus(true)}
              onBlur={() => !userPassword && setInputPasswordIsFocus(false)}
              onChangeText={setUserPassword}
              value={userPassword}
            />
          </ContainerShadow>

          <ButtonSubmit onPress={() => console.log("click")}>
            <View accessible>
              <TextButtonSubmit>Entrar</TextButtonSubmit>
            </View>
          </ButtonSubmit>
        </ContainerForm>

        <FooterSection>
          <DontHaveAccount>Não possuí uma conta?</DontHaveAccount>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => (navigation as any).navigate("Register")}
          >
            <ButtonSignUp>Cadastrar</ButtonSignUp>
          </TouchableOpacity>
        </FooterSection>
      </ContainerSession>
    </ScrollView>
  );
};

export default Login;
