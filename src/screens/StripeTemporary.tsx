import React, { useRef } from "react";

// import { Container } from './styles';
import { WebView } from "react-native-webview";

const StripeTemporary: React.FC = () => {
  const webViewRef = useRef<WebView>(null);

  return (
    <WebView
      ref={webViewRef}
      source={{
        uri: "https://buy.stripe.com/test_cN2dSlgIm6HoeaYbIJ",
      }}
    />
  );
};

export default StripeTemporary;
