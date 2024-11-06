# TicketSafe: A Decentralized NFT Ticketing and Booking Marketplace

TicketSafe is a secure and transparent blockchain-based solution for managing digital tickets. Leveraging NFTs and smart contracts, it offers enhanced security, provenance, and flexibility for event organizers and attendees.  The system integrates with POAPs (Proof of Attendance Protocol) and provides optional authenticity certificates, creating a robust and verifiable ticketing ecosystem.  A dedicated React frontend application enhances user interaction.

## Key Features:

* **Decentralized Event Management:** Organizers create and manage events directly on the blockchain, reducing reliance on centralized platforms and mitigating fraud risks.
* **NFT-based Ticketing:** Tickets are represented as NFTs, providing verifiable ownership and preventing counterfeiting. This enables a secure secondary market.
* **ERC-20 Payment Integration:** Supports ticket purchases using various ERC-20 tokens, offering flexibility for buyers.
* **POAP Integration (Optional):** Seamless POAP integration allows attendees to receive verifiable proof of attendance.
* **Authenticity Certificates (Optional):**  Blockchain-verifiable certificates add extra security and trust.
* **Dynamic Pricing & Resale:** Organizers can control the secondary market by setting minimum and maximum resale prices, with a tiered commission structure.
* **Seating Management:**  Supports allocation and management of seats for events with reserved seating.
* **Flexible Seat Types:** Organizers can define different seat types (e.g., General Admission, VIP).
* **Comprehensive Filtering:**  Easy searching and filtering of events based on various parameters.
* **Revenue Management:** Transparent revenue tracking and secure withdrawal for organizers.
* **Pausable Functionality:** An emergency shutdown mechanism allows pausing operations.
* **React Frontend:** A dedicated frontend application built with React simplifies user interaction.


## Smart Contracts:

* **`TicketSafe.sol`:**  Manages event creation, ticket sales, and core platform logic.
* **`AuthenticityCertificateTickets.sol`:** Handles issuing and verifying authenticity certificates.


## Deployment and Usage:

**1. Smart Contract Deployment:**

* **Prerequisites:** Solidity development environment (Remix, Hardhat, Truffle), Ethereum network (mainnet or testnet).
* **Compilation:** Compile `TicketSafe.sol` and `AuthenticityCertificateTickets.sol`.
* **Deployment:** Deploy `AuthenticityCertificateTickets.sol` first, noting its address.  Deploy `TicketSafe.sol`, providing the necessary addresses for ERC-20 tokens, the POAP contract (if used), and the `AuthenticityCertificateTickets` contract.


**2. Frontend Deployment (`ticketsafe-frontend`):**

* **Prerequisites:** Node.js, npm.
* **Installation:**  Navigate to the `ticketsafe-frontend` directory and run `npm install`.
* **Local Development:** Start the development server with `npm start`.
* **Production Build:** Create a production build with `npm run build`. Deploy the resulting static files to a web server or hosting service.  The frontend utilizes libraries like Material UI (`@mui/material`), ethers.js (`@ethersproject/providers`), and web3-react (`@web3-react/core`, `@web3-react/injected-connector`, `@web3-react/metamask`) for wallet connection and interaction.


**3. Interaction:**

Users interact with the platform through the React frontend. Key functionalities are accessible through the interface:

* **Creating Events:**  Organizers can create new events, specifying details and ticket options.
* **Purchasing Tickets:** Users can connect their wallets (e.g., Metamask), select desired tickets, and complete purchases using supported ERC-20 tokens.
* **Confirming Attendance:**  Attendees can confirm their presence at events.
* **Withdrawing Earnings:**  Organizers can withdraw their accrued earnings.


## Requirements:

* **Smart Contracts:** Solidity development environment, Ethereum network.
* **Frontend:** Node.js, npm, web browser with wallet extension (e.g., Metamask).
* **Optional:** Functional POAP contract.


## License:

MIT License


## Contributions:

Contributions are welcome! If you have any suggestions or encounter any issues, please open an issue or submit a pull request on the GitHub repository.
