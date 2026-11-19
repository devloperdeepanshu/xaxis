// ========================================================
// 🛠️ APNE LINKS YAHA SE EDIT KAREIN (EASY CONFIGURATION)
// Bas yahan apni profile aur links change karein:
// ========================================================

export const PROFILE = {
  name: "dosa junction",
  bio: "Welcome! Connect with us, explore updates, or leave a review below 👇",
  // Apni photo / logo ka URL yahan dalein ya local file use karein:
  avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
  verified: true,
  location: "Hisar Haryana"
};

export const THREE_BUTTONS = [
  // 1️⃣ GOOGLE REVIEW BUTTON
  {
    id: "google-review",
    type: "google-review",
    title: "Write a Google Review",
    subtitle: "Help us grow! Rate your experience with 5 stars ⭐",
    // 👇 APNA GOOGLE REVIEW LINK YAHA PASTE KAREIN:
    url: "https://search.google.com/local/writereview?placeid=ChIJ8crfsjEzEjkRXK3A06_6uHw",
    badge: "⭐️ 5.0 Rating",
    actionLabel: "Rate Us"
  },

  // 2️⃣ INSTAGRAM BUTTON
  {
    id: "instagram",
    type: "instagram",
    title: "Follow on Instagram",
    subtitle: "@dosa.junction • Daily updates, reels & insights",
    // 👇 APNA INSTAGRAM PROFILE LINK YAHA PASTE KAREIN:
    url: "https://www.instagram.com/dosajunctionhisar?bqrl=MXYxN2c4aW1lYXd1Zg==,
    badge: "📸 Connect",
    actionLabel: "Follow"
  },

  // 3️⃣ WHATSAPP BUTTON
  {
    id: "whatsapp",
    type: "whatsapp",
    title: "Chat on WhatsApp",
    subtitle: "Fast response • Direct queries & consultation",
    // 👇 APNA WHATSAPP LINK YAHA PASTE KAREIN (Format: https://wa.me/91XXXXXXXXXX?text=Hi):
    url: "",
    badge: "💬 Online",
    actionLabel: "Chat"
  }
];
