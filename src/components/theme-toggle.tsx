import React from 'react';
import { Text, HStack, Switch, useColorMode, useColorModeValue } from 'native-base';

export default function ThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack space={2} alignItems="center" justifyContent="center">
            <Text>Light Mode</Text>
            <Switch
                isChecked={colorMode === 'dark'}
                onToggle={toggleColorMode}
            />
            <Text>Dark Mode</Text>
        </HStack>
    );
}
