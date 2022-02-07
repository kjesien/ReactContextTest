import {CurrentTime} from './CurrentTime'
import {connect, Provider} from "react-redux";
import {ACTION_NAMES, store} from "../store";

const CompWithCountContextUse= connect(
    state => ({count: state.count}),
    dispatch => ({ increment: () => dispatch({type: ACTION_NAMES.INCREMENT}) })
)(({count, increment}) => {
    return (<div>
        <button onClick={increment}> Increment</button>
        <span>{count}</span>
        <CurrentTime />
    </div>)
})

const CompWithOtherContextUse= connect(
    state => ({other: state.other})
)(({other}) => {
    return (<div>
        <span>{other}</span>
        <CurrentTime />
    </div>)
})

export const ReduxTest = () => {
    return (
        <Provider store={store}>
            <span>REDUX</span>
            <CompWithOtherContextUse />
            <CompWithCountContextUse />
        </Provider>
    );
}