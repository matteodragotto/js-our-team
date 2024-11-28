# JS - Objects, Objects Array

### Esercizio:

- Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

### **Bonus**

- Rendere l’esercizio responsive, mandando a capo le card
- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)

## Procedimento

1. Con HTML/CSS creo una base per il progetto (container principale con dentro una row che conterrà tutte le nostre card)
2. Ogni card sarà composta da 4 elementi: immagine, nome, ruolo e email
3. Assegno ad ogni elemento un ID
4. In javascript destrutturo gli oggetti dell'array contentente i membri del team
5. Assegno ad ogni elemento della card una delle proprietà degli oggetti destrutturati e le mostro in pagina
6. Adesso posso creare una funzione che mi inserisca una card per ogni componente del team con tutte le sue informazioni