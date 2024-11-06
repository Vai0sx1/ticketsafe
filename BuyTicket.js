import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import TicketSafe from './TicketSafe.json';

const BuyTicket = () => {
  const { account, library } = useWeb3React();
  const { experienceId } = useParams();
  const [experience, setExperience] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const setupContract = async () => {
      if (library) {
        const deployedContract = new library.eth.Contract(TicketSafe.abi, TicketSafe.address);
        setContract(deployedContract);
        const experienceDetails = await deployedContract.methods.experiences(experienceId).call();
        setExperience(experienceDetails);
      }
    };
    setupContract();
  }, [library, experienceId]);

  const handleBuyTicket = async () => {
    if (!contract || !account) return;
    try {
      const ticketId = 1; // Asumiendo que tienes un ID de ticket para comprar
      const seatTypeId = 1; // Asumiendo que tienes un tipo de asiento
      const row = 1; // Asumiendo una fila
      const column = 1; // Asumiendo una columna
      const tokenAddress = '0xYourTokenAddressHere'; // Asegúrate de reemplazar esto con la dirección de tu token ERC20
      const token = new library.eth.Contract(TicketSafe.abi, tokenAddress);

      await contract.methods
        .buyTicketERC20(experienceId, ticketId, seatTypeId, row, column, tokenAddress)
        .send({ from: account });
      alert('Ticket purchased successfully');
    } catch (error) {
      console.error(error);
      alert('Error when buying ticket');
    }
  };

  if (!experience) return <div>Loading...</div>;

  return (
    <div>
      <h1>Buy Ticket</h1>
      <h2>{experience.name}</h2>
      <h3>Price: {experience.ticketPrice}</h3>
      <Button variant="contained" color="primary" onClick={handleBuyTicket}>Buy</Button>
    </div>
  );
};

export default BuyTicket;
