# TicketSafe: A Decentralized NFT Ticketing and Booking Marketplace

TicketSafe is a secure and transparent blockchain-based solution for managing digital tickets for events, services, and experiences.  Leveraging NFTs and smart contracts, it offers enhanced security, provenance, and flexibility for organizers and attendees.  The system integrates with POAPs (Proof of Attendance Protocol) and provides optional authenticity certificates, creating a robust and verifiable ticketing ecosystem.  A user-friendly frontend interface simplifies interaction with the smart contracts.


## Key Features:

* **Decentralized Event Management:** Organizers create and manage events directly on the blockchain, eliminating reliance on centralized platforms and reducing fraud risks.
* **NFT-based Ticketing:** Tickets are NFTs, providing verifiable ownership and preventing counterfeiting.  Secondary market trading (resale) is enabled.
* **ERC-20 Payment Integration:** Supports ticket purchases using various ERC-20 tokens.
* **POAP Integration (Optional):** Seamless integration with POAPs provides verifiable proof of attendance.
* **Authenticity Certificates (Optional):** Adds an extra layer of security and trust through blockchain-verifiable certificates.
* **Dynamic Pricing & Resale:** Organizers set minimum and maximum resale prices, controlling the secondary market.  A tiered commission structure incentivizes participation.
* **Seating Management:** Supports allocation and management of seats for events with reserved seating.
* **Flexible Seat Types:** Organizers define different seat types (e.g., General Admission, VIP) with varying prices.
* **Comprehensive Filtering:** Facilitates easy searching and filtering of events.
* **Revenue Management:** Provides transparent revenue tracking and secure withdrawal for organizers.
* **Pausable Functionality:** Allows the owner to pause operations in case of unforeseen issues.
* **Frontend Interface:**  A React-based frontend application simplifies user interaction with the smart contracts.


## Smart Contracts:

* **`TicketSafe.sol`:** The main contract for creating, managing, and selling event tickets.
* **`AuthenticityCertificateTickets.sol`:** A supporting contract for issuing and verifying authenticity certificates.


## Deployment and Usage:

**1. Smart Contract Deployment:**

* **Prerequisites:** Solidity development environment (Remix, Hardhat, Truffle), Ethereum network (mainnet or testnet).
* **Compilation:** Compile `TicketSafe.sol` and `AuthenticityCertificateTickets.sol`.
* **Deployment:** Deploy `AuthenticityCertificateTickets.sol` first, then `TicketSafe.sol`, providing addresses for ERC-20 tokens, the POAP contract (if using), and the deployed `AuthenticityCertificateTickets` contract.


**2. Frontend Deployment (`ticketsafe-frontend`):**

The frontend is a React application. After installing dependencies (`npm install`), use `npm start` to run it locally.  Deployment involves building the application (`npm run build`) and deploying the static files to a web server.  The frontend utilizes various libraries including `@mui/material` for UI components, `@ethersproject/providers` for interacting with the blockchain, and `@web3-react/core` and related packages for wallet connection.


**3. Interaction:**

Users interact primarily through the frontend, which handles communication with the smart contracts.  Key functions include:

* **`createExperience(...)`:** Creates a new event.
* **`buyTicketERC20(...)`:** Purchases a ticket using ERC-20 tokens.
* **`confirmAttendance(...)`:** Confirms attendance (post-event).
* **`withdraw(...)`:** Allows organizers to withdraw earnings.
* **`createSeatType(...)`:** Creates a new seat type.
* **`filterExperiences(...)`:** Filters events.


**Example (Ticket Purchase):**

1. Connect your wallet (e.g., Metamask) through the frontend.
2. Approve the transfer of your ERC-20 tokens.
3. Select the desired ticket and complete the purchase through the frontend's user interface.


**4. Considerations:**

* Ensure sufficient ERC-20 token balance.
* Commission rates are configurable in `TicketSafe.sol`.
* POAP integration needs a functional POAP contract.
* IPFS (or similar) is recommended for off-chain data storage (images, videos).


## Requirements:

* **Smart Contract:** Solidity development environment.
* **Frontend:** Node.js, npm.
* Ethereum network (mainnet or testnet).
* Wallet (e.g., Metamask).
* (Optional) A functional POAP contract.


## License:

MIT License


## Contributions:

Contributions are welcome!  Please open an issue or submit a pull request. 
