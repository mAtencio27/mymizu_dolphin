import Button from 'react-bootstrap/Button'

function Refill({user, handleUserChange, handleStoneChange}) {

  return (
    <div>
      <h1>{user.refill_amount}L of water refilled</h1>
        <style type="text/css">
          {`
    .btn-refill {
      background-color: #56DCEB;
      color: white;
      font-weight: bolder;
      cursor: pointer;
      margin-top: 15px;
      margin-left: 15px;
      margin-right: 15px;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 10px
    }
    `}
        </style>
        <div className="d-grid gap-2">
          <Button
            variant="refill"
            size="xxl"
            className="log-refill"
            onClick={() => {
              const newUser = {...user};
              newUser.refill_amount += 20;
              handleUserChange(newUser);
              handleStoneChange(newUser);
            }}
            // style={{display: 'block', margin: '0 auto'}}
          >
            Log refill
          </Button>
          </div>
    </div>
  );
}

export default Refill;
