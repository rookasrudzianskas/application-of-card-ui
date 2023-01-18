import {StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import {StatusBar} from "expo-status-bar";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View className="flex-1 bg-black pt-16 px-5">
      <View className="flex-row items-center w-full justify-between">
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialCommunityIcons name="tree" size={24} color={'white'} />
        </TouchableOpacity>
        <View className="flex-row items-center gap-x-3">
          <TouchableOpacity activeOpacity={0.7}>
            <AntDesign name="piechart" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <MaterialIcons name="group-add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
