
import React, { useState } from 'react';
import { Text  , StyleSheet ,View ,TextInput,Button } from 'react-native';


const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');

const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)

  }
    return(
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler} />
        {/* <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} /> */}
        <Button title="Add" onPress={props.onAddGoal.bind(this,enteredGoal)} />
      </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
      },
      input: {
        width: '80%', borderColor: 'black', borderWidth: 1, padding: 5
      }
  });