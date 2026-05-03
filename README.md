# `mv-portfolio`: Platform Engineering & Self-Hosting Portfolio

This repository contains the source code for my personal website, showcasing my work in self-hosted infrastructure, platform reliability, and full-stack development.

Built with **React 19, TypeScript, Material-UI v7, and Vite**. Deployed via Docker on my self-hosted edge. This project is a transparent look at how I design reliable systems and the platforms I run.

The site features live uptime monitoring from my homelab, an interactive architecture diagram, and a real-world showcase of production-grade self-hosted services.

---

## 👋 I build self-hosted infrastructure that runs like production — on hardware you own.

My homelab runs 40+ services across Proxmox, Docker, and bare metal — with real monitoring, air-gapped backups, and a runbook for every failure mode. That same reliability mindset is what I bring to every platform I design.

**Roles:** Platform & Infrastructure Engineer · Self-Hosting Specialist · SRE Practitioner · Full-Stack Developer

---

## 🏗️ How I Build Reliable Systems

Principles I apply to every platform I design:

### **Designed for Failure, Not Just Success**
Every system I build assumes failure will happen — disk issues, network drops, service crashes. That's why I design with isolation, recovery paths, and backup-first architecture from day one.

### **Operational by Default**
I don't stop at deployment. Every platform includes monitoring, alerting, logging, and runbooks — so it can be operated, not just launched.

### **Controlled Complexity**
Instead of stacking tools blindly, I design systems with clear boundaries — ingress, compute, storage, and observability — keeping things understandable and maintainable as they grow.

### **Real Systems, Not Demos**
My work runs continuously — serving media, managing data, handling authentication — with real uptime and recovery expectations, not just a proof-of-concept.

---

## 👨‍💻 About My Work

I build and operate self-hosted platforms that behave like production systems — with a focus on reliability, recovery, and long-term maintainability.

My work sits at the intersection of platform engineering and application development. I run a multi-service environment built on Proxmox, Docker, and secure ingress, with real monitoring, backup workflows, and failure-tested runbooks.

### Platform & Infrastructure

* **Proxmox VE:** Hypervisor for 10+ role-segmented LXC containers with controlled startup orchestration
* **Networking & Ingress:** OpenWrt for inter-VLAN routing; Nginx Proxy Manager for centralized TLS termination; Authentik for SSO
* **Storage:** ZFS + mergerfs + SnapRAID unified pool consumed by services; independent PBS backup target
* **Observability:** Uptime Kuma, Dozzle, Beszel for health, logs, and metrics; CrowdSec for perimeter defence
* **Backup & Recovery:** Proxmox Backup Server on dedicated node; documented runbooks for failures

### Full-Stack Application Development

* **Frontend:** React 19, TypeScript, Material-UI, Vite, framer-motion
* **Backend:** Node.js, Express, REST APIs
* **Data:** MongoDB schema design for performance and scalability

---

## 🏢 Personal Infrastructure

I operate a production-grade homelab running Proxmox 9, Docker, ZFS, Nginx, Authentik, and PBS. Key components:

* **Tesseract (Proxmox VE):** Ryzen 5 5600X, 32GB RAM, AMD RX 6600 XT GPU render node
* **Bifrost (OpenWrt):** VLAN routing with workload-based traffic policies
* **Ultron (Gateway/Auth):** Nginx Proxy Manager, Authentik SSO, CrowdSec, observability
* **Vault (Storage):** ZFS + mergerfs + SnapRAID pools
* **Agamotto (PBS):** Dedicated backup target on Raspberry Pi 5

---

## 📦 Live Project Showcase

The portfolio includes **live uptime monitoring** of services running on this infrastructure:

* **Virtualization & Compute:** Proxmox with role-segmented LXC workloads
* **Secure Gateway & Identity:** Nginx Proxy Manager + Authentik SSO + OpenWrt
* **Storage & Data Protection:** ZFS/mergerfs unified mount, SnapRAID, PBS backup
* **Observability & Operations:** Uptime Kuma, Dozzle, Beszel
* **Private Collaboration:** Wiki.js, Gitea, Paperless-ngx, Vaultwarden
* **Portfolio Edge:** This site (React 19 + TypeScript + Docker + Nginx)

Each service displays **live status dots** showing real uptime (green/red/blue for up/down/maintenance).

---

## ✨ Portfolio Site: Technology & Architecture

**Tech Stack:**
* React 19 + TypeScript + Material-UI v7
* Vite, framer-motion animations
* Uptime Kuma API integration for live status
* EmailJS contact form
* Multi-stage Docker → Nginx serving

**Features:**
* Responsive hero with role badges (stagger animation)
* Live project showcase with animated status dots
* Interactive homelab architecture diagram
* Dark/light mode toggle
* Scroll-triggered section animations
* Real-time status polling from infrastructure

---

## 🤔 Why Work With Me?

* **Reliability-First Thinking:** Design for failure with isolation, recovery, and backup-first architecture
* **Operational Maturity:** Every system includes monitoring, alerting, logging, and runbooks
* **Real-World Testing:** My homelab is a live lab for architecture patterns and failure scenarios
* **Full-Spectrum Capability:** Platform engineering, SRE practices, full-stack development
* **Transparent Communication:** Clear problem diagnosis, multiple solution paths

---

## 🚀 Getting Started (Development Setup)

This section is for developers looking to run this project locally.

1. **Prerequisites:**
    * Node.js (v18 or later)
    * npm or yarn
    * Docker (optional)

2. **Clone the repository:**
    ```bash
    git clone https://github.com/ManuSharma1991/mv-portfolio.git
    cd mv-portfolio
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```
    Available at `http://localhost:5173` (Vite).

5. **Build for production:**
    ```bash
    npm run build
    ```

6. **Run production build with Docker:**
    ```bash
    docker build -t mv-portfolio-img .
    docker run -d -p 8080:12345 --name mv-portfolio-app mv-portfolio-img
    ```
    Then visit `http://localhost:8080`.

---

## ✉️ Get In Touch

Interested in collaborating? I'd love to hear from you.

* **Email:** [manu.viswanad@gmail.com](mailto:manu.viswanad@gmail.com)
* **GitHub:** [ManuSharma1991](https://github.com/ManuSharma1991)

---

© 2025 Manu Viswanadha. All rights reserved.

*This website is proudly self-hosted on my homelab infrastructure using Proxmox, Docker, and Nginx.*
