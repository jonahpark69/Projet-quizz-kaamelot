// Questions classées par niveau
const questions = {
    facile: [
        { quote: "Y'a pas à dire, dès qu'il y a du dessert, le repas est tout de suite plus chaleureux", correct: "Arthur", options: ["Arthur", "Perceval", "Léodagan"] },
        { quote: "Mais vous allez me foutre le camp, espèce de con !?", correct: "Arthur", options: ["Bohort", "Arthur", "Lancelot"] },
        { quote: "Moi je serais vous, j'irai me recoucher vite fait avant de prendre un pain !", correct: "Arthur", options: ["Arthur", "Bohort", "Merlin"] },
        { quote: "Ah, mais des tanches pareilles, on devrait les mettre sous verre, hein !", correct: "Arthur", options: ["Arthur", "Bohort", "Perceval"] },
        { quote: "Ah ! ben ça… i'faut se méfier, avec les mecs à cran !…", correct: "Arthur", options: ["Arthur", "Genièvre", "Père Blaise"] },
        { quote: "J’y connais rien, hein, mais… À votre avis, le fait que vous me touchiez pratiquement jamais, ça a une influence sur la fécondité ?", correct: "Genièvre", options: ["Yvain", "Genièvre", "Dame Séli"] },
        { quote: "Ils n'ont pas de bras les oiseaux, c'est affreux, j'ai toujours l'impression qu'il vont culbuter vers l'avant, ça n'a aucun sens.", correct: "Genièvre", options: ["Genièvre", "Karadoc", "Venec"] },
        { quote: "Vous savez où vous pouvez vous la mettre, votre potion ?", correct: "Genièvre", options: ["Arthur", "Le tavernier", "Genièvre"] },
        { quote: "Eh ben moi une fois, j’ai pissé par la fenêtre !", correct: "Genièvre", options: ["Genièvre", "Karadoc", "Perceval"] },
        { quote: "Mouais. Méfiez-vous des cons. Y en a qui vont beaucoup plus loin qu'on ne pense !", correct: "Genièvre", options: ["Léodagan", "Bohort", "Genièvre"] },
        { quote: "Jo le rigolo ???!!!", correct: "Bohort", options: ["Léodagan", "Bohort", "Père Blaise"] },
        { quote: "D'après mes derniers renseignements, il serait tout à fait possible que le Graal ne soit ni un vase, ni une coupe, mais... un récipient.", correct: "Bohort", options: ["Venec", "Le tavernier", "Bohort"] },
        { quote: "Ça vous ennuie si je vomis ?", correct: "Bohort", options: ["Bohort", "Yvain", "Karadoc"] },
        { quote: "Vous êtes un grand malade mental !", correct: "Bohort", options: ["Arthur", "Bohort", "Karadoc"] },
        { quote: "MÉÉCRÉÉAAAAAAAAANTS !", correct: "Bohort", options: ["Père Blaise", "Dame Séli", "Bohort"] },
        { quote: "(attendez, je mange avec le pape tous les midis moi.) Ah ouais ? Eh bien moi je mange avec mon tonton Gethenoc et ton pape TU PEUX TE LE FOUTRE DANS LE CUL !", correct: "Père Blaise", options: ["Père Blaise", "Arthur", "Léodagan"] },
        { quote: "Faudrait voir à pas oublier que sans les Romains, on serait jamais qu’une bande de pécores qui pataugent dans la bouse !", correct: "Père Blaise", options: ["Dame Séli", "Père Blaise", "Arthur"] },
        { quote: "Non mais attendez, je crois qu'on s'est mal compris, là : vous avez une idée du temps qu'il me faut pour tracer une lettre avec ces PUTAINS DE PLUMES ?!", correct: "Père Blaise", options: ["Léodagan", "Bohort", "Père Blaise"] },
        { quote: "Oh oui oui, c'est magnifique, oui, oui, il y a des taches, c'est tout barré, j'ai tellement raturé que j'ai transpercé le papier... C'est immonde... on dirait que j'ai lavé par terre avec, mais c'est fait...", correct: "Père Blaise", options: ["Père Blaise", "Dame Séli", "Arthur"] },
        { quote: "C'est chaste mais c'est pas officiel, et la Table Ronde c'est pas un bal costumé, merde !", correct: "Père Blaise", options: ["Arthur", "Père Blaise", "Léodagan"] },
        { quote: "La politique, j’en connais qu’une : un soldat pour trente péquenots et le premier bouseux qui se plaint des taxes, on lui coupe un pied !", correct: "Léodagan", options: ["Arthur", "Perceval", "Léodagan"] },
        { quote: "Vous parlez comme les bouquins. Bon, moi, c'est l'idée que j'm'en fais, j'peux pas blairer d'lire.", correct: "Léodagan", options: ["Léodagan", "Perceval", "Karadoc"] },
        { quote: "Non, mais attendez, vous faites semblant de négocier, tranquille. Pendant ce temps, moi je fais celui qui va pisser, là bas, et quand j'arrive à sa hauteur, tac, je sors ma dague et je l'ouvre en deux par le bas.", correct: "Léodagan", options: ["Venec", "Léodagan", "Lancelot"] },
        { quote: "J'pense pas que deux trous-du-cul soient plus efficaces qu’un seul !", correct: "Léodagan", options: ["Merlin", "Perceval", "Léodagan"] },
        { quote: "Calogrenant, c'est le roi des cons.", correct: "Léodagan", options: ["Léodagan", "Genièvre", "Père Blaise"] },
        { quote: "Mais y a rien à développer ! C'est de la merde, c'est de la merde, c'est tout ! Moi, on me sert ça dans une auberge, le tavernier, il s'prend une quiche dans sa tête !", correct: "Karadoc", options: ["Karadoc", "Dame Séli", "Merlin"] },
        { quote: "L'agneau était daubé du cul !", correct: "Karadoc", options: ["Perceval", "Karadoc", "Merlin"] },
        { quote: "Eh oui mémé, t'es bien mouchée!", correct: "Karadoc", options: ["Yvain", "Le tavernier", "Karadoc"] },
        { quote: "Des p'tits croutons tout vieux genre pour les lapins ? Ouais j'savais pas c'que c'était, dans le doute j'les ai bouffés.", correct: "Karadoc", options: ["Karadoc", "Merlin", "Perceval"] },
        { quote: "Les chicots, c'est sacré ! Parce que si j'les lave pas maintenant, dans dix ans, c'est tout à la soupe. Et l'mec qui me fera manger de la soupe il est pas né !", correct: "Karadoc", options: ["Léodagan", "Karadoc", "Venec"] },
        { quote: "Si on faisait le coup du bouclier humain ? [...] Par exemple, Sire, Léodagan et moi, on fait semblant de vous prendre en otage : on vous met une dague sous le cou et on traverse le camp adverse en gueulant : Bougez pas, bougez pas ou on bute le roi!...", correct: "Perceval", options: ["Léodagan", "Arthur", "Perceval"] },
        { quote: "Putain, en plein dans sa mouille !", correct: "Perceval", options: ["Perceval", "Merlin", "Léodagan"] },
        { quote: "Faut faire comme avec les scorpions qui se suicident quand ils sont entourés par le feu, faut faire un feu en forme de cercle, autour d’eux, comme ça ils se suicident, pendant que nous on fait le tour et on lance de la caillasse de l’autre côté pour brouiller... Non ?", correct: "Perceval", options: ["Karadoc", "Perceval", "Venec"] },
        { quote: "Toi, un jour, je te crame ta famille, toi.", correct: "Perceval", options: ["Arthur", "Perceval", "Léodagan"] },
        { quote: "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !", correct: "Perceval", options: ["Karadoc", "Merlin", "Perceval"] },
        { quote: "Ben moi, je sais pas si c’est de naissance ou quoi, mais la vue du bourgeois, ça me fait de l’aérophagie.", correct: "Le tavernier", options: ["Le tavernier", "Léodagan", "Venec"] },
        { quote: "Entre le roi Arthur qui est pas capable de dénicher son Graal, et la reine qui est con comme une chaise...", correct: "Le tavernier", options: ["Merlin", "Le tavernier", "Venec"] },
        { quote: "La seule solution pour que ce soye encore plus sale, ça serait de demander aux clients de chier directement par terre ! Je vois que ça.", correct: "Le tavernier", options: ["Perceval", "Karadoc", "Le tavernier"] },
        { quote: "C'est pour ça que j'ai jamais été rien réclamer à Kaamelott. Déjà, j'aime pas bien aller pleurnicher. Je bricole mes combines dans mon coin. Je préfère aller « excroquer », plutôt que d'embêter autrui. Vous voyez ?", correct: "Le tavernier", options: ["Le tavernier", "Venec", "Léodagan"] },
        { quote: "Euh dites, dans ceux que vous avez choisis, il y en a déjà qui commencent a dégobiller sur le plancher, qu'est ce que je fais ?", correct: "Le tavernier", options: ["Karadoc", "Le tavernier", "Perceval"] },
        { quote: "Je refuse d’aller me battre pour soutenir une politique d’expansion territoriale dont je ne reconnais pas la légitimité.", correct: "Yvain", options: ["Yvain", "Gauvain", "Venec"] },
        { quote: "Je le prends pas le bouclier, ça fait trop nul !", correct: "Yvain", options: ["Bohort", "Yvain", "Merlin"] },
        { quote: "Mon père, y dit toujours qu'on arrive jamais en prison par hasard.", correct: "Yvain", options: ["Père Blaise", "Arthur", "Yvain"] },
        { quote: "Quand il a ouvert le ventre du troll, j'ai reçu un jet d'acide qui m'a pratiquement acidifié !", correct: "Yvain", options: ["Yvain", "Perceval", "Karadoc"] },
        { quote: "Moi, je me suis fait dérober de l'alimentation tout le long du voyage ! Une véritable dérobade !", correct: "Yvain", options: ["Gauvain", "Yvain", "Merlin"] },
        { quote: "Viens voir biquette ! tortille un peu du fion pour le roi Arthur !", correct: "Venec", options: ["Venec", "Le tavernier", "Merlin"] },
        { quote: "Si on les invite et qu’y a pas d’femmes, vous allez fédérer mes couilles...", correct: "Venec", options: ["Arthur", "Venec", "Léodagan"] },
        { quote: "Je vous ai déjà dit que je prête du pognon à des taux vraiment pas dégueulasses ?", correct: "Venec", options: ["Arthur", "Lancelot", "Venec"] },
        { quote: "Des bandits ? Nooon... Des gars futés !", correct: "Venec", options: ["Venec", "Perceval", "Yvain"] },
        { quote: "Ah. Ah ben ça, ça vous pendait au nez. C’est un vrai fromage à trous, là, votre baraque : y’a pas une porte qui ferme, les gardes sont toujours en train de roupiller…", correct: "Venec", options: ["Léodagan", "Venec", "Perceval"] },
        { quote: "Des bons à rien, j’en ai vu, mais le coup de la Table Ronde, alors là… C’est le rendez-vous des mains dans les poches.", correct: "Dame Séli", options: ["Dame Séli", "Léodagan", "Genièvre"] },
        { quote: "Il y en a marre de se comporter comme des sagouins avec tout le monde, sous prétexte qu’on a des responsabilités !", correct: "Dame Séli", options: ["Arthur", "Dame Séli", "Lancelot"] },
        { quote: "Ah mais c'est vous qui m'cassez la tête ! Vous devriez être fier d'avoir un fils un peu moins bourrin qu'la moyenne !", correct: "Dame Séli", options: ["Arthur", "Genièvre", "Dame Séli"] },
        { quote: "Une fois j’ai craché sur les pompes de l’empereur Justinien, alors je vais pas me gratter pour l’un de ses sous-fifres !", correct: "Dame Séli", options: ["Dame Séli", "Léodagan", "Merlin"] },
        { quote: "De toutes façons, dans votre bled on peut pas faire trois pas sans tomber sur un site magique alors, s'il fallait sauter par dessus à chaque fois !", correct: "Dame Séli", options: ["Merlin", "Dame Séli", "Genièvre"] }
    ],
   
    moyen: [
        { quote: "Une heure avant, je me dis toujours : « Tiens, je vais déjeuner avec Perceval, ça me fait plaisir ». [...] Ça vous la coupe, ça, hein ? Bon, après, une fois que j'ai bouffé avec vous, je regrette, hein, on est d'accord. Arrivé au milieu du repas, j'ai toujours envie de vous éclater le crâne avec le tranchant de la coupe, là, vous voyez, pour vous faire... fermer votre gueule une bonne fois pour toutes... mais sinon... je vous aime.", correct: "Arthur", options: ["Arthur", "Guenièvre", "Karadoc"] },
        { quote: "Le seigneur Perceval ne se met jamais en situation dangereuse. Pour ça, il fait preuve d'une intelligence redoutable.", correct: "Arthur", options: ["Léodagan", "Arthur", "Lancelot"] },
        { quote: "Oubliez ce que je viens de dire. Le Graal, c'est de la merde.", correct: "Arthur", options: ["Perceval", "Karadoc", "Arthur"] },
        { quote: "Je gueule ; c'est vrai, j'suis un peu sec, tout ça... Mais pour quelqu'un comme moi, qui a facilement tendance à la dépression, c'est très important ce que vous faites, parce que... Comment vous dire... C'est systématiquement débile mais c'est toujours inattendu. Et ça c'est très important pour la... la santé du... du cigare...", correct: "Arthur", options: ["Perceval", "Dagonet", "Arthur"] },
        { quote: "Y'a trop de clampins qui se disent poètes qui sortent la licence poétique dès qu'ils pondent trois merdes que personne comprend.", correct: "Arthur", options: ["Caius Camillus", "Arthur", "Merlin"] },
        { quote: "Le cuir, ça restera toujours le cuir. Le cuir, ça traverse les âges, les frontières, les modes. D’autant qu’là j’vous ai pas mis d’la vache moisie, attention ! C’est d’la tannerie d’luxe ! Assemblé au crochet de six ! Y'a des heures de main d'œuvre derrière !", correct: "Breccan", options: ["Breccan", "Venec", "Le tavernier"] },
        { quote: "Ça vous dérange si… si j’mets ma p’tite griffe là ? Si y'a un chef de clan qui vient poser ses miches par là devant et il trouve ça cossu... Ben le jour où il voudra faire un buffet ou un plumard sur mesure... il saura où m’trouver, quoi.", correct: "Breccan", options: ["Venec", "Breccan", "Le tavernier"] },
        { quote: "C’est carré-carré chez vous, hein ?", correct: "Breccan", options: ["Dagonet", "Breccan", "Caius Camillus"] },
        { quote: "Après, moi, pour le détail, je sais pas...", correct: "Breccan", options: ["Perceval", "Merlin", "Breccan"] },
        { quote: "Sire, on en a déjà parlé de la pierre ! Je peux pas monter une pierre d’une toise et demie dans un escalier en colimaçon !", correct: "Breccan", options: ["Breccan", "Le tavernier", "Venec"] },
        { quote: "La fleur en bouquet fane, et jamais ne renaît !", correct: "Le roi burgonde", options: ["Le roi burgonde", "Bohort", "Genièvre"] },
        { quote: "Arthour ! Qu'est-ce à dire que ceci ? ON EST FORTS ! En pommes…", correct: "Le roi burgonde", options: ["Grudu", "Le roi burgonde", "Le seigneur jacca"] },
        { quote: "Jouer ! Guerre ! Salsifis !", correct: "Le roi burgonde", options: ["Grudu", "Kadoc", "Le roi burgonde"] },
        { quote: "Arthour, j’apprécie les fruits au sirop !", correct: "Le roi burgonde", options: ["Grudu", "Kadoc", "Le roi burgonde"] },
        { quote: "Non posso volo, no tépo mayo. Un posso volo, tandolon toulo. Tamasso (pet) tanlamalasso. Tamasso (pet) les oiseaux petits", correct: "Le roi burgonde", options: ["Le roi burgonde", "Kadoc", "Breccan"] },
        { quote: "N'empêche que chez nous, on sait construire ! Les aqueducs, c'est quand même un petit peu plus classe que vos murs en merde séchée… Enfin, je dis ça, je dis tout !", correct: "Caius Camillus", options: ["Caius Camillus", "Le duc d'aquitaine", "Lancelot"] },
        { quote: "On fait marrer tout le monde avec nos chenilles à la purée d'fraises et nos couilles d'oursins aux amandes, et je sais plus quelles autres saloperies !", correct: "Caius Camillus", options: ["Dagonet", "Caius Camillus", "Le seigneur jacca"] },
        { quote: "MAIS ARRÊTEZ J'ARRÊTE PAS DE RETROUVER DES P'TITES BOULETTES DE CACA PARTOUT ! Me prenez pas pour un con, sans blague, c'était une bergerie ici ?", correct: "Caius Camillus", options: ["Perceval", "Dame Séli", "Caius Camillus"] },
        { quote: "Le poisson qui étouffe sur la berge remue plus que celui qui est dans l’eau. C’est bien la preuve de ce que je dis : si on se débat, c’est qu’on est en train de crever.", correct: "Caius Camillus", options: ["Caius Camillus", "Dagonet", "Lancelot"] },
        { quote: "Hé les connards ! Vous pouvez faire griller un porcelet s'il vous plaît ?", correct: "Caius Camillus", options: ["Karadoc", "Caius Camillus", "Arthur"] },
        { quote: "Le premier truc qui frappe, c’est la langue. Vous savez ce que c’est, on arrive sur place, boum… En fait, c’est quand on commence à entendre les gens parler que là… là, on se dit : je suis pas chez moi.", correct: "Dagonet", options: ["Dagonet", "Caius Camillus", "Le duc d'aquitaine"] },
        { quote: "[Le vieux] a essayé de me vendre un genre de turban, comme ils se mettent sur la tête, là-bas. J'ai d'abord commencé par l'envoyer chier, puis je me suis dit que ça ferait sûrement plaisir au seigneur Karadoc.", correct: "Dagonet", options: ["Bohort", "Dagonet", "Léodagan"] },
        { quote: "Heureusement qu’on n'a aucune dignité… Sinon on serait bien dans la merde.", correct: "Dagonet", options: ["Le seigneur jacca", "Arthur", "Dagonet"] },
        { quote: "Attendez faut que je fasse une multiplication par trois la ? J'espère que vous avez prévu une collation. [...] Si je la pose je vais plus vite mais c'est toujours faux.", correct: "Dagonet", options: ["Dagonet", "Grudu", "Perceval"] },
        { quote: "On est pas tellement des gens de terrain nous. Après on est pas des cerveaux non plus me faites pas dire ce que j'ai pas dit", correct: "Dagonet", options: ["Venec", "Dagonet", "Merlin"] },
        { quote: "Il faut dormir un peu, maintenant. Si si, maintenant. Parce que vous êtes fatigué. Et quand vous vous réveillerez, vous aurez oublié vos soucis.", correct: "La dame du lac", options: ["La dame du lac", "Le duc d'aquitaine", "Dame Séli"] },
        { quote: "Vous n’avez aucun courage. Aucune dignité. Votre manque de foi est en train de tout détruire.", correct: "La dame du lac", options: ["Merlin", "La dame du lac", "Père Blaise"] },
        { quote: "Je sais ni boire, ni manger, ni m’habiller, ni me laver, ni rien ! Vous sentez que je vais être un fardeau pour vous, ou pas ?", correct: "La dame du lac", options: ["Caius Camillus", "Merlin", "La dame du lac"] },
        { quote: "Vous ne voulez pas larguer votre femme illégitime et lever une armée pour aller reprendre votre femme légitime ? Honnêtement, ça m'arrangerait.", correct: "La dame du lac", options: ["La dame du lac", "Karadoc", "Lancelot"] },
        { quote: "Hé ! Hééé ! J'suis pas une spécialiste, mais à mon avis, là, vous allez mourir, hein !", correct: "La dame du lac", options: ["Genièvre", "La dame du lac", "Dame Séli"] },
        { quote: "Vous vous rendez compte que vous amenez des boucs dans ma chambre ?", correct: "Demetra", options: ["Demetra", "Bohort", "Dame Séli"] },
        { quote: "Votre père, il a les cheveux noirs. Alors on continue de traiter tout le monde de bâtard ou on se calme ?", correct: "Demetra", options: ["Caius Camillus", "Demetra", "Léodagan"] },
        { quote: "Par exemple, je trouve que quand elle est partie du jour au lendemain sans prévenir, elle s'est conduite comme la reine des putes.", correct: "Demetra", options: ["Karadoc", "Perceval", "Demetra"] },
        { quote: "Et surtout : pensez POUVOIR !", correct: "Demetra", options: ["Demetra", "Léodagan", "La dame du lac"] },
        { quote: "C'est vexant de me ressembler ? C'est pour ça qu'on vous a choisi et qu'on vous a sorti de votre cambrousse, alors du respect !", correct: "Demetra", options: ["Dame Séli", "Demetra", "Genièvre"] },
        { quote: "Coucou coucou !", correct: "Le duc d'aquitaine", options: ["Le duc d'aquitaine", "Bohort", "Yvain"] },
        { quote: "Je viens de débourser deux mille solidis pour vous éviter une mise a mort publique a Kaamelott, la moindre des choses ce serait de vous montrer un peu courtois quand je vous convie a un goûter.", correct: "Le duc d'aquitaine", options: ["Karadoc", "Le duc d'aquitaine", "Yvain"] },
        { quote: "Si c'est le type le plus recherché du royaume c'est normal qu'il soit pas donné.", correct: "Le duc d'aquitaine", options: ["Arthur", "Léodagan", "Le duc d'aquitaine"] },
        { quote: "Si c’est ma tête qui vous revient pas, vous pouvez toujours aller roupiller dans le couloir. […] Et à partir de maintenant, si j’entends un mot plus haut que l’autre je vous… renvoie dans votre bled d’at… natal à coups de pied dans… dans le fion. Comme ça vous pourrez aller ratisser la bouse et torcher le cul des poules, ça vous fera prendre l’air.", correct: "Le duc d'aquitaine", options: ["Le duc d'aquitaine", "Bohort", "Caius Camillus"] },
        { quote: "Tout à fait, excusez-moi, j'ai pas percuté. Non non, l'autre elle est morte. Heu... Les articulations soutenaient plus son poids. Donc elle a commencé par se remplir d'eau par les coudes et après c'est passé aux chevilles, c'est remonté aux genoux et un matin, elle avait tellement gonflé que j'ai appelé la garde.", correct: "Le duc d'aquitaine", options: ["Dagonet", "Le duc d'aquitaine", "Bohort"] },
        { quote: "Et à un moment... Le sorcier s'est mis à nous menacer, avec ses parties génitales.", correct: "Gauvain", options: ["Gauvain", "Yvain", "Bohort"] },
        { quote: "Noblesse bien remisée ne trouve jamais l'hiver à sa porte... Non, porte close...", correct: "Gauvain", options: ["Yvain", "Gauvain", "Bohort"] },
        { quote: "Nous sommes jeunes, nous marchons à pieds… J’opterai donc pour un surnom en rapport : les Petits Pédestres.", correct: "Gauvain", options: ["Yvain", "Bohort", "Gauvain"] },
        { quote: "Seigneur Bohort, pouvons-nous nous retirer afin d'aller prendre notre goûter ?", correct: "Gauvain", options: ["Gauvain", "Karadoc", "Perceval"] },
        { quote: "n'est-ce pas vous même qui m'avez dit que rien ne remplaçait une véritable amitié et qu'en cas d'urgence c'était la seule corde à laquelle on pouvait vraiment se raccrocher ?.", correct: "Gauvain", options: ["Yvain", "Gauvain", "Perceval"] },
        { quote: "Tenez j'ai trouvé ça devant la porte[...] C'est un corbeau décédé.", correct: "Grudu", options: ["Grudu", "Gauvain", "Perceval"] },
        { quote: "J'ai rêvé qu'il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière !", correct: "Grudu", options: ["Perceval", "Grudu", "Yvain"] },
        { quote: "Non, sans blague, Seigneur Bohort, avec tout le respect que je vous dois, la prochaine fois que je vous revois tourner autour de la chambre du roi, je vous déglingue la tête.", correct: "Grudu", options: ["Caius Camillus", "Léodagan", "Grudu"] },
        { quote: "Moi, un jour j’ai rêvé qu’y avait un type qui venait me voir. Il me dit : « Vous avez jamais connu vos parents ? » J’lui réponds « non ». Et là, il me dit : « Eh ben, vous inquiétez pas, ils sont fromagers. »", correct: "Grudu", options: ["Grudu", "Karadoc", "Père Blaise"] },
        { quote: "Ca fait deux cent ans qu'il y a que les paysans qui payent les taxes, alors je vois pas pourquoi aujourd'hui ça change, comme ça d'un seul coup et ça me tombe dessus comme une merde sur une planche !", correct: "Le seigneur jacca", options: ["Le seigneur jacca", "Le duc d'aquitaine", "Dagonet"] },
        { quote: "Et le seigneur Lothar, il paye pas, lui, je sais il me l'a dit ...[Léodagan : non il paye pas, parce qu'il participe au combat]... Mais vous vous foutez de moi?! Il a au moins 95 ans, il a une jambe raide, il est tellement bigleux qu'il trouverait même pas sa bite pour pisser !", correct: "Le seigneur jacca", options: ["Breccan", "Le seigneur jacca", "Dagonet"] },
        { quote: "Attendez, ça fait combien de dizaines d'années que je leur laisse cultiver mes terres, à ces connards ? En plus de ça ils sont même pas polis, ils sont cons... Comme des tables ! Ils font un pain dégueulasse - on s'pète les dents dessus - non, là, j'ai besoin d'un peu de pognon, alors j'aime autant vous dire qu'ils vont passer à la caisse, les pécores !", correct: "Le seigneur jacca", options: ["Le duc d'aquitaine", "Léodagan", "Le seigneur jacca"] },
        { quote: "2500 pièces d'or ???! Eh... eh... C'est une blague? 2500 pièces d'or, mais où voulez vous que je trouve 2500 pièces d'or, dans le cul d'une vache ?!", correct: "Le seigneur jacca", options: ["Le seigneur jacca", "Léodagan", "Dagonet"] },
        { quote: "N’ayez crainte, Sire, je protégerai la reine de la férocité des bêtes de la nuit !", correct: "Lancelot", options: ["Lancelot", "Bohort", "Perceval"] },
        { quote: "Si votre but c’était de séduire les dames fallait faire chevalier, c’est tout !", correct: "Lancelot", options: ["Karadoc", "Lancelot", "Perceval"] },
        { quote: "Apollon il va se lever et vous le mettre dans le pif son casque !!", correct: "Lancelot", options: ["Arthur", "Dagonet", "Lancelot"] },
        { quote: "Bah ça va, je picole pas souvent !", correct: "Lancelot", options: ["Lancelot", "Merlin", "Père Blaise"] },
        { quote: "Les villageois, je les emmerde !", correct: "Lancelot", options: ["Bohort", "Lancelot", "Arthur"] }
    ],
   
    difficile: [
        { quote: "Quand on file une histoire à un copiste, pour qu'il en fasse 3 exemplaires, qu'ça va lui prendre trois mois,et qu'ça va coûter la peau des fesses, c'est pas pour raconter le temps qu'il fait ou ce que vous avez bouffé le midi, hein, il faut qu'ça pète !", correct: "Arthur", options: ["Venec", "Léodagan", "Arthur"] },
        { quote: "La religion c'est le bordel, admettez-le ! Alors laissez-moi prier c'que j'veux tranquille. 'M'empêche pas d'la chercher, votre saloperie de Graal.", correct: "Arthur", options: ["Arthur", "Lancelot", "Merlin"] },
        { quote: "C’était quand la dernière fois qu’on s’est retrouvés tous d’accord sur un truc !?", correct: "Arthur", options: ["Perceval", "Karadoc", "Arthur"] },
        { quote: "Franchement, j'ai connu des cafards moins opiniâtres...", correct: "Arthur", options: ["Karadoc", "Le roi loth", "Galessin"] },
        { quote: "Je pense que vous glandouillez bien assez comme ça dans la réalité pour qu'on puisse se permettre d'optimiser le fictionnel.", correct: "Arthur", options: ["Méléagant", "Arthur", "Le jurisconsulte"] },
        { quote: "Ave Cesar, rosae rosam, et spiritus rex ! Ah non, parce que là, j’en ai marre !", correct: "Le roi loth", options: ["Le roi loth", "Caius Camillus", "Le répurgateur"] },
        { quote: "Tempora mori, tempora mundis recorda. Voilà. Eh bien ça, par exemple, ça veut absolument rien dire, mais l’effet reste le même, et pourtant j’ai jamais foutu les pieds dans une salle de classe, attention !", correct: "Le roi loth", options: ["Galessin", "Le roi loth", "Dagonet"] },
        { quote: "Les mômes maintenant, ils lisent, ils lisent, ils lisent et résultat...ils sont encore puceaux à 10 ans...", correct: "Le roi loth", options: ["Karadoc", "Léodagan", "Le roi loth"] },
        { quote: "Je ne reviendrai plus jamais, cette fois je le dis, je le fais, je reste chez moi. Merde. Ça suffit.", correct: "Le roi loth", options: ["Le roi loth", "Merlin", "Lancelot"] },
        { quote: "Pour faire court, vous êtes ici chez les salopards. C’est admis. On n'a pas des idées bien jojo, et on n’a pas peur de le dire ! On fomente, on renégate, on laisse libre cours à notre fantaisie.", correct: "Le roi loth", options: ["Galessin", "Le roi loth", "Dagonet"] },
        { quote: "En garde, espèce de vieille pute dégarnie !", correct: "Le maitres d'armes", options: ["Le maitres d'armes", "Caius Camillus", "Merlin"] },
        { quote: "JE NE MANGE PAS DE GRAINES !", correct: "Le maitres d'armes", options: ["Karadoc", "Le maitres d'armes", "Karadoc"] },
        { quote: "Moi, une fois, j'étais soûl comme cochon, je me suis fait tatouer J'aime le raisin de table sur la miche droite, et ça y est toujours !", correct: "Le maitres d'armes", options: ["Karadoc", "Dame Séli", "Le maitres d'armes"] },
        { quote: "Mais allez-y bon sang, magnez-vous le fion, espèce de grosse dinde !", correct: "Le maitres d'armes", options: ["Le maitres d'armes", "Le roi loth", "Arthur"] },
        { quote: "Quand on est idiot, on plante des carottes on ne s'occupe pas de sécurité !", correct: "Le maitres d'armes", options: ["Galessin", "Le maitres d'armes", "Lancelot"] },
        { quote: "Héhéhé ! On va passer... Une bonne soirée ! MAGNIFIQUE !", correct: "Méléagant", options: ["Méléagant", "Le maitres d'armes", "Lancelot"] },
        { quote: "Cette épée grotesque est le plus pitoyable tour de passe-passe que les dieux aient jamais bricolé pour arriver à leurs fins.", correct: "Méléagant", options: ["Arthur", "Méléagant", "Lancelot"] },
        { quote: "Mais c'est de ma faute, à moi, si vous semez des pères adoptifs dans tout le pays ?", correct: "Méléagant", options: ["Elias de kelliwic'h", "Le jurisconsulte", "Méléagant"] },
        { quote: "Ahh, la mienne !... Je dirais que ma vie ne représente pas la période la plus captivante de... mon existence.", correct: "Méléagant", options: ["Méléagant", "La dame du lac", "Merlin"] },
        { quote: "Vous pouvez rentrer à Kaamelott. Vous regarderez les gens. Vous regarderez les choses. Rien ne sera plus triste que vous.", correct: "Méléagant", options: ["Le roi loth", "Méléagant", "Lancelot"] },
        { quote: "Y'a toujours au moins deux solutions à un problème.", correct: "Elias de kelliwic'h", options: ["Elias de kelliwic'h", "Méléagant", "Lancelot"] },
        { quote: "Oh vous, toujours vous, mais allez chier dans une fiole, on verra après.", correct: "Elias de kelliwic'h", options: ["Merlin", "Elias de kelliwic'h", "Lancelot"] },
        { quote: "Je veux insinuer que vous n'avez pas de connaissances suffisantes pour faire des crêpes. Alors vous imaginer en train d'essayer de bricoler des plaques de dissimulation, c'est à pisser de rire.", correct: "Elias de kelliwic'h", options: ["Léodagan", "Venec", "Elias de kelliwic'h"] },
        { quote: "Dans la vie, faut bosser pour personne, et y faut faire bosser personne ! C'est le secret de la liberté. […] Rien que d'imaginer que je retire l'épée du rocher et que je me retrouve à la tête de ce bordel, ça me fait de la spasmophilie !", correct: "Elias de kelliwic'h", options: ["Elias de kelliwic'h", "Dagonet", "Le roi loth"] },
        { quote: "Ecoutez ma p'tite dame, ya des fois où y faut sentir le vent tourner et mettre du pognon à gauche pour filer à la concurrence", correct: "Elias de kelliwic'h", options: ["Galessin", "Elias de kelliwic'h", "Le roi loth"] },
        { quote: "Attention, attention… il va y arriver un moment où il y a des granges qui vont se mettre à flamber, faudra pas demander d’où ça vient !", correct: "Guethenoc", options: ["Guethenoc", "Elias de kelliwic'h", "Le roi loth"] },
        { quote: "Ce que je dis, tout le monde s'en tamponne ! Je gueule, je gueule, j'pourrais gueuler dans le cul d'un poney ce serait pareil !", correct: "Guethenoc", options: ["Karadoc", "Guethenoc", "Merlin"] },
        { quote: "Ces bourgeois, ils savent plus quoi inventer ! A force de lire et d'écrire, ils deviennent tous plus cons les uns qu'les autres.", correct: "Guethenoc", options: ["Venec", "Le tavernier", "Guethenoc"] },
        { quote: "Messieurs dames, dans quelques instants le grand spectacle de la souffrance. Si vous pouvez tâcher moyen de vous éloigner de 25 pieds, bons pieds, hein parce que ça va gicler un peu. !", correct: "Guethenoc", options: ["Guethenoc", "Léodagan", "Grudu"] },
        { quote: "C'est que la nature est trop hostile pour un gars comme ça, hein.", correct: "Guethenoc", options: ["Le seigneur jacca", "Guethenoc", "Le duc d'aquitaine"] },
        { quote: "Tiens, l'autre jour à table... Il devient tout bleu. Il était en train de s'étouffer avec un os de caille, cet abruti ! Il tousse, il crache, il re-tousse, et BINGO ! Il m'dégueule dessus ! Vous l'croyez, ça ?", correct: "L'interprete burgonde", options: ["L'interprete burgonde", "Guethenoc", "Le duc d'aquitaine"] },
        { quote: "La culture burgonde ? Je savais même pas qu’y en avait une… Non, moi je voulais faire grec moderne, mais y avait plus de place. Il restait que burgonde ou anglais. Aaaaanglais ! Mais c’est encore moins répandu !", correct: "L'interprete burgonde", options: ["Arthur", "L'interprete burgonde", "Le duc d'aquitaine"] },
        { quote: "Vous vous rendez pas compte de ce que c'est les burgondes ! Déjà, c'est un miracle qu'ils soient pas tous crevés. Ils font n'importe quoi, et en plus ils sont plus qu'une poignée !", correct: "L'interprete burgonde", options: ["Le roi loth", "Elias de kelliwic'h", "L'interprete burgonde"] },
        { quote: "Ouais ! Qu'il y vienne patauger dans la merde !", correct: "Galessin", options: ["Galessin", "Elias de kelliwic'h", "Le maitres d'armes"] },
        { quote: "Vous avez qu’à dire au pape que s’il trouve que ça traîne, il n’a qu’à venir le chercher lui-même, son gobelet à la con !", correct: "Galessin", options: ["Père Blaise", "Galessin", "Merlin"] },
        { quote: "Moi, à une époque, je voulais faire vœu de pauvreté (...) Mais avec le pognon que j'rentrais, j'arrivais pas à concilier les deux.", correct: "Galessin", options: ["Père Blaise", "Léodagan", "Galessin"] },
        { quote: "Et ben allez-y, recevez-le dans la merde ! Y'a pas un siège pour s'asseoir, pas un truc à lui offrir à boire (...) C'est le roi d'Orcanie quand même. C'est pas Jo le Clodo.", correct: "Galessin", options: ["Galessin", "Léodagan", "Lancelot"] },
        { quote: "Vous me faites penser à ces types qui se servent jamais en premier pour faire poli, et quand c'est à eux, ils prennent tout le fromage gratiné ; et les autres, ils sont obligés de manger le légume seul.", correct: "Galessin", options: ["Galessin", "Le duc d'aquitaine", "Lancelot"] },
        { quote: "Mille excuses... Normalement, je devrais pas dire ça à un prêtre chrétien, mais, comme vous m'avez tout l'air d'être un gros baltringue euh, je me permets ?", correct: "Drusilla", options: ["Drusilla", "Galessin", "Léodagan"] },
        { quote: "Je préviens Monsieur et Madame que s'ils ont dans l'idée de remplacer leur hypothétique progéniture par des groupes d'amis dans le style de celui-ci ; en ce qui me concerne, y a d'la démission dans l'air.", correct: "Drusilla", options: ["Angharad", "Drusilla", "Grudu"] },
        { quote: "Ah ! Ah le con ! Ah le con, le con, le con ! Ah non mais qu'il est con ! ... Ah non mais là, ça, vous êtes spécialement con ! ... Ah non mais oui mais là... Ah le débile ! ... La différence d'âge ? Ah le petit con ! Ah oui ça suffit !", correct: "Drusilla", options: ["Merlin", "Elias de kelliwic'h", "Drusilla"] },
        { quote: "Z'êtes un glandeur. Un gros... GLANDEUR !!!", correct: "Le jurisconsulte", options: ["Le jurisconsulte", "Elias de kelliwic'h", "Drusilla"] },
        { quote: "Ah non ! AH NON ! On ne se vautre pas dans la bouffe, c'est INTOLÉRABLE !!! Vous allez arrrrrrêter !!!", correct: "Le jurisconsulte", options: ["Caius Camillus", "Le jurisconsulte", "Le maitre d'armes"] },
        { quote: "BANDES DE TROUS DU CUL !!!", correct: "Le jurisconsulte", options: ["Arthur", "Le roi loth", "Le jurisconsulte"] },
        { quote: "Mais vous êtes une grosse morue !", correct: "Le jurisconsulte", options: ["Le jurisconsulte", "Perceval", "Karadoc"] },
        { quote: "Ah mais vous êtes pas ma mère, hein ! Si j'ai envie de mettre des grosses morues dans mon plumard, JE FAIS CE QUE JE VEUX !!! Soyez gentille, lâchez-moi la chemise...", correct: "Le jurisconsulte", options: ["Arthur", "Le jurisconsulte", "Lancelot"] },
        { quote: "Ah, non, pour moi les femmes, j'aime pas ça… C'est de la saloperie !", correct: "Le répurgateur", options: ["Le répurgateur", "Karadoc", "Perceval"] },
        { quote: "Simplet ! Le démon a vidé ton cerveau, y'a plus rien dedans. Tu périras par la main de Dieu, tu comprends ça ?", correct: "Le répurgateur", options: ["Père blaise", "Le répurgateur", "Merlin"] },
        { quote: "Mon activité dans ce gouvernement est de brûler les personnes démoniaques, je VEUX BRÛLER CETTE PERSONNE !", correct: "Le répurgateur", options: ["Merlin", "Père blaise", "Le répurgateur"] }
    ]
};

