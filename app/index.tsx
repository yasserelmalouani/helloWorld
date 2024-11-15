import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RowItemMolecule } from '@/components/molecules/rowItem/rowItem.molecule';
import { Button, ListRenderItem, View, FlatList } from 'react-native';
import { styles } from '@/app/styles';

interface Task {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
}

interface Result {
  limit: number;
  skip: number;
  todos: Task[];
  total: number;
}

enum Filter {
  ALL = 'ALL',
  COMPLETED = 'COMPLETED',
  NOT_COMPLETED = 'NOT_COMPLETED',
}

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>(Filter.ALL);

  // ** DATA ** //
  const filteredTodos = useMemo(() => {
    if (filter === Filter.ALL) {
      return tasks;
    }
    if (filter === Filter.COMPLETED) {
      return tasks.filter((task) => task.completed);
    }
    return tasks.filter((task) => !task.completed);
  }, [filter, tasks]);

  // ** CALLBACKS  ** //
  const setAll = () => {
    setFilter(Filter.ALL);
  };

  const setCompleted = () => {
    setFilter(Filter.COMPLETED);
  };

  const setNotCompleted = () => {
    setFilter(Filter.NOT_COMPLETED);
  };

  const manageTask = useCallback(
    (id: number) => {
      const taskToEdit = tasks.find((task) => task.id === id);
      if (!taskToEdit) {
        return;
      }
      fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          completed: !taskToEdit.completed,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          setTasks((prevTasks) => {
            return prevTasks.map((task) => {
              if (task.id === result.id) {
                return result;
              }
              return task;
            });
          });
        });
    },
    [tasks]
  );

  const onDeleteTaskPress = useCallback((id: number) => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(
        (result: {
          id: number;
          todo: string;
          completed: boolean;
          userId: number;
          isDeleted: boolean;
          deletedOn: string;
        }) => {
          setTasks((prevState) => {
            return prevState.filter((task) => {
              if (result.isDeleted && result.id === task.id) {
                return;
              }
              return task;
            });
          });
        }
      );
  }, []);

  // ** USE EFFECTS ** //
  useEffect(() => {
    // save data on init screen cause empty deps
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((result: Result) => setTasks(result.todos));
  }, []);

  // ** UI  ** //
  const renderItem: ListRenderItem<Task> = useCallback(
    ({ item }) => {
      return (
        <RowItemMolecule
          title={item.todo}
          isCompleted={item.completed}
          onPress={() => manageTask(item.id)}
          onDelete={() => onDeleteTaskPress(item.id)}
        />
      );
    },
    [manageTask, onDeleteTaskPress]
  );

  return (
    <View style={styles.container}>
      {/* VIEW CONTAINER FOR FILTERS BUTTONS*/}
      <View style={styles.filtersContainer}>
        <View style={[styles.buttonStyle, filter === Filter.ALL ? styles.activeFilter : null]}>
          <Button title={'ALL'} onPress={setAll} />
        </View>
        <View
          style={[styles.buttonStyle, filter === Filter.COMPLETED ? styles.activeFilter : null]}>
          <Button title={'Completed'} onPress={setCompleted} />
        </View>
        <View
          style={[
            styles.buttonStyle,
            filter === Filter.NOT_COMPLETED ? styles.activeFilter : null,
          ]}>
          <Button title={'Not completed'} onPress={setNotCompleted} />
        </View>
      </View>
      <FlatList showsVerticalScrollIndicator={false} data={filteredTodos} renderItem={renderItem} />
    </View>
  );
}
