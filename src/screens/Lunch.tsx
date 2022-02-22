import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  BackButton,
  ButtonAddToCart,
  ButtonAddToCartText,
  CardIngredient,
  Container,
  ContainerAccessibleButtonAddToCart,
  ContainerButtonShadow,
  ContainerFooterShadow,
  ContainerImageShadow,
  ContainerInformation,
  ContainerListInformation,
  Footer,
  Header,
  ImageLunch,
  LunchPrice,
  LunchTitle,
  QuantityButtonAddRemove,
  QuantityContainer,
  QuantityInput,
  QuantityPrice,
  QuantityTextAddRemove,
  TextInformation,
  TextIngredient,
} from "../styles/lunch";
import { snacks } from "../utils/snacks";
import { useTheme } from "styled-components/native";

const Lunch: React.FC<{
  route: {
    params: {
      item: THistoryItem;
    };
  };
}> = ({
  route: {
    params: { item },
  },
}) => {
  const [quantityItem, setQuantityItem] = useState(1);
  const [ingredients, setIngredients] = useState(item.ingredients || []);
  const navigation = useNavigation();

  const theme = useTheme();

  const handleAddItem = () =>
    setQuantityItem((state) => Math.max(1, state + 1));

  const handleRemoveItem = () =>
    setQuantityItem((state) => Math.max(1, state - 1));

  const handleRemoveIngredient = (ingredientIndex: number) =>
    setIngredients((state) =>
      state.filter((_, index) => ingredientIndex !== index)
    );

  return (
    <Container behavior="padding">
      <Header>
        <ContainerButtonShadow>
          <BackButton onPress={navigation.goBack}>
            <Feather size={28} name="chevron-left" />
          </BackButton>
        </ContainerButtonShadow>
        <ContainerImageShadow>
          <ImageLunch
            imageSize={item.image_size}
            source={{ uri: item.image }}
          />
        </ContainerImageShadow>
      </Header>
      <ContainerFooterShadow>
        <Footer showsVerticalScrollIndicator={false}>
          <LunchTitle>{item.name}</LunchTitle>
          <QuantityPrice>
            <LunchPrice>
              R$ {(item.price * quantityItem).toFixed(2)}
              {quantityItem > 1 && ` x${quantityItem}`}
            </LunchPrice>
            <QuantityContainer>
              <QuantityButtonAddRemove onPress={handleRemoveItem}>
                <View>
                  <QuantityTextAddRemove>-</QuantityTextAddRemove>
                </View>
              </QuantityButtonAddRemove>
              <QuantityInput
                keyboardType="numeric"
                value={String(quantityItem).padStart(2, "0")}
              />
              <QuantityButtonAddRemove onPress={handleAddItem}>
                <View>
                  <QuantityTextAddRemove>+</QuantityTextAddRemove>
                </View>
              </QuantityButtonAddRemove>
            </QuantityContainer>
          </QuantityPrice>
          <ContainerListInformation>
            <ContainerInformation>
              <AntDesign size={13} name="star" color={theme.foreground} />
              <TextInformation>4.7</TextInformation>
            </ContainerInformation>
            {/* <ContainerInformation>
              <FontAwesome5 size={13} name="stopwatch" />
              <TextInformation>10 min</TextInformation>
            </ContainerInformation>
            <ContainerInformation>
              <MaterialCommunityIcons size={17} name="fire" />
              <TextInformation>250 kcal</TextInformation>
            </ContainerInformation> */}
          </ContainerListInformation>
          <ButtonAddToCart>
            <ContainerAccessibleButtonAddToCart accessible>
              <MaterialCommunityIcons
                size={17}
                name="cart"
                color={theme.foreground}
              />
              <ButtonAddToCartText>Adicionar ao carrinho</ButtonAddToCartText>
            </ContainerAccessibleButtonAddToCart>
          </ButtonAddToCart>
          <View
            style={{
              marginTop: 25,
              marginBottom: 15,
            }}
          >
            {ingredients.map((ingredient, index) => (
              <CardIngredient key={`${ingredient.name}-${index}`}>
                <TextIngredient>{ingredient.name}</TextIngredient>
                <TouchableOpacity
                  disabled={ingredient.blocked}
                  onPress={() => handleRemoveIngredient(index)}
                >
                  <MaterialCommunityIcons
                    color={ingredient.blocked ? theme.comment : theme.red}
                    size={18}
                    name="trash-can"
                  />
                </TouchableOpacity>
              </CardIngredient>
            ))}
          </View>
        </Footer>
      </ContainerFooterShadow>
    </Container>
  );
};

export default Lunch;
