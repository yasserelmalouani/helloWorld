import React, { useCallback, useState } from 'react';
import { RowItemMolecule } from '@/components/molecules/rowItem/rowItem.molecule';
import { Button, FlatList, ListRenderItem, TextInput, View } from 'react-native';
import { styles } from '@/app/styles';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function Index() {
  const [userTask, setUserTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isTextInputFullFilled, setIsTextInputFullFilled] = useState(false);

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
      <FlatList data={tasks} renderItem={renderItem} />
    </View>
  );
}
