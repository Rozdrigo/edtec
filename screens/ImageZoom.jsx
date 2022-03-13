import React from "react";
import { WebView } from "react-native-webview";

export default function ImageZoom({ route }) {
  const { image } = route.params;
  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        html: `
                <style>
                    body {
                        box-sizing: border-box;
                        padding: 0;
                        margin: 0;
                    }
                </style>
                <div style="height: 100%; width: 100%;display: flex; justify-content: center; align-items: center">
                    <img width="100%" src="${image}"/>
                </div>
                `,
      }}
    />
  );
}
