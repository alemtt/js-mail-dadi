/*
Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
-Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

richiedere email
verificare il dato 
verificare possa accedere
stampa esito se puo o non 

accedee al sito e visualizzare i numeri 
sia il tuo che del pc

# tools 
const/let
Input_mail
form 
button
if
*/

const userAbilitated = ['esempio@accesso.com','mariorossi@dado.com','nonun@robot.com']
let mailUser = prompt("Enter email", "esempio@accesso.com")

 if (userAbilitated.includes(mailUser)){
    console.log('abilitato')
 } else{
    
 }