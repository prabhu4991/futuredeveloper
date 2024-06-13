// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import TodoItem from '../components/TodoItem';
import moment from 'moment';

const HomeScreen = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch todos from AsyncStorage or API
        // For demo purposes, using hardcoded initial todos
        setTodos([
            { id: '1', title: 'Complete project proposal', completed: false, createdAt: moment().toISOString() },
            { id: '2', title: 'Prepare for client meeting', completed: false, createdAt: moment().toISOString() },
            { id: '3', title: 'Review design mockups', completed: true, createdAt: moment().toISOString() },
            { id: '4', title: 'Send progress report', completed: false, createdAt: moment().toISOString() },
        ]);
    }, []);

    const handleToggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        // Update AsyncStorage or API with updated todos
    };

    const handleDeleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
        // Update AsyncStorage or API with filtered todos
    };

    return (
        <View style={styles.container}>
            {todos.length > 0 ? (
                <FlatList
                    data={todos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TodoItem
                            todo={item}
                            onToggleTodo={handleToggleTodo}
                            onDeleteTodo={handleDeleteTodo}
                        />
                    )}
                />
            ) : (
                <Text style={styles.noTodosText}>No todos yet.</Text>
            )}

            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => navigation.navigate('AddTodo')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 16,
    },
    noTodosText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default HomeScreen;
