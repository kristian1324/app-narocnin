# Naša aplikacija

## Član skupine

- Ime in priimek: Kristian Pavić
- Ime in priimek: Žan Jevšenak

## Opis

Preprosta mobilna aplikacija, izdelana z Expo in React Native. Vsebuje začetni zaslon s števcem, kartico izdelka in povezavo na drugi zaslon.

## Zagon

Namesti odvisnosti:

```bash
npm install
```

Zaženi razvojni strežnik:

```bash
npx expo start
```
## Postopek izdelave (Kako sva naredila nalogo)

1. **Priprava orodij:** Najprej sva si na računalnike inštalirala Node.js in VS Code, na telefone pa aplikacijo Expo Go. Na GitHubu sva si naredila računa.
2. **Začetek projekta:** V terminal sva vpisala ukaz `npx create-expo-app@latest nasa-aplikacija`. Ko je zgeneriralo projekt, sva se premaknila v mapo in zagnala `npx expo start`, da sva aplikacijo sprobala na telefonu.
3. **Povezava z GitHubom:** Na GitHubu sva naredila nov prazen repozitorij in se dodala pod "Collaborators", da sva lahko oba urejala kodo. Z osnovnimi `git` ukazi sva nato projekt iz računalnika pushala na GitHub.
4. **Čiščenje mape in struktura:** Ker Expo zgenerira cel kup nekih map (npr. hooks, constants, privzete komponente), ki jih nisva rabila, sva vse to zbrisala. Naredila sva krovno mapo `src/` in vanjo premaknila mapo `app/`. Znotraj `src/` sva dodala še mapo `components/` in prazno mapo `utils/`.
5. **Tema in komponente:** V mapi `src/` sva naredila datoteko `theme.ts`, kamor sva shranila glavne barve. V `src/components/` pa sva sprogramirala lastno komponento `kartica-izdelka.tsx`, ki preko "props" dobi naslov in opis ter uporablja najine barve iz teme.
6. **Programiranje zaslonov:** V `src/app/index.tsx` sva naredila začetni zaslon. Notri sva uvozila najino kartico, dodala en gumb, ki s pomočjo `useState` povečuje števec, in pa `Link` za navigacijo. Zato sva naredila še datoteko `drugi-zaslon.tsx`, kjer piše, da je navigacija uspela. Na koncu sva samo še posodobila `_layout.tsx`, da sva vključila "Stack" navigacijo.
7. **Zaključek:** Kodo sva shranila, napisala ta README in vse skupaj še zadnjič pushala na GitHub repozitorij.
