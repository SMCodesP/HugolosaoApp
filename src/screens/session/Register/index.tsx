import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";

import { SpringScrollView } from "react-native-spring-scrollview";
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
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  const [inputEmailIsFocus, setInputEmailIsFocus] = useState(false);
  const [inputPasswordIsFocus, setInputPasswordIsFocus] = useState(false);
  const [confirmInputPasswordIsFocus, setConfirmInputPasswordIsFocus] =
    useState(false);

  const navigation = useNavigation();

  return (
    <SpringScrollView showsVerticalScrollIndicator={false}>
      <ContainerSession behavior="position">
        <ContainerForm>
          <Title>Registre-se</Title>
          <SubTitle>Por favor crie suas credenciais</SubTitle>

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
          <ContainerShadow>
            <InputIconPassword
              isFocus={confirmInputPasswordIsFocus}
              color={"#00000066"}
              size={22}
              name="lock"
            />
            <InputItem
              placeholder="Confirme sua senha"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              onFocus={() => setConfirmInputPasswordIsFocus(true)}
              onBlur={() =>
                !userConfirmPassword && setConfirmInputPasswordIsFocus(false)
              }
              onChangeText={setUserConfirmPassword}
              value={userConfirmPassword}
            />
          </ContainerShadow>

          <ButtonSubmit onPress={() => console.log("click")}>
            <View accessible>
              <TextButtonSubmit>Cadastrar</TextButtonSubmit>
            </View>
          </ButtonSubmit>
        </ContainerForm>

        <FooterSection>
          <DontHaveAccount>Já possuí uma conta?</DontHaveAccount>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => (navigation as any).navigate("Login")}
          >
            <ButtonSignUp>Entrar</ButtonSignUp>
          </TouchableOpacity>
        </FooterSection>
      </ContainerSession>
    </SpringScrollView>
  );
};

export default Login;
