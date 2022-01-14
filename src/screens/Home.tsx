import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import CardHistoryItem from "../components/CardHistoryItem";
import CardMostSeller from "../components/CardMostSeller";
import { api } from "../services/api";

import {
  ButtonLunch,
  CardLunchUntried,
  ContainerHead,
  ContainerHome,
  ContainerShadow,
  HomeSubTitle,
  HomeTitle,
  IconLunchUntried,
  InputIconSearch,
  InputItem,
  TextLunchUntried,
  TitleItem,
  UserAvatar,
} from "../styles/home";

const Home = () => {
  const [search, setSearch] = useState("");
  const [inputSearchIsFocus, setInputSearchIsFocus] = useState(false);
  const [history, setHistory] = useState<THistoryItem[]>([]);
  const [mostSellers, setMostSellers] = useState<TMostSeller[]>([]);

  useEffect(() => {
    (async () => {
      const { data: data_history } = await api.get<THistoryItem[]>(
        "/history?_sort=assessment&_order=desc"
      );
      setHistory(data_history);
      const { data: data_most_seller } = await api.get<TMostSeller[]>(
        "/most_seller?_sort=assessment&_order=desc"
      );
      setMostSellers(data_most_seller);
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ContainerHome>
        <ContainerHead>
          <View>
            <HomeTitle>Olá SMCodes,</HomeTitle>
            <HomeSubTitle>O que você quer comer hoje?</HomeSubTitle>
          </View>
          <UserAvatar source={require("../../assets/avatar_three.jpg")} />
        </ContainerHead>
      </ContainerHome>

      <ContainerShadow>
        <InputIconSearch isFocus={inputSearchIsFocus} size={17} name="search" />
        <InputItem
          placeholder="Procure por um lanche"
          underlineColorAndroid="transparent"
          onFocus={() => setInputSearchIsFocus(true)}
          onBlur={() => !search && setInputSearchIsFocus(false)}
          onChangeText={setSearch}
          value={search}
        />
      </ContainerShadow>

      <CardLunchUntried>
        <ButtonLunch>
          <IconLunchUntried size={42} name="lunch-dining" />
          <TextLunchUntried>
            Você tem 13 variedades que ainda não experimentou.
          </TextLunchUntried>
          <Feather size={36} name="chevron-right" />
        </ButtonLunch>
      </CardLunchUntried>

      <TitleItem>Seus pedidos</TitleItem>
      <FlatList
        data={history}
        renderItem={CardHistoryItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 8,
          marginBottom: 10,
        }}
      />

      <TitleItem>Mais vendidos</TitleItem>
      <FlatList
        data={mostSellers}
        renderItem={CardMostSeller}
        keyExtractor={(item) => item.id}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        style={{
          marginBottom: 85,
        }}
      />
    </ScrollView>
  );
};

export default Home;
