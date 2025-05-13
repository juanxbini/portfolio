import Header from './layout/Header';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactBar from './components/ContactBar';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <Header />
      <ProfileCard />
      <AboutMe />
      <Projects />
      <ContactBar />
    </div>
  );
}

export default App;
