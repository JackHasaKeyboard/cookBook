import React from "react";
import {
	View,
	Text,
	TouchableOpacity
} from "react-native";

import style from "./style";

import SignUp from "./signUp";

export default class Head extends React.Component {
  render() {
    return (
			<View
				style={style.cont}
			>
				<Text
					style={style.emblem}
				>A</Text>
      </View>
    );
  }
}
