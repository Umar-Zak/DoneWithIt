import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./image-input";
const ImageList = ({ imageUris, onAddImage, onRemoveImage }) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => {
          scrollView.current.scrollToEnd();
        }}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image} key={uri}>
              <ImageInput
                imageUri={uri}
                onImageChange={(uri) => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onImageChange={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageList;
