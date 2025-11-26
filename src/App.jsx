import ASCIIText from './components/ASCIIText';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Design from './components/Design';
import Impact from './components/Impact';
import Reflection from './components/Reflection';
import Citations from './components/Citations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section with ASCII Title */}
      <Hero />
      
      {/* Main Content */}
      <main className="relative">
        <Introduction />
        <Problem />
        <Solution />
        <Design />
        <Impact />
        <Reflection />
        <Citations />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
