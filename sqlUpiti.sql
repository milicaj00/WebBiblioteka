GO
SET IDENTITY_INSERT dbo.Biblioteka ON

INSERT INTO dbo.Biblioteka ([ID], [Naziv], [Adresa], [Email], [brojTelefona])
VALUES (1, 'Narodna biblioteka u Nišu', 'Ul. Pera Peric, br. 7', 'bibliotekanis@biblioteka.com', '+381 641234567')

INSERT INTO dbo.Biblioteka ([ID], [Naziv], [Adresa], [Email], [brojTelefona])
VALUES (2, 'Narodna biblioteka u Beogradu', 'Ul. Mika Peric, br. 777', 'bibbeo@biblioteka.com', '+381 641234567')

SET IDENTITY_INSERT dbo.Biblioteka OFF


GO
SET IDENTITY_INSERT dbo.Clan ON

INSERT INTO dbo.Clan ([ID], [Ime], [Prezime], [BrojClanskeKarte], [ClanOD], [ClanarinaDo],  [Email], [BibliotekaID])
VALUES (1, 'Ana','Volk',1 ,'2021-01-10 17:00', '2022-10-10 00:00',  'anavolk@mail.bib', 1)

INSERT INTO dbo.Clan ([ID], [Ime], [Prezime], [BrojClanskeKarte], [ClanOD], [ClanarinaDo],  [Email], [BibliotekaID])
VALUES (3, 'Mina','Antic',5 ,'2019-05-13 09:00', '2021-10-10 00:00', 'minanatic@mail.bib', 1 )

INSERT INTO dbo.Clan ([ID], [Ime], [Prezime], [BrojClanskeKarte], [ClanOD], [ClanarinaDo],  [Email], [BibliotekaID])
VALUES (123, 'Marko','Pejić',725, '2019-05-13 09:00', '2022-1-10 00:00', 'marko@mail.com',1 )

INSERT INTO dbo.Clan ([ID], [Ime], [Prezime], [BrojClanskeKarte], [ClanOD], [ClanarinaDo],  [Email], [BibliotekaID])
VALUES (134, 'Slavko','Antić', 689, '2021-12-13 04:00', '2021-12-13 00:00', 'slavko@mail.bib', 2 )

INSERT INTO dbo.Clan ([ID], [Ime], [Prezime], [BrojClanskeKarte], [ClanOD], [ClanarinaDo],  [Email], [BibliotekaID])
VALUES (122, 'Lena','Milić',123 ,'2018-04-03 09:00', '2022-03-10 00:00', 'lenamilic@mail.bib', 2 )

INSERT INTO dbo.Clan ([ID], [Ime], [Prezime], [BrojClanskeKarte], [ClanOD], [ClanarinaDo],  [Email], [BibliotekaID])
VALUES (122, 'Pera','Milić', 567 ,'2018-04-03 09:00', '2022-03-10 00:00', 'lenamilic@mail.bib', 2 )

SET IDENTITY_INSERT dbo.Clan OFF



GO
SET IDENTITY_INSERT dbo.Zanr ON

INSERT INTO dbo.Zanr ([ID], [Vrsta])
VALUES ( 1, 'Akcioni')

INSERT INTO dbo.Zanr ([ID], [Vrsta])
VALUES ( 2, 'Komedija')

INSERT INTO dbo.Zanr ([ID], [Vrsta])
VALUES ( 3, 'Triler')

INSERT INTO dbo.Zanr ([ID], [Vrsta])
VALUES ( 4, 'Avanturisticki')

INSERT INTO dbo.Zanr ([ID], [Vrsta])
VALUES ( 5, 'Fantastika')

INSERT INTO dbo.Zanr ([ID], [Vrsta])
VALUES ( 6, 'Novela')

SET IDENTITY_INSERT dbo.Zanr OFF


GO
SET IDENTITY_INSERT dbo.Autor ON

