import React, { useEffect, useState } from "react";
import { FlatList, View, ScrollView } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "styled-components/native";

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
} from "../styles/pages/home";

const Home = () => {
  const [search, setSearch] = useState("");
  const [inputSearchIsFocus, setInputSearchIsFocus] = useState(false);
  const [history, setHistory] = useState<THistoryItem[]>([]);
  const [mostSellers, setMostSellers] = useState<THistoryItem[]>([]);

  const theme = useTheme();

  useEffect(() => {
    (async () => {
      const { data: data_history } = await api.get<THistoryItem[]>(
        "/history?_sort=assessment&_order=desc"
      );
      setHistory(data_history);
      setMostSellers(data_history.sort((a, b) => b.sold - a.sold));
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
          <Feather name="more-vertical" size={24} color={theme.foreground} />
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
          <IconLunchUntried
            size={42}
            name="lunch-dining"
            color={theme.foreground}
          />
          <TextLunchUntried>
            Você tem 13 variedades que ainda não experimentou.
          </TextLunchUntried>
          <Feather size={36} name="chevron-right" color={theme.foreground} />
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
      <View
        style={{
          marginBottom: 85,
        }}
      >
        {mostSellers.map((mostSeller, index) => (
          <CardMostSeller key={mostSeller.id} item={mostSeller} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