let score = 0;
let questionIndex = 0;
let niveauActuel = [];
let modeChrono = false;
let timerInterval;

// Fichiers audio pour les bonnes et mauvaises réponses
const sonBonneReponse = new Audio("/Users/macbook/Desktop/Quizz Kaamelot/Son/notification-18-270129.mp3");
const sonMauvaiseReponse = new Audio("/Users/macbook/Desktop/Quizz Kaamelot/Son/error_sound-221445.mp3");

function demarrerJeu(avecTimer) {
    modeChrono = avecTimer;
    document.getElementById("choix-mode").style.display = "none";
    document.getElementById("choix-difficulte").style.display = "block";
}

// Choisir le niveau et commencer le quiz
function choisirNiveau(niveau) {
    let toutesLesQuestions = [...questions[niveau]];
    toutesLesQuestions.sort(() => Math.random() - 0.5);
    niveauActuel = toutesLesQuestions.slice(0, 25);

    questionIndex = 0;
    score = 0;
    
    document.getElementById("choix-difficulte").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("points").innerText = score;

    afficherQuestion();
}

let intervalId; // Déclare une variable pour stocker l'ID de l'intervalle
let timeLeft = 10; // 10 secondes par question

// Afficher une question
function afficherQuestion() {
    if (questionIndex < niveauActuel.length) {
        let q = niveauActuel[questionIndex];
        document.getElementById("quote").innerText = `"${q.quote}"`;

        let choicesDiv = document.getElementById("choices");
        choicesDiv.innerHTML = "";

        if (q.audio) {
            let audio = new Audio(q.audio);
            audio.play();
        }

        q.options.forEach((option, index) => {
            let btn = document.createElement("button");
            btn.innerText = option;
            btn.onclick = () => verifierReponse(index);
            choicesDiv.appendChild(btn);
        });

        // Gestion du timer en mode Chrono
        if (modeChrono) {
            let timerBar = document.getElementById("timer-bar");
            timerBar.style.width = "100%";

            let timeLeft = 10;
            let interval = setInterval(() => {
                timeLeft--;
                timerBar.style.width = (timeLeft * 10) + "%";

                if (timeLeft === 0) {
                    clearInterval(interval);
                    verifierReponse(-1);
                }
            }, 1000);
        }

        // Ajoute une animation pour afficher la question
        document.getElementById("quiz").classList.add("visible");
    }

    else {
        afficherFinQuiz();
    }
}

