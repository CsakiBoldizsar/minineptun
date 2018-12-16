# MiniNeptunFrontend

Szolgáltatások listája

 - Regisztráció, bejelentkezés, kijelentkezés
 - Hallgató esetén: felvett kurzusok listázása, összes kurzus megtekintése, kurzus felvétele, kurzus leadása
 - Oktató esetén: saját kurzusok listázása, összes kurzus megtekintése, kurzus adatainak módosítása
 - Admin esetén: Kurzusok és tárgyak létrehozása, törlése, tárgyak módosítása, összes kurzus megtekintése


Egy funckió folyamatának leírása - regisztráció:
    A felhasználó az alkalmazás főoldalán megnyomja a regisztráció gombot. A router átirányítja egy másik oldalra, ahol
    megjelenik a regisztrációs űrlap. Ha helytelenül vagy hiányosan tölti ki az adatokat a felhasználó, figyelmeztetést kap róla.
    Ha helyesen töltötte ki az adatokat és rákattint a küldés gombra, akkor az űrlap adatai az oldal komponensből az
    autentikációs service-hez kerülnek. A service http kérést küld a backend servernek, benne a névvel,role-al és jelszóval.
    A server ellenőrzi, hogy van-e ilyen nevű felhasználó. Ha nincs, létrehozza, a jelszót titkosítja, és a létrejövő usert
    elmenti az adatbázisban. Student és lecturer esetén a megfelelő objektumok szintén létrejönnek és mentése kerülnek.
    Végül a server http választ küld a frontendnek. Sikeres regisztráció esetén http 200-al, sikertelen esetén 403-al 
    vagy 401-el válaszol. A sikeres regisztráció után a felhasználó a bejelentkezési oldalra kerül átirányításra.

# Usecase diagram

![alttext](https://github.com/CsakiBoldizsar/minineptun/blob/master/diagram.jpg)

Felhasználói dokumentáció:

    # Regisztráció, bejelentkezés, kijelentkezés:
  
    A főoldalon kezdetben egy üdvözlőképernyő jelenik meg, 
    ahol lehetőség van a regisztrációra vagy a bejelentkezésre.
    Ha még nem regisztrált, akkor ezt a Regisztráció gombra kattintva teheti meg.
    A megjelenő űrlapot kell  kitölteni (felhasználónév, jelszó, szerepkör). 
    A jelszót kétszer kell megadni, legalább 6 karakter hosszú jelszót kell megadni.
    Sikeres regisztráció esetén átirányításra kerül a bejelentkezési űrlaphoz. 
    A felhasználónév és a jelszó megadása után a Bejelentkezés gombra kattintva tud bejelentkezni.
    Ekkor átirányításra kerül a főoldalra, ahol a kijelentkezés gombot találja. A további
    funkciók eléréséhez kattintson a menüpontokra. A főoldalra a Home menüponttal térhet vissza.
   
    # Kurzus felvétele/leadása:
     
    A hallgató jogkörrel rendelkező felhasználóknak lehetőségük van kurzusok felvételére, leadására.
    Új kurzus felvételéhez kattintson a kurzus felvétele menüpontra, ekkor megjelenik az összes kurzus listája.
    Ha többet szeretne megtudni egy adott kurzusról, a több info gombra kattintva megtekintheti a kurzus részletes leírását.
    Ezután válassza ki a megfelelő kurzust és kattintson a felvétel gombra. Sikeres kurzusfelvétel esetén átirányításra
    kerül a felvett kurzusok oldalra. Ha leadni szeretne egy kurzust, kattintson a felvett kurzusok menüpontra. Válassza ki
    a megfelelő kurzust, és kattintson a leadás gombra. Sikeres kurzusleadás után a lista frissül.
    
    # Saját kurzusok megtekintése:
    
    A hallgató és oktató jogkörrel rendelkező felhasználók megtekinthetik saját kurzusaikat. Saját kurzusainak
    megtekintéséhez kattintson a felvett kurzusok menüpontra. Ha többet szeretne megtudni egy adott kurzusról,
    a több info gombra kattintva megtekintheti a kurzus részletes leírását.
    
    # Kurzus módosítása:
    
    Az oktató jogkörrel rendelkező felhasználóknak lehetőségük van a kurzusaik adatainak módosítására.
    Kurzus adatainak módosításához először kattintson a saját kurzusok menüpontra. Ezután válassza ki
    a megfelelő kurzust, majd kattintson a módosítás gombra. Töltse ki a megjelenő űrlapot, és nyomja meg
    a küldés gombot.
    
    # Kurzus hozzáadása/törlése:
    
    Az admin jogkörrel rendelkező felhasználóknak lehetőségük van kurzusokat létrehozni és törölni.
    Ha kurzust szeretne létrehozni, kattintson a kurzus létrehozása menüpontra. Töltse ki az
    űrlapot a kurzus létrehozásához, és nyomja meg a küldés gombot.
    Kurzus törléséhez nyomja meg a kurzusok menüpontot, válassza ki a megfelelő kurzust és kattintson
    a kurzus törlése gombra.
    
