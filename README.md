# SiteWebCabinetDentaire
Création d'un site web pour un cabinet dentaire.
=======
# SiteWebCabinet

Ce projet a été crée en utilisant [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.


Pour installer les "node packages" :
```bash
npm install
```

## Serveur local

Pour tester le site en local : 

```bash
ng serve
```

Il faudra ensuite ouvrir le navigateur et aller sur le site `http://localhost:4000/`. 


## Hébergement 
Pour mettre à jour les modifications sur le site hébergé via GitHubPages : 

```bash
ng build --configuration production --base-href /SiteWebCabinetDentaire/
```
puis 

```bash
ng deploy --base-href=/SiteWebCabinetDentaire/
```



