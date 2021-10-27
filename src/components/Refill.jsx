import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { refill, saveMoney } from '../slices/milestone';
import { fetchUserInfo } from '../slices/milestone';
import { useEffect } from 'react';

function Refill() {
  const history = useHistory();
  const changeView = () => {
    history.push("/milestone");
  }
  const refill_amount = useSelector(state => state.milestone.refill_amount)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  },[])


  return (
    <div>
      <h1>{refill_amount}L of water refilled</h1>
      <>
        <style type="text/css">
          {`
    .btn-refill {
      background-color: #56DCEB;
      color: white;
      font-weight: bolder;
      cursor: pointer;
      margin: 15px;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 10px
    }
    `}
        </style>

        <Button
          variant="refill"
          size="xxl"
          className="log-refill"
          onClick={() => {
            dispatch(fetchUserInfo())
            dispatch(saveMoney(100))
          }}
        >
          Log refill
        </Button>
      </>
      <>
        <style type="text/css">
          {`
    .btn-milestone {
      background-color: #149FD4;
      color: white;
      font-weight: bolder;
      cursor: pointer;
      margin: 15px;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 10px
    }
    `}
        </style>
        <Button variant="milestone"
          size="xxl"
          className="log-refill"
          onClick={changeView}
        >
          Check Milestone
        </Button>
      </>
    </div>
  );
}

export default Refill;
