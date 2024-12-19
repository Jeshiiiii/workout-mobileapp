import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';

const Goal = () => {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [removedGoal, setRemovedGoal] = useState(null); // State to store temporarily removed goal

  const addGoalHandler = () => {
    if (goal.trim().length === 0) {
      return;
    }
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal }
    ]);
    setGoal('');
  };

  const removeGoalHandler = goalId => {
    const removed = goals.find(goal => goal.id === goalId); // Find the removed goal
    setRemovedGoal(removed); // Store the removed goal temporarily
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const undoRemoveHandler = () => {
    if (removedGoal) {
      setGoals(currentGoals => [...currentGoals, removedGoal]); // Add the removed goal back to the list
      setRemovedGoal(null); // Clear the removed goal
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemovedGoal(null); // Clear the removed goal after 3 seconds
    }, 3000);
    
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [removedGoal]);

  const finishGoalHandler = goalId => {
    // Logic for finishing the goal
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const renderListItem = ({ item }) => (
    <TouchableOpacity onPress={() => finishGoalHandler(item.id)}>
      <Animated.View style={[styles.listItem, { backgroundColor: item.finished ? '#00ff00' : '#333333' }]}>
        <Text style={styles.goalText}>{item.value}</Text>
        <Button
          title="Remove"
          onPress={() => removeGoalHandler(item.id)}
          color="#ff0000"
        />
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your weekly goal"
          style={styles.input}
          onChangeText={text => setGoal(text)}
          value={goal}
          placeholderTextColor="#ffffff"
        />
        <Button title="Add" onPress={addGoalHandler} color="#ff0000" />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={renderListItem}
      />
      {removedGoal && (
        <View style={styles.undoContainer}>
          <Text style={styles.undoText}>{removedGoal.value} removed</Text>
          <Button title="Undo" onPress={undoRemoveHandler} color="#ff0000" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ff0000',
    borderWidth: 1,
    borderRadius: 5,
    color: '#ffffff',
    padding: 10,
    marginRight: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ff0000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  goalText: {
    flex: 1,
    color: '#ffffff',
  },
  undoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  undoText: {
    color: '#ffffff',
  },
});

export default Goal;
