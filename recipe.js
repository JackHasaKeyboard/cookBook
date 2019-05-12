import React from "react";
import {
	ScrollView
} from "react-native";

import style from "./style";

export default class extends React.Component {
  render() {
    return (
			<ScrollView
				style={style.cont}
			></ScrollView>
    );
  }
}
