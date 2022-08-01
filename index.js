import { Cirkas } from "./js/Cirkas.js";

const besieliuCikras = new Cirkas('Besieliai');

besieliuCikras.intro();
// Sveiki atvyke i "Besieliai" cirka!

besieliuCikras.tvarkarastis();
// "Besieliai" cirko tvarkarastis:
// Siuo metu pasirodymu nera suplanuota.

besieliuCikras.naujasPasirodymas(2022, 9, 1);
// Naujas pasirodymas 2022 Rugsėjo 1 dieną!

besieliuCikras.naujasPasirodymas(2022, 8, 25);
// Naujas pasirodymas 2022 Rugpjūčio 25 dieną!

besieliuCikras.naujasPasirodymas(2022, 3, 17);
// Naujas pasirodymas 2022 Kovo 17 dieną!

// READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
besieliuCikras.tvarkarastis();
// "Besieliai" cirko tvarkarastis:
// 1) 2022 Kovo 17d (jau įvykęs);
// 2) 2022 Rugpjūčio 25d;
// 3) 2022 Rugsėjo 1d.

besieliuCikras.pakeistiData(3, 2022, 9, 2);
// Pasirodymo data pakeista į 2022 Rugsėjo 2 dieną!

besieliuCikras.tvarkarastis();
// "Besieliai" cirko tvarkarastis:
// 1) 2022 Kovo 17d (jau įvykęs);
// 2) 2022 Rugpjūčio 25d;
// 3) 2022 Rugsėjo 2d.

besieliuCikras.atsauktiPasirodyma(1);
// Atsaukti jau praejusio pasirodymo negalima!

besieliuCikras.atsauktiPasirodyma(2);
// Pasirodymas atsauktas (2022 Rugpjūčio 25d)!

besieliuCikras.tvarkarastis();
// "Besieliai" cirko tvarkarastis:
// 1) 2022 Kovo 17d (jau įvykęs);
// 2) 2022 Rugsėjo 2d.