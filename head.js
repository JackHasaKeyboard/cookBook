import React from "react";
import {
	View,
	Text,
} from "react-native";

import style from "./style";

import DogEar from "./dogEar";
import Ctrl from "./ctrl";

export default class Head extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
			<View>
				<View
					style={[
						style.cont,
						style.head
					]}
				>
					{
						this.props.navigation.state.index > 0 && (
							<DogEar
								navigation={this.props.navigation}
							/>
						)
					}

					<Text
						style={style.emblem}
					>A</Text>
				</View>

				<Ctrl
					navigation={this.props.navigation}
				/>
			</View>
    );
  }
}
