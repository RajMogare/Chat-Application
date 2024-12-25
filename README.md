# Chat Application

This is a Full-Stack **Real-time Chat Messaging App** built using the latest technologies, offering a seamless user experience with powerful real-time communication capabilities. It features personal and group chats, user profile management, contact search, and much more.

## Live Demo
Access the live application here: [Chat Application](https://chat-application-q1gejujv0-rajmogares-projects.vercel.app/)

### Key Features
- **Real-time messaging:** Powered by Pusher for instant communication.
- **Seen/Unseen messages:** Easily track the status of your messages.
- **Authentication:** Secure login and registration using NextAuth.
- **Personal and Group Chats:** Create personal chats or group chats as needed.
- **Search contacts and chats:** Quickly find contacts or conversations.
- **Edit Profile:** Update your user profile and manage group chat information.
- **Stunning UI:** Designed with Tailwind CSS for a modern, responsive interface.
- **Image Upload and Storage:** Integrated with Next Cloudinary for effortless image handling.
- **Reusable Components:** Designed with scalability in mind using reusable UI components.
- **Real-time Contact Search:** Find contacts instantly while typing.
- **Logout Functionality:** Securely log out of your account.

---

## What I Learned
This project has been an incredible learning journey. Here are some of the key takeaways:

- **Mastered Next.js 14:** Advanced features like Client-Side Rendering and Next.js layout route groups.
- **MongoDB Expertise:** Hands-on experience with handling and populating nested schemas in MongoDB.
- **NextAuth Integration:** Secure user authentication with a modern library.
- **Real-time Messaging:** Implemented real-time chat functionality using Pusher.
- **React-Hook-Form:** Streamlined form validation and error handling.
- **Tailwind CSS:** Crafted a stunning UI with minimal effort.
- **Next Cloudinary:** Managed image uploads and storage effectively.
- **Reusable Components:** Built components for scalability and maintainability.
- **Deployment:** Successfully deployed the application on Vercel.

---

## Technologies Used
- **Frontend:** Next.js 14, React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** NextAuth
- **Real-time Messaging:** Pusher
- **Form Validation:** React-Hook-Form
- **Image Uploads:** Next Cloudinary
- **Deployment:** Vercel

---

## Features Breakdown

### User Authentication
- Login and register securely using NextAuth.
- Role-based access control and session management.

### Chat Functionalities
- Start personal chats or create group chats.
- Real-time messaging with seen/unseen message indicators.

### Profile Management
- Update your user profile or group chat information.

### Search
- Search contacts and chat conversations easily.

### Image Upload
- Upload profile pictures or share images in chats using Next Cloudinary.

---

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/RajMogare/Chat-Application.git
   cd chat-application
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env.local` file in the root of your project and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   PUSHER_APP_ID=your_pusher_app_id
   PUSHER_KEY=your_pusher_key
   PUSHER_SECRET=your_pusher_secret
   CLOUDINARY_URL=your_cloudinary_url
   ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

5. **Build for Production:**
   ```bash
   npm run build
   ```

---

## Screenshots

### Login and Register Page
![Screenshot 2024-12-25 152016](https://github.com/user-attachments/assets/4020d6ed-b7cb-4d69-9f10-c61c3bbc22b6)

![Screenshot 2024-12-25 152032](https://github.com/user-attachments/assets/dcacc0ae-65ca-49ac-9c48-982cd54f66d4)


### Chat List
![Screenshot 2024-12-25 152105](https://github.com/user-attachments/assets/f14e088f-71ca-42a4-81e8-c5c6bd873b32)

![Screenshot 2024-12-25 152144](https://github.com/user-attachments/assets/d5fa3ddd-742d-4ce3-a824-791a2f8e7f72)


---

