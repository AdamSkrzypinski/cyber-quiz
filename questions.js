const questions = [

    {
        question: "Czym jest 'Poufność' (Confidentiality) w kontekście modelu CIA?",
        answers: [
            { text: "Zapewnieniem dostępności danych", correct: false },
            { text: "Gwarancją prawdziwości danych", correct: false },
            { text: "Ochroną przed ujawnieniem nieuprawnionym osobom", correct: true },
            { text: "Regularną aktualizacją systemu", correct: false }
        ]
    },
    {
        question: "Który filar modelu CIA gwarantuje, że dane są 'prawdziwe i niezmienione'?",
        answers: [
            { text: "Poufność", correct: false },
            { text: "Dostępność", correct: false },
            { text: "Integralność", correct: true },
            { text: "Ryzyko", correct: false }
        ]
    },
    {
        question: "Pracownik kopiuje dane klientów na prywatny pendrive. To zagrożenie...",
        answers: [
            { text: "Naturalne", correct: false },
            { text: "Techniczne", correct: false },
            { text: "Zewnętrzne", correct: false },
            { text: "Wewnętrzne", correct: true }
        ]
    },
    {
        question: "Pożar serwerowni to przykład zagrożenia...",
        answers: [
            { text: "Fizycznego / Naturalnego", correct: true },
            { text: "Technicznego", correct: false },
            { text: "Celowego ludzkiego", correct: false },
            { text: "Sieciowego", correct: false }
        ]
    },
    {
        question: "Co jest źródłem ponad 60% incydentów bezpieczeństwa (wg Lidermana)?",
        answers: [
            { text: "Błędy techniczne", correct: false },
            { text: "Siły natury", correct: false },
            { text: "Czynnik ludzki", correct: true },
            { text: "Ataki 0-day", correct: false }
        ]
    },
    {
        question: "Atak DDoS blokujący stronę uczelni narusza:",
        answers: [
            { text: "Poufność", correct: false },
            { text: "Integralność", correct: false },
            { text: "Dostępność", correct: true },
            { text: "Tylko RODO", correct: false }
        ]
    },
    {
        question: "Malware, który szyfruje dane i żąda okupu to:",
        answers: [
            { text: "Wirus", correct: false },
            { text: "Trojan", correct: false },
            { text: "Ransomware", correct: true },
            { text: "Spyware", correct: false }
        ]
    },
    {
        question: "Trojan to program, który:",
        answers: [
            { text: "Sam kopiuje się przez sieć", correct: false },
            { text: "Udaje legalny program, ale szkodzi w tle", correct: true },
            { text: "Szyfruje dane", correct: false },
            { text: "Dołącza się do plików", correct: false }
        ]
    },
    {
        question: "Podszywanie się pod bank w celu wyłudzenia hasła to:",
        answers: [
            { text: "DDoS", correct: false },
            { text: "Sniffing", correct: false },
            { text: "Phishing", correct: true },
            { text: "Spoofing", correct: false }
        ]
    },
    {
        question: "Zagrożenie '0-day' (dzień zerowy) wykorzystuje:",
        answers: [
            { text: "Lukę jeszcze nieznaną producentowi", correct: true },
            { text: "Lukę już załataną", correct: false },
            { text: "Wirusa usuwającego dane", correct: false },
            { text: "Brak zasilania", correct: false }
        ]
    },
    {
        question: "Jaka jest różnica między zagrożeniem a ryzykiem?",
        answers: [
            { text: "To to samo", correct: false },
            { text: "Zagrożenie to możliwość, ryzyko to prawdopodobieństwo x skutek", correct: true },
            { text: "Zagrożenie jest wewnętrzne, ryzyko zewnętrzne", correct: false },
            { text: "Ryzyko dotyczy tylko sprzętu", correct: false }
        ]
    },
    {
        question: "Outsourcing usług lub ubezpieczenie cybernetyczne to strategia:",
        answers: [
            { text: "Unikania ryzyka", correct: false },
            { text: "Mitygacji ryzyka", correct: false },
            { text: "Przeniesienia ryzyka", correct: true },
            { text: "Akceptacji ryzyka", correct: false }
        ]
    },
    {
        question: "Ile czasu ma administrator na zgłoszenie wycieku danych do UODO (RODO)?",
        answers: [
            { text: "24 godziny", correct: false },
            { text: "48 godzin", correct: false },
            { text: "72 godziny", correct: true },
            { text: "7 dni", correct: false }
        ]
    },
    {
        question: "Zasada 'minimum privilege' oznacza:",
        answers: [
            { text: "Dostęp admina dla każdego", correct: false },
            { text: "Nadawanie tylko niezbędnych uprawnień", correct: true },
            { text: "Brak haseł", correct: false },
            { text: "Kto pierwszy ten lepszy", correct: false }
        ]
    },
    {
        question: "Wysłanie maila z danymi do złej osoby to błąd:",
        answers: [
            { text: "Techniczny", correct: false },
            { text: "Naturalny", correct: false },
            { text: "Ludzki (przypadkowy)", correct: true },
            { text: "Celowy", correct: false }
        ]
    },

 
    {
        question: "Co to jest 'Worm' (Robak komputerowy)?",
        answers: [
            { text: "Złośliwy program wymagający pliku-nosiciela", correct: false },
            { text: "Program rozprzestrzeniający się samodzielnie przez sieć", correct: true },
            { text: "Oprogramowanie wyświetlające reklamy", correct: false },
            { text: "Narzędzie do łamania haseł", correct: false }
        ]
    },
    {
        question: "Oprogramowanie typu 'Spyware' służy do:",
        answers: [
            { text: "Szyfrowania plików", correct: false },
            { text: "Śledzenia działań użytkownika", correct: true },
            { text: "Blokowania dostępu do sieci", correct: false },
            { text: "Kopania kryptowalut", correct: false }
        ]
    },
    {
        question: "Atak MITM (Man-in-the-Middle) polega na:",
        answers: [
            { text: "Zgadywaniu haseł metodą słownikową", correct: false },
            { text: "Fizycznej kradzieży serwera", correct: false },
            { text: "Przechwytywaniu komunikacji między użytkownikiem a serwerem", correct: true },
            { text: "Wysyłaniu spamu", correct: false }
        ]
    },
    {
        question: "Jaka jest różnica między danymi a informacją?",
        answers: [
            { text: "To synonimy, oznaczają to samo", correct: false },
            { text: "Dane to surowe fakty, informacja to dane przetworzone i zinterpretowane", correct: true },
            { text: "Informacja to liczby, a dane to tekst", correct: false },
            { text: "Dane są produktem, a informacja surowcem", correct: false }
        ]
    },
    {
        question: "Macierz ryzyka służy do:",
        answers: [
            { text: "Generowania haseł", correct: false },
            { text: "Wizualizacji relacji między prawdopodobieństwem a skutkiem", correct: true },
            { text: "Szyfrowania dysków", correct: false },
            { text: "Tworzenia kopii zapasowych", correct: false }
        ]
    },
    {
        question: "Strategia 'Akceptacji' ryzyka jest stosowana, gdy:",
        answers: [
            { text: "Koszt zabezpieczenia przewyższa potencjalną stratę", correct: true },
            { text: "Ryzyko jest krytyczne dla życia ludzkiego", correct: false },
            { text: "Nie wiemy, jak zabezpieczyć system", correct: false },
            { text: "Mamy nieograniczony budżet", correct: false }
        ]
    },
    {
        question: "Analiza ryzyka 'Jakościowa' opiera się na:",
        answers: [
            { text: "Dokładnych wyliczeniach finansowych", correct: false },
            { text: "Eksperckiej ocenie (np. niskie/średnie/wysokie)", correct: true },
            { text: "Statystykach z ostatnich 100 lat", correct: false },
            { text: "Wyłącznie danych z logów systemowych", correct: false }
        ]
    },
    {
        question: "Jaki jest pierwszy etap obsługi incydentu bezpieczeństwa?",
        answers: [
            { text: "Odzyskiwanie danych", correct: false },
            { text: "Analiza przyczyn", correct: false },
            { text: "Wykrycie", correct: true },
            { text: "Raportowanie", correct: false }
        ]
    },
    {
        question: "Art. 32 RODO wymaga stosowania:",
        answers: [
            { text: "Wyłącznie zabezpieczeń fizycznych", correct: false },
            { text: "Odpowiednich środków technicznych i organizacyjnych", correct: true },
            { text: "Najdroższego oprogramowania na rynku", correct: false },
            { text: "Haseł składających się tylko z cyfr", correct: false }
        ]
    },
    {
        question: "Jaki był powód wycieku danych w Morele.net?",
        answers: [
            { text: "Kradzież laptopa prezesa", correct: false },
            { text: "Pożar serwerowni", correct: false },
            { text: "Socjotechnika i nieprawidłowa konfiguracja systemu", correct: true },
            { text: "Atak DDoS", correct: false }
        ]
    },
    {
        question: "Off-site backup oznacza:",
        answers: [
            { text: "Kopię zapasową na tym samym dysku", correct: false },
            { text: "Kopię zapasową przechowywaną w innej lokalizacji", correct: true },
            { text: "Brak kopii zapasowej", correct: false },
            { text: "Wydrukowanie dokumentów", correct: false }
        ]
    },
    {
        question: "Systemy UPS (Uninterruptible Power Supply) chronią przed:",
        answers: [
            { text: "Atakami hakerskimi", correct: false },
            { text: "Wirusami", correct: false },
            { text: "Utratą zasilania i nagłym wyłączeniem sprzętu", correct: true },
            { text: "Spamem", correct: false }
        ]
    },
    {
        question: "Audyt bezpieczeństwa 'Zewnętrzny' jest prowadzony przez:",
        answers: [
            { text: "Administratora systemu", correct: false },
            { text: "Pracowników działu IT firmy", correct: false },
            { text: "Niezależną firmę audytorską", correct: true },
            { text: "Prezesa firmy", correct: false }
        ]
    },
    {
        question: "Co oznacza skrót 'Sniffing' w kontekście sieci?",
        answers: [
            { text: "Wysyłanie fałszywych e-maili", correct: false },
            { text: "Podsłuchiwanie ruchu sieciowego", correct: true },
            { text: "Blokowanie serwera", correct: false },
            { text: "Łamanie haseł", correct: false }
        ]
    },
    {
        question: "Co oznacza skrót 'Spoofing'?",
        answers: [
            { text: "Szyfrowanie danych", correct: false },
            { text: "Fałszowanie adresu IP lub e-maila nadawcy", correct: true },
            { text: "Skanowanie antywirusowe", correct: false },
            { text: "Tworzenie kopii zapasowej", correct: false }
        ]
    }
];