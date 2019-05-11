import React from "react";
import {
	View,
	Text
} from "react-native";

import style from "./style";

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
