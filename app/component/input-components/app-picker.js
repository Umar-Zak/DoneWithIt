import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import style from "../../config/styles";
import AppText from "../app-text";
import Screen from "../screen";
import PickerItem from "../picker-item";

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  onSelectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              color={colors.medium}
              size={25}
              name={icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              color="#6e6969"
              size={25}
              name="chevron-down"
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button onPress={() => setModalVisible(false)} title="Close" />
          <View>
            <FlatList
              numColumns={numberOfColumns}
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <PickerItemComponent
                  onPress={() => {
                    setModalVisible(false);
                    onSelectedItem(item);
                  }}
                  item={item}
                />
              )}
            />
          </View>
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    padding: 20,
    marginVertical: 10,
    borderRadius: 17,
    backgroundColor: colors.light,
  },
  icon: {
    marginRight: 15,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
