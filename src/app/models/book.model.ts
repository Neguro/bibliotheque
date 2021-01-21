export class Book 
{
    photo: string;
    nom: string;
    auteur: string;
    synopsis: string;

    constructor(photo: string, nom: string ,auteur: string,synopsis: string  )
    {
        this.photo = photo;
        this.nom = nom;
        this.auteur = auteur;
        this.synopsis = synopsis;
    }
}