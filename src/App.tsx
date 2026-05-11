/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Events from './components/Events';
import SocialHub from './components/SocialHub';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-rose-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Events />
      <SocialHub />
      <Contact />
    </main>
  );
}
