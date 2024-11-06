# TicketSafe: A Decentralized NFT Ticketing and Booking Marketplace

TicketSafe is a secure and transparent blockchain-based solution for managing digital tickets for events, services, and experiences. Leveraging NFTs and smart contracts, it offers enhanced security, provenance, and flexibility for both event organizers and attendees.  This system integrates with POAPs (Proof of Attendance Protocol) and provides optional authenticity certificates, creating a robust and verifiable ticketing ecosystem.


## Key Features:

* **Decentralized Event Management:** Organizers can create and manage events directly on the blockchain, eliminating reliance on centralized platforms and reducing the risk of fraud or single points of failure.
* **NFT-based Ticketing:** Tickets are represented as non-fungible tokens (NFTs), providing verifiable ownership and preventing counterfeiting.  This also enables secondary market trading (resale).
* **ERC-20 Payment Integration:**  Supports ticket purchases using various ERC-20 tokens, offering flexibility and convenience for buyers.
* **POAP Integration (Optional):**  Seamless integration with POAPs allows event attendees to receive verifiable proof of attendance, enhancing engagement and providing value beyond the initial ticket purchase.
* **Authenticity Certificates (Optional):**  Adds an extra layer of security and trust by issuing authenticity certificates for each ticket, verifiable on the blockchain.
* **Dynamic Pricing & Resale:**  Organizers can set minimum and maximum resale prices, controlling the secondary market and mitigating price manipulation.  A tiered commission structure incentivizes participation.
* **Seating Management:**  Supports the allocation and management of seats for events with reserved seating, ensuring fair and transparent seat assignment.
* **Flexible Seat Types:**  Organizers can define different seat types (e.g., General Admission, VIP) with varying prices and benefits.
* **Comprehensive Filtering:**  Facilitates easy searching and filtering of available events based on various parameters.
* **Revenue Management:**  Provides transparent revenue tracking and allows event organizers to withdraw their earnings securely.
* **Pausable Functionality:**  Provides an emergency shutdown mechanism for the contract, allowing the owner to pause all operations in case of unforeseen issues.


## Smart Contracts:

The system comprises two core smart contracts:

* **`TicketSafe.sol`:** The main contract responsible for creating, managing, and selling event tickets.
* **`AuthenticityCertificateTickets.sol`:** A supporting contract for issuing and verifying authenticity certificates associated with tickets.


## Deployment and Usage:

**1. Deployment:**

You will need a Solidity development environment (like Remix, Hardhat, or Truffle) and an Ethereum network (mainnet or a testnet).

* **Compilation:** Compile both `TicketSafe.sol` and `AuthenticityCertificateTickets.sol`.
* **Deployment:** Deploy `AuthenticityCertificateTickets.sol` first and record its address. Then deploy `TicketSafe.sol`, providing the addresses of the desired ERC-20 tokens (e.g., WETH, USDC), the POAP contract (if using), and the deployed `AuthenticityCertificateTickets` contract address.


**2. Interaction:**

After deployment, you can interact with the contracts using a web3 interface or a development tool.  Key functions include:

* **`createExperience(...)`:** Creates a new event or experience.
* **`buyTicketERC20(...)`:** Purchases a ticket using ERC-20 tokens.
* **`confirmAttendance(...)`:** Allows attendees to confirm their attendance (post-event).
* **`withdraw(...)`:** Allows the event organizer to withdraw their earnings.
* **`createSeatType(...)`:** Creates a new seat type (e.g., VIP).
* **`filterExperiences(...)`:** Filters events based on various criteria.


**Example (Ticket Purchase):**

To buy a ticket:

1. Approve the transfer of your ERC-20 tokens to the `TicketSafe` contract.
2. Call the `buyTicketERC20` function, providing the `experienceId`, `ticketId`, `seatTypeId` (if applicable), `row`, `column` (if applicable), the ERC-20 token to use, and the price.


**3. Considerations:**

* Ensure you have a sufficient balance of the chosen ERC-20 token.
* Commission rates are configurable within the `TicketSafe` contract.
* POAP integration requires a functional POAP contract.
* IPFS (or similar decentralized storage) is recommended for storing off-chain data like event images or videos.


## Requirements:

* Solidity development environment (Remix, Hardhat, Truffle).
* Ethereum network (mainnet or a testnet).
* Account with sufficient Ether or ERC-20 tokens.
* (Optional) A functional POAP contract.


## License:

MIT License

This project is licensed under the MIT License. See the `LICENSE` file for details.


## Contributions:

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.


This README provides a high-level overview.  Consult the source code for detailed functionality and usage instructions.

Las contribuciones son bienvenidas.  Si encuentras algún error o tienes alguna sugerencia de mejora, por favor, abre un issue o crea un pull request en el repositorio de GitHub.


Este archivo README proporciona una descripción general del proyecto y las instrucciones básicas de uso.  Se recomienda revisar el código fuente para comprender a fondo la funcionalidad de cada función.
