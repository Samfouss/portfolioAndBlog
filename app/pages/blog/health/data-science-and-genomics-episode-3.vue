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
            La data science et la génomique : Episode 3
          </h1>
          <div class="flex items-center gap-4 text-sm text-gray-600">
            <span
              class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold"
            >
              Health
            </span>
            <span
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold"
            >
              Data Science
            </span>
          </div>
        </header>

        <!-- Article Content -->
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <!-- Introduction Section -->
          <section class="mb-12">
            <div
              class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-10 border border-blue-100 mb-8"
            >
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-blue-100 rounded-lg">
                  <Database class="h-8 w-8 text-blue-600" />
                </div>
                <h2 class="text-3xl font-bold text-gray-900">
                  Les bases de données biologiques
                </h2>
              </div>
              <div class="space-y-4 text-gray-700 leading-relaxed">
                <p class="text-lg">
                  Maintenant qu'on sait de quoi traitent les données biologiques
                  utilisées en génomique, où trouve-t-on les dites données ?
                </p>
                <p>
                  Bien avant d'aborder les sources de données, il est important
                  de préciser que les données biologiques peuvent se présenter
                  sous différents formats :
                </p>
                <ul class="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>Fichier texte</li>
                  <li>Base de données relationnelle</li>
                  <li>Base de données orientées objet</li>
                </ul>
                <p>
                  En fonction du contenu d'un fichier ou d'une base de données,
                  on distingue généralement les données primaires, les données
                  secondaires, ainsi que les bases de données spécialisées.
                </p>
              </div>
            </div>
          </section>

          <!-- Primary Data Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-green-100 rounded-lg">
                <FileText class="h-8 w-8 text-green-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                1. Les données primaires
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Les données primaires sont des données brutes, n'ayant subi
                aucune modification par la communauté scientifique.
              </p>
              <p>
                Il existe quatre grandes bases de données publiques qui
                fournissent ce type d'information, couvrant aussi bien le
                séquençage que la structure des macromolécules (ex. :
                protéines).
              </p>
              <p>
                Les trois premières centralisent l'ensemble des données
                primaires sur les acides nucléiques et échangent régulièrement
                leurs données, ce qui signifie qu'elles contiennent les mêmes
                séquences d'ADN :
              </p>
              <ul class="list-disc list-outside space-y-3 ml-6 pl-2">
                <li>
                  <strong class="font-semibold text-gray-900"
                    >GenBank / Nucleotide</strong
                  >
                  (NCBI – National Center for Biotechnology Information)
                  <a
                    href="https://www.ncbi.nlm.nih.gov/genbank/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 hover:underline ml-2 inline-flex items-center gap-1"
                  >
                    <ExternalLink class="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <strong class="font-semibold text-gray-900">EMBL-EBI</strong>
                  (European Nucleotide Archive – ENA)
                  <a
                    href="https://www.ebi.ac.uk/ena"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 hover:underline ml-2 inline-flex items-center gap-1"
                  >
                    <ExternalLink class="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <strong class="font-semibold text-gray-900">DDBJ</strong>
                  (DNA Data Bank of Japan)
                  <a
                    href="https://www.ddbj.nig.ac.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 hover:underline ml-2 inline-flex items-center gap-1"
                  >
                    <ExternalLink class="h-4 w-4" />
                  </a>
                </li>
              </ul>
              <div
                class="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 mt-6"
              >
                <p class="text-gray-700 leading-relaxed">
                  À ces bases s'ajoute la
                  <strong class="font-semibold text-gray-900">PDB</strong>
                  (Protein Data Bank), qui fournit des données sur la structure
                  des protéines, notamment les coordonnées tridimensionnelles
                  des atomes des protéines et acides nucléiques.
                </p>
                <div class="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.rcsb.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    PDB (USA)
                    <ExternalLink class="h-3 w-3" />
                  </a>
                  <a
                    href="https://www.ebi.ac.uk/pdbe"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    PDB (Europe)
                    <ExternalLink class="h-3 w-3" />
                  </a>
                  <a
                    href="https://pdbj.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    PDB (Japon)
                    <ExternalLink class="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <!-- Secondary Databases Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-purple-100 rounded-lg">
                <Layers class="h-8 w-8 text-purple-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                2. Les bases de données secondaires
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Les bases de données secondaires résultent du traitement, de
                l'annotation ou de l'analyse des données primaires. Parmi les
                plus importantes :
              </p>

              <div class="space-y-6 mt-6">
                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow"
                >
                  <h3
                    class="font-bold text-gray-900 mb-3 flex items-center gap-2"
                  >
                    <FileCode class="h-5 w-5 text-green-600" />
                    SWISS-PROT (protéines)
                    <a
                      href="https://www.uniprot.org/help/swiss-prot"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-green-600 hover:text-green-800 hover:underline ml-2 inline-flex items-center gap-1"
                    >
                      <ExternalLink class="h-4 w-4" />
                    </a>
                  </h3>
                  <ul
                    class="list-disc list-outside space-y-2 ml-6 pl-2 text-gray-700"
                  >
                    <li>
                      Contient une annotation détaillée des séquences :
                      structure, fonction, famille, etc.
                    </li>
                    <li>
                      Ces entrées proviennent en grande partie de TrEMBL (qui
                      traduit les données nucléotidiques d'EMBL).
                    </li>
                    <li>
                      Les données y sont de très haute qualité, car vérifiées
                      manuellement par des experts et faiblement redondantes.
                    </li>
                  </ul>
                </div>

                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
                >
                  <h3
                    class="font-bold text-gray-900 mb-3 flex items-center gap-2"
                  >
                    <Database class="h-5 w-5 text-blue-600" />
                    UniProt (UniProtKB, Swiss-Prot + TrEMBL)
                    <a
                      href="https://www.uniprot.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-600 hover:text-blue-800 hover:underline ml-2 inline-flex items-center gap-1"
                    >
                      <ExternalLink class="h-4 w-4" />
                    </a>
                  </h3>
                  <p class="text-gray-700 leading-relaxed">
                    Cette base de données résulte de la fusion de SWISS-PROT,
                    TrEMBL et PIR (Protein Information Resource). C'est l'une
                    des plus grandes bases protéiques, combinant qualité,
                    non-redondance et annotations riches.
                  </p>
                </div>

                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow"
                >
                  <h3
                    class="font-bold text-gray-900 mb-3 flex items-center gap-2"
                  >
                    <Layers class="h-5 w-5 text-purple-600" />
                    Pfam (Protein families database)
                    <a
                      href="https://www.ebi.ac.uk/interpro/set/pfam"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-purple-600 hover:text-purple-800 hover:underline ml-2 inline-flex items-center gap-1"
                    >
                      <ExternalLink class="h-4 w-4" />
                    </a>
                  </h3>
                  <p class="text-gray-700 leading-relaxed">
                    Fournit des alignements de séquences protéiques alignées,
                    des motifs et des modèles dérivés utilisés pour classifier
                    les familles de protéines et prédire leurs fonctions.
                  </p>
                </div>

                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow"
                >
                  <h3
                    class="font-bold text-gray-900 mb-3 flex items-center gap-2"
                  >
                    <Dna class="h-5 w-5 text-indigo-600" />
                    DALI (Structure alignment / fold comparison)
                    <a
                      href="http://ekhidna2.biocenter.helsinki.fi/dali"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-indigo-600 hover:text-indigo-800 hover:underline ml-2 inline-flex items-center gap-1"
                    >
                      <ExternalLink class="h-4 w-4" />
                    </a>
                  </h3>
                  <p class="text-gray-700 leading-relaxed">
                    Base dédiée aux structures secondaires des protéines.
                    Essentielle pour classifier les structures, analyser les
                    similarités et identifier des relations évolutives
                    lointaines entre protéines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Specialized Databases Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-orange-100 rounded-lg">
                <Search class="h-8 w-8 text-orange-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                3. Les bases spécialisées
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Les bases de données qui se concentrent sur des organismes bien
                précis (la souris, la levure, …) sont dites spécialisées. C'est
                le cas par exemple des bases de données comme :
              </p>
              <ul class="list-disc list-outside space-y-3 ml-6 pl-2">
                <li>
                  <strong class="font-semibold text-gray-900">Flybase</strong>
                  (qui contient des données biologiques sur les drosophiles)
                </li>
                <li>
                  <strong class="font-semibold text-gray-900">WormBase</strong>
                  (qui s'intéresse au Nématode)
                </li>
                <li>
                  <strong class="font-semibold text-gray-900">AceDB</strong>
                </li>
                <li>
                  <strong class="font-semibold text-gray-900">TAIR</strong>
                  (Arabidopsis thaliana)
                </li>
              </ul>
            </div>
          </section>

          <!-- Errors Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-red-100 rounded-lg">
                <AlertTriangle class="h-8 w-8 text-red-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Limites et erreurs dans les bases de données
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Cependant, il convient de souligner que les bases de données
                biologiques ne sont pas exemptes d'erreurs, notamment :
              </p>
              <ul class="list-disc list-outside space-y-3 ml-6 pl-2">
                <li>Erreurs dans les séquences (souvent dues au séquençage)</li>
                <li>
                  Redondance d'informations dans les données primaires (dû
                  principalement aux séquences similaires soumises, une mauvaise
                  gestion des bases de données)
                </li>
                <li>
                  Annotations inexactes ou incomplètes (mêmes gènes avec des
                  noms différents, ou noms identiques pour des gènes non
                  apparentés)
                </li>
              </ul>
              <div
                class="bg-green-50 rounded-lg p-6 border-l-4 border-green-500 mt-6"
              >
                <p class="text-gray-700 leading-relaxed">
                  Pour pallier ces limites, des ressources comme
                  <strong class="font-semibold text-gray-900"
                    >Gene Ontology</strong
                  >
                  (normalisation du vocabulaire biologique) et
                  <strong class="font-semibold text-gray-900">RefSeq</strong>
                  (réduction de la redondance) ont été développées.
                </p>
              </div>
            </div>
          </section>

          <!-- File Formats Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-indigo-100 rounded-lg">
                <FileCode class="h-8 w-8 text-indigo-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Comment se présentent concrètement un fichier de données
                biologique ?
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                La plupart des bases de données biologiques disposent d'une
                interface utilisateur, ainsi que d'un système de recherche de
                séquences (SRS — Sequence Retrieval System) permettant
                d'effectuer des requêtes simples ou avancées.
              </p>
              <p>
                Les opérateurs booléens
                <strong class="font-semibold text-gray-900">AND (&)</strong>,
                <strong class="font-semibold text-gray-900">OR (|)</strong> et
                <strong class="font-semibold text-gray-900">NOT (!)</strong>
                permettent d'affiner ces recherches.
              </p>
              <p>
                Les données peuvent être fournies sous différents formats de
                fichiers, notamment :
              </p>

              <div class="space-y-6 mt-6">
                <div
                  class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200"
                >
                  <h3
                    class="font-bold text-gray-900 mb-4 flex items-center gap-2"
                  >
                    <FileText class="h-5 w-5 text-blue-600" />
                    Format de GenBank ou Nucleotide
                  </h3>
                  <p class="text-gray-700 mb-4">
                    C'est le format de données le plus complet en termes
                    d'annotations de données. Le fichier de données au format
                    texte se compose en trois sections :
                  </p>
                  <ol
                    class="list-decimal list-outside space-y-2 ml-6 pl-2 text-gray-700 mb-4"
                  >
                    <li>
                      <strong class="font-semibold text-gray-900"
                        >En-tête</strong
                      >
                      : informations sur l'origine de la séquence, l'organisme
                      et un identifiant.
                    </li>
                    <li>
                      <strong class="font-semibold text-gray-900"
                        >Annotations</strong
                      >
                      : détails sur les gènes, les régions codantes, etc.
                    </li>
                    <li>
                      <strong class="font-semibold text-gray-900"
                        >Séquence</strong
                      >
                      : la séquence nucléotidique elle-même.
                    </li>
                  </ol>
                  <div
                    class="bg-white rounded-lg p-4 border border-gray-200 font-mono text-sm"
                  >
                    <div class="space-y-2">
                      <div class="flex items-start gap-2">
                        <span class="text-blue-600 font-bold">[ EN-TÊTE ]</span>
                        <span class="text-gray-600"
                          >→ description, organisme, identifiant</span
                        >
                      </div>
                      <div class="flex items-start gap-2">
                        <span class="text-blue-600 font-bold"
                          >[ ANNOTATIONS ]</span
                        >
                        <span class="text-gray-600"
                          >→ exons, gènes, régions codantes</span
                        >
                      </div>
                      <div class="flex items-start gap-2">
                        <span class="text-blue-600 font-bold"
                          >[ SÉQUENCE ]</span
                        >
                        <span class="text-gray-600">→ A C G T A C G T …</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200"
                >
                  <h3
                    class="font-bold text-gray-900 mb-4 flex items-center gap-2"
                  >
                    <Code class="h-5 w-5 text-green-600" />
                    Format FASTA
                  </h3>
                  <p class="text-gray-700 mb-4">
                    Ce fichier de donnée est le plus simple et le plus utilisé.
                    Il contient des informations brutes sur les séquences dans
                    un format facilement lisible par les programmes en
                    bio-informatique.
                  </p>
                  <ol
                    class="list-decimal list-outside space-y-2 ml-6 pl-2 text-gray-700 mb-4"
                  >
                    <li>
                      Le fichier commence par un chevron
                      <strong class="font-semibold text-gray-900">« > »</strong>
                      suivi par des informations sur le nom de la séquence. Des
                      informations additionnelles sont suivies par la suite
                      séparées par le symbole
                      <strong class="font-semibold text-gray-900">« | »</strong
                      >.
                    </li>
                    <li>
                      La séquence en elle-même commence sur la seconde ligne.
                    </li>
                  </ol>
                  <div
                    class="bg-white rounded-lg p-4 border border-gray-200 font-mono text-sm mb-4"
                  >
                    <div class="space-y-1">
                      <div class="text-green-700">
                        &gt;nom_de_la_sequence | info additionnelle
                      </div>
                      <div class="text-gray-600">ACGTTAGGCTAGTAAAGGGCTT...</div>
                    </div>
                  </div>
                  <div
                    class="bg-white rounded-lg p-4 border-l-4 border-yellow-500 mt-4"
                  >
                    <p class="text-gray-700 text-sm leading-relaxed">
                      <strong class="font-semibold text-gray-900"
                        >Note importante :</strong
                      >
                      L'inconvénient de ce fichier par rapport au format GenBank
                      est que la majorité des informations d'annotation est
                      perdue.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <p class="text-gray-700 mb-3">
                  En dehors de ces formats susmentionnés, on trouve également :
                </p>
                <ul class="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>
                    <strong class="font-semibold text-gray-900"
                      >Multi-FASTA</strong
                    >
                    (plusieurs entrées FASTA dans un même fichier)
                  </li>
                  <li>
                    <strong class="font-semibold text-gray-900">EMBL</strong>
                  </li>
                  <li>
                    <strong class="font-semibold text-gray-900">GFF/GTF</strong>
                    (formats d'annotation génomique)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Source Section -->
          <section class="mb-12 mt-16">
            <div
              class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 p-3 bg-gray-200 rounded-lg">
                  <BookOpen class="h-6 w-6 text-gray-600" />
                </div>
                <div class="flex-1">
                  <p class="text-gray-700 leading-relaxed">
                    <span class="font-semibold text-gray-900">Source :</span>
                    Xiong, Jin. Essential Bioinformatics. Cambridge University
                    Press, 2012.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import {
  Database,
  FileText,
  Layers,
  Search,
  AlertTriangle,
  FileCode,
  Code,
  Dna,
  BookOpen,
  ExternalLink,
} from "lucide-vue-next";

useHead({
  title: "Les bases de données biologiques - Episode 3",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les principales bases de données biologiques utilisées en génomique : données primaires, secondaires et spécialisées, ainsi que les formats de fichiers courants.",
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

.prose h3 {
  color: rgb(17 24 39);
  font-weight: 600;
  margin-top: 1.5rem;
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

.prose ol {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
