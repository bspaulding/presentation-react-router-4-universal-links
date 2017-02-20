import React, { Component, PropTypes } from 'react';

const styles = {
	container: {
		backgroundColor: 'white',
		flexDirection: 'column',
		display: 'flex',
		borderRadius: 6,
		boxShadow: '0px 1px 4px hsla(0, 0%, 0%, 0.75)'
	},
	header: {
		backgroundColor: '#f5f5f5',
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		borderBottomStyle: 'solid',
		flexDirection: 'row',
		display: 'flex',
		alignItems: 'center',
		paddingLeft: 12,
		paddingRight: 12
	},
	input: {
		font: 'inherit',
		width: '100%',
		color: '#999',
		display: 'block',
		padding: 5
	},
	inputContainer: {
		flex: 1,
		alignItems: 'center',
		padding: 6.6,
		flexDirection: 'row',
		display: 'flex',
		fontSize: 21
	},
	navButton: {
		border: 'none',
		margin: 0,
		padding: 0,
		background: 'none',
		fontSize: 48,
		verticalAlign: 'middle',
		position: 'relative',
		top: 5
	}
};

class FakeBrowser extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      listen: PropTypes.func.isRequired
    }).isRequired
  }

	componentWillMount() {
		this.unlisten = this.context.router.listen(() => {
			this.setState({ pathname: this.context.router.location.pathname });
		});
	}

	componentWillUnmount() {
		this.unlisten();
	}

	render() {
		const { children } = this.props;
		const { pathname } = this.state || { pathname: '/' };
		return (
			<div style={styles.container}>
				<div style={styles.header}>
					<button style={styles.navButton}><svg height="1em" width="1em" fill="currentColor" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet"><path d="m28.3 18.3h-12.6l3.8-3.8c0.7-0.6 0.7-1.7 0-2.3s-1.7-0.7-2.3 0l-7.9 7.8 7.9 7.8c0.3 0.4 0.7 0.5 1.1 0.5s0.9-0.1 1.2-0.5c0.7-0.6 0.7-1.7 0-2.3l-3.8-3.8h12.6c1 0 1.7-0.8 1.7-1.7s-0.8-1.7-1.7-1.7z"></path></svg></button>
					<button disabled style={styles.navButton}><svg height="1em" width="1em" fill="currentColor" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet"><path d="m22.2 12.2c-0.7 0.6-0.7 1.7 0 2.3l3.8 3.8h-12.7c-0.9 0-1.6 0.8-1.6 1.7s0.7 1.7 1.6 1.7h12.7l-3.8 3.8c-0.7 0.6-0.7 1.7 0 2.3 0.3 0.4 0.7 0.5 1.1 0.5s0.9-0.1 1.2-0.5l7.9-7.8-7.9-7.8c-0.6-0.7-1.7-0.7-2.3 0z"></path></svg></button>
					<div style={styles.inputContainer}><input readOnly value={pathname} style={styles.input}/></div>
				</div>
				{children}
			</div>
		);
	}
}

export default FakeBrowser;
