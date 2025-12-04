<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Article Container -->
    <article class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <header class="mb-12">
          <h1
            class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
          >
            La data science et la génomique : Episode 1
          </h1>
          <div class="flex items-center gap-4 text-sm text-gray-600">
            <span
              class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold"
            >
              Bioinformatique
            </span>
            <span
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold"
            >
              Genomique
            </span>

            <span
              class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-xs font-semibold"
            >
              Data Science
            </span>
          </div>
        </header>

        <!-- Article Content -->
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <!-- Introduction Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-blue-100 rounded-lg">
                <BarChart3 class="h-8 w-8 text-blue-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Qu'est-ce que la data science ?
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Pour au moins 99 % des personnes qui liront cet article, il est
                fort probable que le domaine de la data science ne vous soit pas
                étranger. Dans le cas contraire, en quelques mots la data
                science est une discipline qui permet d'extraire de la
                connaissance à partir de grandes quantités de données.
              </p>
              <p>
                Plus en détail, la science des données regroupe l'ensemble des
                méthodes statistiques, mathématiques (pour comprendre les
                modèles) et informatiques qui permettent de transformer des
                données brutes en informations utiles. Elle est utilisée dans de
                nombreux domaines de la vie quotidienne. Dans cet article comme
                dans ce blog, nous allons toutefois nous concentrer sur ses
                applications dans le domaine de la santé.
              </p>
            </div>
          </section>

          <!-- Genomics Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-green-100 rounded-lg">
                <Dna class="h-8 w-8 text-green-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Qu'est-ce que la Génomique ?
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                La génomique est une discipline qui s'intéresse à l'étude du
                génome de tout être vivant. Le génome est cette bibliothèque
                interne qui contient l'ensemble des informations nécessaires
                pour guider notre développement et notre évolution tout au long
                de notre vie. Il est constitué d'ADN (acide désoxyribonucléique)
                qui constitue le manuel d'instruction du fonctionnement d'un
                organisme.
              </p>
              <p>
                Dans le cas de l'espèce humaine, des études ont montré que nos
                génomes sont identiques à 99,9 %. Pourtant, les 0,1 % restants
                suffisent à expliquer nos différences physiques, notre
                susceptibilité aux maladies ou notre longévité. Ce faible
                pourcentage est à l'origine de notre diversité : couleur de
                peau, morphologie, prédispositions médicales, etc.
              </p>
            </div>
          </section>

          <!-- Data Science and Genomics Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-purple-100 rounded-lg">
                <Sparkles class="h-8 w-8 text-purple-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Que signifie "data science et génomique" ?
              </h2>
            </div>

            <div class="my-8 flex justify-center">
              <img
                :src="image1"
                alt="Data science et génomique"
                class="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                C'est tout simplement la discipline qui consiste à extraire de
                la connaissance à partir de grandes quantités de données
                génomiques. C'est un domaine à la croisée de trois mondes :
                biologie, statistique et informatique.
              </p>
              <p>
                Comment transforme-t-on concrètement l'information contenue dans
                nos cellules en données analysables ? <br />
                La réponse tient en un mot : le séquençage de l’ADN. <br />
                Pour comprendre ce processus, imagine que tu veux lire un livre
                immense, mais que ce livre se trouve à l’intérieur de chaque
                cellule. <br />
                Ce livre c'est l'ADN. <br />
                Le séquençage est simplement la méthode qui permet de lire le
                contenu de ce livre.
                <br />
                Comme l’ensemble du génome est constitué d’ADN, le séquençage
                permet donc de “lire” l’information biologique qu’il contient et
                de la convertir en données textuelles ou numériques,
                exploitables et analysables par des outils informatiques.
              </p>
            </div>
          </section>

          <!-- NGS Revolution Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-yellow-100 rounded-lg">
                <Zap class="h-8 w-8 text-yellow-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                La révolution du NGS
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Il est impossible de parler de data science et de génomique sans
                évoquer la révolution apportée par les NGS (Next-Generation
                Sequencing), ou séquençage de nouvelle génération. Il s'agit des
                technologies apparues entre 2005 et 2010, qui ont permis de
                démocratiser le séquençage en le rendant :
              </p>
              <ul class="list-disc list-outside space-y-3 ml-6 text-gray-700">
                <li class="pl-2">plus rapide,</li>
                <li class="pl-2">moins coûteux,</li>
                <li class="pl-2">
                  capable de produire des données à très grande échelle.
                </li>
              </ul>
              <p>
                Grâce à ces technologies de séquençage à haut débit, des
                quantités gigantesques de données biologiques sont produites.
                Mais ces données sont souvent complexes, biaisées, entachées
                d'erreurs et parfois bruyantes. Dans ce contexte, la data
                science devient indispensable pour analyser ces données et en
                extraire des connaissances fiables.
              </p>
            </div>
          </section>

          <!-- Data Scientist Work Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-indigo-100 rounded-lg">
                <UserCog class="h-8 w-8 text-indigo-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                À quoi ressemble le travail d'un data scientist en génomique ?
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Le travail du data scientiste en génomique commence par une
                question ou l'objectif poursuivi. Le travail de ce dernier en
                génomique pourrait porter sur par exemple : comprendre la
                résistance ou la vulnérabilité à certaines maladies, l'étude des
                traits génétiques propres à un groupe, l'analyse de la diversité
                génétique, comprendre l'expression de certains gènes, l'étude de
                certaines mutations responsables de certaines maladies, l'étude
                d'un tissu, connaitre la fonction de certaines parties du
                génome, comprendre le processus de régulation des gènes, ….
              </p>
              <p>
                En fonction de l'objectif poursuivi, le choix du design
                expérimental (de quel type de données a-t-on besoin ? le
                séquençage de l'ADN ou de RNA-seq ou ChIP-seq ou encore
                methyl-seq, …) est fait notamment le choix de l'échantillon, la
                quantité de données nécessaire et le type de technologie à
                utiliser. Suivra ensuite la collecte et la production de
                données.
              </p>
            </div>
          </section>

          <!-- Data Processing Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-cyan-100 rounded-lg">
                <Settings class="h-8 w-8 text-cyan-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Le traitement des données
              </h2>
            </div>

            <div class="my-8 flex justify-center">
              <img
                :src="image2"
                alt="Traitement des données génomiques"
                class="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Le traitement des données brutes issues du séquençage commence
                par l'alignement et l'assemblage des fragments d'ADN, appelés
                reads. Selon l'espèce étudiée, on aligne ces reads sur un génome
                de référence. Cette étape cruciale permet de repérer les
                différences par rapport à ce génome et d'assembler les fragments
                pour reconstruire les gènes ou les transcrits.
              </p>
              <p>
                Le séquençage n'étant jamais exempt d'erreurs, l'étape suivante
                consiste à corriger et normaliser les données à l'aide de
                méthodes statistiques pour :
              </p>
              <ul class="list-disc list-outside space-y-3 ml-6 text-gray-700">
                <li class="pl-2">rectifier les erreurs techniques,</li>
                <li class="pl-2">corriger les biais expérimentaux,</li>
                <li class="pl-2">
                  réduire le bruit aléatoire ou systématique.
                </li>
              </ul>
              <p>
                Ce n'est qu'après ces étapes que l'on peut procéder à l'analyse
                et à l'interprétation des données. En fonction de l'objectif
                initial, on applique alors diverses méthodes statistiques et
                d'apprentissage machine pour extraire du sens à partir de ces
                données biologiques. <br />
                La data science permet de transformer les données brutes issues
                du vivant en connaissances utiles pour la recherche, la médecine
                et la biologie.
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { 
  BarChart3, 
  Dna, 
  Sparkles, 
  Zap, 
  UserCog, 
  Settings,
  Database
} from 'lucide-vue-next'
import image1 from "~/assets/images/image1.PNG";
import image2 from "~/assets/images/image2.PNG";

useHead({
  title: "La data science et la génomique : Episode 1",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les fondamentaux de la data science et de la génomique, et comment ces deux domaines se rencontrent pour révolutionner la recherche médicale.",
    },
  ],
});
</script>

<style scoped>
.prose {
  color: rgb(55 65 81);
}

.prose h2 {
  color: rgb(17 24 39);
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.75;
}

.prose ul {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
  line-height: 1.75;
}

img {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