INSERT INTO dbo.Autor ([ID],[Ime], [Prezime])
VALUES ( 1, 'Tonino', 'Benakvista')

INSERT INTO dbo.Autor ([ID],[Ime], [Prezime])
VALUES ( 2, 'Ante', 'Tomić')

INSERT INTO dbo.Autor ([ID],[Ime], [Prezime])
VALUES ( 3, 'Li', 'Čajld')

INSERT INTO dbo.Autor ([ID],[Ime], [Prezime])
VALUES ( 4, 'Don', 'Vinslou')

INSERT INTO dbo.Autor ([ID],[Ime], [Prezime])
VALUES ( 5, 'Džon', 'Dvanaest Jastrebova')

INSERT INTO dbo.Autor ([ID],[Ime], [Prezime])
VALUES ( 6, 'Hari', 'Sajdbotom')

SET IDENTITY_INSERT dbo.Autor OFF

GO
SET IDENTITY_INSERT dbo.Knjige ON

INSERT INTO dbo.Knjige ([ID], [Naziv], [AutorID], [Kolicina], [Opis], [Slika], [Godina], [BibliotekaID])
VALUES (1, 'Malavita', 1, 3, 'Roman koji je inspirisao Martina Skorsezea, Lika Besona i Roberta de Nira da snime najzabavniji film o Mafiji do sada!

Možda čovek može napustiti Mafiju, ali Mafija nikada neće napustiti njega.

Američka porodica se nastanjuje u Šolonu na Avru, u Normandiji. Sve je naizgled uobičajeno. Fred, otac, tvrdi da je istoričar koji priprema knjigu o iskrcavanju. Megi, majka, volontira u jednom dobrotvornom udruženju i briljantno sprema roštilj. Bel, ćerka, časno nosi svoje ime. I najzad, bez Vorena, sina, ništa ne može da se obavi i svima je potrebna njegova pomoć. A ne smemo zaboraviti ni veoma diskretnog psa po imenu Malavita. Sve u svemu, porodica poput drugih. Osim što porodica Blejk ni u kom slučaju nije onakva kakvom želi da se prikaže jer otac nije pisac već bivši šef njujorškog mafijaškog klana koga prate agenti FBI-ja.

Život Blejkovih, pod stalnom pretnjom odmazde, pretvoren je u niz bežanja, laži i besmislenih situacija. Sada će Fred, Megi, Bel i Voren pokušati, svako na svoj način, da pronađu smisao svog postojanja u ovom nezanimljivom malom gradu. Sve do dana kada im Don Mimino, vođa pet porodica u Njujorku, neočekivano ulazi u trag... Jedno je sigurno: ako se Blejkovi dosele u vaš kraj, bežite glavom bez obzira.', 'Slike\malavita.jpg', 2014, 1)

INSERT INTO dbo.Knjige ([ID], [Naziv], [AutorID], [Kolicina], [Opis], [Slika], [Godina], [BibliotekaID])
VALUES (2, 'Čudo u Poskokovoj Dragi', 2, 5, 'Sedam kilometara uzbrdo od Smiljeva nalazi se Poskokova Draga, krševit zaselak iz kojeg je pobegao svako ko je imao kud. Ostao je samo Jozo Poskok s četvoricom zamomčenih sinova kada je i njegova nevoljena žena Zora ispustila dušu, izgovorivši na samrti svom zadrtom mužu: govno jedno... Ova hajdučka družina živi po svom zakonu, ne dajući državi ništa, a uzimajući od nje sve što zatreba – od struje pa do robovske radne snage u vidu zarobljenih radnika elektrodistribucije, zabasalih u Poskokovu Dragu s nadobudnom namerom da Poskocima isključe struju samo zato što je ne plaćaju već nekoliko decenija.

Jozin svet počinje da se urušava kada njegov najstariji sin Krešimir dođe na avangardnu ideju da siđe u Split i pronađe ženu, i to ne bilo koju, nego svoju staru ljubav koju je upoznao kada je jedini put bio izvan svoje zabiti: u vojsci, odnosno u ratu.

„Roman o možda (pre)sporom, ali dubokom i nepovratnom rastakanju patrijarhalnog sveta, za kojim se nema rašta pustiti suza: nadživevši svoje ’realno’ vreme, on je odavno moguć samo kao bezočno, besmisleno, samosvrhovito, isprazno ritualno nasilje nad ljudskom prirodom, željama i potrebama, muškim koliko i ženskim; zato, uz svu podrazumevajuću ljubav prema svojim pretežno mahnitim junacima – a koji opet nisu doli ’žrtve predrasuda u kojima su odgojeni’ – Tomić tom svetu takođe, kao Jozina žena Zora, ovom knjigom nežno ali odlučno šapuće: govno jedno...“ Teofil Pančić', 'Slike\cudo.jpg', 2021, 1)

INSERT INTO dbo.Knjige ([ID], [Naziv], [AutorID], [Kolicina], [Opis], [Slika], [Godina], [BibliotekaID])
VALUES (3, 'Jedan hitac', 3, 1, 'Roman po kojem je snimljen svetski filmski hit Džek Ričer.

„Sjajno, neukrotivo… nestvarno, čisto zlato. Ova knjiga vas prosto naelektriše… A čitav serijal od vas napravi zavisnika.“ New York Times


Šest hitaca. Petoro mrtvih. 
Teror je zavladao jednim provincijskim gradom. Ali policija je sve rešila u roku od nekoliko sati: sve je kristalno jasno i lako. Sve osim jednog. Optuženi izjavljuje: Uhvatili ste pogrešnog čoveka. A potom kaže: Dovedite mi Ričera.

I zaista, bivši vojni istražitelj Džek Ričer dolazi. 
Kakav događaj iz prošlosti povezuje ovog očigledno psihopatu s bivšim vojnim policajcem koji sad luta zemljom? Ričer je uveren da nešto nije u redu – i kristalno jasan, lak slučaj puca i raspada se na komade.

Za ovu seriju trilera Lija Čajlda kritičari kažu da od čitalaca stvara zavisnike. Na udicu romana Jedan hitac, svakako će te se upecati.

„Očarava žestokim ritmom“ Los Angeles Times



„Prvorazredni triler u kom hladnokrvni Ričer na svoj način sprovodi pravdu nad zločincima.“ Sunday Telegraph

„Neverovatno uzbudljivo i znalački informativno kad je reč o oružju i tehnologiji… Moćan osećaj za dobro i loše.“ Literary Review', 'Slike\hitac.jpg', 2013, 1)

INSERT INTO dbo.Knjige ([ID], [Naziv], [AutorID], [Kolicina], [Opis], [Slika], [Godina], [BibliotekaID])
VALUES (4, 'Divljaci', 4, 2, 'Knjiga godine po izboru Entertainment Weeklya, New York Timesa i Chichago Sun-Timesa.

Triler koji ruši sva dosadašnja pravila i postavlja standarde za dvadeset prvi vek.

Ben – humanitarac i borac za zaštitu životne sredine i njegov drug Čon – bivši marinac i živa mašina za ubijanje, vode uspešan posao uzgajanja i prodaje hibridne marihuane bogatoj klijenteli. Njihovu sreću upotpunjuje O, opsesivna kupoholičarka i zajednička devojka.

Idila traje sve dok meksički narkokartel, primoran da se širi, ne reši da preuzme svu trgovinu drogom u Kaliforniji. Ben i Čon su spremni da napuste igru, ali pod sopstvenim uslovima koji, naravno, nisu ono što im „nude“ ljudi iz kartela Baha.
Kada kartel bude oteo O da bi urazumeo momke potpaliće fitilj neočekivano razorne eksplozije.

„Poročno zabavan, pametan, vreo, adrenalinski triler sa oštrim obrtima i nemilosrdnim antiherojima zbog kojih će vam se puls ubrzavati iz stranice u stranicu.“ Dženet Ivanovič

„Otkrovenje! Buč Kasidi i Sandens Kid našeg doba.“ Stiven King

„Vrhunska kombinacija adrenalinske napetosti i kriminalističke reportaže.“ Miami Herald

Roman po kojem je Oliver Stoun snimio istoimeni film.', 'Slike\divljaci.jpg', 2012, 1)

INSERT INTO dbo.Knjige ([ID], [Naziv], [AutorID], [Kolicina], [Opis], [Slika], [Godina], [BibliotekaID])
VALUES (5, 'Zlatni grad', 5, 2, '„Materijal od kakvog se prave prvoklasni visokotehnološki trileri.“ Time

TREĆA KNJIGA TRILOGIJE O PARALELNIM SVETOVIMA.

UZBUDLJIVI ZAVRŠETAK TRILOGIJE ČETVRTI PREDEO.

Svet koji postoji u senci našeg... Očaravajuća i prepuna neizvesnosti mešavina visokotehnološkog, proročkog trilera i brze avanture. Zlatni grad obiluje oštrom napetošću i zanimljivim likovima koji su od Putnika i Tamne reke napravili međunarodne bestselere.

U Zlatnom gradu, Džon Dvanaest Jastrebova dovodi do vrhunca svoj čarobni i izazovni ep – priču koja nas vodi od uznemirujućeg sveta oštrog nadzora do drevnih, stvarnih, skrivenih reka koje teku ispod ulica Londona. U srcu trilogije besni bitka između braće Korigan – dvojice harizmatičnih vođa i Putnika s krajnje različitim viđenjem društva. Dok se Gejbrijel bori da povede pokret Otpora rešen da menja svet, njegov nemilosrdni brat Majkl dobio je pristup naprednoj tehnologiji koja mu može obezbediti moć da naše društvo pretvori u virtuelni zatvor.

Gejbrijelova ranjivost – i najveća snaga – jeste njegova ljubav prema Maji, harlekinskoj ratnici zarobljenoj u mračnom gradu iz koga ima malo nade za beg...

„Brza priča koja se ne ispušta iz ruku... Džon Dvanaest Jastrebova je upotrebio vrednosna merila pop-kulture i književnosti i, oblikujući ih, stvorio sajber-1984.“
New York Times', 'Slike\zlatnigrad.jpg', 2010, 1)

INSERT INTO dbo.Knjige ([ID], [Naziv], [AutorID], [Kolicina], [Opis], [Slika], [Godina], [BibliotekaID])
VALUES (6, 'Plamen na istoku', 6, 3, 'Godine 225. rimski Imperijum rastegnut je do pucanja, njegova vlast i moć dovode se u sumnju uzduž i popreko svih njegovih teritorija i duž svake njegove granice. No možda najsmrtonosnija pretnja vreba sa istoka, iz Persije, gde se zlokobno pomaljaju okupljene vojske sasanidskog carstva. Zabačena i odsečena utvrda Areta posmatra vojsku preko pustoline i iščekuje neizbežni napad. Jedan jedini čovek je poslat da pripremi odbranu ovog usamljenog grada – jedan jedini čovek da podupre ruševne zidove nekadašnjeg nesalomivog simbola rimske moći – čovek čije samo ime znači rat, Marko Klodije Balista. Potpuno sam, Balista je pozvan da okupi vojne snage i smogne hrabrosti da prvi nepokolebljivo stane pred najvećeg neprijatelja s kojim se Imperijum ikada suočio.   

„Hari briljantno rekonstruiše život Starog sveta, a posebno njegovu vojnu tehnologiju, i uvija ga u snažnu priču čije su teme u više pogleda klasične. To je krvavi istorijski roman najbolje vrste – čvrsto utemeljen na dubokom poznavanju činjenice šta je značilo biti živ u to doba i u tom podneblju.“ Endru Tejlor, pisac romana Dečak iz Amerike  

„Sajdbotom ide stopama najvećih mimetičkih istoričara-pripovedača osamnaestog i devetnaestog veka. On prenosi čitaoca u vreme o kojem piše.” Bretani Hjuz, Times  

„U savremenoj prozi često postoji nespretna tendencija pisaca da pokažu pamet nauštrb čitalačkog zadovoljstva… no dr Sajdbotom uspešno izbegava ovu klopku. Umesto toga, on se usredsređuje na jedan složen i čovečan prikaz gradskog stanovništva pod opsadom. Sajdbotom daje i dobro konstruisan, tečan, neodoljivo zanimljiv prikaz života u ratom rastrganoj Maloj Aziji starog veka, koji, kao što je slučaj sa svakim dobrim književnim serijalom, navodi čitaoca da željno iščekuje sledeći deo.“ Timesov književni dodatak', 'Slike\plamen.jpg', 2010, 1)

INSERT INTO dbo.Knjige ([ID], [Naziv], [AutorID], [Kolicina], [Opis], [Slika], [Godina], [BibliotekaID])
VALUES (8, 'Divljaci', 4, 2, 'Knjiga godine po izboru Entertainment Weeklya, New York Timesa i Chichago Sun-Timesa.

Triler koji ruši sva dosadašnja pravila i postavlja standarde za dvadeset prvi vek.

Ben – humanitarac i borac za zaštitu životne sredine i njegov drug Čon – bivši marinac i živa mašina za ubijanje, vode uspešan posao uzgajanja i prodaje hibridne marihuane bogatoj klijenteli. Njihovu sreću upotpunjuje O, opsesivna kupoholičarka i zajednička devojka.

Idila traje sve dok meksički narkokartel, primoran da se širi, ne reši da preuzme svu trgovinu drogom u Kaliforniji. Ben i Čon su spremni da napuste igru, ali pod sopstvenim uslovima koji, naravno, nisu ono što im „nude“ ljudi iz kartela Baha.
Kada kartel bude oteo O da bi urazumeo momke potpaliće fitilj neočekivano razorne eksplozije.

„Poročno zabavan, pametan, vreo, adrenalinski triler sa oštrim obrtima i nemilosrdnim antiherojima zbog kojih će vam se puls ubrzavati iz stranice u stranicu.“ Dženet Ivanovič

„Otkrovenje! Buč Kasidi i Sandens Kid našeg doba.“ Stiven King

„Vrhunska kombinacija adrenalinske napetosti i kriminalističke reportaže.“ Miami Herald

Roman po kojem je Oliver Stoun snimio istoimeni film.', 'Slike\divljaci.jpg', 2012, 2)

INSERT INTO dbo.Knjige ([ID], [Naziv], [AutorID], [Kolicina], [Opis], [Slika], [Godina], [BibliotekaID])
VALUES (9, 'Zlatni grad', 5, 2, '„Materijal od kakvog se prave prvoklasni visokotehnološki trileri.“ Time

TREĆA KNJIGA TRILOGIJE O PARALELNIM SVETOVIMA.

UZBUDLJIVI ZAVRŠETAK TRILOGIJE ČETVRTI PREDEO.

Svet koji postoji u senci našeg... Očaravajuća i prepuna neizvesnosti mešavina visokotehnološkog, proročkog trilera i brze avanture. Zlatni grad obiluje oštrom napetošću i zanimljivim likovima koji su od Putnika i Tamne reke napravili međunarodne bestselere.

U Zlatnom gradu, Džon Dvanaest Jastrebova dovodi do vrhunca svoj čarobni i izazovni ep – priču koja nas vodi od uznemirujućeg sveta oštrog nadzora do drevnih, stvarnih, skrivenih reka koje teku ispod ulica Londona. U srcu trilogije besni bitka između braće Korigan – dvojice harizmatičnih vođa i Putnika s krajnje različitim viđenjem društva. Dok se Gejbrijel bori da povede pokret Otpora rešen da menja svet, njegov nemilosrdni brat Majkl dobio je pristup naprednoj tehnologiji koja mu može obezbediti moć da naše društvo pretvori u virtuelni zatvor.

Gejbrijelova ranjivost – i najveća snaga – jeste njegova ljubav prema Maji, harlekinskoj ratnici zarobljenoj u mračnom gradu iz koga ima malo nade za beg...

„Brza priča koja se ne ispušta iz ruku... Džon Dvanaest Jastrebova je upotrebio vrednosna merila pop-kulture i književnosti i, oblikujući ih, stvorio sajber-1984.“
New York Times', 'Slike\zlatnigrad.jpg', 2010, 2)

INSERT INTO dbo.Knjige ([ID], [Naziv], [AutorID], [Kolicina], [Opis], [Slika], [Godina], [BibliotekaID])
VALUES (10, 'Plamen na istoku', 6, 3, 'Godine 225. rimski Imperijum rastegnut je do pucanja, njegova vlast i moć dovode se u sumnju uzduž i popreko svih njegovih teritorija i duž svake njegove granice. No možda najsmrtonosnija pretnja vreba sa istoka, iz Persije, gde se zlokobno pomaljaju okupljene vojske sasanidskog carstva. Zabačena i odsečena utvrda Areta posmatra vojsku preko pustoline i iščekuje neizbežni napad. Jedan jedini čovek je poslat da pripremi odbranu ovog usamljenog grada – jedan jedini čovek da podupre ruševne zidove nekadašnjeg nesalomivog simbola rimske moći – čovek čije samo ime znači rat, Marko Klodije Balista. Potpuno sam, Balista je pozvan da okupi vojne snage i smogne hrabrosti da prvi nepokolebljivo stane pred najvećeg neprijatelja s kojim se Imperijum ikada suočio.   

„Hari briljantno rekonstruiše život Starog sveta, a posebno njegovu vojnu tehnologiju, i uvija ga u snažnu priču čije su teme u više pogleda klasične. To je krvavi istorijski roman najbolje vrste – čvrsto utemeljen na dubokom poznavanju činjenice šta je značilo biti živ u to doba i u tom podneblju.“ Endru Tejlor, pisac romana Dečak iz Amerike  

„Sajdbotom ide stopama najvećih mimetičkih istoričara-pripovedača osamnaestog i devetnaestog veka. On prenosi čitaoca u vreme o kojem piše.” Bretani Hjuz, Times  

„U savremenoj prozi često postoji nespretna tendencija pisaca da pokažu pamet nauštrb čitalačkog zadovoljstva… no dr Sajdbotom uspešno izbegava ovu klopku. Umesto toga, on se usredsređuje na jedan složen i čovečan prikaz gradskog stanovništva pod opsadom. Sajdbotom daje i dobro konstruisan, tečan, neodoljivo zanimljiv prikaz života u ratom rastrganoj Maloj Aziji starog veka, koji, kao što je slučaj sa svakim dobrim književnim serijalom, navodi čitaoca da željno iščekuje sledeći deo.“ Timesov književni dodatak', 'Slike\plamen.jpg', 2010, 2)

SET IDENTITY_INSERT dbo.Knjige OFF




INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (1 , 1)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (2 , 1)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (3 , 1)

INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (1 , 2)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (2 , 2)

INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (1 , 3)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (3 , 3)

INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (1 , 4)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (3 , 4)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (4 , 4)

INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (3, 5)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (5, 5)

INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (1, 6)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (4, 6)

INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (1 , 8)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (3 , 8)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (4 , 8)

INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (3, 9)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (5, 9)

INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (1, 10)
INSERT INTO dbo.KnjigaZanr ([ZanrID], [listaKnjigaID])
VALUES (4, 10)

