import React, { useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { IHandles } from "react-native-modalize/lib/options";

import { useTheme } from "styled-components/native";
// import { Container } from './styles';
import WebView from "react-native-webview";

const StripePayment: React.FC<{
  modalizeRef: React.RefObject<IHandles>;
}> = ({ modalizeRef }) => {
  const theme = useTheme();

  const webViewRef = useRef<WebView>(null);
  const [height, setHeight] = useState(500);

  const handleLayout = ({ layout }) => {
    setHeight(layout.height);
  };

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={500}
      panGestureEnabled={true}
      modalStyle={{
        backgroundColor: theme.background,
      }}
      onLayout={handleLayout}
    >
      <WebView
        ref={webViewRef}
        source={{
          uri: "https://buy.stripe.com/test_cN2dSlgIm6HoeaYbIJ",
        }}
        style={{ height }}
      />
    </Modalize>
  );
};

export default StripePayment;
