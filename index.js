import React from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity
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
			recipe: {},
			user: {}
		};
	}

	componentDidMount() {
    const
			root = firebase.database().ref(),
      ref = root.child("recipe");

    ref.on("value", snap => {
      this.setState({
				recipe: snap.val()
      });
    });

		firebase.auth().onAuthStateChanged((user) => {
				this.setState({
					user: user
				});
			}
		);
	}

	alphabet() {
    let c = [];
    for (
			let i = "a".charCodeAt(0);
			i <= "z".charCodeAt(0);
			++i
		) {
      c.push(String.fromCharCode(i));
    }

    return c;
  }

  render() {
    return (
			<ScrollView
				style={style.cont}
			>
				{
					this.alphabet().map((c, k) => {
						return (
							<View
								key={k}
							>
								<View
									style={style.cont}
								>
									<Text
										style={[
											style.h1,
											{
												textTransform: "uppercase"
											}
										]}
									>{c}</Text> 
								</View>

								<View
									key={k}
								>
									{
										Object.keys(this.state.recipe).map((k) => {
											let inst = this.state.recipe[k];

											if (inst.title[0].toLowerCase() == c) {
												return (
													<TouchableOpacity
														key={k}
														onPress={
															() => {
																this.props.navigation.navigate(
																	"Recipe",
																	{
																		k: k
																	}
																)
															}
														}
													>
														<Text
															key={k}
															style={style.btn}
														>{inst.title}</Text>
													</TouchableOpacity>
												);
											}
										})
									}
								</View>
							</View>
						);
					})
				}
      </ScrollView>
    );
  }
}
