const articles = [{
    _id:{"$oid":"5ea0373f6d0e8077c7c0a308"},
    url:"accueil",
    vignette:"",
    titre:"Des choses très intéressantes à dire",
    resume:"un texte qui ne doit pas contenir plus de 150 caractéres(là il en a 71)",
    contenus:[
        {
            intertitre:"Pourquoi ?",
            paragraphe:"Un blabla sur le pourquoi",
            images:["",
                ""],
            alt:["",
                ""]
        },
        {
            intertitre:"Dans quel but ?",
            paragraphe:"Un autre blabla sur le but",
            images:["",
                ""],
            alt:["",
                ""]
        },
        {
            intertitre:"Qu'est-ce qu'il y aura dedans ?",
            paragraphe:"Encore un autre blabla",
            images:["",
                ""],
            alt:["",
                ""]
        }],
        aside:[{
            titre:"l'auteur",
            texte:"quelques mots sur moi",
            tags:["","","",""],
            url:"moi",
            lien:"Me découvrir"
        },{
            titre:"Le site",
            texte:"un bla bla sur le site",
            tags:["","","",""],
            url:"lesite",
            lien:"En savoir plus"
        }]
},

{
    url:"le site",
    vignette:"https://via.placeholder.com/1200x700",
    titre:"Quelques mots sur le site",
    resume:"un texte qui ne doit pas contenir plus de 150 caractéres(là il en a 71)",
    contenus:[
        {
            intertitre:"Site 1",
            paragraphe:"Un blabla",
            images:["https://via.placeholder.com/1200x700/0000FF",
                "https://via.placeholder.com/1200x700"],
            alt:["alt1",
                "alt2"]
        },
        {
            intertitre:"Site 2",
            paragraphe:"Un autre blabla",
            images:["https://via.placeholder.com/1200x700",
                "https://via.placeholder.com/1200x700/008000"],
            alt:["alt3",
                "alt4"]
        }],
        aside:[{
            titre:"Titre de l'asite",
            texte:"Un funfact ou autre",
            tags:["site","technos"],
            url:"une url",
            lien:"le lien"
        },{
            titre:"Titre de l'aside2 ",
            texte:"Un contenu lié",
            tags:["moi","me","myself","and I"],
            url:"une url",
            lien:"le lien"
        }]
}];

// Bdd en local sur la même racine --> ça marche
// cardTitle[1].innerText = articles[1].titre;
// cardText[1].innerText = articles[1].resume;

