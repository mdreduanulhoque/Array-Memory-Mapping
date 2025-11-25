# Array Memory Mapping 🔢📐

An interactive visual tool to understand how **2D array memory
addressing** works in both **Row Major (C/C++)** and **Column Major
(MATLAB)** formats.

## 🚀 Live Demo

Access the project here:\
**https://mdreduanulhoque.github.io/Array-Memory-Mapping/**

## 📁 Project Structure

-   `index.html` --- Main UI layout\
-   `style.css` --- App styling\
-   `script.js` --- Logic for grid generation, highlighting, and address
    calculation

## 🧮 Features

-   Dynamic grid generation based on user-selected rows and columns\
-   Supports both **Row Major** and **Column Major** mapping\
-   Shows:
    -   General formula\
    -   Step‑by‑step calculation\
    -   Final computed address\
-   Clean UI and responsive layout

## 🔧 How It Works

The address of element `A[i][j]` is calculated using:

### **Row Major**

    Address = Base + ((i × TotalCols) + j) × Size

### **Column Major**

    Address = Base + ((j × TotalRows) + i) × Size

## 📜 License

This project is open-source and free to use.

------------------------------------------------------------------------

Made with ❤️ by **MD Reduanul Hoque**
