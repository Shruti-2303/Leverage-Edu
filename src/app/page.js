import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ReadySetGo from "./components/ReadySetGo/ReadySetGo";
import Hero from "./components/Hero/Hero";
import Advantage from "./components/Advantage/Advantage";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Advantage />
      <ReadySetGo />
      <Footer />
    </div>
  );
}
