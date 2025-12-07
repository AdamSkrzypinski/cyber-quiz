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
    }
];