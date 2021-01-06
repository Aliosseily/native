
import React, { useState } from 'react';
import {  StyleSheet, View, TextInput, Button, Modal } from 'react-native';


const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)

  }
  const addGoalHandler = ()=>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal visible={props.isVisibleModal} animationType="fade">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Course Golal"
        style={styles.input}
        value={enteredGoal}
        onChangeText={goalInputHandler} />
      {/* <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} /> */}
      <View  style={styles.buttonsContainer}>
      <View  style={styles.button}>
      <Button title="Add" onPress={addGoalHandler} />
    </View>
    <View  style={styles.button}>
      <Button title="Cancel" color="red" onPress={props.onCancel} />
      </View>
      </View>
    </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: 'row', 
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonsContainer: {
     flexDirection: 'row', 
    //flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width:'80%'
    
  },
  input: {
    width: '80%', borderColor: 'black', borderWidth: 1, padding: 5,marginBottom:10
  },
  button:{
    width:'40%'
  }
});