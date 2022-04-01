import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Touchable,
  TouchableOpacity,
} from "react-native";

export function Bio({ navigation }) {
  console.log("This is Bio function?");

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}> Hello Bio page</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonClose}> Close me please</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export function Programming({ navigation }) {
  console.log("This is programming function?");
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}> Hello Programming page</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonClose}> Close me please</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export function Project({ navigation }) {
  console.log("Is this working?");
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}> Hello Project page</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonClose}> Close me please</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export function Button4({ navigation }) {
  console.log("Is this working?");
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}> Hello Button4 page</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonClose}> Close me please</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export function Button5({ navigation }) {
  console.log("Is this working?");
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}> Hello Button5 page</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonClose}> Close me please</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export function Button6({ navigation }) {
  console.log("Is this working?");
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}> Hello Button6 page</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonClose}> Close me please</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