// Vérifier la réponse du joueur
function verifierReponse(index) {
    let q = niveauActuel[questionIndex];
    let buttons = document.querySelectorAll("#choices button");
    let sonFeedback;

    if (q.options[index] === q.correct) {
        score++;
        buttons[index].style.backgroundColor = "green"; // Bonne réponse
        sonFeedback = new Audio("/Users/macbook/Desktop/Quizz Kaamelot/Son/notification-18-270129.mp3");
    } else {
        buttons[index].style.backgroundColor = "red"; // Mauvaise réponse
        sonFeedback = new Audio("/Users/macbook/Desktop/Quizz Kaamelot/Son/error_sound-221445.mp3");
    }

    sonFeedback.play(); // Jouer le son
    document.getElementById("points").innerText = score;
    questionIndex++;

    setTimeout(afficherQuestion, 1000); // Pause avant la prochaine question
}

// Affichage de la fin du quiz
function afficherFinQuiz() {
    let message = score >= 15 ? "Bravo, vous êtes un vrai chevalier !" : "Allez hop, retour en cuisine avec Karadoc.";

    document.getElementById("quote").innerText = `Fin du quiz ! Score : ${score}/${niveauActuel.length}\n${message}`;
    document.getElementById("choices").innerHTML = "<button onclick='recommencer()'>Rejouer</button>";
}

// Recommencer le quiz
function recommencer() {
    score = 0; // Réinitialiser le score
    questionIndex = 0; // Réinitialiser l'index de la question
    document.getElementById("points").innerText = score; // Mettre à jour l'affichage du score

    // Cacher le quiz et réafficher les choix
    document.getElementById("quiz").style.display = "none";
    document.getElementById("choix-mode").style.display = "block"; // Retour au choix du mode de jeu
    document.getElementById("choix-difficulte").style.display = "none"; // Masquer le choix de la difficulté

    // Réinitialiser la barre de timer à 100%
    let timerBar = document.getElementById("timer-bar");
    timerBar.style.width = "100%"; // Remise à zéro de la barre de progression du timer

    // Optionnel : Réinitialiser la valeur du timer
    timeLeft = 10; 
}






