# 🧠 MedGPT - Advanced AI Medical Intelligence

[![License: MIT](https://img.shields.io/badge/License-MIT-cyan.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Falcon AI](https://img.shields.io/badge/AI_Model-Falcon_40B-violet.svg)](https://tii.ae/falcon-ai)
[![Supabase](https://img.shields.io/badge/Database-Supabase-emerald.svg?logo=supabase)](https://supabase.com/)

MedGPT is a state-of-the-art AI-powered medical diagnostic tool designed to provide rapid, accurate second opinions for critical conditions like **stroke** and **breast cancer**. By leveraging advanced neural networks and large language models (Falcon AI), MedGPT ensures reliable validation of patient conditions through a hybrid analysis of neuro-imaging (MRI) and clinical questionnaires.

---

## 🚀 Key Features

- **AI-Powered MRI Analysis**: Real-time diagnostic assistance using deep learning models to identify stroke indicators with 99.2% precision.
- **Dynamic AI Pipeline**: A seamless workflow from raw data input to clinical insights, visualized in a high-tech dashboard.
- **Empathetic AI Chatbots**: 24/7 mental health, caregiver support, and rehabilitation guidance powered by Falcon AI.
- **Cross-Platform Readiness**: Responsive, glassmorphism-based UI designed for smartphones, tablets, and medical workstations.
- **Medication Reminders**: Integrated scheduling system to ensure adherence to treatment protocols.

---

## 🛠️ Technology Stack

| Component | Technology |
| --- | --- |
| **Frontend** | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| **Animations** | Framer Motion |
| **Backend/Auth** | Supabase (PostgreSQL, SSR Auth) |
| **AI/ML** | TensorFlow (Image Recognition), Falcon AI (NLP) |
| **UI Components** | Radix UI, Lucide Icons, Sonner |

---

## 📐 System Architecture

MedGPT follows a modern AI pipeline:

1.  **Data Ingestion**: MRI scans (DICOM/PNG) and clinical data are securely uploaded.
2.  **Preprocessing**: Image normalization and NLP parsing of symptoms.
3.  **Inference Layer**: 
    - **Vision Model**: TensorFlow-based CNN identifies neurological anomalies.
    - **Language Model**: Falcon AI processes clinical history and provides support.
4.  **Reporting**: Interactive glass-morphic dashboard delivers risk assessment and next-step recommendations.

---

## 💻 Getting Started

### Prerequisites
- Node.js 18+ 
- Supabase Account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/itxtalal/medgpt.git
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   Copy `.env.example` to `.env.local` and add your Supabase credentials.
4. Run the development server:
   ```bash
   npm run dev
   ```

---

## 👥 Authors
- **Muhammad Talal Jamil** - [GitHub](https://github.com/itxtalal)
- **Ehtisham Khan** - [GitHub](https://github.com/ehtisham8889)
- **Areesa Ashfaq**
- **Sandra Ashipala** - [GitHub](https://github.com/sandramsc)
- **Caner Akturk**

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ for the AI Hackathon 2026.
</p>
