import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ data }) => {
	const {
		image,
		thumbnail_image,
		title,
		artist,
		url
	} = data;

	const { headerContentStyle,
		headerTextStyle,
		thumbNailContainerStyle,
		thumbNailStyle,
		albumCoverStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbNailContainerStyle}>
					<Image style={thumbNailStyle} source={{ uri: thumbnail_image }} />
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image style={albumCoverStyle} source={{ uri: image }} />
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbNailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	thumbNailStyle: {
		width: 50,
		height: 50
	},
	albumCoverStyle: {
		width: null,
		flex: 1,
		height: 300
	}
};

export default AlbumDetail;
