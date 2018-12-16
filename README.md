# MiniNeptunFrontend

Szolgáltatások listája

 - Regisztráció,bejelentkezés
 - Hallgató esetén: felvett tantárgyak listázása, tantárgy felvétele
 - Oktató esetén: saját kurzusok listázása, kurzus adatainak módosítása
 - Admin esetén: Kurzusok és tárgyak létrehozása, törlése


Egy funckió folyamatának leírása - regisztráció:
    A felhasználó az alkalmazás főoldalán megnyomja a regisztrációs gombot. A router átirányítja a regisztrációs oldalra.
    Megjelenik a regisztrációs űrlap. Ha helytelenül vagy hiányosan tölti ki az adatokat a felhasználó, figyelmeztetést kap róla.
    Ha helyesen töltötte ki az adatokat és rákattint a regisztráció gombra, akkor az űrlap adatai az oldal komponensből az
    autentikációs service-hez kerülnek. A service Http kérést küld a backend servernek, benne a névvel,role-al és jelszóval.
    A server ellenőrzi, hogy van-e ilyen nevű felhasználó. Ha nincs, létrehozza, a jelszót titkosítja, és a létrejövő usert
    elmenti az adatbázisban. Student és lecturer esetén a megfelelő objektumok szintén létrejönnek és mentése kerülnek.
    Végül a server http választ küld a frontendnek. Sikeres regisztráció esetén http 200-al, sikertelen esetén 403,401 el válaszol. Ezután a felhasználó a bejelentkezési oldalra kerül átirányításra.


Felhasználói dokumentáció:

    Regisztráció, bejelentkezés:
  
    A főoldalon kezdetben egy üdvözlőképernyő jelenik meg, 
    ahol lehetőség van a regisztrációra vagy a bejelentkezésre.
    Ha még nem regisztrált, akkor ezt a Regisztrálok gombra kattintva teheti meg.
    A megjelenő űrlapot kell  kitölteni(felhasználónév,jelszó,szerepkör). 
    A jelszót kétszer kell megadni, legalább 6 karakter hosszú jelszót kell megadni.
    Sikeres regisztráció esetén átirányításra kerül a bejelentkezési űrlaphoz. 
    A felhasználónév és a jelszó megadása után a Belépés gombra kattintva tud bejelentkezni.
    
    Saját kurzusok megtekintése:
    
    Kurzus hozzáadása:
    
    Kurzus módosítása:
    
    Kurzus felvétele:
    
