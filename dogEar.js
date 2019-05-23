import React from "react";

import {
	TouchableOpacity
} from "react-native";

import Triangle from "react-native-triangle";

export default class DogEar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		 <TouchableOpacity
			 width={60}
			 height={60}
			 style={{
				 top: -8,
				 left: -8,
				 position: "absolute",
				 zIndex: 1
			 }}

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
					style={{
						position: "absolute",

						left: 0,
						top: 0,

						shadowOffset: {
							width: 1,
							height: 1
						},
						shadowColor: "#111",
						shadowOpacity: 0.16
					}}
				/>
			</TouchableOpacity>
		);
	}
}
