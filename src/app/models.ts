
export interface User{
    email:string
    first_name:string
    last_name :string
    date_joined :string
    is_active:boolean
    is_verified:boolean
    is_staff:boolean
    is_particulier:boolean
    is_prestataire:boolean
    avatar: File
    ville : Ville
}

export interface Ville{
    nom :string
    departement :Departement

} 

export interface PieceIdentite{
    libelle :string
    lien_fichier:File
}
export interface PieceJustificative{
    libelle :string
    lien_fichier :File
}
export interface Langue{
    nom :string
}

export interface Pays{
    nom : string
    langues : Langue[]
}
export interface Departement{
    nom : string
    code : string
    pays :Pays
}
export interface Profile {
    user :User,
    bio : Text,
    location: string,
    birth_date: string
    telephone :string
    ville :string
    baniere :File
    pieceIdentite:File
    langues :Langue []
}
export interface DerniereExperience{
    libelle :string
    lieu :string
    annee :string
    description:Text
}
export interface Prestataire{
    user:User,
    justificatifs : PieceJustificative[],
    prestations: Service [],
    niveau_etude:string,
    cv:PieceJustificative,
    mes_dernieres_experience:DerniereExperience,
    en_avant: boolean,
}
export interface Categorie{
    code : string
    libelle : string
    description: Text
    active: boolean
    image: File
}
export interface Service {
    categorie: Categorie
    titre :string
    prixDefaut: string
    active: boolean
    avatar: File
    baniere: File
    description : Text
}

export interface Portfolio{
    prestataire : Prestataire
}
    
export interface Experience {
    portfolio: Portfolio,
    titre:string,
    description:Text
}

export interface PrestataireCustomService{
    prestataire: Prestataire,
    service : Service,
    description:Text,
    prix: string,
    active :boolean
}

export interface Temoignage {
    auteur:User,
    prestataire:Prestataire,
    message: Text,
    rating: BigInteger,
    date_created: string,
    active: boolean
}


export interface Adresse {
    boitePostale:string,
    rue :string,
    telephone :string  
}
   
export interface Particulier{
    user :User,
    demandes: Demande[]
}

export interface Demande {
    particulier:Particulier,
    service : Service,
    customService : PrestataireCustomService[],
    adresse : Adresse,
    dateDebut : string ,
    dateFin :string,
    duree : string,
    etat :boolean,
    tauxHoraire :string

}



export interface CommentairePublic {
    demande : Demande,
    auteur: User,
    createdAt : string,
    etat : boolean

}
 


export interface Commande {
    prestataire: Prestataire,
    demande : Demande,
    etat :boolean
}
    

export interface Note {
    prestataire :Prestataire,
    note :string,
    commentaire :Text
}
    
    
export interface Facture {
    codeFacture :string,
    commande :Commande,
    etat :boolean
}
export interface ModePaiement{
    libelle:string
}

export interface Paiement {
    particulier : Particulier,
    prestataire : Prestataire,
    facture : Facture,
    mode : ModePaiement,
    montant: string,
    etat:boolean

}

export interface Compte {
    proprietaire : Prestataire
    solde : string
}

export interface VirementPrestaire {
    compte_beneficiaire : Compte,
    created_on : string,
    paiement : Paiement,
    montantRecu : string
}

export interface Prestation {
    prestataire :Prestataire,
    service : Service,
    custumService : PrestataireCustomService []
    tauxHoraireMin : string
}
    
        
