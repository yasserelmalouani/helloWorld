import React, { useCallback, useEffect, useState } from 'react';
import { RowItemMolecule } from '@/components/molecules/rowItem/rowItem.molecule';
import { Button, ListRenderItem, TextInput, View, FlatList } from 'react-native';
import { styles } from '@/app/styles';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

enum Filter {
  ALL = 'ALL',
  COMPLETED = 'COMPLETED',
  NOT_COMPLETED = 'NOT_COMPLETED',
}

export default function Index() {
  const [userTask, setUserTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isTextInputFullFilled, setIsTextInputFullFilled] = useState(false);
  const [filter, setFilter] = useState<Filter>(Filter.ALL);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>();

  // ** CALLBACKS  ** //
  const addTask = useCallback(() => {
    if (!userTask.length) {
      return;
    }

    setTasks((prevState) => {
      return [
        ...prevState,
        {
          id: new Date().valueOf().toString(),
          title: userTask,
          isCompleted: false,
        },
      ];
    });
    setUserTask('');
    setIsTextInputFullFilled(true);
  }, [userTask]);

  const manageTask = useCallback((id: string) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: true,
          };
        }
        return task;
      });
    });
  }, []);

  const setAll = () => {
    setFilter(Filter.ALL);
  };

  const setCompleted = () => {
    setFilter(Filter.COMPLETED);
  };

  const setNotCompleted = () => {
    setFilter(Filter.NOT_COMPLETED);
  };

  // ** USE EFFECTS ** //
  useEffect(() => {
    if (filter === Filter.ALL) {
      setFilteredTasks(tasks);
      return;
    }

    if (filter === Filter.COMPLETED) {
      const completedTasks = tasks.filter((task) => {
        return task.isCompleted;
      });
      setFilteredTasks(completedTasks);
      return;
    }

    const notCompletedTasks = tasks.filter((task) => {
      return !task.isCompleted;
    });
    setFilteredTasks(notCompletedTasks);
  }, [filter, tasks]);

  // ** UI  ** //
  const renderItem: ListRenderItem<Task> = useCallback(
    ({ item }) => {
      return (
        <RowItemMolecule
          title={item.title}
          isCompleted={item.isCompleted}
          onPress={() => manageTask(item.id)}
        />
      );
    },
    [manageTask]
  );
  console.warn('selected filter => ', filter);
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={isTextInputFullFilled ? styles.textInput : styles.emptyTextInput}
          value={userTask}
          onChangeText={setUserTask}
        />
        <Button title={'Add'} onPress={addTask} />
      </View>

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
      <FlatList data={filteredTasks} renderItem={renderItem} />
    </View>
  );
}
