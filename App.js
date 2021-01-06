import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const setGoalInputHandler = (TextInputdata) => {
    console.log("tesrt");
    // if your object contains key property FlatList take it by default as unique key
    // if your your object not contains key property but contain id property FlatList should take keyExtractor to add uniqy key
    setCourseGoals(currentGoals => [...courseGoals,
    //{ id: Math.random().toString(), value: enteredGoal }
    { id: Math.random().toString(), value: TextInputdata }
    ]);
    //setEnteredGoal('') // clear text box 
    setIsAddModal(false);
  };

  // const removeGoalHandler = goalId =>{
  //   console.log("Deleted",goalId);
  //   setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));
  // }
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () =>{
    setIsAddModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() =>setIsAddModal(true)} />
      <GoalInput isVisibleModal={isAddModal} onAddGoal={setGoalInputHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
  },
  input: {
    width: '80%', borderColor: 'black', borderWidth: 1, padding: 5
  }
});
