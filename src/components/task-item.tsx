import React, { useCallback } from 'react'
// import { PanGestureHandlerProps } from 'react-native-gesture-handler'
// import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import {
  Pressable,
  Box,
  HStack,
  useColorModeValue,
  Icon,
  Input,
  useToken
} from 'native-base'
import AnimatedCheckbox from './animated-checkbox'

interface Props {
    isDone: boolean;
}

const TaskItem = (props: Props) => {
    const { isDone } = props
}

export default TaskItem