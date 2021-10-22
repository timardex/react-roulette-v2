import React from "react";
import { useDispatch } from 'react-redux';
import { deleteBet } from '../../store/actions';

const DeleteBet = (props) => {
  const dispatch = useDispatch();

  const deleteSelectedBet = (bet) => {
    dispatch(deleteBet(bet));
  };

  return (
    <div className="remove-bet">
      <small onClick={() => deleteSelectedBet(props.value)}>X</small>
    </div>
  );
};

export default DeleteBet;


