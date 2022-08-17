import React from "react";
import { View } from "react-native";

import {
  LunchPrice,
  QuantityButtonAddRemove,
  QuantityContainer,
  QuantityInput,
  QuantityPrice,
  QuantityTextAddRemove,
} from "./styles";

const QuantityItemInput: React.FC<{
  handleRemove: () => void;
  handleAdd: () => void;
  onChangeText?: ((text: string) => void) | undefined;
  quantityItem: number;
}> = ({ quantityItem, handleRemove, handleAdd, onChangeText }) => {
  return (
    <QuantityContainer>
      <QuantityButtonAddRemove onPress={handleRemove}>
        <View>
          <QuantityTextAddRemove>-</QuantityTextAddRemove>
        </View>
      </QuantityButtonAddRemove>
      <QuantityInput
        keyboardType="numeric"
        value={String(quantityItem)}
        onChangeText={onChangeText}
      />
      <QuantityButtonAddRemove onPress={handleAdd}>
        <View>
          <QuantityTextAddRemove>+</QuantityTextAddRemove>
        </View>
      </QuantityButtonAddRemove>
    </QuantityContainer>
  );
};

export default QuantityItemInput;
