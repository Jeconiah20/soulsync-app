## Soul Sync 🌿
A calming journaling web application designed to help users reflect, track moods, and reconnect with themselves—gently, without pressure.

## ✨ Features
- 🌱 Daily Mood Tracking - Check in with your emotions using an intuitive mood selector
- ✍️ Today's Journal - Spacious writing area to capture your thoughts and feelings
- 🎯 Daily Insights - Reflect on wins, set priorities, process lingering thoughts
- 🙏 Gratitude Practice - Record three things you're grateful for each day
- 🔐 Secure Authentication - Email-based signup and login with session persistence
- 💾 Personal Data Storage - All entries saved securely to PostgreSQL database
- 🎨 Calm, Beautiful UI - Soothing gradients and smooth animations for a peaceful experience
- 🔒 Privacy First - Row-level security ensures users only see their own entries
- 🛠️ Tech Stack

## Frontend
- React - UI component library
- Vite - Build tool and dev server
- CSS3 - Custom styling with animations
- Bootstrap - Responsive grid system

## Backend & Database
- Supabase - Backend as a Service
- PostgreSQL - Relational database
- Row Level Security (RLS) - User data isolation
- Supabase Auth - Authentication system

## 📦 Installation
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Supabase 

## Setup
### 1. Clone the repository
```
git clone https://github.com/Jeconiah20/soulsync-app.git
cd soulsync-app
```
### 2. Install dependencies
```
npm install
```
### 3. Set up Supabase
- Create a new project at supabase.com
- Go to SQL Editor and run this query:
  ```
  -- Create entries table
CREATE TABLE entries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  entry_type TEXT NOT NULL,
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE entries ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own entries" 
  ON entries FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own entries" 
  ON entries FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own entries" 
  ON entries FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own entries" 
  ON entries FOR DELETE 
  USING (auth.uid() = user_id);```

 ### 4. Configure environment variables
 Configure environment variables
 ```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Run the development server
```
npm run dev
```
The app will be available at http://localhost:5173

## 📁 Project Structure
```
soulsync-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Preview.jsx
│   │   ├── Footer.jsx
│   │   ├── Login.jsx
│   │   ├── Today.jsx
│   │   ├── TodaysInsights.jsx
│   │   └── Gratitude.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── supabaseClient.js
├── .env
├── .gitignore
├── package.json
└── vite.config.js
```

## 🎯 Usage
- Sign Up - Create an account with your email
- Confirm Email - Click the confirmation link sent to your email
- Sign In - Log in with your credentials
- Start Journaling:
- Today - Select your mood and write freely
- Today's Insights - Reflect on wins, priorities, and thoughts
- Gratitude - List three things you're grateful for

 
 ## 🔐 Security Features
Email verification required for signup
Secure password hashing via Supabase Auth
Row Level Security (RLS) prevents users from accessing others' data
Session management with automatic token refresh
Environment variables for sensitive credentials


## 🎨 Design Philosophy
Soul Sync is designed with mental wellness in mind:


## Calming color palette (soft pastels)
Smooth animations and transitions
Spacious layouts to reduce cognitive load
No streak tracking or pressure features
Privacy-first approach

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author
Jeconiah

GitHub: @Jeconiah20

