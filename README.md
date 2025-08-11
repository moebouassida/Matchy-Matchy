# Matchy Matchy

## Overview
**Matchy Matchy** is a prototype fashion recommendation system that enables users to discover clothing items through image search or text queries. Built during my student days as an exploratory project, it combines computer vision, image similarity search, and chatbot interaction to provide personalized style recommendations.

> ⚠ **Note:** This repository contains the original experimental code from 2 years ago, mostly in `.ipynb` notebooks. It is not production-ready, but serves as a demonstration of the concepts and models used.

---

## Features
- **Clothing Classification (YOLOv7)**  
  Detects and classifies clothing items from uploaded images with high accuracy.

- **Image Similarity Search (VGG16)**  
  Finds visually similar clothing styles by comparing extracted image features.

- **Chatbot Interaction**  
  A simple chatbot interface for refining style preferences and exploring recommendations.

- **Multi-Modal Input**  
  Search by uploading a photo or typing a description.

- **Responsive UI Concept**  
  Designed for cross-device usability in a future mobile app (React Native prototype).

---

## How It Works
1. **User Input** – Provide a clothing photo or describe your style in text.  
2. **Processing** –  
   - YOLOv7 detects clothing types.  
   - VGG16 extracts image features for similarity matching.  
3. **Recommendations** – The system returns a list of visually similar clothing items.  
4. **Chatbot Refinement** – Optional text-based interaction to refine results.

---

## Tech Stack
- **Computer Vision:** YOLOv7, VGG16 (TensorFlow/Keras)  
- **Data Processing:** NumPy, OpenCV, scikit-learn, matplotlib  
- **Automation:** Selenium (for image scraping in early experiments)  
- **Frontend Prototype:** React Native

---

## Installation & Dependencies
To run the notebooks, install the following:

```bash
pip install numpy matplotlib opencv-python scikit-learn selenium tensorflow
