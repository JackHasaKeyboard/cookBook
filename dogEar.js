import React from "react";

import {
	TouchableOpacity
} from "react-native";

import Triangle from "react-native-triangle";

import style from "./style";

export default class DogEar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		 <TouchableOpacity
			 width={60}
			 height={60}
			 style={style.back}

			 onPress={() => {
				 this.props.navigation.dispatch({
					 type: "Navigation/BACK"
				 })
			 }}
			>
				<Triangle
					direction="down-right"
					width={60}
					height={60}
					color="#fff"
					style={style.dogEar}
				/>
			</TouchableOpacity>
		);
	}
}
