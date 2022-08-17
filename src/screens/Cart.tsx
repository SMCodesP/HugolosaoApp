import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "styled-components/native";
import CardOrdered from "../components/CardOrdered";
import { useCart } from "../contexts/CartContext";

import { Title } from "../styles/global";

import {
  BodyCart,
  ButtonPurchase,
  ClearButton,
  ClearButtonText,
  Container,
  ContainerHeader,
  ContainerIcon,
  ContainerTotalPrice,
  FooterCart,
  TextPurchase,
  TextTotalPrice,
} from "../styles/pages/cart";

const Cart: React.FC = () => {
  const theme = useTheme();
  const { itemsInCart } = useCart();

  return (
    <Container>
      <BodyCart>
        <ContainerHeader>
          <Title>Carrinho</Title>
          <ClearButton rippleColor={theme.red}>
            <ClearButtonText>Limpar</ClearButtonText>
          </ClearButton>
        </ContainerHeader>
        {/* <SubTitle>Nenhum pedido a ser concluído.</SubTitle> */}
        <FlatList
          data={itemsInCart}
          renderItem={CardOrdered}
          keyExtractor={(item) => item.id}
        />
      </BodyCart>

      <FooterCart
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          elevation: 10,
        }}
      >
        <ContainerTotalPrice>
          <TextTotalPrice>Total com a entrega</TextTotalPrice>
          <ContainerIcon>
            <TextTotalPrice>R$ 40,00</TextTotalPrice>
            <Feather name="chevron-down" color={theme.foreground} size={20} />
          </ContainerIcon>
        </ContainerTotalPrice>
        <ButtonPurchase>
          <TextPurchase>Finalizar compra</TextPurchase>
        </ButtonPurchase>
      </FooterCart>
    </Container>
  );
};

export default Cart;
