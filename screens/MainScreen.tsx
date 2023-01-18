//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign, Feather, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="pt-16 px-5">
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} className="flex-row items-center">
          <Ionicons name="chevron-back-outline" size={24} color="white" />
          <Text className="text-white text-lg font-[500]">Home</Text>
        </TouchableOpacity>
        <Text className="text-lg font-[500] text-white -ml-12">Main</Text>
        <Feather name="settings" size={20} color="white" />
      </View>
      <View className="mt-5">
        <View className="flex-row items-center justify-center">
          <View className="items-center justify-center">
            <View className="w-28 h-28 rounded-full bg-[#232326] items-center justify-center border border-black border-[2px]">
              <AntDesign name="arrowdown" size={27} color="#377EF6" />
              <View className="flex-row bg-transparent mt-2">
                <Text className="font-[400] mt-[1px] text-[20px] text-white">
                  €858.
                </Text>
                <Text className="text-xs mb-3 text-white">93</Text>
              </View>
            </View>
            <Text className="text-gray-600 font-[500] uppercase max-w-[100px] text-center mt-1">Money Requested</Text>
          </View>
          <View className="items-center justify-center">
            <View className="w-32 h-32 rounded-full bg-orange-500/50 items-center justify-center border border-black border-[2px]">
              <MaterialIcons name="show-chart" size={28} color="#67C992" />
              <View className="flex-row bg-transparent mt-2">
                <Text className="font-[500] mt-[1px] text-[24px] text-white">
                  €3433.
                </Text>
                <Text className="text-xs mb-3 text-white">60</Text>
              </View>
            </View>
            <Text className="text-gray-600 font-[500] uppercase max-w-[100px] text-center mt-1">Current Balance</Text>
          </View>
          <View className="items-center justify-center">
            <View className="w-28 h-28 rounded-full bg-[#232326] items-center justify-center border border-black border-[2px]">
              <Ionicons name="ios-people" size={24} color="#377EF6" />
            </View>
            <Text className="text-gray-600 font-[500] uppercase max-w-[100px] text-center mt-1">Access</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
