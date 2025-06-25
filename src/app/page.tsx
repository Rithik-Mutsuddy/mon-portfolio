'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import './i18n/i18n';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t, i18n } = useTranslation();

  const birthday = new Date('2002-11-17');
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
  const finalAge = hasHadBirthdayThisYear ? age : age - 1;

  const sections = ['about', 'experience', 'education', 'soft-skills', 'languages', 'hobbies'];
  const [currentSection, setCurrentSection] = useState('about');

  const refs = sections.map(() => useInView({ threshold: 0.5 }));

  useEffect(() => {
    refs.forEach(([_, inView], index) => {
      if (inView) {
        setCurrentSection(sections[index]);
      }
    });
  }, [refs.map(([_, inView]) => inView)]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <aside className="flex-[0.35] h-screen bg-gray-950 text-white p-8 flex flex-col justify-between fixed top-0 left-0">
        <div>
          <div className="flex gap-4 mb-8">
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="text-xl font-medium hover:text-blue-400">
              {t('mode')}
            </button>
            <button onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')} className="text-xl font-medium hover:text-blue-400">
              🌍 {i18n.language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          <div className="text-4xl font-bold mb-4">MUTSUDDY Rithik</div>
          <div className="text-xl text-blue-300 mb-4 h-6">
            <Typewriter
              words={[t('student'), t('apprentice')]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          <div className="text-lg text-gray-300 mb-8">{t('age', { age: finalAge })}</div>

          <nav className="space-y-4 text-xl font-semibold">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block transition-colors duration-300 ${currentSection === section ? 'text-blue-400' : 'text-white'}`}
              >
                {currentSection === section && <span className="mr-2 text-blue-400">------</span>}
                {t(section.replace('-', ''))}
              </a>
            ))}
              <a
                href="/projects"
                className="block transition-colors duration-300 hover:text-blue-400 text-white text-xl font-semibold mt-8"
               >
              {t('projects')}
              </a>

          </nav>
        </div>

        <div className="flex flex-col gap-3 text-xl">
          <div className="flex gap-5 text-3xl">
            <a href="https://rithik-mutsuddy.github.io/PortfolioRM/" target="_blank" className="hover:text-blue-400">🌐</a>
            <a href="https://github.com/rithik-mutsuddy" target="_blank" className="hover:text-blue-400">🐱</a>
            <a href="https://www.linkedin.com/in/rithik-mutsuddy-48115a250/" target="_blank" className="hover:text-blue-400">💼</a>
          </div>
          <button className="mt-2 underline hover:text-blue-400 text-lg">{t('viewCV')}</button>
        </div>
      </aside>

      <section className="ml-[35vw] flex-1 p-14 space-y-20 text-lg">
        <div id="about" ref={refs[0][0]} className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-6 border-b pb-2">À propos de moi</h2>
          <p>
            Développeur web fullstack curieux, rigoureux et autonome. Je recherche une alternance dans le développement d’applications (web ou mobile) à partir de Septembre 2025 à Septembre 2026.
          </p>
        </div>

        <div id="experience" ref={refs[1][0]} className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-6 border-b pb-2">Expérience</h2>
          <p className="font-semibold">💻 Développeur Web</p>
          <p><strong>Bidyanondo Foundation</strong> – Décembre 2023 à Février 2024 (2 mois)</p>
          <ul className="list-disc ml-6">
            <li>Conception et développement de sites web personnalisés pour des profils variés (organisations, freelances, associations).</li>
            <li>Création d’interfaces responsives avec HTML/CSS/JavaScript</li>
            <li>Intégration de maquettes, optimisation de l’UX/UI</li>
            <li>Mise en ligne et gestion des hébergements</li>
          </ul>
          <p className="mt-4"><strong>Dizaygn</strong> – Mai à Juillet 2023 (6 semaines)</p>
          <ul className="list-disc ml-6">
            <li>Réalisation de sites vitrines et e-commerce en étroite collaboration avec les clients</li>
            <li>Échanges directs pour comprendre les besoins et proposer des solutions adaptées</li>
            <li>Développement sur CMS (WordPress) ou en code pur selon les projets</li>
            <li>Livraison de produits clés en main avec formation client</li>
          </ul>

          <p className="font-semibold mt-6">🖥️ Support Technique & Réseau</p>
          <p>RCF en Berry – 2022, Bourges (4 semaines)</p>
          <ul className="list-disc ml-6">
            <li>Configuration et sécurisation du réseau local</li>
            <li>Gestion des comptes utilisateurs (droits, accès, maintenance)</li>
            <li>Résolution d’incidents techniques liés aux postes de travail</li>
          </ul>

          <p className="font-semibold mt-6">🛠️ Technicien Informatique / Réparateur</p>
          <p>Magasin Nestore – 2021, Bourges (5 semaines)</p>
          <p>Magasin Repair2Mobile – 2021, Bourges (2 semaines)</p>
          <ul className="list-disc ml-6">
            <li>Maintenance, diagnostics, réparations et assemblage de PC</li>
            <li>Clonage de disques, sauvegarde/restauration de données</li>
            <li>Accueil client et explication des interventions réalisées</li>
          </ul>

          <p className="font-semibold mt-6">🎧 Technicien Son & Multimédia</p>
          <p>RCF en Berry – 2020, Bourges (3 semaines)</p>
          <ul className="list-disc ml-6">
            <li>Montage audio, réglages sonores pour la diffusion</li>
            <li>Création et envoi de newsletters avec contenu multimédia</li>
            <li>Soutien technique sur les équipements de studio</li>
          </ul>
        </div>

        <div id="education" ref={refs[2][0]} className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-6 border-b pb-2">Études</h2>
          <ul className="space-y-6">
            <li>
              <p><strong>CESI Nanterre – Bachelor Concepteur Développeur d’Applications</strong></p>
              <p>📅 2024 – 2025</p>
              <p>
                Formation professionnalisante axée sur le développement web et mobile, l’architecture logicielle,
                la gestion de projet agile et la conception d’applications complètes.
              </p>
            </li>
            <li>
              <p><strong>Lycée Parc de Vilgénis – BTS SIO – Option SLAM</strong></p>
              <p>📅 2022 – 2024</p>
              <p>
                Spécialisation en développement d’applications (SLAM : Solutions Logicielles et Applications Métiers).
                Apprentissage des langages web (HTML/CSS/JS, PHP), bases de données (SQL), POO, frameworks (Symfony, Laravel).
              </p>
            </li>
            <li>
              <p><strong>Lycée Pierre-Émile Martin – BAC PRO SN – Option RISC</strong></p>
              <p>📅 2019 – 2022</p>
              <p>
                Formation centrée sur les réseaux informatiques et les systèmes communicants. Initiation à la maintenance matérielle,
                aux systèmes embarqués et à la cybersécurité.
              </p>
            </li>
          </ul>
        </div>

        <div id="soft-skills" ref={refs[3][0]} className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-6 border-b pb-2">Soft Skills</h2>
          <ul className="list-disc ml-6">
            <li>Curieux</li>
            <li>Adaptable</li>
            <li>Rigoureux</li>
            <li>Autonome</li>
            <li>Bon relationnel</li>
            <li>Travail d’équipe</li>
            <li>Communication claire</li>
          </ul>
        </div>

        <div id="languages" ref={refs[4][0]} className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-6 border-b pb-2">Langues</h2>
          <ul className="list-disc ml-6">
            <li><strong>Bengali</strong> – Langue native acquise au Bangladesh, utilisée couramment à l’écrit comme à l’oral.</li>
            <li><strong>Anglais</strong> – Maîtrise complète acquise au cours de 15 années de vie au Bangladesh, renforcée par une certification Erasmus.</li>
            <li><strong>Français</strong> – Sept années d’études en France, excellente aisance à l’écrit comme à l’oral. Niveau C1 confirmé.</li>
            <li><strong>Hindi</strong> – Usage courant à l’oral dans un cadre personnel et social.</li>
          </ul>
        </div>

        <div id="hobbies" ref={refs[5][0]} className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-6 border-b pb-2">Loisirs</h2>
          <ul className="list-disc ml-6">
            <li><strong>Musculation & sports de combat</strong> – Entraînement régulier en salle, pratique occasionnelle du MMA pour la discipline et le dépassement de soi.</li>
            <li><strong>Football & natation</strong> – Sport collectif et individuel pratiqués avec passion pour le bien-être et l’esprit d’équipe.</li>
            <li><strong>Musique & arts visuels</strong> – Guitariste autodidacte depuis 12 ans, passionné de dessin et de création artistique.</li>
            <li><strong>Culture geek & lecture</strong> – Amateur de manga, BD et science-fiction. Intérêt fort pour les univers narratifs immersifs et animés japonais.</li>
            <li><strong>Jeux vidéo</strong> – Passionné de jeux FPS, MMO et stratégie pour le travail d’équipe et les réflexes tactiques.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
