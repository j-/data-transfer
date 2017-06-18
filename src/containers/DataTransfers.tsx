import { connect } from 'react-redux';
import { ReducerState, getDataTransfers } from '../store';
import { SimpleDataTransfer } from '../types';
import { addDataTransfer } from '../store/actions';
import DataTransfers from '../components/DataTransfers';

interface StateProps {
	dataTransfers: SimpleDataTransfer[];
}

interface DispatchProps {
	addDataTransfer: Function;
}

interface OwnProps {

}

const mapStateToProps = (state: ReducerState) => ({
	dataTransfers: getDataTransfers(state),
});

const mapDispatchToProps = ({
	addDataTransfer,
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(DataTransfers);
