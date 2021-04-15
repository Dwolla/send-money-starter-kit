import axios from 'axios';
import { mutate, trigger } from 'swr';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const spacingStyle = {
  margin: '30px 0',
};

export default function BankDetails({ id, name, bankAccountType, status }) {
  // Using Axios for POST request to remove bank
  function removeBank() {
    mutate('/api/get-customer-funding-sources', false);
    axios.post(`/api/remove-bank/${id}`).then((response) => response);
    trigger('/api/get-customer-funding-sources');
  }

  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item variant="light">BANK NAME: {name}</ListGroup.Item>
        <ListGroup.Item variant="light" style={{ textTransform: 'capitalize' }}>
          TYPE: {bankAccountType}
        </ListGroup.Item>
        <ListGroup.Item variant="light" style={{ textTransform: 'capitalize' }}>
          STATUS: {status}
        </ListGroup.Item>
      </ListGroup>
      <div style={spacingStyle}>
        <Button size="lg" variant="danger" type="submit" onClick={removeBank}>
          Remove Bank
        </Button>
      </div>
    </>
  );
}
