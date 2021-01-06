
import React from 'react';
import { Text  , StyleSheet ,View , TouchableOpacity } from 'react-native';

const GoalItem = props => {
return(
  <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.listItems}>
    <Text>{props.title}</Text>
  </View>
  </TouchableOpacity>
)
}

export default GoalItem

const styles = StyleSheet.create({
    listItems: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
  });
