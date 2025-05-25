# mv-portfolio: My Personal Landing Page & Portfolio

Welcome to the codebase for my personal landing page: [manuviswanadha.in](https://manuviswanadha.in) (replace with your actual link once live). This project is built with React, TypeScript, and styled using Material-UI (MUI). It's containerized with Docker and self-hosted on my Raspberry Pi homelab.

This README provides an overview of the project, mirroring the content of the live landing page.

---

## 👋 Manu Viswanadha: MERN Stack Development & Self-Hosted Solutions – Tailored to Your Needs.

Building intuitive web experiences with the MERN stack and offering robust self-hosting expertise. My approach involves rapidly grasping your project needs to propose versatile and efficient solutions tailored for you.

➡️ **[Let's Find Your Solution](#contact)** (Internal link to contact section)

---

## 🛠️ My Expertise

### MERN Stack Development
My MERN stack development experience covers the full spectrum of application creation, from intricate frontend UIs to robust backend logic and data management:

*   **Dynamic & Interactive Frontend Development (React & Redux Toolkit):**
    *   Expertise in building complex, state-driven user interfaces with React and Redux Toolkit.
    *   Proven ability to develop features like custom, interactive timelines, real-time previews, and sophisticated data visualizations.
    *   Proficient in integrating libraries like D3.js to render dynamic overlays (e.g., Picture-in-Picture, text, images) on media elements.
    *   Experience building features from scratch, such as comprehensive media libraries for browsing and selecting assets.
    *   Developed functionalities for direct media capture within the browser, including video, audio, and screen recording.
*   **Robust Backend Development (Node.js & Express.js):**
    *   Skilled in creating secure and efficient RESTful APIs with Node.js and Express.js.
    *   Designing clear API contracts and data structures (e.g., custom JSON formats for complex operations) that enable decoupled and extensible systems.
    *   _(Further details on specific Node.js/Express.js experience can be added here)_
*   **Efficient Data Management (MongoDB):**
    *   Designing MongoDB schemas optimized for application performance and scalability.
    *   _(Further details on specific MongoDB experience can be added here)_
*   **Architectural Foresight:**
    *   A key focus in my development process is creating extensible architectures. For example, the design of core data structures (like custom JSON for editorial actions) allows for advanced capabilities such as programmatically generating entire complex sequences or workflows without manual UI interaction, opening doors for automation and templating.

### Problem Solving & Architectural Design
My expertise includes dissecting intricate UI/UX challenges and engineering elegant, functional solutions. For example:

*   **Pixel-to-Time Translation for Dynamic Timelines:** Successfully developed custom mathematical logic and timer-based mechanisms within React & Redux Toolkit to precisely map pixel movements to temporal units, ensuring real-time responsiveness for dynamic timeline interfaces.
*   **Decoupled Preview & Backend Processing:** Architected systems where complex editorial actions were previewed instantly on the frontend using CSS, while a custom JSON instruction set captured edits for sequential backend processing, ensuring a fluid user experience and a maintainable, extensible system.

### Deployment, CI/CD & Infrastructure Management
Beyond development, I bring practical experience in deploying and managing web applications:

*   **Containerization with Docker:** Proficient in writing Dockerfiles (including multi-stage builds for React & Node.js) and managing containerized services with tools like Portainer and Docker CLI.
*   **Linux Server Administration & Self-Hosting:** Over a decade of experience as a Linux user, adept at server administration for robust self-hosted environments. I manage a personal homelab (Raspberry Pi based) hosting diverse services, orchestrated via Nginx Proxy Manager.
    *   *This very landing page is containerized with Docker and self-hosted on this infrastructure.*
*   **CI/CD Automation:** Practical experience with GitHub Actions and Jenkins for automating build, test, and deployment pipelines for personal projects.

---

## 🤔 Why Work With Me?

Choosing the right developer is key to your project's success. Here’s what I bring to the table:

*   **Rapid Problem Understanding & Versatile Solutions:** I excel at quickly grasping project requirements and presenting 2-3 clear, well-reasoned alternative solutions.
*   **Proven Problem-Solving & Architectural Skills:** My experience involves tackling complex technical challenges and architecting robust, maintainable solutions.
*   **Full-Spectrum Technical Capability:** Expertise spanning full-stack MERN development and practical DevOps skills (Docker, Linux, self-hosting).
*   **Commitment to Continuous Learning & Modern Practices:** Dedicated self-learning and practical application (e.g., mastering Docker, building a homelab) ensure I leverage current and effective technologies.
*   **Clear Communication & Collaboration:** I believe in transparent and timely communication throughout the project lifecycle.
*   **Pragmatic & Efficient Delivery:** I focus on delivering functional and impactful solutions efficiently.

---

## 👨‍💻 About Me

### My Journey: From IT Roots to a Passion for Self-Hosted Solutions

My journey with technology is one of continuous learning, practical application, and a genuine passion for building things that work. After an initial period in the IT industry, my path took a different turn for a few years, but my fascination with coding and system building never faded.

More recently, I've dived back into my technical passions headfirst, focusing on MERN stack development and the fascinating world of DevOps and self-hosting. This isn't just theoretical for me; I've built and continue to expand my own homelab server environment from the ground up. There's immense satisfaction in this – like setting up a media server that allows a friend overseas to access our favorite TV shows, or providing a personal 1TB cloud storage solution for my brother. These personal projects are where I rigorously hone my skills with Docker, Linux administration, and network configuration.

This hands-on, problem-solving approach is what I bring to my freelance work. I'm committed to leveraging these modern skills to create valuable, efficient, and reliable web solutions for my clients.

---

## ✨ Skill Showcase / My Projects

_(This section will be updated as projects are completed and deployed)_

*   **Upcoming Project: Self-Hosted Link-in-Bio Service with Analytics**
    *   **Description:** A MERN-stack application allowing users to create and self-host their own "link-in-bio" pages, complete with basic click analytics.
    *   **Technologies:** React, Node.js, Express, MongoDB, Docker, Material-UI.
    *   **Status:** In Development.
    *   *(Links to Live Demo, GitHub Repo, and Deployment Tutorial will be added here upon completion)*

---

## 🚀 Getting Started (Development Setup)

This section is for developers looking to run this project locally.

1.  **Prerequisites:**
    *   Node.js (v18 or later recommended)
    *   npm or yarn
    *   Docker (optional, for running the production build locally)

2.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/mv-portfolio.git
    cd mv-portfolio
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    The application will typically be available at `http://localhost:5173` (for Vite) or `http://localhost:3000` (for CRA).

5.  **Build for production:**
    ```bash
    npm run build
    # or
    # yarn build
    ```
    This will create a `dist` (or `build`) folder with the static assets.

6.  **(Optional) Run production build with Docker:**
    *   Ensure you have Docker installed and running.
    *   Build the Docker image (refer to the `Dockerfile`):
        ```bash
        docker build -t mv-portfolio-img .
        ```
    *   Run the Docker container:
        ```bash
        docker run -d -p 8080:80 mv-portfolio-img
        ```
        Access at `http://localhost:8080`.

---

## <a name="contact"></a>✉️ Get In Touch

Interested in collaborating or have a project in mind? I'd love to hear from you. The best way to reach me currently is via email or LinkedIn.

*   **Email:** [manu.viswanad@gmail.com](mailto:manu.viswanad@gmail.com) (Replace with your actual email)
<!-- *   **LinkedIn:** [Your LinkedIn Profile URL](https://www.linkedin.com/in/your-linkedin-profile/) (Replace with your LinkedIn URL) -->
*   **GitHub:** [Your GitHub Profile URL](https://github.com/ManuSharma1991) (Replace with your GitHub URL)

---

© {new Date().getFullYear()} Manu Viswanadha. All rights reserved.
*This website is proudly self-hosted on a Raspberry Pi using Docker.*
