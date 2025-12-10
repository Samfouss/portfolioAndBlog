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
            La data science et la génomique : Épisode 4
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
                <Terminal class="h-8 w-8 text-blue-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Le « shell Unix » pour la data science et la génomique
              </h2>
            </div>
          </section>

          <!-- What is Unix Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-indigo-100 rounded-lg">
                <Server class="h-6 w-6 text-indigo-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                Qu'est-ce qu'Unix ?
              </h3>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Unix est un système d'exploitation créé en 1969. Il permet de
                gérer les ressources de l'ordinateur et fait le lien entre le
                matériel et l'utilisateur (vous). Pour communiquer avec Unix (le
                système), on utilise un terminal avec un interpréteur (le
                shell).
              </p>
              <p>
                Aujourd'hui, Unix fait référence à une famille de systèmes
                d'exploitation multi-tâches et multi-utilisateurs, notamment
                Linux, macOS et divers systèmes BSD (Berkeley Software
                Distribution).
              </p>
            </div>
          </section>

          <!-- Why Unix Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-purple-100 rounded-lg">
                <Zap class="h-6 w-6 text-purple-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                Pourquoi a-t-on besoin des outils de « shell Unix » ?
              </h3>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Le système Unix est reconnu pour sa fiabilité et sa sécurité
                très avancée. Contrairement à certains systèmes d'exploitation
                graphiques, Unix permet d'effectuer des analyses personnalisées
                complexes sur de grands volumes de données. C'est un système
                particulièrement adapté pour manipuler, filtrer, trier et
                analyser des fichiers de données de grandes tailles.
              </p>
              <p>
                Par ailleurs, sa force réside aussi dans le fait qu'à partir de
                commandes permettant d'accomplir des tâches simples, il est
                possible de créer des pipelines complexes (un enchaînement de
                plusieurs programmes) et de se connecter à des serveurs
                puissants pour des traitements lourds (puissance de calcul
                élevée). Ainsi, comprendre ces outils permet à l'utilisateur de
                les combiner afin de traiter de grandes quantités de données
                biologiques.
              </p>
            </div>
          </section>

          <!-- Getting Started Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-green-100 rounded-lg">
                <BookOpen class="h-6 w-6 text-green-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                Par où commencer pour apprendre les bases du « shell Unix » ?
              </h3>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'interpréteur de commandes que nous allons utiliser tout au
                long de cet article est le bash (Bourne Again Shell). À partir
                du terminal (ou l'invite de commande), nous allons pouvoir lui
                donner des instructions à interpréter et à exécuter.
              </p>

              <!-- How to get bash -->
              <div class="mt-6">
                <h4 class="text-xl font-bold text-gray-900 mb-4">
                  1. Comment avoir le bash sur votre ordinateur ?
                </h4>
                <ul class="list-disc list-outside space-y-3 ml-6 pl-2">
                  <li>
                    <strong class="font-semibold text-gray-900"
                      >Si vous utilisez Windows</strong
                    >, vous pouvez installer WSL (Windows Subsystem for Linux)
                    ou utiliser une machine virtuelle ou Docker pour exécuter
                    vos commandes. Il est toutefois recommandé d'utiliser WSL.
                  </li>
                  <li>
                    <strong class="font-semibold text-gray-900"
                      >Sur macOS</strong
                    >, le terminal Bash ou Zsh est déjà intégré. Vous avez juste
                    à chercher « Terminal » dans la liste des applications
                    utilitaires.
                  </li>
                  <li>
                    <strong class="font-semibold text-gray-900"
                      >Sous Linux</strong
                    >, le Bash est généralement installé par défaut. Vous n'avez
                    qu'à le chercher dans les applications ou le menu.
                  </li>
                </ul>
                <div
                  class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 mt-4"
                >
                  <p class="text-gray-700 text-sm">
                    <strong class="font-semibold text-gray-900"
                      >Important :</strong
                    >
                    Assurez-vous d'avoir accès au bash sur votre ordinateur pour
                    la suite !
                  </p>
                </div>
              </div>

              <!-- Navigation Section -->
              <div class="mt-8">
                <h4 class="text-xl font-bold text-gray-900 mb-4">
                  2. Naviguer à travers les dossiers et manipuler les
                  fichiers/dossiers avec le bash
                </h4>
                <p class="mb-4">
                  À partir de maintenant, oubliez l'utilisation graphique de
                  l'explorateur de fichiers. Tout ce que vous faisiez avec
                  l'explorateur de fichiers, vous allez pouvoir le faire avec le
                  bash. Imaginez que votre ordinateur soit comme une grande
                  maison avec des pièces (dossiers) contenant des objets
                  (fichiers de tout type). Le bash vous permet, à partir de
                  commandes simples, de vous déplacer à travers les pièces
                  (dossiers) et d'en manipuler le contenu (les fichiers).
                </p>
                <p class="mb-4">
                  Dans cet article, nous utiliserons WSL, la sous-distribution
                  Linux de Windows. Une fois configuré et bien installé, il vous
                  suffit de l'ouvrir en tapant « WSL » dans la liste de vos
                  applications.
                </p>

                <!-- Navigation commands -->
                <div class="mt-6">
                  <h5 class="text-lg font-bold text-gray-900 mb-4">
                    a. Naviguer à travers les dossiers
                  </h5>
                  <div
                    class="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4"
                  >
                    <p class="text-sm text-gray-600 mb-2">
                      <strong class="font-semibold text-gray-900"
                        >Notion de racine</strong
                      >
                      : Le système de fichiers dans un système d'exploitation a
                      un point de départ appelé la racine, symbolisé par
                      <code class="bg-gray-200 px-1 rounded">/</code>.
                    </p>
                  </div>

                  <!-- pwd command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">pwd</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet de savoir où vous vous trouvez dans le
                      système de fichiers, c'est-à-dire le dossier courant dans
                      l'arborescence.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700">
                          <p class="text-green-400 font-mono text-sm">pwd</p>
                        </div>
                        <div class="p-4 bg-gray-800">
                          <p class="text-gray-300 font-mono text-sm">
                            # Résultat : /home/utilisateur/Documents
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- cd command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">cd</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet de vous déplacer à travers les dossiers.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            cd Documents
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            cd /home/utilisateur
                          </p>
                          <p class="text-green-400 font-mono text-sm">cd ..</p>
                          <p class="text-green-400 font-mono text-sm">cd ~</p>
                          <p class="text-green-400 font-mono text-sm">cd -</p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Se déplacer vers le dossier Documents
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Chemin absolu
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Remonter d'un niveau
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Retourner au dossier personnel
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Retourner au dossier précédent
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ls command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">ls</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet d'obtenir la liste du contenu (fichiers
                      et dossiers) du dossier courant.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">ls</p>
                          <p class="text-green-400 font-mono text-sm">
                            ls Documents
                          </p>
                          <p class="text-green-400 font-mono text-sm">ls -a</p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Liste simple
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Liste le contenu du dossier Documents
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche tous les fichiers, y compris les fichiers
                            cachés
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ls -l command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">ls -l</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet d'obtenir plus de détails (type,
                      permissions, taille, date de modification, propriétaire)
                      sur chaque élément de la liste du contenu du dossier
                      courant.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700">
                          <p class="text-green-400 font-mono text-sm">ls -l</p>
                        </div>
                        <div class="p-4 bg-gray-800">
                          <p class="text-gray-300 font-mono text-sm">
                            # Résultat : -rw-r--r-- 1 user group 2048 Dec 10
                            10:30 sequences.fasta
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ls -lt command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">ls -lt</code>
                      :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet d'obtenir la liste du contenu par ordre
                      chronologique inversé (du plus récent au plus ancien).
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">ls -lt</p>
                          <p class="text-green-400 font-mono text-sm">
                            ls -ltr
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Trier par date de modification (plus récent en
                            premier)
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Trier par date (plus ancien en premier)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Wildcards -->
                  <div class="mt-6 mb-6">
                    <div
                      class="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4"
                    >
                      <p class="text-sm text-gray-600 mb-2">
                        <strong class="font-semibold text-gray-900"
                          >Notion de caractères génériques</strong
                        >
                        : Les caractères génériques permettent de sélectionner
                        plusieurs fichiers en une seule commande.
                      </p>
                      <ul class="list-disc list-outside space-y-1 ml-6 text-sm">
                        <li>
                          <code class="bg-gray-200 px-1 rounded">*</code> :
                          Remplace n'importe quelle séquence de caractères
                        </li>
                        <li>
                          <code class="bg-gray-200 px-1 rounded">?</code> :
                          Remplace un seul caractère
                        </li>
                        <li>
                          <code class="bg-gray-200 px-1 rounded">[]</code> :
                          Correspond à l'un des caractères entre crochets
                        </li>
                      </ul>
                    </div>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            ls *.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            ls sequence?.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            ls [abc]*.fastq
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Liste tous les fichiers se terminant par .fasta
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Liste sequence1.txt, sequenceA.txt, etc.
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Liste les fichiers commençant par a, b ou c
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- File manipulation commands -->
                <div class="mt-8">
                  <h5 class="text-lg font-bold text-gray-900 mb-4">
                    b. Manipuler les fichiers/dossiers
                  </h5>

                  <!-- mkdir command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">mkdir</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet de créer un dossier ou un répertoire.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            mkdir analyses
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            mkdir -p projet/data/raw
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Créer un dossier nommé "analyses"
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Créer une hiérarchie de dossiers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- mv command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">mv</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet de renommer un fichier ou un répertoire.
                      Cette commande permet également de déplacer un fichier ou
                      un dossier.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            mv ancien.txt nouveau.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            mv fichier.fasta ./data/
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            mv *.fastq ./sequences/
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Renommer un fichier
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Déplacer un fichier vers le dossier data
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Déplacer tous les fichiers .fastq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- cp command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">cp</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet de copier un ou plusieurs fichiers.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            cp genes.txt genes_backup.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            cp -r dossier1 dossier2
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            cp *.csv ./backup/
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Copier un fichier
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Copier un dossier et son contenu
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Copier tous les fichiers CSV
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- rm command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">rm</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet de supprimer un fichier ou plusieurs
                      fichiers définitivement.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            rm fichier.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            rm *.tmp
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            rm -i important.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            rm -r dossier/
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Supprimer un fichier
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Supprimer tous les fichiers .tmp
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Demander confirmation avant suppression
                          </p>
                          <p class="text-red-300 font-mono text-sm">
                            # Supprimer un dossier et son contenu (attention !)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- rmdir command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">rmdir</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet de supprimer un dossier vide uniquement.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700">
                          <p class="text-green-400 font-mono text-sm">
                            rmdir dossier_vide
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800">
                          <p class="text-gray-300 font-mono text-sm">
                            # Supprimer un dossier vide
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- File content commands -->
                <div class="mt-8">
                  <h5 class="text-lg font-bold text-gray-900 mb-4">
                    c. Accéder au contenu d'un fichier
                  </h5>

                  <!-- cat command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">cat</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Il s'agit d'une commande qui vous permet de visualiser le
                      contenu d'un fichier ou de concaténer le contenu de
                      plusieurs fichiers.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            cat sequences.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            cat fichier1.txt fichier2.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            cat *.txt > tous_les_fichiers.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Afficher le contenu d'un fichier
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Concaténer deux fichiers
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Fusionner tous les fichiers txt
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- head command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">head</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle affiche les premières lignes d'un fichier.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            head sequences.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            head -n 20 genes.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            head -n 5 *.csv
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche les 10 premières lignes (par défaut)
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche les 20 premières lignes
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche les 5 premières lignes de chaque fichier
                            CSV
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- tail command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">tail</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle affiche les dernières lignes d'un fichier.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            tail sequences.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            tail -n 50 log.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            tail -f log.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche les 10 dernières lignes
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche les 50 dernières lignes
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche en temps réel les nouvelles lignes
                            ajoutées
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- more command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">more</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle permet d'afficher le contenu d'un fichier page par
                      page.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700">
                          <p class="text-green-400 font-mono text-sm">
                            more long_fichier.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800">
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche page par page (Espace pour avancer)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- less command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">less</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Cette commande est une version améliorée et plus flexible
                      de `more`.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            less genome.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            less -S large_table.csv
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Navigation avec flèches, recherche avec /motif
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Désactiver le retour à la ligne automatique
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- wc command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">wc</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle permet de compter le nombre de lignes, de mots et de
                      caractères d'un fichier.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            wc sequences.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            wc -l genes.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            wc -w article.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            wc -c data.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche lignes, mots, caractères
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compte uniquement les lignes
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compte uniquement les mots
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compte uniquement les caractères
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- sort command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">sort</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Cette commande vous permet de trier le contenu d'un
                      fichier.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            sort noms.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            sort -r noms.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            sort -n scores.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            sort -k2 tableau.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            sort -u donnees.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Trier par ordre alphabétique
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Trier en ordre inverse
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Trier numériquement
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Trier selon la 2ème colonne
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Trier et supprimer les doublons
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- cut command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">cut</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle vous permet d'extraire le contenu d'un fichier par
                      colonne.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            cut -f1 tableau.tsv
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            cut -f1,3 tableau.tsv
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            cut -d',' -f2 data.csv
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            cut -c1-10 sequences.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Extraire la 1ère colonne (séparateur tab)
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Extraire les colonnes 1 et 3
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Extraire la 2ème colonne (séparateur virgule)
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Extraire les caractères 1 à 10
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- uniq command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">uniq</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle permet de supprimer les doublons dans un fichier.
                      L'élimination de doublons concerne les lignes consécutives
                      identiques.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            uniq donnees.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            uniq -c donnees.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            uniq -d donnees.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            sort donnees.txt | uniq
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Supprimer les lignes consécutives identiques
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compter les occurrences
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Afficher uniquement les doublons
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Trier puis supprimer tous les doublons
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- grep command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">grep</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Si vous cherchez un motif dans un fichier, c'est cette
                      commande qu'il faudra utiliser.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            grep "gene" sequences.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            grep -i "ATCG" genome.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            grep -c ">" sequences.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            grep -v "comment" data.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            grep -r "protein" ./
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            grep -n "error" log.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Rechercher le mot "gene"
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Recherche insensible à la casse
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compter le nombre d'occurrences
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Afficher les lignes ne contenant PAS le motif
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Recherche récursive dans tous les fichiers
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Afficher avec les numéros de ligne
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- diff command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">diff</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle permet de comparer deux fichiers ligne par ligne et
                      d'afficher les différences entre eux.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            diff fichier1.txt fichier2.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            diff -y file1.txt file2.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            diff -u old.txt new.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            diff -r dossier1/ dossier2/
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Comparer deux fichiers
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Comparaison côte à côte
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Format unifié (utile pour les patches)
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Comparer deux dossiers récursivement
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- comm command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">comm</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle compare deux fichiers triés ligne par ligne et
                      affiche les lignes uniques et communes.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            comm fichier1.txt fichier2.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            comm -12 file1.txt file2.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            comm -23 file1.txt file2.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # 3 colonnes : unique à 1, unique à 2, commun
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Afficher uniquement les lignes communes
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Afficher uniquement les lignes de fichier1
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-500 mt-3"
                    >
                      <p class="text-gray-700 text-sm">
                        <strong class="font-semibold text-gray-900"
                          >Note :</strong
                        >
                        les fichiers doivent être triés au préalable avec sort
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Compression commands -->
                <div class="mt-8">
                  <h5 class="text-lg font-bold text-gray-900 mb-4">
                    d. Compression et archivage des fichiers
                  </h5>

                  <!-- gzip command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">gzip</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle compresse des fichiers en utilisant l'algorithme de
                      compression GNU zip. Le fichier original est remplacé par
                      une version compressée avec l'extension .gz.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            gzip sequences.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            gzip -k genome.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            gzip -9 large_file.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            gzip *.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Compresse en sequences.fasta.gz
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compresse en gardant l'original (-k = keep)
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compression maximale (plus lent)
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compresser tous les fichiers .txt
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- gunzip command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">gunzip</code>
                      :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle décompresse les fichiers .gz créés par gzip.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            gunzip sequences.fasta.gz
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            gunzip -k genome.fasta.gz
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            gunzip -c data.gz > data.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Décompresse le fichier
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Décompresse en gardant le .gz
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Décompresse vers stdout
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- bzip2 command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">bzip2</code>
                      (Algorithme Burrows-Wheeler) :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle compresse des fichiers avec un meilleur taux de
                      compression que gzip, mais plus lentement. Crée des
                      fichiers .bz2.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            bzip2 genome.fasta
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            bzip2 -k sequences.txt
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            bzip2 -9 large_dataset.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Compresse en genome.fasta.bz2
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compresse en gardant l'original
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Compression maximale
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- bunzip2 command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">bunzip2</code>
                      (Algorithme Burrows-Wheeler) :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle décompresse les fichiers .bz2 créés par bzip2.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            bunzip2 genome.fasta.bz2
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            bunzip2 -k data.bz2
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Décompresse le fichier
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Décompresse en gardant le .bz2
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- zcat command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">zcat</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle affiche le contenu de fichiers compressés (.gz) sans
                      les décompresser.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            zcat sequences.fasta.gz
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            zcat genome.gz | head -n 20
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            zcat *.gz | grep "gene"
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche le contenu sans décompresser
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Affiche les 20 premières lignes
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Recherche dans tous les fichiers compressés
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- tar command -->
                  <div class="mb-6">
                    <p class="font-semibold text-gray-900 mb-2">
                      La commande
                      <code class="bg-gray-100 px-2 py-1 rounded">tar</code> :
                    </p>
                    <p class="text-gray-700 mb-3">
                      Elle permet de créer des archives (regrouper plusieurs
                      fichiers en un seul) et peut être combinée avec la
                      compression.
                    </p>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="p-4 border-r border-gray-700 space-y-2">
                          <p class="text-green-400 font-mono text-sm">
                            tar -cvf archive.tar dossier/
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            tar -xvf archive.tar
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            tar -czvf archive.tar.gz dossier/
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            tar -xzvf archive.tar.gz
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            tar -cjvf archive.tar.bz2 dossier/
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            tar -xjvf archive.tar.bz2
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            tar -tvf archive.tar
                          </p>
                          <p class="text-green-400 font-mono text-sm">
                            tar -xzvf archive.tar.gz fichier.txt
                          </p>
                        </div>
                        <div class="p-4 bg-gray-800 space-y-2">
                          <p class="text-gray-300 font-mono text-sm">
                            # Créer une archive (c=create, v=verbose, f=file)
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Extraire une archive (x=extract)
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Créer et compresser avec gzip
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Extraire une archive gzip
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Créer et compresser avec bzip2
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Extraire une archive bzip2
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Lister le contenu sans extraire
                          </p>
                          <p class="text-gray-300 font-mono text-sm">
                            # Extraire un fichier spécifique
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tip section -->
              <div
                class="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 mt-8"
              >
                <p class="text-gray-700">
                  <strong class="font-semibold text-gray-900">Astuce :</strong>
                  Si vous voulez plus de détails sur une commande en
                  particulier, la commande
                  <code class="bg-blue-100 px-2 py-1 rounded">man</code> suivie
                  du nom de la commande (ex :
                  <code class="bg-blue-100 px-2 py-1 rounded">man cd</code>)
                  affiche le manuel d'utilisation.
                </p>
              </div>
            </div>
          </section>

          <!-- Pipelines Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-orange-100 rounded-lg">
                <Workflow class="h-6 w-6 text-orange-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                Combiner les commandes avec les pipes
              </h3>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'une des forces d'Unix est la possibilité de combiner plusieurs
                commandes avec le pipe
                <code class="bg-gray-100 px-2 py-1 rounded">|</code>. Cela
                permet de créer des traitements complexes en enchaînant des
                opérations simples.
              </p>
              <div class="bg-gray-900 rounded-lg p-6 mt-6">
                <div class="space-y-4">
                  <div>
                    <p class="text-gray-400 text-sm mb-2">
                      # Compter le nombre de séquences dans un fichier FASTA
                    </p>
                    <p class="text-green-400 font-mono">
                      grep -c ">" sequences.fasta
                    </p>
                  </div>
                  <div>
                    <p class="text-gray-400 text-sm mb-2">
                      # Trouver les 10 gènes les plus fréquents
                    </p>
                    <p class="text-green-400 font-mono">
                      cut -f1 genes.txt | sort | uniq -c | sort -nr | head -n 10
                    </p>
                  </div>
                  <div>
                    <p class="text-gray-400 text-sm mb-2">
                      # Extraire les identifiants de séquences et les trier
                    </p>
                    <p class="text-green-400 font-mono">
                      grep ">" genome.fasta | cut -d' ' -f1 | sort >
                      identifiants.txt
                    </p>
                  </div>
                  <div>
                    <p class="text-gray-400 text-sm mb-2">
                      # Compter le nombre de lignes dans tous les fichiers
                      .fastq compressés
                    </p>
                    <p class="text-green-400 font-mono">
                      zcat *.fastq.gz | wc -l
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Conclusion Section -->
          <section class="mb-12 mt-16">
            <div
              class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 md:p-10 border border-indigo-200"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 p-3 bg-indigo-100 rounded-lg">
                  <Sparkles class="h-6 w-6 text-indigo-600" />
                </div>
                <div class="flex-1">
                  <p class="text-gray-700 leading-relaxed text-lg">
                    La force du Bash dans le traitement de données biologiques
                    volumineuses réside dans la combinaison intelligente et judicieuse
                    de commandes simples pour accomplir des tâches en apparence
                    complexes. Ainsi, même si ces commandes peuvent sembler basiques
                    au premier abord, elles constituent la base de pipelines puissants
                    et reproductibles pour l'analyse et le traitement des données
                    génomiques. Avec l'expérience et la pratique de projets réels, on
                    réalise pleinement à quel point leur maîtrise devient un atout
                    essentiel pour travailler efficacement en bio-informatique et plus
                    particulièrement en génomique.
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
  Terminal,
  Server,
  Zap,
  BookOpen,
  Workflow,
  Sparkles,
} from "lucide-vue-next";

useHead({
  title: "Le shell Unix pour la data science et la génomique - Episode 4",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les commandes Unix essentielles pour manipuler et analyser des données génomiques en data science.",
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

.prose h4 {
  color: rgb(17 24 39);
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.prose h5 {
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

.prose code {
  background-color: rgb(243 244 246);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}
</style>
