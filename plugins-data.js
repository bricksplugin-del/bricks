/* ======================================================================================================
   BrickS — LES PLUG-INS  (une entrée par plug-in)
   Pour ANNONCER LA SORTIE d'un plug-in GRATUIT : changez  statut: "bientot"  en  statut: "disponible"  et collez le lien de
   téléchargement direct (le .pkg ou un .zip hébergé : GitHub Releases, Dropbox, votre hébergeur...) dans  telechargementMac: "https://…". Pour la version Windows (installeur .exe) : telechargementWin: "https://…" (vide = « Windows bientôt » affiché).
   Les instruments marqués pro: true (BrickS Arena, BeatForge) ne sont pas gratuits : leur page d'achat, leur essai et leur prix sont dans config.js (pro.arena, pro.beatforge).
   Pour ajouter un plug-in : copiez un bloc { … }, changez les textes, déposez une image dans le dossier img/.
   ====================================================================================================== */
window.BRICKS_PLUGINS = [
  {
    id: "arena", accroche: "Le synthé qu'on dessine : deux moteurs, un double filtre, des sons qu'on n'entend nulle part ailleurs.", nom: "BrickS Arena", genre: "Synthétiseur Pro — deux moteurs, double filtre, matrice", couleur: "#ff6fb5", image: "img/arena.webp", pro: true,
    resume: "Le mélange de tout BrickS, en un seul instrument très pointu. Deux moteurs à anneaux (Halo et Eclipse FM) qu'on dessine en déplaçant des cercles, un double filtre où chaque filtre est une arène de billes, une matrice de modulation, des enveloppes et LFO dessinables, un multi-effets, et un générateur de patchs qui apprend ce que vous aimez.",
    points: ["Deux moteurs en un : Halo (3 anneaux, modulation en anneau) et Eclipse (4 opérateurs FM)", "Double filtre-arène : 20 couleurs de résonance, billes de coupure, d'isolation et de résonance qui respirent", "Stéréo propre à chaque moteur : 10 modes (fréquence, harmoniques, orbital, collision…)", "Matrice de modulation, macros, molette, aftertouch, vélocité, glissando", "4 enveloppes et 4 LFO qui se dessinent à la souris", "Polyphonique, Mono ou Duo, avec piles de voix désaccordées", "Générateur de patchs qui apprend vos goûts + 378 presets d'usine"],
    benefices: [
      ["Deux moteurs, un son", "Halo (3 anneaux) et Eclipse (FM à 4 opérateurs) jouent ensemble. On dessine le son en déplaçant des cercles."],
      ["Un double filtre en arène", "Chaque filtre est une arène de billes : coupure, isolation, résonances. 20 couleurs de résonance, des billes qui respirent."],
      ["Un générateur qui apprend", "Il fabrique des patchs, apprend ce que vous gardez, et fait des variantes du son que vous choisissez. 240 presets d'usine."],
      ["Un instrument qui se joue", "Matrice de modulation, macros, molette, aftertouch, vélocité, glissando. Poly, Mono ou Duo."]
    ],
    formats: ["Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-Arena-3.10.0-Mac.zip", telechargementWin: ""
  },
  {
    id: "nova", accroche: "Le synthé des prods : basses qui tapent, leads de rue, tout se relie en touchant.", nom: "Nova", genre: "Synthétiseur polyphonique", couleur: "#ff8a3d", image: "img/nova.webp",
    resume: "Deux oscillateurs hybrides, deux filtres, une matrice de modulation et une chaîne d'effets de studio. Vous reliez une macro, un LFO ou une enveloppe à n'importe quel potard simplement en les touchant l'un après l'autre.",
    points: ["8 voix, 2 oscillateurs hybrides (classique + table d'onde)", "Matrice de modulation : 10 sources × 24 destinations", "Assignation « par le geste » : touchez la source, puis le réglage", "Chimère, écho à bande, réverbe, filtre de sortie"],
    formats: ["Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-Nova-1.1.2-Mac.zip", telechargementWin: ""
  },
  {
    id: "nebula", accroche: "Nappes sombres et textures de cave, tirées de n'importe quel sample.", nom: "Nebula", genre: "Synthétiseur de textures", couleur: "#a98bff", image: "img/nebula.webp",
    resume: "Trois moteurs de matière : un nuage de grains tiré de n'importe quel son, un oscillateur de matière qui se brise, une table d'onde qui se dessine. Pour les nappes, les drones et les leads de cinéma.",
    points: ["Moteur granulaire : glissez un son, il devient un nuage", "Carte XY qui fond quatre caractères de nappe", "Table d'onde dessinée à la souris", "Génération de patchs cohérents par catégorie"],
    formats: ["Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-Nebula-1.0.3-Mac.zip", telechargementWin: ""
  },
  {
    id: "neptune", accroche: "Le son des synthés des années 80 : basses, leads et nappes pour poser sous un flow.", nom: "Neptune", genre: "Synthé lead, basse, synthwave", couleur: "#3d9bff", image: "img/neptune.webp",
    resume: "Un oscillateur numérique de synthé des années 80, un nuage de grains tiré de n'importe quel son — ou de lui-même — et quatre macros assignables à tout.",
    points: ["DCO façon synthé historique, le son des années 80", "Grains tirés d'un fichier ou de la sortie du synthé lui-même", "4 macros et 2 LFO assignables en touchant les réglages", "Idéal basses, leads, synthwave"],
    formats: ["Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-Neptune-1.0.3-Mac.zip", telechargementWin: ""
  },
  {
    id: "halo", accroche: "Le son naît de cercles qu'on déplace : des cloches glacées pour vos mélodies.", nom: "Halo", genre: "Synthétiseur à anneaux", couleur: "#2ee6b8", image: "img/halo.webp",
    resume: "Le son naît de la géométrie. Trois anneaux dans une arène, un centre qui écoute, des billes qui résonnent : vous dessinez le patch en déplaçant des cercles, qui peuvent aussi être lancés et rebondir tout seuls.",
    points: ["Pas de matrice cachée : la position des cercles EST le patch", "Cercles Warp, Fold, Wrap, Pulse et billes de résonance", "Chorus, délai, délai d'intervalles, réverbe shimmer « Galaxie »", "Enveloppes et LFO qui se dessinent à la souris"],
    formats: ["Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-Halo-1.2.0-Mac.zip", telechargementWin: ""
  },
  {
    id: "eclipse", accroche: "La FM enfin lisible : on dessine les opérateurs, du clavier froid à la basse qui cogne.", nom: "Eclipse", genre: "Synthétiseur FM à anneaux", couleur: "#ffb347", image: "img/eclipse.webp",
    resume: "La modulation de fréquence se dessine. Quatre anneaux-opérateurs, un centre qui écoute : le croisement de deux anneaux règle l'indice FM. Deux cercles pour la brillance (Index) et pour les sons de cloche (Bell).",
    points: ["Quatre opérateurs sinus, rapports de x0,25 à x16", "Le croisement des anneaux = l'indice de la FM", "Cercles Index (brillance) et Bell (inharmonique, cloche, verre)", "Enveloppe d'indice : pianos électriques, cloches, nappes"],
    formats: ["Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-Eclipse-1.2.0-Mac.zip", telechargementWin: ""
  },
  {
    id: "multifx", accroche: "Les effets de studio dans un seul plug-in : vocal throws, tape, lofi, cloud, animés par enveloppes et LFO.", nom: "Multi FX", genre: "Multi-effets", couleur: "#4cd07a", image: "img/multifx.webp",
    resume: "Six effets de studio dans un seul plug-in, que cinq enveloppes et cinq LFO animent sur n'importe quel réglage : délai, délai d'intervalles, chorus, bande magnétique, bitcrusher, réverbe.",
    points: ["Délai à six caractères + délai d'intervalles (échos qui montent d'octave)", "Réverbe à huit machines dont Shimmer « Galaxie »", "Bande magnétique et bitcrusher pour salir ou vieillir", "5 enveloppes + 5 LFO assignables à tout, tilt et limiteur en sortie"],
    formats: ["Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-Multi-FX-1.1.1-Mac.zip", telechargementWin: ""
  },
  {
    id: "fracture", accroche: "Découpe n'importe quel sample et le rejoue autrement : bégaiements, chops, chaos.", nom: "Fracture", genre: "Découpeur rythmique à chaos — instrument & effet", couleur: "#ff4d5e", image: "img/fracture.webp",
    resume: "Il découpe n'importe quel son en tranches, comprend ce que chacune est — kick, caisse claire, charley, note — puis le rejoue autrement. Un seul bouton, CHAOS, va de la boucle intacte au chaos total.",
    points: ["Version instrument (une boucle) et version effet (écoute une piste en direct)", "Couche granulaire, carte XY, effets par pas (distorsion, stéréo, filtre)", "Export du résultat en fichier, ou glissé directement dans la DAW", "Déterministe : même graine, même résultat"],
    formats: ["Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-Fracture-1.0.3-Mac.zip", telechargementWin: ""
  },
  {
    id: "drumforge", accroche: "La boîte à rythmes qui génère vos kits : les machines de légende, modélisées.", nom: "DrumForge", genre: "Boîte à rythmes générative", couleur: "#ff8a1f", image: "img/drumforge.webp",
    resume: "Une boîte à rythmes qui se fabrique et se génère : neuf machines de légende modélisées d'après leurs circuits, douze voix synthétisées, quatre pads d'échantillons, un séquenceur génératif par pad.",
    points: ["TR-808, 909, 707, 606, CR-78 et d'autres, recalées sur les originaux", "Patch aléatoire en un clic, séquenceur génératif par pad", "Une chaîne d'effets complète pour chaque pad, export des sons et des boucles", "Glissez le résultat directement sur une piste de votre DAW"],
    formats: ["Application", "Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-DrumForge-1.5.1-Mac.zip", telechargementWin: ""
  },
  {
    id: "beatforge", accroche: "La boîte à beats : vos sons en dossiers, vos boucles en tranches.", nom: "BeatForge", genre: "Boîte à rythmes d'échantillons et de boucles — Pro", couleur: "#2fd8ff", image: "img/beatforge.webp", pro: true,
    resume: "Deux pages sur une seule horloge : seize pads qui sont chacun un dossier de vos sons, et seize pads où vos boucles sont découpées en tranches. Un séquenceur génératif, un CHAOS qui envoie la tête de lecture dans tous les sens, une sortie MASTER commune.",
    points: ["Page A : un pad = un dossier de vos samples (tirage sans répétition) ; page B : vos boucles découpées en tranches, plusieurs boucles à la fois", "Séquenceur génératif, page GLITCH et CHAOS sur les deux pages, une chaîne d'effets complète pour chaque pad", "Une seule horloge, un décompte avant l'enregistrement, un métronome ; groupes de pads pour régler plusieurs sons ensemble", "Page MASTER commune : égaliseur, compresseur, saturateur et limiteur ; glissez la boucle vers la DAW (un fichier, 16 pistes ou MIDI)"],
    benefices: [
      ["Vos sons, vos boucles", "Seize pads-dossiers de vos samples, et seize pads de boucles découpées : une boucle sur les premiers pads, une autre toute différente sur les suivants."],
      ["Un séquenceur qui invente", "Séquenceur génératif, page GLITCH, et un CHAOS qui envoie la tête de lecture dans tous les sens, sur les deux pages."],
      ["Du plug-in à la piste", "Une horloge commune, un décompte, une page MASTER pour tout lier, puis exportez ou glissez la boucle, les pistes séparées ou le MIDI vers votre DAW."]
    ],
    formats: ["Application", "Audio Unit", "VST3"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-BeatForge-0.6.0-Mac.zip", telechargementWin: ""
  },
  {
    id: "kitengine", accroche: "Range des milliers de samples en vrac dans les bons dossiers : le ménage de la cave.", nom: "KitEngine", genre: "Outil de classement de samples", couleur: "#3dff9a", image: "img/kitengine.webp",
    resume: "Donnez-lui des milliers de samples en vrac : il les écoute, les classe dans les seize dossiers des pads de BeatForge, les renomme — et ne touche jamais à vos originaux.",
    points: ["Analyse et classe automatiquement kicks, snares, hats, percussions…", "Renomme proprement, sans jamais modifier vos fichiers d'origine", "Prépare les seize dossiers prêts pour BeatForge : un « dossier racine » que BeatForge et DrumForge lisent directement", "Un exemple de dossier racine est dans chacun des packs de sons à télécharger (section Packs du site) : ouvrez-en un pour voir ce que KitEngine produit", "Application autonome"],
    formats: ["Application"], statut: "disponible", telechargementMac: "https://github.com/bricksplugin-del/brickss-forge/releases/download/gratuits-v1/BrickS-KitEngine-1.0.4-Mac.zip", telechargementWin: ""
  }
];
