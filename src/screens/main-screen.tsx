import React, { useCallback, useState } from 'react';
import { Pressable } from 'react-native';
import {
    Text, Box, Center, VStack, useColorModeValue 
} from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import TaskItem from '../components/task-item';

export default function MainScreen() {
    const [checked, setChecked] = useState(false);
    const handlePressCheckbox = useCallback(() => {
        setChecked(prev => !prev);
    }, [checked]);
        
    return (
        <Center 
            _dark={{bg: 'blueGray.900'}} 
            _light={{bg: 'blueGray.50'}} 
            px={4} 
            flex={1}
        >
            <VStack space={5} alignItems="center" w="full">
                <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox}/>
                <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
                    <Text>Main Screen</Text>
                </Box>
                <ThemeToggle />
            </VStack>
        </Center>
    );
}