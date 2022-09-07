import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { useTheme } from "styled-components/native";
import CardOptionMenu from "../components/CardOptionMenu";

import { menuOptions } from "../utils/db.json";

import { Title } from "../styles/global";
import { InputIconSearch, InputItem } from "../styles/pages/home";
import {
  ContainerMenu,
  ContainerOptions,
  ContainerShadowSearchInput,
} from "../styles/pages/menu";

const Menu: React.FC = () => {
  const [inputSearchIsFocus, setInputSearchIsFocus] = useState(false);
  const [options, setOptions] = useState<TMenuOption[]>(menuOptions);
  const [search, setSearch] = useState("");

  return (
    <ContainerMenu>
      <Title>Cardápio</Title>

      <ContainerShadowSearchInput>
        <InputIconSearch isFocus={inputSearchIsFocus} size={17} name="search" />
        <InputItem
          placeholder="Procure por um lanche no cardápio"
          underlineColorAndroid="transparent"
          onFocus={() => setInputSearchIsFocus(true)}
          onBlur={() => !search && setInputSearchIsFocus(false)}
          onChangeText={setSearch}
          value={search}
        />
      </ContainerShadowSearchInput>

      <ContainerOptions
        data={options}
        renderItem={CardOptionMenu}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </ContainerMenu>
  );
};

export default Menu;
