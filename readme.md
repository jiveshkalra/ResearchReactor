# Research Paper Analyser

## Description
Created an interactive platform that allows users to engage with academic research papers in a conversational manner. Designed and deployed a ReAct agent capable of processing user inquiries using multiple integrated tools. Created specialized tools for the ReAct agent, including a custom Google search tool for broad information retrieval and a dedicated tool utilizing RAG and vector databases to query research paper PDFs. Designed and developed backend APIs using Flask, facilitating smooth integration between the ReAct agent and the frontend interface.

## Features
- **Interactive Platform**: Engage with academic research papers in a conversational manner.
- **ReAct Agent**: Processes user inquiries using multiple integrated tools.
- **Custom Tools**: Includes a Google search tool for broad information retrieval and a tool for querying research paper PDFs using RAG and vector databases.
- **Backend APIs**: Developed using Flask for smooth integration between the ReAct agent and the frontend interface.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/jiveshkalra/ResearchReactor.git
    ```
2. Navigate to the project directory:
    ```sh
    cd ResearchReactor
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage
1. Start the server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## File Structure
- `index.js`: Entry point of the application. Sets up the Express server and routes.
- `views/home.ejs`: Main page where users can interact with the ReAct agent.
- `views/FAQs.ejs`: FAQ page providing information about the platform.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the ISC License.

## Contact
For any inquiries, please contact jiveshkalra4@gmail.com

