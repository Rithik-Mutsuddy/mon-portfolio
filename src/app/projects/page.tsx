'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Ressources Relationnelles',
    description: 'Projet d’équipe en cours qui imite un réseau social avec Next.js, React Native, MySQL et Docker.',
    image: '/images/RR twitter copie .png',
    github: 'https://github.com/dallalrym/Back',
  },
  {
    title: 'TaskMaster',
    description: 'Projet cours pour montrer comment utiliser docker, comment faire une géstionnaire des tâches',
    image: '/images/taskMaster.png',
    github: 'https://github.com/Damien-Codes/TaskMaster',
  },
  {
    title: ' SmartPhoto API',
    description: 'Projet autodidacte sur les APIs. Détection d’objets et extraction de métadonnées d’images.',
    image: '/images/image detection.png',
    github: 'https://github.com/rithik-mutsuddy/twitter-clone',
  },
    {
    title: 'Hiky Store',
    description: 'Projet de stage / site de ventre en ligne réalisées en groupe pour une cliente',
    image: '/images/hikystore.png',
    github: 'https://github.com/RogerAgo/HikyStore2',
  },
];

const skills: Record<string, Record<string, string>> = {
Développement: {
    HTML: 'https://developer.mozilla.org/fr/docs/Web/HTML',
    CSS: 'https://developer.mozilla.org/fr/docs/Web/CSS',
    PHP: 'https://www.php.net/',
    SQL: 'https://sql.sh/',
    SCSS: 'https://sass-lang.com/',
    Python: 'https://www.python.org/',
    JavaScript: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
    Java: 'https://www.oracle.com/java/',
    CSharp: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    XML: 'https://developer.mozilla.org/fr/docs/Web/XML',
    ReactJS: 'https://reactjs.org/',
    NextJS: 'https://nextjs.org/',
    ReactNative: 'https://reactnative.dev/',
    Laravel: 'https://laravel.com/',
    Symfony: 'https://symfony.com/',
  },
  Logiciels: {
    VSCode: 'https://code.visualstudio.com/',
    VS2022: 'https://visualstudio.microsoft.com/vs/',
    IntelliJ: 'https://www.jetbrains.com/idea/',
    Sublime: 'https://www.sublimetext.com/',
    Figma: 'https://figma.com/',
    EasyPHP: 'https://www.easyphp.org/',
    XAMPP: 'https://www.apachefriends.org/fr/index.html',
    MySQL: 'https://www.mysql.com/',
    Docker: 'https://www.docker.com/',
    Git: 'https://git-scm.com/',
    GitHub: 'https://github.com/',
  },
  Certifications: {
    ANSSI: 'https://www.ssi.gouv.fr/',
    SoloLearn: 'https://www.sololearn.com/',
    RGPD: 'https://www.cnil.fr/',
    Cisco: 'https://www.netacad.com/',
    CNIL: 'https://www.cnil.fr/',
  },
  Réseau: {
    VirtualBox: 'https://www.virtualbox.org/',
    Wireshark: 'https://www.wireshark.org/',
    DHCP: 'https://fr.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol',
    DNS: 'https://fr.wikipedia.org/wiki/Domain_Name_System',
    AD: 'https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview',
    TCPIP: 'https://fr.wikipedia.org/wiki/Suite_des_protocoles_Internet',
    Stormshield: 'https://www.stormshield.com/',
    Routing: 'https://fr.wikipedia.org/wiki/Routage_(informatique)',
  },
  Méthodologie: {
    Gantt: 'https://fr.wikipedia.org/wiki/Diagramme_de_Gantt',
    UML: 'https://fr.wikipedia.org/wiki/Unified_Modeling_Language',
    Merise: 'https://fr.wikipedia.org/wiki/Merise',
    ITIL: 'https://www.axelos.com/certifications/itil-service-management',
  },
  Cybersécurité: {
    RGPD: 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees',
    AccessSecurity: 'https://fr.wikipedia.org/wiki/Contr%C3%B4le_d%27acc%C3%A8s',
  },
  Infographie: {
    Gimp: 'https://www.gimp.org/',
    Digas: '#', // À remplir
    Audacity: 'https://www.audacityteam.org/',
    SweetHome3D: 'https://www.sweethome3d.com/fr/',
    Blender: 'https://www.blender.org/',
    Solidworks: 'https://www.solidworks.com/',
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-5xl font-bold mb-12 text-center">Mes Projets</h1>

{/* PROJETS */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
  {projects.map((project, i) => (
    <div
      key={i}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-xl transform hover:scale-105 transition duration-300"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>

        {/* Lien GitHub */}
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline text-sm"
        >
          Voir sur GitHub →
        </Link>
      </div>
    </div>
  ))}
</section>


      {/* COMPÉTENCES */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-center">Compétences</h2>
        {Object.entries(skills).map(([category, techs]) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
{Object.entries(techs).map(([name, link]) => (
  <Link
    key={name}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white 
    hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 transform"
  >
    {name}
  </Link>
))}

            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
