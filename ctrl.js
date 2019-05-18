import React from "react";
import {
	View,
	TouchableOpacity,
	Text
} from "react-native";

import style from "./style";

import * as firebase from "firebase";

import auth from "./auth";

if (!firebase.apps.length) {
  firebase.initializeApp(
		auth.firebase
  );
}

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			this.setState({
				user: user
			});
		});
	}

	render() {
		if (this.state.user) {
			return (
				<View
					style={[
						style.cont,
						style.head,
						style.ctrl
					]}
				>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate(
							"Profile",
							{
								user: this.state.user
							}
						)}
						style={style.btn}
					>
						<Text>{this.state.user.displayName}</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={
							() => {
								firebase
									.auth()
									.signOut()
									.then(() => this.props.navigation.navigate("Index"));
							}
						}
						style={[
							style.btn,
							{
								marginLeft: "auto"
							}
						]}
					>
						<Text>Log Out</Text>
					</TouchableOpacity>
				</View>
			);
		} else {
			return (
				<View
					style={[
						style.cont,
						style.head,
						style.ctrl
					]}
				>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate("SignUp")}
						style={style.btn}
					>
						<Text>Sign Up</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => this.props.navigation.navigate("LogIn")}
						style={[
							style.btn,
							{
								marginLeft: "auto"
							}
						]}
					>
						<Text>Log In</Text>
					</TouchableOpacity>
				</View>
			);
		}
	}
}
