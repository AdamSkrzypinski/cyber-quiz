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
        question: "Co jest źródłem ponad 60% incydentów bezpieczeństwa?",
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
        question: "Aby bezpiecznie przetwarzać dane w systemie (zgodnie z RODO), należy:",
        answers: [
            { text: "Zabezpieczyć sprzęt tylko hasłem 'admin'", correct: false },
            { text: "Stosować szyfrowanie, kopie zapasowe i aktualizacje", correct: true },
            { text: "Zainstalować najdroższe oprogramowanie na rynku", correct: false },
            { text: "Używać tylko prywatnego laptopa w pracy", correct: false }
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
    },

       {
        question: "Co to jest 2FA (Uwierzytelnianie dwuskładnikowe)?",
        answers: [
            { text: "Logowanie dwoma różnymi hasłami", correct: false },
            { text: "Metoda potwierdzania tożsamości dwoma niezależnymi składnikami (np. hasło + kod SMS)", correct: true },
            { text: "Konieczność logowania się dwa razy dziennie", correct: false },
            { text: "System wymagający podania imienia i nazwiska", correct: false }
        ]
    },

    {
        question: "Do czego służy menedżer haseł (Password Manager)?",
        answers: [
            { text: "Do bezpiecznego przechowywania i generowania unikalnych haseł", correct: true },
            { text: "Do łamania haseł innych osób", correct: false },
            { text: "Do automatycznego logowania się na Facebooku bez hasła", correct: false },
            { text: "To wirus kradnący hasła", correct: false }
        ]
    },
    {
        question: "Co oznacza 'kłódka' przy adresie strony (HTTPS)?",
        answers: [
            { text: "Że strona jest w 100% bezpieczna i nie może nas oszukać", correct: false },
            { text: "Że połączenie między Tobą a stroną jest szyfrowane", correct: true },
            { text: "Że strona jest zamknięta dla odwiedzających", correct: false },
            { text: "Że strona nie używa plików cookies", correct: false }
        ]
    },
    {
        question: "Korzystając z otwartej, publicznej sieci Wi-Fi (np. w kawiarni), należy:",
        answers: [
            { text: "Logować się do banku, bo to bezpieczne", correct: false },
            { text: "Unikać przesyłania wrażliwych danych lub używać VPN", correct: true },
            { text: "Wyłączyć antywirusa, żeby internet działał szybciej", correct: false },
            { text: "Używać tylko przeglądarki Internet Explorer", correct: false }
        ]
    },
    {
        question: "Czym jest 'Social Engineering' (Inżynieria społeczna)?",
        answers: [
            { text: "Naprawianiem komputerów w firmie", correct: false },
            { text: "Techniką manipulacji ludźmi w celu wyłudzenia informacji", correct: true },
            { text: "Programowaniem portali społecznościowych", correct: false },
            { text: "Budowaniem serwerowni", correct: false }
        ]
    },
    {
        question: "Co robi VPN (Virtual Private Network)?",
        answers: [
            { text: "Przyspiesza internet dwukrotnie", correct: false },
            { text: "Tworzy szyfrowany tunel dla Twoich danych, ukrywając Twój adres IP", correct: true },
            { text: "Usuwa wirusy z komputera", correct: false },
            { text: "Blokuje reklamy na YouTube", correct: false }
        ]
    },
    {
        question: "Tryb Incognito w przeglądarce zapewnia:",
        answers: [
            { text: "Całkowitą anonimowość w internecie", correct: false },
            { text: "Ukrycie Twojej aktywności przed dostawcą internetu", correct: false },
            { text: "Brak zapisywania historii przeglądania na Twoim urządzeniu", correct: true },
            { text: "Ochronę przed wirusami", correct: false }
        ]
    },
    {
        question: "Dlaczego należy instalować aktualizacje systemu i aplikacji?",
        answers: [
            { text: "Tylko po to, by zmienić wygląd ikonek", correct: false },
            { text: "Aby załatać luki bezpieczeństwa, które mogą wykorzystać hakerzy", correct: true },
            { text: "Żeby komputer działał wolniej", correct: false },
            { text: "Aktualizacje nie są potrzebne", correct: false }
        ]
    },
    {
        question: "Co to jest Botnet?",
        answers: [
            { text: "Sieć zainfekowanych komputerów sterowana przez cyberprzestępcę", correct: true },
            { text: "Robot sprzątający biuro", correct: false },
            { text: "Legalna sieć serwerów Google", correct: false },
            { text: "Program do automatycznego grania w gry", correct: false }
        ]
    },


    {
        question: "Znalazłeś pendrive na parkingu firmowym. Co robisz?",
        answers: [
            { text: "Podłączam go do komputera, żeby sprawdzić, czyj jest", correct: false },
            { text: "Zabieram go do domu i formatuję", correct: false },
            { text: "Nie podłączam go i oddaję do działu IT/ochrony", correct: true },
            { text: "Wyrzucam do śmietnika", correct: false }
        ]
    },
    {
        question: "Reguła backupu '3-2-1' polega na:",
        answers: [
            { text: "Robieniu kopii 3 razy dziennie przez 2 dni", correct: false },
            { text: "Posiadaniu 3 kopii danych, na 2 różnych nośnikach, z czego 1 poza firmą", correct: true },
            { text: "Zapisywaniu 3 plików na 2 pendrive'ach", correct: false },
            { text: "Odliczaniu do startu systemu", correct: false }
        ]
    },
 
    {
        question: "Czym jest 'Shoulder Surfing'?",
        answers: [
            { text: "Zgadywaniem haseł przez telefon", correct: false },
            { text: "Podglądaniem ekranu lub klawiatury użytkownika zza jego pleców", correct: true },
            { text: "Atakiem hakerskim na serwery pocztowe", correct: false },
            { text: "Sportem wodnym", correct: false }
        ]
    },
    {
        question: "Urządzenia IoT (Internet of Things), np. kamery czy żarówki, często są niebezpieczne, bo:",
        answers: [
            { text: "Zużywają dużo prądu", correct: false },
            { text: "Mają fabryczne, domyślne hasła, których użytkownicy nie zmieniają", correct: true },
            { text: "Nie działają bez Wi-Fi", correct: false },
            { text: "Są zbyt małe, by zainstalować antywirusa", correct: false }
        ]
    },
    {
        question: "Co to jest 'Deepfake'?",
        answers: [
            { text: "Głęboko ukryty wirus w systemie", correct: false },
            { text: "Materiał wideo/audio zmanipulowany przez AI, udający prawdziwą osobę", correct: true },
            { text: "Fałszywy e-mail od księcia z Nigerii", correct: false },
            { text: "Błąd w kodzie strony internetowej", correct: false }
        ]
    },
    {
        question: "Keylogger to złośliwe oprogramowanie, które:",
        answers: [
            { text: "Szyfruje dysk", correct: false },
            { text: "Rejestruje każde naciśnięcie klawisza użytkownika", correct: true },
            { text: "Wyłącza myszkę", correct: false },
            { text: "Podmienia tapetę pulpitu", correct: false }
        ]
    },
    {
        question: "Najczęstszym sygnałem ataku phishingowego w e-mailu jest:",
        answers: [
            { text: "Brak polskich znaków", correct: false },
            { text: "Wywieranie presji czasu ('Kliknij natychmiast, bo zablokujemy konto!')", correct: true },
            { text: "Zbyt długi temat wiadomości", correct: false },
            { text: "Podpis prezesa firmy", correct: false }
        ]
    }
];