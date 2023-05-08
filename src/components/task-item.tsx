import React, { useCallback } from 'react'
// import { PanGestureHandlerProps } from 'react-native-gesture-handler'
// import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { Pressable } from 'react-native'
import {
	Box,
	HStack,
	Text,
	useColorModeValue,
	Icon,
	Input,
	useToken,
	useTheme, 
	themeTools, 

} from 'native-base'
import AnimatedCheckbox from './animated-checkbox'
import theme from '../theme';
import AnimatedTaskLabel from './animated-task-label'

interface Props {
    isDone: boolean,
    onToggleCheckbox?: () => void,
}

const TaskItem = (props: Props) => {
    const { isDone, onToggleCheckbox } = props
    const highlightColor = themeTools.getColor(
		theme, 
		useColorModeValue('blue.500', 'blue.400')
    )
    const boxStroke = themeTools.getColor(
		theme,
		useColorModeValue('muted.300', 'muted.500')
    )
    const checkmarkColor = themeTools.getColor(
		theme,
		useColorModeValue('white', 'white')
    )
    const activeTextColor = themeTools.getColor(
		theme,
		useColorModeValue('darkText', 'lightText')
    )
    const doneTextColor = themeTools.getColor(
		theme,
		useColorModeValue('muted.400', 'muted.600')
    )

    return (
      	<HStack alignItems="center" w="full" px={4} py={2}
    		bg={useColorModeValue('warmGray.50', 'primary.900')}
      	>
			<Box width={30} height={30} mr={2}>
			<Pressable onPress={onToggleCheckbox}>
				<AnimatedCheckbox highlightColor={highlightColor} 
					checkmarkColor={checkmarkColor}
					boxOutlineColor={boxStroke}
					checked={isDone}
				/>
			</Pressable>
			</Box>
			<AnimatedTaskLabel 
				textColor={activeTextColor}
				inactiveTextColor={doneTextColor}
				strikethrough={isDone}
			>
				Task Item
			</AnimatedTaskLabel>
      </HStack>
    )
}

export default TaskItem