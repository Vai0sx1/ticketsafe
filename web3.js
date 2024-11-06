import Web3 from 'web3';
import ticketSafeJson from './TicketSafe.json';

const ticketSafeAbi = ticketSafeJson.abi;

const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        resolve(web3Instance);
      } catch (error) {
        reject(error);
      }
    } else {
      reject(new Error('Debe instalar MetaMask para usar esta aplicación.'));
    }
  });

const getContractInstance = async (web3Instance) => {
  const networkId = await web3Instance.eth.net.getId();
  const deployedNetwork = ticketSafeJson.networks[networkId];
  if (deployedNetwork) {
    const contractInstance = new web3Instance.eth.Contract(ticketSafeAbi, 0x229096Cd0D026D17C80Db369B21498fA77040827);
    return contractInstance;
  } else {
    throw new Error('Contrato no desplegado en la red actual.');
  }
};

export { getWeb3, getContractInstance };
