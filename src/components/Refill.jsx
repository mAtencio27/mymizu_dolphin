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
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 10px
    }
    `}
  </style>

  <Button variant="flat" size="xxl">
    Refill
  </Button>
</>
    </div>
  );
}

export default Refill;
