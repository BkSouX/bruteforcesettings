OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force IP whitelist" : "Lista bianca degli IP di Brute-force",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Per aggiungere intervalli di IP alla lista bianca dalla protezione contro gli attacchi di tipo brute-force, specificali di seguito. Nota che qualsiasi IP nella lista bianca può esseguire tentativi di autenticazione senza alcuna restrizione. Per motivi di sicurezza, è consigliato ridurre al minimo gli host nella lista bianca o preferibilmente non aggiungerne alcuno.",
    "Add new whitelist" : "Aggiungi nuova lista bianca",
    "Add" : "Aggiungi",
    "_button_::_submit_" : ["button","submit"],
    "_section_::_bruteforcesettigs_" : ["section","bruteforcesettigs"],
    "Delete" : "Elimina",
    "Brute-force settings" : "Configurazione Brute-force",
    "Whitelist IPs" : "Lista bianca IP",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "La protezione Brute Force è destinata alla protezione dei server Nextcloud da\ntentativi di indovinare le password degli utenti in diversi modi. Oltre alla protezione\ndal classico attacco \"*proviamo una lunga lista di password usate comunemente*\",\nè anche in grado di rendere più complicato l'utilizzo di attacchi un po' più sofisticati\nin grado di sfruttare il modulo per il reset della password o i token generati per l'accesso\nda parte delle app.\n\nSe allertata, la protezione Brute Force renderà le richieste provenienti da un determinato\nIP utilizzante sempre le stesse API verso il server protetto da bruteforce più lente per un \nperiodo di 24 ore.\n\nCon quest'app, l'amministratore può escludere un indirizzo IP o anche un range da questa\nprotezione, funzione utile per scopi di test o in caso di falsi positivi causati dalla presenza\ndi molti utenti sullo stesso indirizzo IP."
},
"nplurals=2; plural=(n != 1);");
