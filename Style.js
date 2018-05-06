import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
	rootContainer: {
		flex: 1
	},
	
	displayContainer: {
		flex: 2,
		backgroundColor: '#ffffff',
		justifyContent: 'center'
	},

	displayText: {
		color: '#f92cbf',
		fontSize: 38,
		fontWeight: 'bold',
		textAlign: 'right',
		padding: 20
	},

	inputContainer: {
		flex: 8,
		backgroundColor: '#f92cbf'
	},

	inputButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 0.5,
		borderColor: '#fc8ddd'
	},
	
	inputButtonHighlighted: {
		backgroundColor: '#e827b0'
	},	

	inputButtonText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'white'
	},

	inputRow: {
		flex: 1,
		flexDirection: 'row'
	}
});

export default Style;
