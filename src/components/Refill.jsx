import Button from 'react-bootstrap/Button'
function Refill() {
  return (
    <div>
      <>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: #56DCEB;
      color: white;
      font-weight: bolder;
      cursor: pointer;
      margin: 10px;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 10px
    }
    `}
        </style>

        <Button variant="flat" size="xxl" className="log-refill">
          Log refill
        </Button>
      </>
    </div>
  );
}

export default Refill;
