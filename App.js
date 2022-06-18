import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';

const FirstPage = ({navigation}) => {
  const [yourText, setUserName] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
         Введите какой-нибудь текст
        </Text>

        <TextInput
          value={yourText}
          onChangeText={(yourText) => setUserName(yourText)}
          placeholder={'Ваш текст'}
          style={styles.inputStyle}
        />
        <Button
          title="Вывод текста"

          onPress={() =>{
            if (yourText == ""){
              Alert.alert("введите текст!")
            } else {
                Alert.alert(yourText)
            }
            }
                
               
            }      
          
        />
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});