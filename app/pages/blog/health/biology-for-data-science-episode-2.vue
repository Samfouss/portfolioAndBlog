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
            La data science et la génomique : Episode 2
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
              class="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 md:p-10 border border-green-100 mb-8"
            >
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-green-100 rounded-lg">
                  <Microscope class="h-8 w-8 text-green-600" />
                </div>
                <h2 class="text-3xl font-bold text-gray-900">
                  La biologie pour la data science et la génomique
                </h2>
              </div>
              <div class="space-y-4 text-gray-700 leading-relaxed">
                <p class="text-lg">
                  A mon humble avis, connaitre les bases de la biologie n'est
                  pas un luxe. Cette étape est essentielle pour comprendre les
                  données génomiques (que représente le contenu des données ?),
                  vous guider tout au long du traitement (choix de la méthode
                  d'analyse, identification des biais biologiques) et vous aider
                  à en tirer les connaissances pertinentes (collaboration
                  efficace avec les experts, interprétations justes).
                </p>
                <div
                  class="bg-white rounded-lg p-6 border-l-4 border-blue-500 mt-6"
                >
                  <p class="text-gray-700 leading-relaxed">
                    <span class="font-semibold text-gray-900"
                      >Rassurez-vous</span
                    >
                    il n'est pas question ici de devenir biologiste ou de
                    comprendre tous les termes utilisés par les biologistes (on
                    laisse cela aux experts du domaine) mais plutôt de
                    comprendre juste assez pour analyser, interpréter et
                    manipuler correctement des données génomiques.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Cells Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-blue-100 rounded-lg">
                <Atom class="h-8 w-8 text-blue-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Que faudrait-il savoir autour des cellules ?
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                D'entrée de jeu, sachez qu'une cellule est la plus petite unité
                du vivant capable de produire de l'énergie, de fonctionner en
                toute autonomie et de se multiplier.
              </p>
            </div>
          </section>

          <!-- Three Domains Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-purple-100 rounded-lg">
                <FlaskConical class="h-6 w-6 text-purple-600" />
              </div>
              <h2 class="text-xl font-bold text-gray-900">
                Les trois domaines du vivant
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                On distingue trois grands domaines du vivant :
                <strong class="font-semibold text-gray-900">eucaryotes</strong>,
                <strong class="font-semibold text-gray-900">archées</strong> et
                <strong class="font-semibold text-gray-900">bactéries</strong>.
                Les
                <strong class="font-semibold text-gray-900">archées</strong> et
                les
                <strong class="font-semibold text-gray-900">bactéries</strong>,
                souvent regroupées sous le nom de
                <strong class="font-semibold text-gray-900">procaryotes</strong
                >, se ressemblent beaucoup. Si les
                <strong class="font-semibold text-gray-900">eucaryotes</strong>
                possèdent un noyau qui abrite l'ADN, les
                <strong class="font-semibold text-gray-900">procaryotes</strong>
                n'ont pas de noyau ; leur ADN est libre dans la cellule.
              </p>
            </div>
          </section>

          <!-- Cell Cycle Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-indigo-100 rounded-lg">
                <ArrowRight class="h-6 w-6 text-indigo-600" />
              </div>
              <h2 class="text-xl font-bold text-gray-900">
                Le cycle cellulaire
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Toutes les cellules de notre corps ou de tout être vivant
                suivent un cycle cellulaire : elles croissent, répliquent leur
                ADN, puis se divisent. Chez les humains en particulier :
              </p>
              <ul class="list-disc list-outside space-y-3 ml-6 text-gray-700">
                <li class="pl-2">
                  La mitose produit deux cellules filles identiques et conserve
                  le caractère diploïde (deux copies de chaque chromosome, une
                  de chaque parent)
                </li>
                <li class="pl-2">
                  Certaines cellules se différencient ensuite en types
                  cellulaires spécialisés, à partir de cellules souches
                </li>
              </ul>
              <p>
                <strong class="font-semibold text-gray-900"
                  >Une petite précision :</strong
                >
                Il existe aussi une autre forme de division : la méiose,
                utilisée pour produire les spermatozoïdes et les ovules. Cette
                division cellulaire implique de la recombinaison, un échange de
                fragments entre chromosomes de la mère et du père. Cette
                recombinaison, combinée aux mutations, explique pourquoi chaque
                enfant d'un même couple possède un ensemble unique de
                chromosomes, source majeure de diversité génétique chez les
                humains.
              </p>
            </div>
          </section>

          <!-- Inside Cell Section -->
          <section class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-gray-900">
              Maintenant qu'on sait ce qu'est une cellule, que faut-il savoir de
              ce qui se passe à l'intérieur ?
            </h2>
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-orange-100 rounded-lg">
                <Sparkles class="h-5 w-5 text-orange-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">
                À l'intérieur de la cellule : les protéines
              </h3>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Avant d'aborder cette partie, j'aimerais que vous pensiez à une
                nourriture que vous aimez beaucoup : le steak (ou les brocolis
                si vous préférez) par exemple. Lorsque vous en prenez une
                bouchée, vous entrez en interaction immédiate avec des
                molécules. C'est de toutes ces interactions entre les molécules
                que vos sens captent pour vous donner ce goût en bouche. Ces
                molécules sont appelées des protéines.
              </p>
              <p>
                Les protéines sont nombreuses mais elles sont toutes constituées
                des mêmes blocs de construction appelés acides aminés, avec des
                fonctions différentes. Dans le vivant, il existe
                <strong class="font-semibold text-gray-900"
                  >20 acides aminés principaux</strong
                >. Ainsi, c'est à partir de ces
                <strong class="font-semibold text-gray-900"
                  >20 acides aminés</strong
                >
                que sont formées les protéines. Il existe un tableau qui recense
                les
                <strong class="font-semibold text-gray-900"
                  >20 acides aminés</strong
                >
                avec leurs noms et les lettres correspondantes (<a
                  href="https://fr.wikipedia.org/wiki/Modèle:Codons_par_acide_aminé"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                >
                  Wikipedia
                  <ArrowRight class="h-4 w-4 inline" /> </a
                >). Ces lettres sont très importantes dans la représentation des
                données des différentes protéines. Ce qui définit la fonction
                d'une protéine est l'ordre de ses acides aminés et sa structure
                tridimensionnelle.
              </p>

              <p class="font-semibold">Exemple concret :</p>
              <p>
                Prenons l'insuline, une protéine hormonale produite par le
                pancréas. Elle sert à réguler le sucre dans le sang (glycémie).
                Elle est constituée à la base de 110 acides aminés. Ainsi, les
                données de l'insuline pourraient ressembler à :
              </p>
              <div
                class="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto"
              >
                Insuline =
                MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN
              </div>
            </div>
          </section>

          <!-- DNA Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-cyan-100 rounded-lg">
                <ArrowRight class="h-6 w-6 text-cyan-600" />
              </div>
              <h2 class="text-xl font-bold text-gray-900">
                Comment passe-t-on de l'ADN à la protéine ?
              </h2>
            </div>
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-blue-100 rounded-lg">
                <Dna class="h-5 w-5 text-blue-600" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">
                L'ADN : le code génétique
              </h3>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Tout commence par le
                <strong class="font-semibold text-gray-900"
                  >code génétique</strong
                >
                de l'ADN (acide désoxyribonucléique). L'ADN est une molécule qui
                contient tout le matériel génétique d'un organisme vivant
                (humains, microbes, plantes…). Comme les protéines, l'ADN est
                composé de quatre nucléotides différents qu'on appelle souvent
                des bases :
                <strong class="font-semibold text-gray-900">A (adénine)</strong
                >,
                <strong class="font-semibold text-gray-900">G (guanine)</strong
                >,
                <strong class="font-semibold text-gray-900"
                  >C (cytosine)</strong
                >
                <strong class="font-semibold text-gray-900">T (thymine)</strong
                >.
                <strong class="font-semibold text-gray-900"
                  >Les purines (A et G)</strong
                >
                ont une structure à deux cycles et sont plus grandes et
                <strong class="font-semibold text-gray-900"
                  >les pyrimidines (C et T)</strong
                >
                ont une structure à un cycle et plus petites.
              </p>
            </div>
          </section>

          <!-- DNA Structure Section -->
          <section class="mb-12">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-purple-100 rounded-lg">
                <FileCode class="h-5 w-5 text-purple-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900">
                Structure de l'ADN
              </h3>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'ADN est constitué de deux brins (un brin positif et un brin
                négatif) enroulés l'un autour de l'autre, et chaque brin est une
                succession de nucléotides. L'ADN est soumis à une règle
                d'appariement qui lie toujours :
              </p>
              <ul class="list-disc list-outside space-y-2 ml-6 text-gray-700">
                <li class="pl-2">A à T</li>
                <li class="pl-2">C à G</li>
              </ul>
              <p>
                C'est-à-dire que sur un brin, A fait toujours face à T et C
                toujours à G : c'est la complémentarité. C'est grâce à cette
                complémentarité que l'ADN arrive à se répliquer. Le brin positif
                de l'ADN se lit de 5' à 3' et le brin négatif, son
                complémentaire, de 3' à 5'. Sauf indication contraire, les
                données de l'ADN dans les bases de données se lisent toujours de
                5' à 3'. L'ADN dans la cellule fait plus de 2 mètres de long et
                est enroulé autour de protéines appelées histones, puis
                super-enroulé pour former les chromosomes. Les données de l'ADN
                pourraient ainsi se présenter comme suit :
              </p>
              <div class="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                ADN = ACTTATGGAAGTA…
              </div>
            </div>
          </section>

          <!-- RNA Section -->
          <section class="mb-12">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-green-100 rounded-lg">
                <Mail class="h-5 w-5 text-green-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900">
                L'ARN : l'intermédiaire
              </h3>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Une autre molécule très importante à connaître est l'ARN (acide
                ribonucléique). L'ARN est fabriqué à partir d'une ou de
                certaines portions de l'ADN. Il est similaire à l'ADN mais avec
                quelques différences :
              </p>
              <ul class="list-disc list-outside space-y-2 ml-6 text-gray-700">
                <li class="pl-2">
                  À la place de la thymine (T), on a plutôt l'uracile (U)
                </li>
                <li class="pl-2">
                  Si l'ADN est bicaténaire (deux brins), l'ARN n'en possède
                  qu'un seul brin
                </li>
              </ul>
              <p>
                Ainsi, on peut passer de l'ADN à l'ARN en remplaçant la thymine
                par l'uracile dans une chaîne de bases. Le processus qui permet
                de passer de l'ADN à l'ARN est appelé la transcription.
              </p>
            </div>
          </section>

          <!-- Translation Section -->
          <section class="mb-12">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-yellow-100 rounded-lg">
                <Code class="h-5 w-5 text-yellow-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900">
                De l'ARN aux protéines : la traduction
              </h3>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                La fonction principale de l'ARN est de servir de « matrice »
                pour la création de protéines. En effet, grâce à la machinerie
                cellulaire, les nucléotides de l'ARN sont traduits en protéines.
                Dans ce processus, trois nucléotides appelés codons sont lus
                simultanément tout au long du brin de l'ARN pour former des
                chaînes d'acides aminés (rappelez-vous : les protéines sont
                constituées d'acides aminés).
              </p>
            </div>
          </section>

          <!-- Central Dogma Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-indigo-100 rounded-lg">
                <ArrowRight class="h-8 w-8 text-indigo-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Le dogme central du fonctionnement de nos cellules et la réalité
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p class="font-semibold text-blue-900 mb-2">
                  ADN → (transcription) → ARN → (traduction) → Protéines
                </p>
                <p class="text-blue-800">
                  L'ADN qui contient le code génétique est transcrit pour
                  produire l'ARN, puis ce dernier est traduit pour constituer
                  des chaînes d'acides aminés qui forment les protéines.
                </p>
              </div>
              <p class="font-semibold">Attention : La boucle de rétroaction</p>
              <p>
                Cependant, il convient de préciser que ce sens unidirectionnel
                du fonctionnement de la machinerie cellulaire n'est pas
                exactement ce qui se passe en réalité. En effet, ces mêmes
                protéines produites par ce processus sont celles qui régulent en
                retour toute l'activité cellulaire, créant ainsi une boucle de
                rétroaction. Les protéines produites par les cellules de notre
                cerveau, par exemple, ne sont pas les mêmes que celles de nos
                yeux ou de nos pieds, et n'ont donc pas le même rôle
                fonctionnel. Certaines protéines sont responsables de la
                régulation génétique :
              </p>
              <ul class="list-disc list-outside space-y-2 ml-6 text-gray-700">
                <li class="pl-2">
                  Elles peuvent activer ou inhiber la transcription de l'ADN (ce
                  sont les facteurs de transcription)
                </li>
                <li class="pl-2">
                  Participer à la traduction des codons en acides aminés
                </li>
                <li class="pl-2">
                  Modifier l'ADN par des mécanismes épigénétiques (comme la
                  méthylation)
                </li>
              </ul>
              <p>
                D'autres protéines ont des rôles structurels, enzymatiques ou de
                transport. C'est en grande partie grâce à ces mécanismes de
                régulation que toutes les cellules possèdent le même ADN mais
                peuvent jouer des rôles différents dans notre corps : les
                facteurs de transcription et les facteurs épigénétiques
                déterminent quels gènes sont activés ou désactivés dans chaque
                type cellulaire, créant ainsi la diversité fonctionnelle des
                cellules.
              </p>
            </div>
          </section>

          <!-- Genotype Phenotype Section -->
          <section class="mb-12">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 bg-pink-100 rounded-lg">
                <Eye class="h-8 w-8 text-pink-600" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Du génotype au phénotype : ce que nous voyons et ce qui se cache
              </h2>
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Si vous êtes tout près d'un ami, d'un collègue de travail ou
                d'un inconnu dans le bus, en regardant cette personne, vous
                remarquerez qu'elle a des yeux, un nez, une tête, une couleur de
                peau… Tout ce que vos yeux arrivent à voir est appelé le
                phénotype. C'est précisément tout ce que vous pouvez observer
                chez un organisme vivant. Le génotype, c'est l'ensemble des
                gènes qui participent à tout le mécanisme permettant à nos
                cellules et à notre corps de fonctionner.
              </p>
              <p>
                Vous l'aurez compris, la génomique s'intéresse principalement à
                comment le génotype influence le phénotype. C'est cette relation
                complexe entre le génotype et le phénotype que le data
                scientiste cherchera à comprendre en génomique à partir des
                données biologiques.
              </p>
              <p class="font-semibold">Un exemple concret :</p>
              <p>
                Les études d'association à l'échelle du génome (GWAS) consistent
                principalement à comparer les fréquences de mutations
                spécifiques trouvées dans les génomes d'une population (appelées
                SNPs - polymorphismes nucléotidiques simples) pour identifier
                les variants génétiques associées à des traits ou des maladies.
              </p>
            </div>
          </section>

          <!-- Summary Section -->
          <section class="mb-12">
            <div
              class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 border border-blue-100"
            >
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-blue-100 rounded-lg">
                  <BookOpen class="h-8 w-8 text-blue-600" />
                </div>
                <h2 class="text-3xl font-bold text-gray-900">
                  Que faut-il retenir de cet article ?
                </h2>
              </div>
              <p class="text-lg text-gray-700 mb-8 font-medium">
                Si l'on prend le corps humain comme une entreprise avec des
                usines :
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Card 1: Cellules -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"
                    >
                      <Factory class="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-2">Les cellules</h3>
                      <p class="text-gray-700 text-sm leading-relaxed">
                        Les usines de l'entreprise qui produisent et organisent
                        tout le fonctionnement.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Card 2: Protéines -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                    >
                      <Cog class="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-2">
                        Les protéines
                      </h3>
                      <p class="text-gray-700 text-sm leading-relaxed">
                        À la fois les machines et ouvriers qui exécutent les
                        tâches spécifiques dans les usines.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Card 3: ADN -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"
                    >
                      <BookOpen class="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-2">L'ADN</h3>
                      <p class="text-gray-700 text-sm leading-relaxed">
                        Le manuel de l'usine, contenant toutes les instructions
                        nécessaires pour construire et faire fonctionner les
                        machines et les ouvriers.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Card 4: ARN -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
                    >
                      <Mail class="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-2">L'ARN</h3>
                      <p class="text-gray-700 text-sm leading-relaxed">
                        Le copiste ou le messager qui prend les instructions de
                        l'ADN et les transmet aux machines et aux ouvriers pour
                        produire les protéines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Génotype et Phénotype -->
              <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center"
                    >
                      <Dna class="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-2">Le génotype</h3>
                      <p class="text-gray-700 text-sm leading-relaxed">
                        Correspond aux instructions codées dans l'ADN.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white rounded-lg p-6 shadow-md border-l-4 border-pink-500 hover:shadow-lg transition-shadow"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center"
                    >
                      <Eye class="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-2">Le phénotype</h3>
                      <p class="text-gray-700 text-sm leading-relaxed">
                        Le résultat observable de toutes ces activités.
                      </p>
                    </div>
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
                    <span class="font-semibold text-gray-900"
                      >Cet article offre seulement un aperçu global</span
                    >
                    des bases biologiques cellulaires et moléculaires
                    essentielles ; selon le type de projet sur lequel un data
                    scientiste est amené à travailler, un approfondissement
                    ciblé, en collaboration avec les experts du domaine sera
                    toujours nécessaire pour maîtriser pleinement les aspects
                    spécifiques du sujet d'intérêt.
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
  Microscope,
  Dna,
  Atom,
  FlaskConical,
  FileCode,
  Code,
  ArrowRight,
  Factory,
  Cog,
  BookOpen,
  Mail,
  Sparkles,
  Eye,
} from "lucide-vue-next";

useHead({
  title: "La biologie pour la data science et la génomique - Episode 2",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les bases de la biologie essentielles pour comprendre et analyser les données génomiques en data science.",
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
</style>
