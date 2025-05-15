// Mock project data extracted from home.js
const mockProjects = [
    {        id: 1,
        title: "Søvnmønstre ved Depression",
        description: "Denne forskning sigter mod at forstå søvnmønstre og deres indvirkning på kognitiv funktion hos personer med depression.",
        fullDescription: "Søvnforstyrrelser er et almindeligt symptom ved depression, der kan påvirke livskvalitet og bedring betydeligt. Dette forskningsprojekt undersøger forholdet mellem søvnmønstre og kognitiv præstation hos voksne i alderen 18-25 år med mild til moderat depression. Ved at indsamle data om søvnvaner, varighed og kvalitet, sammen med målinger af kognitiv funktion, hukommelse og opmærksomhed, håber vi at opnå en bedre forståelse af, hvordan søvn påvirker daglig funktionsevne i denne population og udvikle mere effektive interventioner.",
        type: "observational",
        location: "København",
        duration: "4 uger",
        startDate: "April 15, 2025",
        endDate: "May 13, 2025",        criteria: ["18-25 år gammel", "Diagnosticeret med mild til moderat depression", "Tager ikke sovemedicin", "Ikke skiftearbejde"],
        gender: "all",
        ageRange: "18-25",
        institution: "Københavns Universitetshospital - Psykiatrisk Afdeling",
        compensation: "500 DKK",
        researchLead: "Dr. Sofia Jensen",
        contactEmail: "depression.sleep.research@example.com",
        contactPhone: "+45 12 34 56 78",
        status: "Rekrutterer",
        participantsNeeded: 50,
        participantsEnrolled: 12,
        diagnosis: ["Depression og bipolar lidelse"],
        center: "Psykiatrisk Center København",        timeline: [
            {
                title: "Indledende Screening",
                date: "Uge 1",
                description: "Udfyldelse af depressionsvurdering, søvnkvalitetsspørgeskemaer og egnethedsvurdering."
            },
            {
                title: "Søvnovervågning",
                date: "Uge 1-4",
                description: "Daglig søvnsporing ved hjælp af udleveret wearable-enhed og søvndagbog."
            },
            {
                title: "Kognitiv Vurdering",
                date: "Uge 1 og 4",
                description: "Gennemførelse af kognitive tests for at vurdere hukommelse, opmærksomhed og bearbejdningshastighed."
            },
            {
                title: "Opfølgende Interview",
                date: "Uge 4",
                description: "Afsluttende interview og returnering af overvågningsudstyr."
            }
        ],        team: [
            {
                name: "Dr. Sofia Jensen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/women/45.jpg"
            },
            {
                name: "Dr. Marcus Nielsen",
                role: "Psykiater",
                photo: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
                name: "Lena Schmidt",
                role: "Forskningskoordinator",
                photo: "https://randomuser.me/api/portraits/women/68.jpg"
            }
        ]
    },
    {        id: 2,
        title: "Mindfulness for Angstlidelser",
        description: "Klinisk forsøg der tester en ny mindfulness-tilgang til håndtering af angstlidelser.",
        fullDescription: "Angstlidelser hører til blandt de mest almindelige mentale helbredstilstande på verdensplan. Dette kliniske forsøg evaluerer effektiviteten af et nyskabende mindfulness-baseret interventionsprogram designet til at reducere symptomer på generaliseret angst, social angst og panikanfald. Interventionen kombinerer guidet meditation, kognitive teknikker og adfærdsstrategier leveret gennem både personlige sessioner og en mobilapplikation.",
        type: "clinical",
        location: "Aarhus",
        duration: "6 måneder",
        startDate: "May 1, 2025",
        endDate: "November 1, 2025",        criteria: ["Diagnosticeret med en angstlidelse", "Ikke i psykoterapi på nuværende tidspunkt", "Ingen væsentlige komorbide tilstande", "I stand til at deltage i ugentlige sessioner"],
        gender: "all",
        ageRange: "36-45",
        institution: "Aarhus Universitetshospital - Psykiatrisk Forskningsenhed",
        compensation: "2500 DKK",
        researchLead: "Dr. Lars Petersen",
        contactEmail: "anxiety.mindfulness@example.com",
        contactPhone: "+45 23 45 67 89",
        status: "Rekrutterer",
        participantsNeeded: 120,
        participantsEnrolled: 43,
        diagnosis: ["Stress og angst"],
        center: "Psykiatrisk Center Amager",        timeline: [
            {
                title: "Screeningsbesøg",
                date: "Uge 1",
                description: "Gennemgang af sygehistorie, angstvurdering og egnethedsevaluering."
            },
            {
                title: "Baseline Vurdering",
                date: "Uge 2",
                description: "Omfattende psykologisk evaluering inklusive angstmålinger og livskvalitetsindikatorer."
            },
            {
                title: "Interventionsfase",
                date: "Uge 2-26",
                description: "Ugentlige mindfulness-sessioner, daglig praksis og to-ugentlige fremskridtsmøder."
            },
            {
                title: "Afsluttende Vurdering",
                date: "Uge 26",
                description: "Evaluering af mentale sundhedsresultater og programmets effektivitet."
            }
        ],        team: [
            {
                name: "Dr. Lars Petersen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/men/22.jpg"
            },
            {
                name: "Dr. Anna Sørensen",
                role: "Klinisk Psykolog",
                photo: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
                name: "Thomas Berg",
                role: "Mindfulness Instruktør",
                photo: "https://randomuser.me/api/portraits/men/41.jpg"
            }
        ]
    },
    {        id: 3,
        title: "Kvinders Mentale Sundhedsundersøgelse",
        description: "En omfattende undersøgelse om kvinders mentale sundhedsbekymringer, adgang til psykiatrisk behandling og velværepraksis.",
        fullDescription: "Dette forskningsprojekt sigter mod at indsamle data om kvinders oplevelser med mental sundhed, bekymringer og adgang til sundhedspleje på tværs af forskellige aldersgrupper og demografier. Undersøgelsen dækker emner som forebyggende praksis for mental sundhedspleje, reproduktiv mental sundhed, velvære, stemningslidelser og tilfredshed med psykiatriske tjenester. Resultaterne vil hjælpe med at informere politik for mental sundhedspleje og identificere områder, hvor psykiatriske tjenester for kvinder kan forbedres.",
        type: "survey",
        location: "Online",
        duration: "1 time",
        startDate: "Immediate",
        endDate: "Ongoing",        criteria: ["Identificerer sig som kvinde", "Regelmæssig adgang til mental sundhedspleje", "I stand til at gennemføre en online undersøgelse på dansk eller engelsk"],
        gender: "female",
        ageRange: "26-35",
        institution: "Dansk Forskningsinstitut for Kvinders Mentale Sundhed",
        compensation: "200 DKK gavekort",
        researchLead: "Dr. Emma Larsen",
        contactEmail: "womens.mental.health.survey@example.com",
        contactPhone: "+45 34 56 78 90",
        status: "Åben",
        participantsNeeded: 2000,
        participantsEnrolled: 543,
        diagnosis: ["Ingen"],
        center: "Psykiatrisk Center Ballerup",        timeline: [
            {
                title: "Undersøgelse Gennemførelse",
                date: "Enkelt session",
                description: "Gennemfør den omfattende online undersøgelse om mental sundhed (ca. 60 minutter)."
            },
            {
                title: "Valgfri Opfølgning",
                date: "Hvis udvalgt",
                description: "Nogle deltagere kan blive inviteret til et kort opfølgningsinterview."
            }
        ],        team: [
            {
                name: "Dr. Emma Larsen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/women/28.jpg"
            },
            {
                name: "Dr. Sofia Andersen",
                role: "Specialist i Kvinders Mentale Sundhed",
                photo: "https://randomuser.me/api/portraits/women/53.jpg"
            },
            {
                name: "Maria Poulsen",
                role: "Forskningsanalytiker",
                photo: "https://randomuser.me/api/portraits/women/79.jpg"
            }
        ]
    },
    {        id: 4,
        title: "Forebyggelse af Arbejdsrelateret Stress og Udbrændthed",
        description: "Undersøger effektiviteten af forskellige stresshåndteringsteknikker i forebyggelsen af arbejdsrelateret udbrændthed.",
        fullDescription: "Arbejdsrelateret stress og udbrændthed påvirker mental sundhed, produktivitet og livskvalitet for mange fagfolk. Denne undersøgelse evaluerer effekten af tre forskellige mentale sundhedsinterventioner i kontormiljøer: mindfulness meditation, kognitive adfærdsteknikker og resiliens-træning. Deltagerne vil tilfældigt blive tildelt en intervention og vil praktisere teknikken i 8 uger, med regelmæssige vurderinger af stressniveau, udbrændthedsindikatorer og psykologisk velvære.",
        type: "observational",
        location: "Odense",
        duration: "8 uger",
        startDate: "April 20, 2025",
        endDate: "June 15, 2025",
        criteria: ["Fuldtidsansat i kontormiljø", "Selvrapporteret arbejdsrelateret stress", "Ingen nuværende psykiatrisk behandling", "Villighed til at praktisere tildelt teknik"],
        gender: "all",
        ageRange: "26-35",        institution: "Syddansk Universitet - Afdeling for Arbejdsrelateret Psykiatri",
        compensation: "1000 DKK",
        researchLead: "Dr. Mikkel Rasmussen",
        contactEmail: "workplace.burnout@example.com",
        contactPhone: "+45 45 67 89 01",
        status: "Rekrutterer",
        participantsNeeded: 90,
        participantsEnrolled: 27,
        diagnosis: ["Stress og angst"],
        center: "Psykiatrisk Center Glostrup",
        timeline: [            {
                title: "Indledende Vurdering",
                date: "Uge 1",
                description: "Baseline stressmålinger, udbrændthedsvurdering og mental sundhedsscreening."
            },
            {
                title: "Interventionstildeling",
                date: "Uge 1",
                description: "Tilfældig tildeling til en af tre stresshåndteringsteknikker."
            },
            {
                title: "Øvelsesperiode",
                date: "Uge 1-8",
                description: "Daglig øvelse af den tildelte teknik med ugentlig fremskridtssporing."
            },
            {
                title: "Afsluttende Vurdering",
                date: "Uge 8",
                description: "Stressmålinger efter intervention og vurdering af psykologisk velvære."
            }
        ],
        team: [            {
                name: "Dr. Mikkel Rasmussen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/men/67.jpg"
            },
            {
                name: "Dr. Louise Thomsen",
                role: "Arbejdspsykiater",
                photo: "https://randomuser.me/api/portraits/women/42.jpg"
            },
            {
                name: "Jonas Eriksen",
                role: "Forskningsassistent",
                photo: "https://randomuser.me/api/portraits/men/55.jpg"
            }
        ]
    },
    {        id: 5,
        title: "PTSD Behandlingsinnovation",
        description: "Undersøgelse af nye terapeutiske tilgange til posttraumatisk stresslidelse hos midaldrende mænd.",
        fullDescription: "Dette forskningsprojekt undersøger effektiviteten af en ny terapeutisk tilgang til behandling af PTSD hos mænd på 46 år og derover. Undersøgelsen vil kombinere traditionel kognitiv bearbejdningsterapi med innovative virtual reality eksponeringsteknikker og vurdere deres indvirkning på PTSD-symptomer, søvnkvalitet og generelt mentalt velvære. Målet er at identificere mere effektive behandlinger for denne demografiske gruppe, som ofte møder barrierer i forhold til at søge og fortsætte med mental sundhedspleje.",
        type: "clinical",
        location: "Aalborg",
        duration: "3 måneder",
        startDate: "1. juni 2025",
        endDate: "1. september 2025",        criteria: ["Mand", "46 år eller ældre", "PTSD-diagnose", "Ikke aktuelt i traumefokuseret terapi", "Ingen aktiv stofmisbrugslidelse"],
        gender: "male",
        ageRange: "46+",
        institution: "Aalborg Universitetshospital - Traumeforskningscenter",
        compensation: "1500 DKK",
        researchLead: "Dr. Anders Nielsen",
        contactEmail: "ptsd.treatment@example.com",
        contactPhone: "+45 56 78 90 12",
        status: "Rekrutterer",
        participantsNeeded: 150,
        participantsEnrolled: 42,
        diagnosis: ["Psykose, skizofreni og skizotypi"],
        center: "Psykiatrisk Center Sct. Hans",
        timeline: [            {
                title: "Indledende Vurdering",
                date: "Uge 1",
                description: "Omfattende PTSD-evaluering og egnethedsvurdering."
            },
            {
                title: "Behandlingsperiode",
                date: "Uge 1-12",
                description: "Ugentlige terapisessioner, der kombinerer traditionelle og VR-baserede tilgange."
            },
            {
                title: "Midtvejstjek",
                date: "Uge 6",
                description: "Kort opfølgningsvurdering og justering af behandlingsprotokol efter behov."
            },
            {
                title: "Afsluttende Evaluering",
                date: "Uge 12",
                description: "Omfattende slutvurdering og gennemgang af symptomatiske ændringer."
            }
        ],
        team: [            {
                name: "Dr. Anders Nielsen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/men/76.jpg"
            },
            {
                name: "Dr. Henrik Jensen",
                role: "Traumespecialist",
                photo: "https://randomuser.me/api/portraits/men/15.jpg"
            },
            {
                name: "Kristian Møller",
                role: "VR-terapitekniker",
                photo: "https://randomuser.me/api/portraits/men/37.jpg"
            }
        ]
    },
    {        id: 6,
        title: "Digital Teknologi og Mental Velvære",
        description: "Undersøgelse om brug af digitale enheder og deres påvirkning på mental sundhed og psykologisk velvære.",
        fullDescription: "Denne spørgeskemabaserede undersøgelse udforsker forholdet mellem digitale teknologibrugsmønstre og forskellige aspekter af mental velvære. Deltagerne vil udfylde et omfattende spørgeskema om deres enhedsbrugsvaner, engagement på sociale medier, onlineaktiviteter og opfattede påvirkninger på deres mentale sundhed, humørregulering, angstniveauer og sociale forbindelser. Forskningen sigter mod at identificere både positive og negative sammenhænge mellem digital adfærd og psykologiske resultater.",
        type: "survey",
        location: "Online",
        duration: "30 minutter",
        startDate: "Umiddelbart",
        endDate: "Løbende",        criteria: ["Regelmæssig smartphone- og/eller computerbruger", "Aktiv på mindst én social medieplatform", "Kan udfylde onlineundersøgelse på engelsk eller dansk"],
        gender: "all",
        ageRange: "18-25",
        institution: "Forskningscenter for Digital Mental Sundhed",
        compensation: "Deltagelse i lodtrækning (10 x 500 DKK)",
        researchLead: "Dr. Nanna Christensen",
        contactEmail: "digital.mental.health@example.com",
        contactPhone: "+45 67 89 01 23",
        status: "Åben",
        participantsNeeded: 1000,
        participantsEnrolled: 278,
        diagnosis: ["Ingen"],
        center: "Psykiatrisk Center Stolpegård",
        timeline: [            {
                title: "Undersøgelse Gennemførelse",
                date: "Enkelt session",
                description: "Udfyld det omfattende onlinespørgeskema om digitale vaner og mental velvære (ca. 30 minutter)."
            },
            {
                title: "Valgfri Opfølgning",
                date: "Hvis udvalgt",
                description: "Nogle deltagere kan blive inviteret til en opfølgningsundersøgelse efter 6 måneder."
            }
        ],
        team: [            {
                name: "Dr. Nanna Christensen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/women/63.jpg"
            },
            {
                name: "Dr. Simon Hansen",
                role: "Specialist i Digital Adfærd",
                photo: "https://randomuser.me/api/portraits/men/24.jpg"
            },
            {
                name: "Julie Fischer",
                role: "Forskningskoordinator",
                photo: "https://randomuser.me/api/portraits/women/10.jpg"
            }
        ]
    },    {
        id: 7,
        title: "Kognitiv Adfærdsterapi for OCD",
        description: "Evaluering af en modificeret CBT-protokol specielt designet til voksne med behandlingsresistent OCD.",
        type: "clinical",
        location: "København",
        duration: "12 uger",
        startDate: "15. juni 2025",
        criteria: ["OCD-diagnose", "Tidligere terapierfaring", "Alder 25-55"],
        gender: "all",        ageRange: "26-35",
        diagnosis: ["AD(H)D, OCD og Tourette"],
        center: "Psykiatrisk Center København",
        status: "Rekrutterer",
        fullDescription: "Denne undersøgelse evaluerer en modificeret protokol for kognitiv adfærdsterapi designet specifikt til voksne med behandlingsresistent OCD. Tilgangen kombinerer traditionelle eksponerings- og responshæmningsteknikker med nye kognitive omstruktureringsmetoder og digitale støtteværktøjer.",
        institution: "Københavns Universitetshospital - Psykiatriske Tjenester",
        compensation: "1200 DKK",
        researchLead: "Dr. Johan Knudsen",
        contactEmail: "ocd.research@example.com",
        contactPhone: "+45 78 90 12 34",
        participantsNeeded: 60,
        participantsEnrolled: 18,        timeline: [
            {
                title: "Screeningsvurdering",
                date: "Uge 1",
                description: "Omfattende OCD-evaluering og egnethedsvurdering."
            },
            {
                title: "Behandlingsfase",
                date: "Uge 2-11",
                description: "Ugentlige CBT-sessioner med hjemmeøvelser."
            },
            {
                title: "Afsluttende Evaluering",
                date: "Uge 12",
                description: "Vurdering efter behandling og symptomgennemgang."
            }
        ],        team: [
            {
                name: "Dr. Johan Knudsen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/men/42.jpg"
            },
            {
                name: "Dr. Mette Larsen",
                role: "CBT-specialist",
                photo: "https://randomuser.me/api/portraits/women/37.jpg"
            }
        ]
    },    {
        id: 8,
        title: "Teknologiunderstøttet Terapi for Unge",
        description: "Test af en ny app-baseret intervention som supplement til traditionel terapi for unge med angst og depression.",
        type: "clinical",
        location: "Online + Odense",
        duration: "16 uger",
        startDate: "10. maj 2025",
        criteria: ["Alder 13-18", "Angst eller depression", "Adgang til smartphone"],
        gender: "all",
        ageRange: "18-25",
        diagnosis: ["Depression og bipolar lidelse", "Stress og angst"],
        center: "Børne- og Ungdomspsykiatrisk Center",
        status: "Recruiting",
        fullDescription: "This clinical trial evaluates the effectiveness of a smartphone application designed to supplement traditional therapy for adolescents with anxiety and depression. The app provides mood tracking, coping skill exercises, and between-session support.",
        institution: "Odense Universitetshospital - Børne- og Ungdomspsykiatri",
        compensation: "800 DKK + gratis appadgang i 1 år efter undersøgelsen",
        researchLead: "Dr. Trine Petersen",
        contactEmail: "teen.app.therapy@example.com",
        contactPhone: "+45 89 01 23 45",
        participantsNeeded: 100,
        participantsEnrolled: 38,        timeline: [
            {
                title: "Indledende Vurdering",
                date: "Uge 1",
                description: "Klinisk evaluering og hjælp til app-opsætning."
            },
            {
                title: "App-understøttet Terapi",
                date: "Uge 1-16",
                description: "To-ugentlige terapisessioner plus daglig brug af app."
            },
            {
                title: "Afsluttende Evaluering",
                date: "Uge 16",
                description: "Vurdering efter intervention."
            }
        ],        team: [
            {
                name: "Dr. Trine Petersen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/women/26.jpg"
            },
            {
                name: "Lars Andersen",
                role: "App-udvikler",
                photo: "https://randomuser.me/api/portraits/men/29.jpg"
            }
        ]
    },    {
        id: 9,
        title: "Neurofeedback Træning for ADHD",
        description: "Undersøger effektiviteten af neurofeedback-træning hos voksne med ADHD, som foretrækker ikke-medicinbaserede tilgange.",
        type: "clinical",
        location: "Aalborg",
        duration: "10 uger",
        startDate: "5. juli 2025",
        criteria: ["ADHD-diagnose", "Alder 21-40", "Ingen stimulansmedicin"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["AD(H)D, OCD og Tourette"],
        center: "Psykiatrisk Center Nordsjælland",
        status: "Rekrutterer",
        fullDescription: "This study investigates whether a 10-week neurofeedback training program can improve attention, impulse control, and executive functioning in adults with ADHD who prefer non-medication approaches to treatment.",
        institution: "Aalborg University - Department of Psychology",
        compensation: "1800 DKK",
        researchLead: "Dr. Anders Mortensen",
        contactEmail: "adhd.neurofeedback@example.com",
        contactPhone: "+45 90 12 34 56",
        participantsNeeded: 40,
        participantsEnrolled: 12,        timeline: [
            {
                title: "Baseline Vurdering",
                date: "Uge 1",
                description: "ADHD-symptomevaluering og kognitiv testning."
            },
            {
                title: "Neurofeedback-sessioner",
                date: "Uge 2-9",
                description: "To ugentlige neurofeedback-træningssessioner."
            },
            {
                title: "Eftervurdering",
                date: "Uge 10",
                description: "Endelig symptom- og kognitiv evaluering."
            }
        ],        team: [
            {
                name: "Dr. Anders Mortensen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/men/43.jpg"
            },
            {
                name: "Dr. Sofie Nielsen",
                role: "Neurofeedback-specialist",
                photo: "https://randomuser.me/api/portraits/women/39.jpg"
            }
        ]
    },    {
        id: 10,
        title: "Sociale Færdighedsgrupper for Autistiske Voksne",
        description: "Forskning om effektiviteten af peer-ledede sociale færdighedsgrupper for autistiske voksne.",
        type: "observational",
        location: "København",
        duration: "6 måneder",
        startDate: "1. juni 2025",
        criteria: ["Autismediagnose", "Alder 18+", "Interesse for udvikling af sociale færdigheder"],
        gender: "all",
        ageRange: "18-25",
        diagnosis: ["Autisme"],
        center: "Psykiatrisk Center Ballerup",
        status: "Rekrutterer",
        fullDescription: "Denne undersøgelse evaluerer effektiviteten af peer-ledede sociale færdighedsgrupper for autistiske voksne. Grupperne vil mødes ugentligt for at øve strategier for social interaktion og opbygge fællesskabsforbindelser.",
        institution: "Center for Autism Research - Copenhagen",
        compensation: "1000 DKK",
        researchLead: "Dr. Karen Jensen",
        contactEmail: "autism.socialskills@example.com",
        contactPhone: "+45 01 23 45 67",
        participantsNeeded: 30,
        participantsEnrolled: 8,        timeline: [
            {
                title: "Indledende Interview",
                date: "Uge 1",
                description: "Baseline vurdering af social funktionsevne og gruppetildeling."
            },
            {
                title: "Gruppesessioner",
                date: "Uge 2-23",
                description: "Ugentlige 2-timers gruppemøder om sociale færdigheder."
            },
            {
                title: "Afsluttende Vurdering",
                date: "Uge 24",
                description: "Evaluering og feedback efter gruppeforløb."
            }
        ],team: [
            {
                name: "Dr. Karen Jensen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/women/48.jpg"
            },
            {
                name: "Mads Pedersen",
                role: "Peer-gruppefacilitator",
                photo: "https://randomuser.me/api/portraits/men/35.jpg"
            }
        ]
    },    {
        id: 11,
        title: "Søvnmønstre ved Bipolar Lidelse",
        description: "Undersøger forholdet mellem søvnmønstre og humørstabilitet hos personer med bipolar lidelse.",
        type: "observational",
        location: "Aarhus",
        duration: "3 måneder",
        startDate: "15. maj 2025",
        criteria: ["Bipolar I eller II diagnose", "Ikke i akut episode", "Ingen søvnforstyrrelser"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["Depression og bipolar lidelse"],
        center: "Psykiatrisk Center Amager",
        status: "Rekrutterer",
        fullDescription: "Denne undersøgelse undersøger, hvordan søvnmønstre og døgnrytmer påvirker humørstabilitet hos personer med bipolar lidelse. Deltagerne vil bruge søvnsporende teknologi og humørovervågning til at identificere mønstre og potentielle tidlige advarselstegn på humørepisoder.",
        institution: "Aarhus Universitetshospital - Klinik for Humørlidelser",
        compensation: "1200 DKK + sleep tracker to keep",
        researchLead: "Dr. Thomas Møller",
        contactEmail: "bipolar.sleep@example.com",
        contactPhone: "+45 12 34 56 78",
        participantsNeeded: 50,
        participantsEnrolled: 22,        timeline: [
            {
                title: "Baseline Vurdering",
                date: "Uge 1",
                description: "Klinisk evaluering og opsætning af søvnovervågning."
            },
            {
                title: "Overvågningsperiode",
                date: "Uge 1-12",
                description: "Daglig søvn- og humørsporing med månedlige opfølgninger."
            },
            {
                title: "Afsluttende Vurdering",
                date: "Uge 12",
                description: "Datagennemgang og personlig feedback."
            }
        ],        team: [
            {
                name: "Dr. Thomas Møller",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/men/51.jpg"
            },
            {
                name: "Dr. Line Hansen",
                role: "Søvnspecialist",
                photo: "https://randomuser.me/api/portraits/women/44.jpg"
            }
        ]
    },    {
        id: 12,
        title: "Traumefokuseret Yoga for PTSD",
        description: "Undersøger fordelene ved traumesensitive yogapraksisser for kvinder med PTSD fra vold i hjemmet.",
        type: "clinical",
        location: "Odense",
        duration: "8 uger",
        startDate: "10. juli 2025",
        criteria: ["Kvinde", "PTSD-diagnose", "Historik med vold i hjemmet", "Intet aktivt stofmisbrug"],
        gender: "female",
        ageRange: "26-35",
        diagnosis: ["Psykose, skizofreni og skizotypi", "Stress og angst"],
        center: "Psykiatrisk Center Glostrup",
        status: "Rekrutterer",
        fullDescription: "Denne undersøgelse evaluerer effektiviteten af et traumesensitivt yogaprogram designet specifikt til kvinder med PTSD som følge af vold i hjemmet. Programmet fokuserer på kropsbevidsthed, sikkerhed og evnen til at træffe valg.",
        institution: "Odense Kvindekrisecenter - Forskningsafdeling",
        compensation: "1000 DKK",
        researchLead: "Dr. Maria Andersen",
        contactEmail: "trauma.yoga@example.com",
        contactPhone: "+45 23 45 67 89",
        participantsNeeded: 40,
        participantsEnrolled: 15,        timeline: [
            {
                title: "Indledende Vurdering",
                date: "Uge 1",
                description: "PTSD-symptomevaluering og programintroduktion."
            },
            {
                title: "Yogaprogram",
                date: "Uge 1-8",
                description: "To ugentlige traumesensitive yogasessioner."
            },
            {
                title: "Opfølgning",
                date: "Uge 8",
                description: "Symtomvurdering efter programmet."
            }
        ],        team: [
            {
                name: "Dr. Maria Andersen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/women/56.jpg"
            },
            {
                name: "Sara Jensen",
                role: "Traumeinformeret Yogainstruktør",
                photo: "https://randomuser.me/api/portraits/women/62.jpg"
            }
        ]
    },    {
        id: 13,
        title: "Mænds Holdninger til Mental Sundhed",
        description: "Undersøgelse af holdninger til psykiske sundhedstjenester blandt mænd i forskellige aldersgrupper og baggrunde.",
        type: "survey",
        location: "Online",
        duration: "20 minutter",
        startDate: "Umiddelbart",
        criteria: ["Mand", "Alder 18+", "Dansk bosiddende"],
        gender: "male",
        ageRange: "all",
        diagnosis: ["Ingen"],
        center: "Psykiatrisk Center Sct. Hans",
        status: "Åben",
        fullDescription: "Denne spørgeskemaundersøgelse udforsker holdninger, overbevisninger og barrierer relateret til psykiske sundhedstjenester blandt danske mænd. Forskningen sigter mod at identificere faktorer, der påvirker hjælpsøgende adfærd og informere om bedre servicetilgange for denne befolkningsgruppe.",
        institution: "Dansk Forskningskonsortium for Mænds Sundhed",
        compensation: "Deltagelse i lodtrækning (5 x 1000 DKK)",
        researchLead: "Dr. Jesper Nielsen",
        contactEmail: "mens.mental.health@example.com",
        contactPhone: "+45 34 56 78 90",
        participantsNeeded: 500,
        participantsEnrolled: 178,        timeline: [
            {
                title: "Undersøgelse Gennemførelse",
                date: "Enkelt session",
                description: "Gennemfør online spørgeskema om holdninger til mental sundhed (20 minutter)."
            }
        ],        team: [
            {
                name: "Dr. Jesper Nielsen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/men/63.jpg"
            },
            {
                name: "Dr. Mikkel Larsen",
                role: "Forskningspsykolog",
                photo: "https://randomuser.me/api/portraits/men/27.jpg"
            }
        ]
    },    {
        id: 14,
        title: "Recoveryfortællinger ved Skizofreni",
        description: "Kvalitativ undersøgelse af personlige fortællinger om bedring hos personer med skizofreni-spektrumforstyrrelser.",
        type: "observational",
        location: "København",
        duration: "2 interviews (2 timer hver)",
        startDate: "20. juni 2025",
        criteria: ["Skizofreni-spektrumdiagnose", "I stabil bedring i 1+ år"],
        gender: "all",
        ageRange: "36-45",
        diagnosis: ["Psykose, skizofreni og skizotypi"],
        center: "Psykiatrisk Center København",
        status: "Rekrutterer",
        fullDescription: "Denne kvalitative forskning fokuserer på personlige recoveryfortællinger fra personer med skizofreni-spektrumforstyrrelser, som har opnået meningsfuld stabilitet i deres liv. Gennem dybdegående interviews sigter undersøgelsen mod at identificere fælles temaer i bedringsrejser.",
        institution: "Københavns Universitet - Institut for Psykologi",
        compensation: "700 DKK",
        researchLead: "Dr. Christina Mortensen",
        contactEmail: "schizophrenia.recovery@example.com",
        contactPhone: "+45 45 67 89 01",
        participantsNeeded: 20,
        participantsEnrolled: 8,
        timeline: [            {
                title: "Første Interview",
                date: "Planlagt individuelt",
                description: "Interview om livshistorie og psykisk sundhedsrejse (2 timer)."
            },
            {
                title: "Andet Interview",
                date: "2 uger efter første",
                description: "Recovery-fokuseret opfølgningsinterview (2 timer)."
            }
        ],        team: [
            {
                name: "Dr. Christina Mortensen",
                role: "Forskningsleder",
                photo: "https://randomuser.me/api/portraits/women/72.jpg"
            },
            {
                name: "Dr. Frederik Hansen",
                role: "Kvalitativ Forsker",
                photo: "https://randomuser.me/api/portraits/men/68.jpg"
            }
        ]
    },
    {
        id: 15,
        title: "Mindfulness for Teen Eating Disorders",
        description: "Testing a mindfulness-based intervention for adolescents with eating disorders.",
        type: "clinical",
        location: "Aarhus",
        duration: "10 weeks",
        startDate: "August 5, 2025",
        criteria: ["Ages 14-18", "Eating disorder diagnosis", "Medically stable"],
        gender: "all",
        ageRange: "18-25",
        diagnosis: ["Spiseforstyrrelse"],
        center: "Børne- og Ungdomspsykiatrisk Center",
        status: "Recruiting",
        fullDescription: "This clinical trial evaluates a mindfulness-based intervention specifically adapted for adolescents with eating disorders. The program combines elements of mindful eating, body awareness, and self-compassion practices.",
        institution: "Aarhus University Hospital - Eating Disorders Unit",
        compensation: "900 DKK",
        researchLead: "Dr. Lise Jensen",
        contactEmail: "teen.eating.disorders@example.com",
        contactPhone: "+45 56 78 90 12",
        participantsNeeded: 30,
        participantsEnrolled: 8,
        timeline: [
            {
                title: "Assessment",
                date: "Week 1",
                description: "Initial evaluation and program introduction."
            },
            {
                title: "Group Sessions",
                date: "Weeks 2-9",
                description: "Weekly 90-minute mindfulness group sessions."
            },
            {
                title: "Final Evaluation",
                date: "Week 10",
                description: "Post-program assessment and feedback."
            }
        ],
        team: [
            {
                name: "Dr. Lise Jensen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/83.jpg"
            },
            {
                name: "Camilla Nielsen",
                role: "Mindfulness Instructor",
                photo: "https://randomuser.me/api/portraits/women/18.jpg"
            }
        ]
    },
    {
        id: 16,
        title: "Digital Mental Health Access in Rural Communities",
        description: "Survey on barriers to accessing digital mental health services in rural Danish communities.",
        type: "survey",
        location: "Online",
        duration: "25 minutes",
        startDate: "Immediate",
        criteria: ["Rural resident", "Age 18+", "With or without mental health conditions"],
        gender: "all",
        ageRange: "all",
        diagnosis: ["Ingen"],
        center: "Psykiatrisk Center Bornholm",
        status: "Open",
        fullDescription: "This survey explores challenges and barriers that rural Danish residents face in accessing digital mental health services. The research aims to identify infrastructural, technological, and attitudinal factors affecting telehealth utilization.",
        institution: "Danish Rural Health Research Network",
        compensation: "150 DKK gift card",
        researchLead: "Dr. Søren Christensen",
        contactEmail: "rural.mental.health@example.com",
        contactPhone: "+45 67 89 01 23",
        participantsNeeded: 300,
        participantsEnrolled: 118,
        timeline: [
            {
                title: "Survey Completion",
                date: "Single session",
                description: "Complete online survey about digital mental health service access (25 minutes)."
            }
        ],
        team: [
            {
                name: "Dr. Søren Christensen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/74.jpg"
            },
            {
                name: "Maja Hansen",
                role: "Rural Health Specialist",
                photo: "https://randomuser.me/api/portraits/women/91.jpg"
            }
        ]
    },
    {
        id: 17,
        title: "Substance Use and Anxiety Treatment",
        description: "Investigating integrated treatment approaches for co-occurring substance use and anxiety disorders.",
        type: "clinical",
        location: "Copenhagen",
        duration: "14 weeks",
        startDate: "July 1, 2025",
        criteria: ["Anxiety diagnosis", "History of substance use", "Currently abstinent (min. 30 days)"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["Psykisk sygdom som følge af misbrug", "Stress og angst"],
        center: "Psykiatrisk Center Stolpegård",
        status: "Recruiting",
        fullDescription: "This study tests an integrated treatment approach for individuals with co-occurring anxiety disorders and substance use history. The program addresses both conditions simultaneously through a combination of CBT techniques and relapse prevention strategies.",
        institution: "Copenhagen Addiction Research Center",
        compensation: "1400 DKK",
        researchLead: "Dr. Henrik Rasmussen",
        contactEmail: "anxiety.substance.use@example.com",
        contactPhone: "+45 78 90 12 34",
        participantsNeeded: 60,
        participantsEnrolled: 22,
        timeline: [
            {
                title: "Screening",
                date: "Week 1",
                description: "Comprehensive assessment of anxiety and substance use history."
            },
            {
                title: "Treatment Phase",
                date: "Weeks 2-13",
                description: "Weekly individual and group therapy sessions."
            },
            {
                title: "Final Assessment",
                date: "Week 14",
                description: "Post-treatment evaluation."
            }
        ],
        team: [
            {
                name: "Dr. Henrik Rasmussen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/81.jpg"
            },
            {
                name: "Dr. Nina Andersen",
                role: "Addiction Specialist",
                photo: "https://randomuser.me/api/portraits/women/77.jpg"
            }
        ]
    },
    {
        id: 18,
        title: "Virtual Reality Exposure for Phobias",
        description: "Testing the effectiveness of VR exposure therapy for specific phobias in older adults.",
        type: "clinical",
        location: "Aalborg",
        duration: "6 weeks",
        startDate: "June 10, 2025",
        criteria: ["Age 55+", "Specific phobia diagnosis", "No cardiovascular conditions"],
        gender: "all",
        ageRange: "46+",
        diagnosis: ["Stress og angst"],
        center: "Psykiatrisk Center Nordsjælland",
        status: "Recruiting",
        fullDescription: "This clinical trial evaluates the effectiveness of virtual reality exposure therapy for treating specific phobias in adults aged 55 and older. The treatment offers immersive, controlled exposure scenarios that can be carefully calibrated to each participant's therapeutic needs.",
        institution: "Aalborg University - VR Therapy Research Lab",
        compensation: "1100 DKK",
        researchLead: "Dr. Peter Madsen",
        contactEmail: "vr.phobia.treatment@example.com",
        contactPhone: "+45 89 01 23 45",
        participantsNeeded: 40,
        participantsEnrolled: 12,
        timeline: [
            {
                title: "Assessment",
                date: "Week 1",
                description: "Phobia evaluation and VR introduction session."
            },
            {
                title: "VR Sessions",
                date: "Weeks 2-5",
                description: "Weekly VR exposure therapy sessions."
            },
            {
                title: "Final Evaluation",
                date: "Week 6",
                description: "Post-treatment assessment."
            }
        ],
        team: [
            {
                name: "Dr. Peter Madsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/83.jpg"
            },
            {
                name: "Dr. Emma Nielsen",
                role: "VR Therapy Specialist",
                photo: "https://randomuser.me/api/portraits/women/59.jpg"
            }
        ]
    },
    {
        id: 19,
        title: "Brain Injury and Mood Changes",
        description: "Research examining the relationship between traumatic brain injury and subsequent mood disorders.",
        type: "observational",
        location: "Odense",
        duration: "Single 3-hour assessment",
        startDate: "Ongoing",
        criteria: ["History of traumatic brain injury", "1+ years post-injury", "Age 25-65"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["Hjerneskade", "Depression og bipolar lidelse"],
        center: "Psykiatrisk Center Glostrup",
        status: "Recruiting",
        fullDescription: "This study investigates the relationship between traumatic brain injury and the development of mood disorders. Participants undergo comprehensive neuropsychological testing and mood assessment to identify patterns and correlations.",
        institution: "Odense University Hospital - Neuropsychiatry Unit",
        compensation: "600 DKK",
        researchLead: "Dr. Jens Pedersen",
        contactEmail: "brain.injury.mood@example.com",
        contactPhone: "+45 90 12 34 56",
        participantsNeeded: 80,
        participantsEnrolled: 37,
        timeline: [
            {
                title: "Assessment Session",
                date: "Single appointment",
                description: "Comprehensive 3-hour neuropsychological and mood assessment."
            }
        ],
        team: [
            {
                name: "Dr. Jens Pedersen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/87.jpg"
            },
            {
                name: "Dr. Katrine Jensen",
                role: "Neuropsychologist",
                photo: "https://randomuser.me/api/portraits/women/66.jpg"
            }
        ]
    },
    {
        id: 20,
        title: "Personality Disorders and Relationship Patterns",
        description: "Study on interpersonal relationship patterns among individuals with different personality disorder diagnoses.",
        type: "observational",
        location: "Copenhagen",
        duration: "4 interviews over 2 months",
        startDate: "July 15, 2025",
        criteria: ["Personality disorder diagnosis", "Currently in treatment", "Age 25-50"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["Personlighedsforstyrrelse og selvskade"],
        center: "Psykiatrisk Center Stolpegård",
        status: "Recruiting",
        fullDescription: "This observational study examines interpersonal relationship patterns among people with various personality disorder diagnoses. Through interviews and relationship mapping, the research aims to identify common challenges and potential therapeutic targets.",
        institution: "Copenhagen University Hospital - Personality Disorders Clinic",
        compensation: "800 DKK",
        researchLead: "Dr. Anne Larsen",
        contactEmail: "personality.relationships@example.com",
        contactPhone: "+45 01 23 45 67",
        participantsNeeded: 50,
        participantsEnrolled: 18,
        timeline: [
            {
                title: "First Interview",
                date: "Week 1",
                description: "Initial assessment and relationship history."
            },
            {
                title: "Follow-up Interviews",
                date: "Weeks 3, 5, and 8",
                description: "Detailed exploration of relationship patterns."
            }
        ],
        team: [
            {
                name: "Dr. Anne Larsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/women/93.jpg"
            },
            {
                name: "Dr. Martin Jensen",
                role: "Clinical Psychologist",
                photo: "https://randomuser.me/api/portraits/men/49.jpg"
            }
        ]
    },
    {
        id: 21,
        title: "Music Therapy for Adult ADHD",
        description: "Pilot study exploring music therapy's effects on executive functioning in adults with ADHD.",
        type: "clinical",
        location: "Aarhus",
        duration: "8 weeks",
        startDate: "August 15, 2025",
        criteria: ["ADHD diagnosis", "Age 21-40", "No musical training required"],
        gender: "all",
        ageRange: "26-35",
        diagnosis: ["AD(H)D, OCD og Tourette"],
        center: "Psykiatrisk Center Amager",
        status: "Recruiting",
        fullDescription: "This pilot study explores the impact of a structured music therapy program on executive functioning, attention, and emotional regulation in adults with ADHD. No prior musical experience is necessary to participate.",
        institution: "Aarhus University - Music Therapy Research Center",
        compensation: "1000 DKK",
        researchLead: "Dr. Morten Nielsen",
        contactEmail: "adhd.music.therapy@example.com",
        contactPhone: "+45 12 34 56 78",
        participantsNeeded: 25,
        participantsEnrolled: 6,
        timeline: [
            {
                title: "Initial Assessment",
                date: "Week 1",
                description: "ADHD symptom evaluation and executive function testing."
            },
            {
                title: "Music Therapy Sessions",
                date: "Weeks 2-7",
                description: "Weekly 90-minute group music therapy sessions."
            },
            {
                title: "Final Assessment",
                date: "Week 8",
                description: "Post-therapy evaluation."
            }
        ],
        team: [
            {
                name: "Dr. Morten Nielsen",
                role: "Principal Investigator",
                photo: "https://randomuser.me/api/portraits/men/92.jpg"
            },
            {
                name: "Sofie Andersen",
                role: "Music Therapist",
                photo: "https://randomuser.me/api/portraits/women/37.jpg"
            }
        ]
    }
];

module.exports = mockProjects;
