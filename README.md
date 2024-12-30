# **TrackMyMeds**

## **Overview**

**TrackMyMeds** is a user-friendly Medication Reminder & Tracker app designed to assist individuals, especially the elderly or those with complex medication schedules, in managing their health effectively.  
The app enables users to stay on top of their medications with a simple, clean interface.

With features like tracking today's medications, maintaining a comprehensive medication history, and adding new medications, **TrackMyMeds** aims to improve consistency and streamline the medication management process.

---

## **Tech Stack**

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: TanStack Router
- **Build Tool**: Vite
- **Form Validation**: `react-hook-form` with Zod
- **Charting**: ShadCN/UI with `@tanstack/charts`

---

## **Current Pages and Features**

### **Home/Dashboard**

- Displays **today's medications** with statuses (e.g., "Consumed", "Not Consumed").
- Includes actions to mark medications as taken or undo.
- Weekly medication summary visualized with a **pie chart**.

### **Add Medication**

- Form-based page for adding new medications.
- Fields include medication name, dosage, frequency, and start date.
- Validates inputs using `react-hook-form` and Zod.

### **Medication List**

- Table displaying all **active medications**.
- Users can mark medications as inactive or edit details.

### **Medical History**

- Comprehensive list of all medications (active and inactive).
- Users can delete historical records for better management.

### **Login/Auth**

- Styled login page with:
  - Google Sign-In button.
  - Email and password login fields.
  - "Forgot Password" and "Sign Up" links.

---

## **User Stories**

1. **As a USER**, I want to view a list of today's medications, so I can easily see what I need to take and mark them as done.
2. **As a USER**, I want to add new medications with details like dosage, frequency, and start date.
3. **As a USER**, I want to see a weekly summary of my adherence, so I can track my progress visually.
4. **As a USER**, I want to view a history of my medications, so I can monitor adherence and usage trends.
5. **As a USER**, I want a simple login system to access my personalized data securely.

---

## **How to Run the Project**

1. Clone the repository:
   ```bash
   git clone https://github.com/AlexSaxena/track-my-meds.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TrackMyMeds
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## **Features in Progress**

- **Notification System**: Push notifications to confirm different actions to the user.
- **Data Persistence**: Save medication data in localStorage or connect to a backend API.
- **Mobile Optimization**: Further refine responsiveness for smaller screens.

---

## **Future Plans**

- **Medication Refill Alerts**: Notify users when their stock is running low.
- **User Authentication**: Implement full authentication and user management.
- **Advanced Reporting**: Provide detailed adherence / consistency reports and insights.

---
