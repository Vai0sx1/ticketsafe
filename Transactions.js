import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getContractInstance } from '../web3';

const Transactions = () => {
  const [name, setName] = useState('');

  const handleCreateExperience = async () => {
    try {
      const contract = await getContractInstance();
      await contract.methods.createExperience(true, false, false, name, 1648948800, 100, 100, 50).send();
      alert('Experiencia creada con éxito');
    } catch (error) {
      console.error(error);
      alert('Error al crear experiencia');
    }
  };

  return (
    <div>
      <h1>Transactions</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre de la experiencia</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre de la experiencia"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleCreateExperience}>
          Crear experiencia
        </Button>
      </Form>
    </div>
  );
};

export default Transactions;
