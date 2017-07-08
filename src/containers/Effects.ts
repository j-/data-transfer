import { connect } from 'react-redux';
import { DropEffect, EffectAllowed } from '../types';
import { ReducerState, getDropEffect, getEffectAllowed } from '../store';
import Effects from '../components/Effects';

interface StateProps {
	dropEffect: DropEffect | null;
	effectAllowed: EffectAllowed | null;
}

interface DispatchProps {

}

interface OwnProps {

}

const mapStateToProps = (state: ReducerState) => ({
	dropEffect: getDropEffect(state),
	effectAllowed: getEffectAllowed(state),
});

const mapDispatchToProps = ({

});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps) => ({
	...stateProps,
	...dispatchProps,
});

export default connect<StateProps, DispatchProps, OwnProps, StateProps & DispatchProps>(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(Effects);
