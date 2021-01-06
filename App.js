import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  const setGoalInputHandler = (TextInputdata) => {
    // if your object contains key property FlatList take it by default as unique key
    // if your your object not contains key property but contain id property FlatList should take keyExtractor to add uniqy key
    setCourseGoals(currentGoals => [...courseGoals,
    //{ id: Math.random().toString(), value: enteredGoal }
    { id: Math.random().toString(), value: TextInputdata }
     ]);
    //setEnteredGoal('') // clear text box 
  };
 
  // const removeGoalHandler = goalId =>{
  //   console.log("Deleted",goalId);
  //   setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));
  // }
  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={setGoalInputHandler}/>
      <FlatList 
      keyExtractor = {(item , index) => item.id}
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
