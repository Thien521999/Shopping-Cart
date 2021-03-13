import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreate, increase } from './counterSlice';

CouterFeature.propTypes = {
    
};

function CouterFeature(props) {
    const dispatch = useDispatch(); //dùng  useDispatch de lấy dispatch
    const counter = useSelector(state => state.counter); //dùng useSlector de lấy state trong Redux

    const handleIncreaseClick = () => {
        const action = increase(); //action creater
        console.log(action);
        dispatch(action); //gui action nay len redux
    }

    const handleDecreaseClick = () => {
        const action = decreate(); //action creater
        console.log('action');
        dispatch(action); //gui action nay len redux
    }
    return (
        <div>
            Counter: {counter}

            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CouterFeature;