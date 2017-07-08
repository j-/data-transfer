import { connect } from 'react-redux';
import { ReducerState, getData } from '../store';
import { transferData } from '../store/actions';
import DataTransfer from '../components/DataTransfer';

interface StateProps {
	data: string[][];
}

interface DispatchProps {
	transferData: Function;
}

interface OwnProps {

}

const mapStateToProps = (state: ReducerState) => ({
	data: getData(state),
});

const mapDispatchToProps = ({
	transferData,
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps) => ({
	...stateProps,
	...dispatchProps,
});

export default connect<StateProps, DispatchProps, OwnProps, StateProps & DispatchProps>(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(DataTransfer);
